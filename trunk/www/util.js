function getSelectedOptions(select) {
   for (var i = 0; i  < select.options.length; i++) {
       if(select.options[i].selected ) {
            return select.options[i];
       }
   }
   return null;
}

function setOptionsToSelected(select, text) {
   for (var i = 0; i  < select.options.length; i++) {
       if(select.options[i].text == text ) {
			select.options[i].selected = true;
       }
   }
}