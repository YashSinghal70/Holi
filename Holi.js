function ChangeBackground()
{
    var scrollvalue=window.scrollY;
    var navbar1=document.getElementById('navbar1');
    if(scrollvalue < 600)
    {
        navbar1.classList.remove('chngecolor')
    }
    else
    {
        navbar1.classList.add('chngecolor')

    }
    // console.log(scrollvalue);
}

window.addEventListener('scroll', ChangeBackground);