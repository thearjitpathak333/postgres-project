let currentCategory = 'dashboard';
let currentChart = null;
let categories = {};
let categoryData = {};

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    loadCategories();
    setupEventListeners();
    setupSidebar();
    setupHistory();
    loadFromHash();
    setupChatbot();
    setupThemeToggle();
    setupGlobalScrollToTop();
}

function loadCategories() {
    try {
        console.log('Loading categories from global variables...');
        
        // Use global variables instead of fetch
        categories = window.categories;
        console.log('Categories loaded:', categories);
        
        // Load data for each category from global variables
        const dataMapping = {
            'connection-errors': window.connection_errors,
            'query-performance': window.query_performance,
            'locks-deadlocks': window.locks_deadlocks,
            'memory-resources': window.memory_resources,
            'backup-recovery': window.backup_recovery,
            'replication-issues': window.replication_issues,
            'configuration-tuning': window.configuration_tuning,
            'permissions-roles': window.permissions_roles,
            'data-corruption': window.data_corruption,
            'extension-errors': window.extension_errors,
            'index-errors': window.indexes,
            'indexes': window.indexes_knowledge,
            'joins': window.joins_knowledge,
            'full-text-search': window.full_text_search,
            'extensions-guide': window.extensions_guide,
            'performance-tuning': window.performance_tuning,
            'glossary': window.glossary,
            'postgresql-installation-guide': window.installation,
            'system-catalog-tables': window.catalog,
            'architecture': window.postgresql_architecture,
            'acid-properties': window.acid_properties,
            'mvcc': window.mvcc
        };
        
        for (const [key, data] of Object.entries(dataMapping)) {
            if (data) {
                categoryData[key] = data;
                console.log(`Data loaded for ${key}:`, data.length, 'items');
            } else {
                console.warn(`No data found for ${key}`);
                categoryData[key] = [];
            }
        }
        
        // Special handling for join-errors: combine joins.js and additional-join-errors.js
        let joinData = [];
        if (window.joins) {
            joinData = window.joins;
        }
        if (window.additional_join_errors) {
            joinData = joinData.concat(window.additional_join_errors);
        }
        categoryData['join-errors'] = joinData;
        console.log(`Combined join data loaded: ${joinData.length} items`);
        
        console.log('All data loaded successfully');
    } catch (error) {
        console.error('Error loading categories:', error);
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <strong>Error loading data:</strong> ${error.message}<br>
                    <small>Make sure all data files are loaded properly</small>
                </div>
            `;
        }
    }
}

function setupEventListeners() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

function setupSidebar() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    nav.innerHTML = '';
    const topCategoryKey = getTopCategoryKey();
    
    const errorCategories = [
        'connection-errors',
        'query-performance',
        'locks-deadlocks',
        'memory-resources',
        'backup-recovery',
        'replication-issues',
        'configuration-tuning',
        'permissions-roles',
        'data-corruption',
        'extension-errors',
        'index-errors',
        'join-errors'
    ];
    const nonErrorCategories = ['dashboard', 'glossary', 'postgresql-installation-guide', 'system-catalog-tables', 'architecture', 'acid-properties', 'mvcc', 'indexes', 'joins', 'full-text-search', 'extensions-guide', 'performance-tuning'];
    
    // Add non-error categories first
    nonErrorCategories.forEach(key => {
        if (!categories[key]) return;
        const category = categories[key];
        const navItem = document.createElement('div');
        navItem.className = `sidebar-item p-3 rounded-lg cursor-pointer transition-colors duration-200 ${key === currentCategory ? 'active' : ''}`;
        navItem.innerHTML = `
            <div class="flex items-center space-x-3">
                <i class="fas fa-${getIconForCategory(key)} w-5 h-5"></i>
                <span class="font-medium">${category.title}</span>
            </div>
        `;
        navItem.addEventListener('click', () => loadCategory(key));
        nav.appendChild(navItem);
    });
    
    // Add troubleshooting supersection
    const troubleshootingSection = document.createElement('div');
    troubleshootingSection.className = 'troubleshooting-section';
    
    const troubleshootingHeader = document.createElement('div');
    troubleshootingHeader.className = 'sidebar-item p-3 rounded-lg cursor-pointer transition-colors duration-200 troubleshooting-header';
    troubleshootingHeader.innerHTML = `
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <i class="fas fa-exclamation-triangle w-5 h-5 text-medium-gray"></i>
                <span class="font-medium">Error Guide</span>
            </div>
            <i class="fas fa-chevron-down transition-transform duration-200" id="troubleshooting-chevron" style="transform: rotate(-90deg);"></i>
        </div>
    `;
    
    const troubleshootingContent = document.createElement('div');
    troubleshootingContent.className = 'troubleshooting-content ml-4 mt-2 space-y-1';
    troubleshootingContent.style.display = 'none';
    
    errorCategories.forEach(key => {
        if (!categories[key]) return;
        const category = categories[key];
        const isTopCategory = key === topCategoryKey;
        const navItem = document.createElement('div');
        navItem.className = `sidebar-item p-2 rounded-lg cursor-pointer transition-colors duration-200 ${key === currentCategory ? 'active' : ''}`;
        navItem.innerHTML = `
            <div class="flex items-center space-x-3">
                <i class="fas fa-${getIconForCategory(key)} w-4 h-4"></i>
                <span class="font-medium text-sm">${category.title}</span>
                ${isTopCategory ? '<i class="fas fa-star text-yellow-400 ml-auto" title="Top category with most issues"></i>' : ''}
            </div>
        `;
        navItem.addEventListener('click', () => loadCategory(key));
        troubleshootingContent.appendChild(navItem);
    });
    
    troubleshootingHeader.addEventListener('click', () => {
        const content = troubleshootingContent;
        const chevron = document.getElementById('troubleshooting-chevron');
        if (content.style.display === 'none') {
            content.style.display = 'block';
            chevron.style.transform = 'rotate(0deg)';
        } else {
            content.style.display = 'none';
            chevron.style.transform = 'rotate(-90deg)';
        }
    });
    
    troubleshootingSection.appendChild(troubleshootingHeader);
    troubleshootingSection.appendChild(troubleshootingContent);
    nav.appendChild(troubleshootingSection);
}

function getTopCategoryKey() {
    const excludeFromErrors = ['glossary', 'postgresql-installation-guide', 'system-catalog-tables', 'indexes', 'joins', 'mvcc', 'full-text-search', 'extensions-guide', 'performance-tuning'];
    let maxErrors = 0;
    let topCategoryKey = null;
    
    Object.keys(categoryData).forEach(key => {
        if (excludeFromErrors.includes(key)) return;
        
        const errorCount = categoryData[key] ? categoryData[key].length : 0;
        if (errorCount > maxErrors) {
            maxErrors = errorCount;
            topCategoryKey = key;
        }
    });
    
    return topCategoryKey;
}

function getIconForCategory(category) {
    const icons = {
        'dashboard': 'tachometer-alt',
        'glossary': 'book',
        'postgresql-installation-guide': 'download',
        'system-catalog-tables': 'table',
        'architecture': 'sitemap',
        'acid-properties': 'shield-alt',
        'mvcc': 'layer-group',
        'connection-errors': 'plug',
        'query-performance': 'chart-line',
        'locks-deadlocks': 'lock',
        'memory-resources': 'memory',
        'backup-recovery': 'database',
        'replication-issues': 'copy',
        'configuration-tuning': 'cogs',
        'permissions-roles': 'user-shield',
        'data-corruption': 'shield-alt',
        'extension-errors': 'puzzle-piece',
        'index-errors': 'list-ol',
        'join-errors': 'project-diagram',
        'indexes': 'list-ol',
        'joins': 'project-diagram',
        'full-text-search': 'search',
        'extensions-guide': 'puzzle-piece',
        'performance-tuning': 'tachometer-alt'
    };
    return icons[category] || 'circle';
}

function loadCategory(categoryKey, pushState = true) {
    currentCategory = categoryKey;
    const category = categories[categoryKey];
    
    updateSidebarActive(categoryKey);
    
    if (pushState) {
        history.pushState({ category: categoryKey }, '', `#${categoryKey}`);
    }
    
    if (categoryKey === 'dashboard') {
        loadDashboard();
    } else {
        loadCategoryContent(categoryKey);
    }
    
    const searchContainer = document.getElementById('search-container');
    if (searchContainer) {
        if (categoryKey === 'dashboard') {
            searchContainer.classList.add('hidden');
        } else {
            searchContainer.classList.remove('hidden');
        }
    }
}

function loadDashboard() {
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.innerHTML = `
            <div class="mb-8">
                <div class="relative w-full max-w-2xl mx-auto">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-medium-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <input type="text" id="global-search-input" placeholder="Search across all categories..." class="block w-full pl-12 pr-4 py-4 border border-soft-gray rounded-xl leading-5 bg-card-light placeholder-medium-gray focus:outline-none focus:placeholder-light-gray focus:ring-2 focus:ring-accent-dark focus:border-accent-dark text-base">
                </div>
            </div>
            <div id="search-results" class="hidden mb-8"></div>
            <div id="dashboard-content">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2 dashboard-chart-card">
                        <div class="dashboard-chart-header">
                            <h2 class="dashboard-chart-title">Issue Distribution</h2>
                            <div class="chart-switcher">
                                <button class="chart-btn active" data-type="doughnut" title="Doughnut Chart">
                                    <i class="fas fa-chart-pie"></i>
                                </button>
                                <button class="chart-btn" data-type="bar" title="Bar Chart">
                                    <i class="fas fa-chart-bar"></i>
                                </button>
                                <button class="chart-btn" data-type="line" title="Line Chart">
                                    <i class="fas fa-chart-line"></i>
                                </button>
                                <button class="chart-btn" data-type="radar" title="Radar Chart">
                                    <i class="fas fa-crosshairs"></i>
                                </button>
                                <button class="chart-btn" data-type="polarArea" title="Polar Area Chart">
                                    <i class="fas fa-circle-notch"></i>
                                </button>
                            </div>
                        </div>
                        <div class="chart-container">
                            <canvas id="categoryChart"></canvas>
                        </div>
                    </div>
                    
                    <div class="dashboard-chart-card">
                        <div class="dashboard-chart-header">
                            <h2 class="dashboard-chart-title">Top Issues</h2>
                        </div>
                        <div id="common-issues-list"></div>
                    </div>
                </div>
            </div>
        `;
        setTimeout(() => {
            createChart();
            loadCommonIssues();
            setupGlobalSearch();
            setupChartSwitcher();
        }, 100);
    }
}

function calculateMetrics() {
    const excludeFromErrors = ['glossary', 'postgresql-installation-guide', 'system-catalog-tables', 'architecture', 'acid-properties', 'mvcc', 'indexes', 'joins', 'full-text-search', 'extensions-guide', 'performance-tuning'];
    const totalCategories = Object.keys(categories).filter(key => key !== 'dashboard' && !excludeFromErrors.includes(key)).length;
    let totalErrors = 0;
    let categoryMostErrors = 'N/A';
    let maxErrors = 0;
    let criticalIssues = 0;
    
    Object.keys(categoryData).forEach(key => {
        if (excludeFromErrors.includes(key)) return;
        
        const data = categoryData[key];
        const errorCount = data ? data.length : 0;
        totalErrors += errorCount;
        
        if (errorCount > maxErrors) {
            maxErrors = errorCount;
            categoryMostErrors = categories[key] ? categories[key].title : 'Unknown';
        }
        
        criticalIssues += Math.floor(errorCount * 0.2);
    });
    
    return {
        totalErrors,
        categoryMostErrors,
        criticalIssues,
        totalCategories
    };
}

let currentChartType = 'doughnut';

function createChart(chartType = 'doughnut') {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    const excludeFromErrors = ['glossary', 'postgresql-installation-guide', 'system-catalog-tables', 'architecture', 'acid-properties', 'mvcc', 'indexes', 'joins', 'full-text-search', 'extensions-guide', 'performance-tuning'];
    const data = Object.keys(categoryData)
        .filter(key => !excludeFromErrors.includes(key))
        .map(key => ({
            label: categories[key] ? categories[key].title : key,
            value: categoryData[key] ? categoryData[key].length : 0
        })).filter(item => item.value > 0);
    
    if (currentChart) {
        currentChart.destroy();
    }
    
    if (data.length === 0) {
        ctx.getContext('2d').clearRect(0, 0, ctx.width, ctx.height);
        return;
    }
    
    const totalIssues = data.reduce((sum, d) => sum + d.value, 0);
    const colors = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
    
    const chartConfig = {
        type: chartType,
        data: {
            labels: data.map(d => d.label),
            datasets: [{
                label: 'Issues',
                data: data.map(d => d.value),
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: chartType === 'line' ? 3 : 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: chartType !== 'doughnut',
                    position: 'top',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        color: document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937',
                        boxWidth: 15,
                        boxHeight: 15
                    }
                },
                tooltip: chartType === 'doughnut' ? {
                    backgroundColor: document.body.classList.contains('dark') ? '#1F2937' : '#FFFFFF',
                    titleColor: document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937',
                    bodyColor: document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937',
                    borderColor: document.body.classList.contains('dark') ? '#374151' : '#E5E7EB',
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed * 100) / total).toFixed(1);
                            return ` ${context.label}: ${context.parsed} issues (${percentage}%)`;
                        }
                    }
                } : {}
            }
        }
    };
    
    if (chartType === 'doughnut') {
        chartConfig.options.cutout = '60%';
        chartConfig.options.interaction = {
            intersect: false,
            mode: 'point'
        };
        chartConfig.plugins = [{
            id: 'centerText',
            beforeDraw: function(chart) {
                const ctx = chart.ctx;
                const centerX = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
                const centerY = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;
                
                ctx.save();
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937';
                ctx.font = 'bold 24px Inter';
                ctx.fillText(totalIssues, centerX, centerY - 8);
                ctx.font = '12px Inter';
                ctx.fillText('Issues', centerX, centerY + 12);
                ctx.restore();
            }
        }];
    } else if (chartType === 'bar') {
        chartConfig.options.scales = {
            y: {
                beginAtZero: true,
                ticks: { color: document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937' },
                grid: { color: document.body.classList.contains('dark') ? '#333333' : '#E5E7EB' }
            },
            x: {
                ticks: { color: document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937' },
                grid: { color: document.body.classList.contains('dark') ? '#333333' : '#E5E7EB' }
            }
        };
    } else if (chartType === 'line') {
        chartConfig.data.datasets[0].fill = false;
        chartConfig.data.datasets[0].tension = 0.4;
        chartConfig.options.scales = {
            y: {
                beginAtZero: true,
                ticks: { color: document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937' },
                grid: { color: document.body.classList.contains('dark') ? '#333333' : '#E5E7EB' }
            },
            x: {
                ticks: { color: document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937' },
                grid: { color: document.body.classList.contains('dark') ? '#333333' : '#E5E7EB' }
            }
        };
    } else if (chartType === 'radar') {
        chartConfig.options.scales = {
            r: {
                beginAtZero: true,
                ticks: { color: document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937' },
                grid: { color: document.body.classList.contains('dark') ? '#333333' : '#E5E7EB' },
                pointLabels: { color: document.body.classList.contains('dark') ? '#FFFFFF' : '#1F2937' }
            }
        };
    } else if (chartType === 'polarArea') {
        chartConfig.options.plugins.legend.display = true;
        chartConfig.options.plugins.legend.position = 'right';
    }
    
    currentChart = new Chart(ctx, chartConfig);
    currentChartType = chartType;
}

function setupChartSwitcher() {
    document.querySelectorAll('.chart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const chartType = btn.dataset.type;
            
            document.querySelectorAll('.chart-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            createChart(chartType);
        });
    });
}

function loadCommonIssues() {
    const commonIssuesList = document.getElementById('common-issues-list');
    if (!commonIssuesList) return;
    
    const excludeFromErrors = ['glossary', 'postgresql-installation-guide', 'system-catalog-tables', 'architecture', 'acid-properties', 'mvcc', 'indexes', 'joins', 'full-text-search', 'extensions-guide', 'performance-tuning'];
    const categoryStats = [];
    
    Object.keys(categoryData).forEach(key => {
        if (excludeFromErrors.includes(key)) return;
        const data = categoryData[key];
        if (data && data.length > 0) {
            categoryStats.push({
                category: key,
                title: categories[key].title,
                count: data.length,
                icon: getIconForCategory(key)
            });
        }
    });
    
    categoryStats.sort((a, b) => b.count - a.count);
    
    commonIssuesList.innerHTML = categoryStats.slice(0, 8).map((stat, index) => `
        <div class="dashboard-metric-row" onclick="loadCategory('${stat.category}')" style="cursor: pointer;">
            <div class="dashboard-metric-name">
                <i class="fas fa-${stat.icon} mr-2 dashboard-accent-${getAccentColor(index)}"></i>
                ${stat.title}
            </div>
            <div class="dashboard-metric-value">${stat.count}</div>
        </div>
    `).join('');
}

function getAccentColor(index) {
    const colors = ['purple', 'blue', 'green', 'yellow', 'red'];
    return colors[index % colors.length];
}

function loadCategoryContent(categoryKey) {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) return;
    
    const category = categories[categoryKey];
    const data = categoryData[categoryKey] || [];
    
    let content = `
        <div class="mb-6">
            <h1 class="text-3xl font-bold text-dark-charcoal mb-4">${category.title}</h1>
            <p class="text-medium-gray text-lg">${category.intro}</p>
        </div>
    `;
    
    if (data.length > 0) {
        content += '<div class="space-y-8">';
        data.forEach((item, index) => {
            const itemId = `item-${categoryKey}-${index}`;
            content += `
                <div class="bg-card-light rounded-xl shadow-lg border border-soft-gray">
                    <div class="p-6 pb-0">
                        <div class="flex items-center justify-between pb-6 cursor-pointer" onclick="toggleErrorBlock('${itemId}')">
                            <div class="flex items-center flex-1">
                                <div class="w-3 h-3 ${getSeverityColor(item.title)} rounded-full mr-3"></div>
                                <div class="flex-1">
                                    <div class="flex items-center gap-3 mb-2">
                                        <h3 class="text-xl font-bold text-dark-charcoal">${extractTitle(item.title)}</h3>
                                        ${getSeverityChip(item.title)}
                                    </div>
                                    <div class="flex items-center gap-4 text-sm text-medium-gray mb-1">
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-tag text-xs"></i>
                                            ${getErrorType(item.common_causes)}
                                        </span>
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-info-circle text-xs"></i>
                                            ${getQuickPreview(item)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-4">
                                <i id="chevron-${itemId}" class="fas fa-chevron-down text-medium-gray transition-transform duration-200" style="transform: rotate(-90deg);"></i>
                            </div>
                        </div>
                        <div id="${itemId}" class="collapsible-content pb-6" style="display: none;">
                            ${formatItemContent(item, categoryKey)}
                        </div>
                    </div>
                </div>
            `;
        });
        content += '</div>';
    }
    
    contentArea.innerHTML = content;
    setupCopyButtons();
}

function formatItemContent(item, categoryKey) {
    if (categoryKey === 'indexes' || categoryKey === 'joins' || categoryKey === 'mvcc' || categoryKey === 'full-text-search' || categoryKey === 'extensions-guide' || categoryKey === 'performance-tuning') {
        if (item.overview) {
            return `
                <div class="space-y-6">
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Overview</h4>
                        <p class="text-medium-gray leading-relaxed">${item.overview}</p>
                    </div>
                    
                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Key Features</h4>
                        <p class="text-medium-gray leading-relaxed">${item.key_features}</p>
                    </div>
                    
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Use Cases</h4>
                        <p class="text-medium-gray leading-relaxed">${item.use_cases}</p>
                    </div>
                </div>
            `;
        } else if (categoryKey === 'performance-tuning') {
            return `
                <div class="space-y-6">
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Definition</h4>
                        <p class="text-medium-gray leading-relaxed">${item.definition}</p>
                    </div>
                    
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Key Concepts</h4>
                        <p class="text-medium-gray leading-relaxed">${item.key_concepts}</p>
                    </div>
                    
                    <div class="border-l-4 border-orange-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Performance Impact</h4>
                        <p class="text-medium-gray leading-relaxed">${item.performance_impact}</p>
                    </div>
                    
                    <div class="border-l-4 border-cyan-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">pg_settings Sample Query</h4>
                        <div class="code-block">
                            <pre class="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap break-words"><code class="text-blue-600">${item.pg_settings_sample}</code></pre>
                            <button class="copy-btn" onclick="copyToClipboard(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="border-l-4 border-yellow-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Tuning Formula</h4>
                        <p class="text-medium-gray leading-relaxed">${item.tuning_formula}</p>
                    </div>
                    
                    <div class="border-l-4 border-indigo-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Enterprise Values</h4>
                        <p class="text-medium-gray leading-relaxed">${item.enterprise_values}</p>
                    </div>
                    
                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Reference</h4>
                        <a href="${item.reference_link}" target="_blank" class="text-blue-600 hover:text-blue-700 hover:underline">
                            PostgreSQL Documentation
                        </a>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="space-y-6">
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Definition</h4>
                        <p class="text-medium-gray leading-relaxed">${item.definition}</p>
                    </div>
                    
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Key Concepts</h4>
                        <p class="text-medium-gray leading-relaxed">${item.key_concepts}</p>
                    </div>
                    
                    <div class="border-l-4 border-orange-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Performance Impact</h4>
                        <p class="text-medium-gray leading-relaxed">${item.performance_impact}</p>
                    </div>
                    
                    ${item.example_queries ? `
                    <div class="border-l-4 border-cyan-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Example Queries</h4>
                        <div class="space-y-4">
                            ${item.example_queries.map(example => `
                                <div>
                                    <p class="text-sm text-medium-gray mb-2">${example.description}</p>
                                    <div class="code-block">
                                        <pre class="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap break-words"><code class="text-blue-600">${example.query}</code></pre>
                                        <button class="copy-btn" onclick="copyToClipboard(this)">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Reference</h4>
                        <a href="${item.reference_link}" target="_blank" class="text-blue-600 hover:text-blue-700 hover:underline">
                            PostgreSQL Documentation
                        </a>
                    </div>
                </div>
            `;
        }
    } else if (categoryKey === 'glossary') {
        return `
            <div class="space-y-6">
                <div class="border-l-4 border-blue-500 pl-4">
                    <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Definition</h4>
                    <p class="text-medium-gray leading-relaxed">${item.definition}</p>
                </div>
                
                <div class="border-l-4 border-purple-500 pl-4">
                    <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Key Concepts</h4>
                    <p class="text-medium-gray leading-relaxed">${item.key_concepts}</p>
                </div>
                
                <div class="border-l-4 border-orange-500 pl-4">
                    <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Performance Impact</h4>
                    <p class="text-medium-gray leading-relaxed">${item.performance_impact}</p>
                </div>
                
                <div class="border-l-4 border-green-500 pl-4">
                    <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Reference</h4>
                    <a href="${item.reference_link}" target="_blank" class="text-blue-600 hover:text-blue-700 hover:underline">
                        PostgreSQL Documentation
                    </a>
                </div>
            </div>
        `;
    } else if (categoryKey === 'postgresql-installation-guide') {
        if (item.method) {
            return `
                <div class="space-y-6">
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Installation Method</h4>
                        <p class="text-medium-gray leading-relaxed">${item.method}</p>
                    </div>
                    
                    <div class="border-l-4 border-yellow-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Prerequisites</h4>
                        <p class="text-medium-gray leading-relaxed">${item.prerequisites}</p>
                    </div>
                    
                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Installation Steps</h4>
                        <div class="code-block">
                            <pre class="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap break-words"><code class="text-blue-600">${item.installation_steps}</code></pre>
                            <button class="copy-btn" onclick="copyToClipboard(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Post Installation</h4>
                        <p class="text-medium-gray leading-relaxed">${item.post_installation}</p>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="space-y-6">
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Overview</h4>
                        <p class="text-medium-gray leading-relaxed">${item.overview}</p>
                    </div>
                    
                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Key Features</h4>
                        <p class="text-medium-gray leading-relaxed">${item.key_features}</p>
                    </div>
                    
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Use Cases</h4>
                        <p class="text-medium-gray leading-relaxed">${item.use_cases}</p>
                    </div>
                </div>
            `;
        }
    } else if (categoryKey === 'system-catalog-tables') {
        return `
            <div class="space-y-6">
                <div class="border-l-4 border-blue-500 pl-4">
                    <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Purpose</h4>
                    <p class="text-medium-gray leading-relaxed">${item.purpose}</p>
                </div>
                
                <div class="border-l-4 border-green-500 pl-4">
                    <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Important Columns</h4>
                    <ul class="text-medium-gray leading-relaxed list-disc list-inside space-y-1">
                        ${item.important_columns.map(col => `<li>${col}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="border-l-4 border-cyan-500 pl-4">
                    <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Sample Query</h4>
                    <div class="code-block">
                        <pre class="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap break-words"><code class="text-blue-600">${item.sample_select_query}</code></pre>
                        <button class="copy-btn" onclick="copyToClipboard(this)">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                </div>
                
                <div class="border-l-4 border-purple-500 pl-4">
                    <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Use in Monitoring & Debugging</h4>
                    <p class="text-medium-gray leading-relaxed">${item.use_in_monitoring_debugging}</p>
                </div>
            </div>
        `;
    } else if (categoryKey === 'architecture') {
        if (item.layer) {
            return `
                <div class="space-y-6">
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Description</h4>
                        <p class="text-medium-gray leading-relaxed">${item.description}</p>
                    </div>
                    
                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Components</h4>
                        <div class="space-y-3">
                            ${item.components.map(comp => `
                                <div class="bg-gray-50 p-3 rounded">
                                    <h5 class="font-semibold text-dark-charcoal">${comp.name}</h5>
                                    <p class="text-sm text-medium-gray mt-1">${comp.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    ${item.diagram ? `
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Architecture Diagram</h4>
                        <div class="bg-white p-4 rounded border">
                            ${item.diagram}
                        </div>
                    </div>
                    ` : ''}
                    
                    ${item.example_query ? `
                    <div class="border-l-4 border-cyan-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Example Query</h4>
                        <div class="code-block">
                            <pre class="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap break-words"><code class="text-blue-600">${item.example_query}</code></pre>
                            <button class="copy-btn" onclick="copyToClipboard(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    ` : ''}
                </div>
            `;
        } else {
            return `
                <div class="space-y-6">
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Overview</h4>
                        <p class="text-medium-gray leading-relaxed">${item.overview}</p>
                    </div>
                    
                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Key Features</h4>
                        <p class="text-medium-gray leading-relaxed">${item.key_features}</p>
                    </div>
                    
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Use Cases</h4>
                        <p class="text-medium-gray leading-relaxed">${item.use_cases}</p>
                    </div>
                </div>
            `;
        }
    } else if (categoryKey === 'acid-properties') {
        if (item.definition) {
            return `
                <div class="space-y-6">
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Definition</h4>
                        <p class="text-medium-gray leading-relaxed">${item.definition}</p>
                    </div>
                    
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Key Concepts</h4>
                        <p class="text-medium-gray leading-relaxed">${item.key_concepts}</p>
                    </div>
                    
                    <div class="border-l-4 border-orange-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Performance Impact</h4>
                        <p class="text-medium-gray leading-relaxed">${item.performance_impact}</p>
                    </div>
                    
                    ${item.business_use_cases ? `
                    <div class="border-l-4 border-yellow-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Business Use Cases</h4>
                        <p class="text-medium-gray leading-relaxed">${item.business_use_cases}</p>
                    </div>
                    ` : ''}
                    
                    ${item.example_queries ? `
                    <div class="border-l-4 border-cyan-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Example Queries</h4>
                        <div class="space-y-4">
                            ${item.example_queries.map(example => `
                                <div>
                                    <p class="text-sm text-medium-gray mb-2">${example.description}</p>
                                    <div class="code-block">
                                        <pre class="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap break-words"><code class="text-blue-600">${example.query}</code></pre>
                                        <button class="copy-btn" onclick="copyToClipboard(this)">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Reference</h4>
                        <a href="${item.reference_link}" target="_blank" class="text-blue-600 hover:text-blue-700 hover:underline">
                            PostgreSQL Documentation
                        </a>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="space-y-6">
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Overview</h4>
                        <p class="text-medium-gray leading-relaxed">${item.overview}</p>
                    </div>
                    
                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Key Features</h4>
                        <p class="text-medium-gray leading-relaxed">${item.key_features}</p>
                    </div>
                    
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="text-lg font-semibold text-dark-charcoal mb-2">Use Cases</h4>
                        <p class="text-medium-gray leading-relaxed">${item.use_cases}</p>
                    </div>
                </div>
            `;
        }
    } else {
        return `
            <div class="space-y-6">
                <div class="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-exclamation-circle text-red-400 mr-2"></i>
                        <h4 class="text-lg font-semibold text-dark-charcoal">Error Description</h4>
                    </div>
                    <p class="text-gray-700 leading-relaxed">${item.description}</p>
                </div>
                
                <div class="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-search text-yellow-400 mr-2"></i>
                        <h4 class="text-lg font-semibold text-dark-charcoal">Common Causes</h4>
                    </div>
                    <div class="text-gray-700 leading-relaxed">
                        ${item.common_causes.split(', ').map(cause => `<div class="flex items-start mb-2"><i class="fas fa-chevron-right text-yellow-400 mr-2 mt-1 text-xs"></i><span>${cause.trim()}</span></div>`).join('')}
                    </div>
                </div>
                
                <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-tools text-green-400 mr-2"></i>
                        <h4 class="text-lg font-semibold text-dark-charcoal">Resolution Steps</h4>
                    </div>
                    <div class="space-y-3">
                        ${item.resolution.split('.').filter(step => step.trim()).map((step, index) => {
                            const cleanStep = step.trim();
                            if (!cleanStep) return '';
                            const hasCode = cleanStep.includes('`');
                            if (hasCode) {
                                const parts = cleanStep.split('`');
                                let formatted = parts[0];
                                for (let i = 1; i < parts.length; i += 2) {
                                    formatted += `<code class="bg-gray-900 px-2 py-1 rounded text-cyan-400 text-sm">${parts[i]}</code>`;
                                    if (parts[i + 1]) formatted += parts[i + 1];
                                }
                                return `<div class="flex items-start"><span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">${index + 1}</span><div class="text-gray-700 leading-relaxed">${formatted}</div></div>`;
                            }
                            return `<div class="flex items-start"><span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">${index + 1}</span><div class="text-gray-700 leading-relaxed">${cleanStep}</div></div>`;
                        }).filter(step => step).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

function setupCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            copyToClipboard(this);
        });
    });
}

function copyToClipboard(button) {
    const codeBlock = button.parentElement.querySelector('code');
    if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.textContent).then(() => {
            showToast('Query copied to clipboard!');
        });
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const data = categoryData[currentCategory] || [];
    
    if (query === '') {
        loadCategoryContent(currentCategory);
        return;
    }
    
    const filteredData = data.filter(item => {
        const searchableText = [
            item.title,
            item.description,
            item.resolution,
            item.common_causes,
            item.definition,
            item.key_concepts,
            item.performance_impact,
            item.overview,
            item.key_features,
            item.use_cases,
            item.purpose,
            item.method,
            item.prerequisites,
            item.installation_steps,
            item.post_installation,
            item.business_use_cases
        ].filter(Boolean).join(' ').toLowerCase();
        
        return searchableText.includes(query);
    });
    
    const category = categories[currentCategory];
    const contentArea = document.getElementById('content-area');
    
    let content = `
        <div class="mb-6">
            <h1 class="text-3xl font-bold text-dark-charcoal mb-4">${category.title}</h1>
            <p class="text-medium-gray text-lg">Search results for "${query}"</p>
        </div>
    `;
    
    if (filteredData.length > 0) {
        content += '<div class="space-y-8">';
        filteredData.forEach((item, index) => {
            const itemId = `search-item-${currentCategory}-${index}`;
            content += `
                <div class="bg-card-light rounded-xl shadow-lg border border-soft-gray">
                    <div class="p-6 pb-0">
                        <div class="flex items-center justify-between pb-6 cursor-pointer" onclick="toggleErrorBlock('${itemId}')">
                            <div class="flex items-center flex-1">
                                <div class="w-3 h-3 ${getSeverityColor(item.title)} rounded-full mr-3"></div>
                                <div class="flex-1">
                                    <div class="flex items-center gap-3 mb-2">
                                        <h3 class="text-xl font-bold text-dark-charcoal">${extractTitle(item.title)}</h3>
                                        ${getSeverityChip(item.title)}
                                    </div>
                                    <div class="flex items-center gap-4 text-sm text-medium-gray mb-1">
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-tag text-xs"></i>
                                            ${getErrorType(item.common_causes)}
                                        </span>
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-info-circle text-xs"></i>
                                            ${getQuickPreview(item)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-4">
                                <i id="chevron-${itemId}" class="fas fa-chevron-down text-medium-gray transition-transform duration-200" style="transform: rotate(-90deg);"></i>
                            </div>
                        </div>
                        <div id="${itemId}" class="collapsible-content pb-6" style="display: none;">
                            ${formatItemContent(item, currentCategory)}
                        </div>
                    </div>
                </div>
            `;
        });
        content += '</div>';
    } else {
        content += '<p class="text-medium-gray">No results found.</p>';
    }
    
    contentArea.innerHTML = content;
    setupCopyButtons();
}

function setupChatbot() {
    // Chatbot functionality - simplified for standalone version
}

function updateSidebarActive(categoryKey) {
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelectorAll('.sidebar-item').forEach(item => {
        if (item.textContent.includes(categories[categoryKey]?.title) && 
            !item.classList.contains('troubleshooting-header')) {
            item.classList.add('active');
        }
    });
}

function setupHistory() {
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.category) {
            loadCategory(event.state.category, false);
        } else {
            loadCategory('dashboard', false);
        }
    });
}

function loadFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash && categories[hash]) {
        loadCategory(hash, false);
    } else {
        loadCategory('dashboard', false);
    }
}

function setupGlobalScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    const contentArea = document.getElementById('content-area');
    
    if (!scrollBtn || !contentArea) return;
    
    contentArea.addEventListener('scroll', () => {
        if (contentArea.scrollTop > 300) {
            scrollBtn.classList.remove('opacity-0', 'invisible');
            scrollBtn.classList.add('opacity-100', 'visible');
        } else {
            scrollBtn.classList.remove('opacity-100', 'visible');
            scrollBtn.classList.add('opacity-0', 'invisible');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        scrollBtn.style.transform = 'scale(0.9)';
        setTimeout(() => scrollBtn.style.transform = 'scale(1)', 150);
        
        const start = contentArea.scrollTop;
        const duration = 500;
        const startTime = performance.now();
        
        function animateScroll(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            contentArea.scrollTop = start * (1 - easeProgress);
            
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }
        
        requestAnimationFrame(animateScroll);
    });
}

function setupGlobalSearch() {
    const globalSearchInput = document.getElementById('global-search-input');
    if (globalSearchInput) {
        globalSearchInput.addEventListener('input', handleGlobalSearch);
    }
}

function handleGlobalSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    const searchResults = document.getElementById('search-results');
    const dashboardContent = document.getElementById('dashboard-content');
    
    if (query === '') {
        searchResults.classList.add('hidden');
        dashboardContent.classList.remove('hidden');
        return;
    }
    
    const results = [];
    
    Object.keys(categoryData).forEach(categoryKey => {
        const data = categoryData[categoryKey] || [];
        const category = categories[categoryKey];
        
        data.forEach(item => {
            const searchableText = [
                item.title,
                item.description,
                item.resolution,
                item.common_causes,
                item.definition,
                item.key_concepts,
                item.performance_impact,
                item.overview,
                item.key_features,
                item.use_cases,
                item.purpose,
                item.method,
                item.prerequisites,
                item.installation_steps,
                item.post_installation,
                item.business_use_cases
            ].filter(Boolean).join(' ').toLowerCase();
            
            if (searchableText.includes(query)) {
                results.push({
                    ...item,
                    category: categoryKey,
                    categoryTitle: category.title
                });
            }
        });
    });
    
    displayGlobalSearchResults(results, query);
}

function displayGlobalSearchResults(results, query) {
    const searchResults = document.getElementById('search-results');
    const dashboardContent = document.getElementById('dashboard-content');
    
    dashboardContent.classList.add('hidden');
    searchResults.classList.remove('hidden');
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="bg-card-light p-6 rounded-lg shadow-md text-center">
                <i class="fas fa-search text-4xl text-medium-gray mb-4"></i>
                <h3 class="text-xl font-semibold text-dark-charcoal mb-2">No results found</h3>
                <p class="text-medium-gray">No items found for "${query}". Try different keywords.</p>
            </div>
        `;
        return;
    }
    
    const resultsByCategory = {};
    results.forEach(result => {
        if (!resultsByCategory[result.category]) {
            resultsByCategory[result.category] = [];
        }
        resultsByCategory[result.category].push(result);
    });
    
    let content = `
        <div class="mb-6">
            <h2 class="dashboard-section-title">Search Results</h2>
            <p class="text-medium-gray">Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"</p>
        </div>
        <div class="space-y-6">
    `;
    
    Object.keys(resultsByCategory).forEach(categoryKey => {
        const categoryResults = resultsByCategory[categoryKey];
        const category = categories[categoryKey];
        
        content += `
            <div class="dashboard-chart-card">
                <div class="dashboard-chart-header border-b border-soft-gray pb-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-${getIconForCategory(categoryKey)} text-medium-gray"></i>
                            <h3 class="dashboard-chart-title">${category.title}</h3>
                            <span class="bg-accent-light text-accent-dark px-2 py-1 rounded-full text-xs font-medium">${categoryResults.length}</span>
                        </div>
                        <button onclick="loadCategory('${categoryKey}')" class="text-medium-gray hover:text-dark-charcoal text-sm font-medium">
                            View All <i class="fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>
                <div class="divide-y divide-soft-gray">
        `;
        
        categoryResults.slice(0, 3).forEach(result => {
            content += `
                <div class="p-4 hover:bg-smooth-cream transition-colors cursor-pointer" onclick="viewSearchResult('${categoryKey}', '${result.title}')">
                    <h4 class="font-semibold text-dark-charcoal mb-2">${result.title}</h4>
                    <p class="text-medium-gray text-sm line-clamp-2">${getResultPreview(result, query)}</p>
                </div>
            `;
        });
        
        if (categoryResults.length > 3) {
            content += `
                <div class="p-4 text-center">
                    <button onclick="loadCategory('${categoryKey}')" class="text-medium-gray hover:text-dark-charcoal text-sm font-medium">
                        View ${categoryResults.length - 3} more results in ${category.title}
                    </button>
                </div>
            `;
        }
        
        content += '</div></div>';
    });
    
    content += '</div>';
    searchResults.innerHTML = content;
}

function getResultPreview(result, query) {
    const searchableFields = [
        result.description,
        result.resolution,
        result.common_causes,
        result.definition,
        result.key_concepts,
        result.performance_impact,
        result.overview,
        result.key_features,
        result.use_cases,
        result.purpose,
        result.method,
        result.prerequisites,
        result.installation_steps,
        result.post_installation,
        result.business_use_cases
    ].filter(Boolean);
    
    for (const field of searchableFields) {
        if (field.toLowerCase().includes(query.toLowerCase())) {
            const index = field.toLowerCase().indexOf(query.toLowerCase());
            const start = Math.max(0, index - 50);
            const end = Math.min(field.length, index + query.length + 50);
            return (start > 0 ? '...' : '') + field.substring(start, end) + (end < field.length ? '...' : '');
        }
    }
    
    return searchableFields[0] ? searchableFields[0].substring(0, 100) + '...' : 'No preview available';
}

function viewSearchResult(categoryKey, title) {
    loadCategory(categoryKey);
    setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = title;
            searchInput.dispatchEvent(new Event('input'));
        }
    }, 500);
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    
    if (!themeToggle) return;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    } else {
        document.body.classList.remove('dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        
        if (document.body.classList.contains('dark')) {
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'dark');
        } else {
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
            localStorage.setItem('theme', 'light');
        }
        
        // Refresh current content to apply theme changes
        if (currentCategory === 'dashboard') {
            loadDashboard();
        } else {
            loadCategoryContent(currentCategory);
        }
        
        // Recreate chart with new theme colors
        if (currentChart) {
            createChart(currentChartType);
        }
    });
}

function extractTitle(title) {
    return title.replace(/^(FATAL|ERROR|WARNING|INFO|DEBUG|PROBLEM):\s*/, '').replace(/^Problem:\s*/, '');
}

function getSeverityChip(title) {
    const severityMatch = title.match(/^(FATAL|ERROR|WARNING|INFO|DEBUG|PROBLEM):/) || title.match(/^(Problem):/);
    if (!severityMatch) return '';
    
    const severity = severityMatch[1].toUpperCase();
    const colorMap = {
        'FATAL': 'bg-red-100 text-red-800',
        'ERROR': 'bg-red-100 text-red-800', 
        'WARNING': 'bg-yellow-100 text-yellow-800',
        'INFO': 'bg-blue-100 text-blue-800',
        'DEBUG': 'bg-gray-100 text-gray-800',
        'PROBLEM': 'bg-orange-100 text-orange-800'
    };
    
    return `<span class="px-2 py-1 text-xs font-medium rounded-full ${colorMap[severity] || 'bg-gray-100 text-gray-800'}">${severity}</span>`;
}

function toggleErrorBlock(itemId) {
    const content = document.getElementById(itemId);
    const chevron = document.getElementById(`chevron-${itemId}`);
    
    if (content && chevron) {
        if (content.style.display === 'none') {
            content.style.display = 'block';
            chevron.style.transform = 'rotate(0deg)';
        } else {
            content.style.display = 'none';
            chevron.style.transform = 'rotate(-90deg)';
        }
    }
}

function getSeverityColor(title) {
    const severityMatch = title.match(/^(FATAL|ERROR|WARNING|INFO|DEBUG|PROBLEM):/) || title.match(/^(Problem):/);
    if (!severityMatch) return 'bg-blue-500';
    
    const severity = severityMatch[1].toUpperCase();
    const colorMap = {
        'FATAL': 'bg-red-500',
        'ERROR': 'bg-red-500', 
        'WARNING': 'bg-yellow-500',
        'INFO': 'bg-blue-500',
        'DEBUG': 'bg-gray-500',
        'PROBLEM': 'bg-orange-500'
    };
    
    return colorMap[severity] || 'bg-blue-500';
}

function getErrorType(commonCauses) {
    if (!commonCauses) return 'General';
    
    const causes = commonCauses.toLowerCase();
    if (causes.includes('network') || causes.includes('connection') || causes.includes('timeout')) {
        return 'Network';
    } else if (causes.includes('authentication') || causes.includes('password') || causes.includes('user')) {
        return 'Auth';
    } else if (causes.includes('configuration') || causes.includes('config') || causes.includes('setting')) {
        return 'Config';
    } else if (causes.includes('permission') || causes.includes('role') || causes.includes('access')) {
        return 'Access';
    } else if (causes.includes('memory') || causes.includes('resource') || causes.includes('pool')) {
        return 'Resource';
    } else if (causes.includes('ssl') || causes.includes('certificate') || causes.includes('cipher')) {
        return 'Security';
    } else if (causes.includes('query') || causes.includes('performance') || causes.includes('slow')) {
        return 'Performance';
    } else {
        return 'System';
    }
}

function getQuickPreview(item) {
    // Try different fields based on content type
    const previewText = item.description || item.definition || item.overview || item.purpose || item.method || '';
    
    if (!previewText) return '';
    
    // Extract key phrases for quick understanding
    const desc = previewText.toLowerCase();
    if (desc.includes('rejected') || desc.includes('denied')) {
        return 'Access denied';
    } else if (desc.includes('timeout') || desc.includes('exceeded')) {
        return 'Timeout issue';
    } else if (desc.includes('not found') || desc.includes('does not exist')) {
        return 'Resource missing';
    } else if (desc.includes('failed') || desc.includes('failure')) {
        return 'Operation failed';
    } else if (desc.includes('exhausted') || desc.includes('full')) {
        return 'Resource exhausted';
    } else {
        // Fallback: return first 40 characters
        return previewText.length > 40 ? previewText.substring(0, 40) + '...' : previewText;
    }
}