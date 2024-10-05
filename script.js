const pageTransition = document.querySelector('.page-transition');
const contactButton = document.getElementById("contact-button")
const blueprintsButton = document.getElementById('blueprints-button')
const listingPage = document.getElementById('listing-part3-right')

function addCoverEffectEventListeners() {
  
  document.querySelectorAll('a.clickable').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetUrl = e.currentTarget.href;

      if (targetUrl === window.location.href) {
        e.preventDefault();
      }
      
      e.preventDefault();
      pageTransition.style.transform = 'translateX(0%)';

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 700);
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  
  setTimeout(() => {
    pageTransition.style.transform = 'translateX(100%)';
  }, 700);

  addCoverEffectEventListeners();
});


if (contactButton) {
  contactButton.addEventListener('click', function() {
    const newPageUrl = 'about.html';

    pageTransition.style.transform = 'translateX(0%)';

    setTimeout(() => {
      window.location.href = newPageUrl;
    }, 700);
  });
}


if (blueprintsButton) {
  blueprintsButton.addEventListener('click', function() {
    const newPageUrl = 'blueprints.html';

    pageTransition.style.transform = 'translateX(0%)';

    setTimeout(() => {
      window.location.href = newPageUrl;
    }, 700);
  });
}


if (listingPage) {
  listingPage.addEventListener('click', function() {
    const newPageUrl = 'blueprints.html';

    pageTransition.style.transform = 'translateX(0%)';

    setTimeout(() => {
      window.location.href = newPageUrl;
    }, 700);
  });
}

const blueprintCards = document.getElementsByClassName('blueprint-card')

console.log(blueprintCards)
if(blueprintCards){
  Array.from(blueprintCards).forEach(card => {
    card.addEventListener('click', function() {
      const newPageUrl = 'listing1.html';
      
      // Assuming pageTransition is a valid element
      pageTransition.style.transform = 'translateX(0%)';
    
      setTimeout(() => {
        window.location.href = newPageUrl;
      }, 700);
    });
  });
}




