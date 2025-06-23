document.addEventListener('DOMContentLoaded', function() {
    // 日历状态
    const state = {
        date: new Date(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        today: new Date()
    };
    
    // 添加一些示例事件日期
    const events = [
        new Date(state.year, state.month, 5),
        new Date(state.year, state.month, 12),
        new Date(state.year, state.month, 18),
        new Date(state.year, state.month, 25)
    ];
    
    // DOM 元素
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthEl = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const notification = document.getElementById('notification');
    const urlDateSpan = document.getElementById('urlDate');
    const themeToggle = document.getElementById('themeToggle');
    
    // 渲染日历
    function renderCalendar() {
        // 更新月份显示
        currentMonthEl.textContent = `${state.year}年${state.month + 1}月`;
        
        // 清空日历网格
        calendarGrid.innerHTML = '';
        
        // 获取月份第一天和最后一天
        const firstDay = new Date(state.year, state.month, 1);
        const lastDay = new Date(state.year, state.month + 1, 0);
        
        // 确定第一天是星期几 (0 = 周日, 1 = 周一, ...)
        const firstDayIndex = firstDay.getDay();
        
        // 确定月份总天数
        const daysInMonth = lastDay.getDate();
        
        // 添加上个月末尾的日期
        const prevMonthLastDay = new Date(state.year, state.month, 0).getDate();
        for (let i = firstDayIndex; i > 0; i--) {
            createDateElement(prevMonthLastDay - i + 1, true);
        }
        
        // 添加本月所有日期
        for (let i = 1; i <= daysInMonth; i++) {
            // 检查是否为今天
            const isToday = 
                i === state.today.getDate() && 
                state.month === state.today.getMonth() && 
                state.year === state.today.getFullYear();
            
            // 检查是否为事件日期
            const isEvent = events.some(d => 
                d.getDate() === i && 
                d.getMonth() === state.month && 
                d.getFullYear() === state.year
            );
            
            createDateElement(i, false, isToday, isEvent);
        }
        
        // 添加下月初的日期，使日历完整
        const totalCells = 42; // 6行*7天
        const datesShown = firstDayIndex + daysInMonth;
        const nextMonthDays = totalCells - datesShown;
        
        for (let i = 1; i <= nextMonthDays; i++) {
            createDateElement(i, true);
        }
    }
    
    // 创建日期元素
    function createDateElement(date, isOtherMonth, isToday = false, isEvent = false) {
        const dateEl = document.createElement('div');
        dateEl.classList.add('calendar-date');
        
        if (isOtherMonth) {
            dateEl.classList.add('other-month');
        }
        
        if (isToday) {
            dateEl.classList.add('current-date');
        }
        
        if (isEvent) {
            dateEl.classList.add('event-date');
        }
        
        dateEl.textContent = date;
        dateEl.dataset.year = state.year;
        dateEl.dataset.month = state.month + 1;
        dateEl.dataset.date = date;
        
        dateEl.addEventListener('click', handleDateClick);
        calendarGrid.appendChild(dateEl);
    }
    
    // 处理日期点击
    function handleDateClick(e) {
        const date = e.target;
        
        // 忽略不属于本月的日期
        if (date.classList.contains('other-month')) return;
        
        const year = date.dataset.year;
        const month = date.dataset.month;
        const day = date.dataset.date;
        
        // 格式化为YYYY-MM-DD
        const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        
        // 显示通知
        urlDateSpan.textContent = formattedDate;
        notification.classList.add('show');
        
        // 1.5秒后隐藏通知并跳转
        setTimeout(() => {
            notification.classList.remove('show');
            // 跳转到指定日记页面
            window.location.href = `https://ceteaonia.top/diary/#${formattedDate}`;
        }, 1500);
    }
    
    // 月份导航
    prevMonthBtn.addEventListener('click', () => {
        state.month--;
        if (state.month < 0) {
            state.month = 11;
            state.year--;
        }
        renderCalendar();
    });
    
    nextMonthBtn.addEventListener('click', () => {
        state.month++;
        if (state.month > 11) {
            state.month = 0;
            state.year++;
        }
        renderCalendar();
    });
    
    // 主题切换（手动覆盖系统设置）
    themeToggle.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        
        if (isDarkMode) {
            document.documentElement.classList.remove('dark-mode');
        } else {
            document.documentElement.classList.add('dark-mode');
        }
    });
    
    // 初始渲染
    renderCalendar();
});