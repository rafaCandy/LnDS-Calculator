// Wait for the document to load before running the script 
(function ($) {
  
    // We use some Javascript and the URL #fragment to hide/show different parts of the page
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
    $(window).on('load hashchange', function(){
      
      // First hide all content regions, then show the content-region specified in the URL hash 
      // (or if no hash URL is found, default to first menu item)
      $('.content-region').hide();
      
      // Remove any active classes on the main-menu
      $('.main-menu a').removeClass('active');
      var region = location.hash.toString() || $('.main-menu a:first').attr('href');
      
      // Now show the region specified in the URL hash
      $(region).show();
      
      // Highlight the menu link associated with this region by adding the .active CSS class
      $('.main-menu a[href="'+ region +'"]').addClass('active'); 
  
      // Alternate method: Use AJAX to load the contents of an external file into a div based on URL fragment
      // This will extract the region name from URL hash, and then load [region].html into the main #content div
      // var region = location.hash.toString() || '#first';
      // $('#content').load(region.slice(1) + '.html')
      
    });
    
  })(jQuery);



  
// // Fucntion for toggle-affect1/2/3 checkbox for all input id=weakness & critical_rate & critical_damage
document.getElementById('toggle-affect1').addEventListener('change', function() {
  var affectInput = document.getElementById('affect-input1');
  if (this.checked) {
      affectInput.classList.remove('hidden');
  } else {
      affectInput.classList.add('hidden');
  }
});

document.getElementById('toggle-affect2').addEventListener('change', function() {
  var affectInput = document.getElementById('affect-input2');
  if (this.checked) {
      affectInput.classList.remove('hidden');
  } else {
      affectInput.classList.add('hidden');
  }
});

document.getElementById('toggle-affect3').addEventListener('change', function() {
  var affectInput = document.getElementById('affect-input3');
  if (this.checked) {
      affectInput.classList.remove('hidden');
  } else {
      affectInput.classList.add('hidden');
  }
});

// // Optionally, initialize the state based on the checkbox status
// document.addEventListener('DOMContentLoaded', function() {
//   var toggleAffect = document.getElementById('toggle-affect');
//   var affectInput = document.getElementById('affect-input');
//   if (toggleAffect.checked) {
//       affectInput.classList.remove('hidden');
//   } else {
//       affectInput.classList.add('hidden');
//   }
// });

// Detect team container selection and update the container color dynamically
// Create color mapping for different partners with low opacity
// 末夜套: yellow
// 永恒套: skyblue
// 神殿套: pink
// 深海套: purple
// 逐光套: green
// 拥雪套: red
const partnerColor = {
  "末夜套": "rgba(255, 255, 0, 0.3)",
  "永恒套": "rgba(0, 191, 255, 0.3)", // "skyblue
  "神殿套": "rgba(255, 192, 203, 0.3)",
  "深海套": "rgba(128, 0, 128, 0.3)",
  "逐光套": "rgba(0, 128, 0, 0.3)",
  "拥雪套": "rgba(255, 0, 0, 0.3)"
};

function updateContainerColor(partnerSelect, teamNum) {
  var container = document.querySelector('.team' + teamNum);
  var partner = partnerSelect.value;
  container.style.backgroundColor = partnerColor[partner];
}

document.addEventListener("DOMContentLoaded", function() {
  // Get the partner select element for team1/2/3
  var partnerSelect1 = document.querySelector('.partner-select1');
  var partnerSelect2 = document.querySelector('.partner-select2');
  var partnerSelect3 = document.querySelector('.partner-select3');

  // Add an event listener to detect changes
  partnerSelect1.addEventListener('change', function() {
    updateContainerColor(partnerSelect1, 1);
  });
  partnerSelect2.addEventListener('change', function() {
    updateContainerColor(partnerSelect2, 2);
  });
  partnerSelect3.addEventListener('change', function() {
    updateContainerColor(partnerSelect3, 3);
  });
});