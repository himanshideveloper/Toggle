const body = document.querySelector('body'),
    nav = document.querySelector('nav'),
    modeToggle = document.querySelector('.dark-light'),
    searchToggle = document.querySelector('.searchToggle'),
    siderbarOpen = document.querySelector('siderbarOpen'),
    siderbarCloser = document.querySelector('.fa-x');


    // js code to togge dark and light mode
    modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark")
    });

    
    // js code to search box
    searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");

    });


    // js code to toggle sidebar
    siderbarOpen.addEventListener("click" , () =>{
        nav.classList.add("active");
    })
    