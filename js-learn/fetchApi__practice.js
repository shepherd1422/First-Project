       const headerOpenMenu = document.querySelector('.header__burger5');
        const headerMenu = document.querySelector('.header__nav');
       const headerClosedMenu = document.querySelector('.header__closed');
         
         if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         
        const HeaderClosedButton = () => {
            headerMenu.classList.remove('header__nav--showed');
            headerClosedMenu.addEventListener('click', HeaderClosedButton);
        }

        headerOpenMenu.addEventListener('click', () => {
            headerMenu.classList.add('header__nav--showed');
            headerClosedMenu.addEventListener('click', HeaderClosedButton);
        });