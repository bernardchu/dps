function showSubNav (id) {
  subnavs = document.getElementById('subnav').children;
  
  for (var i = 0; i < subnavs.length; i++) {
    subnavs[i].setAttribute('class', 'hidden');
  }
  
  selected_nav = document.getElementById(id);
  if (selected_nav) {
    selected_nav.setAttribute('class', '');
  }
}

function swapImage(image) {
  var img = document.getElementById('bio_pic');
  
  var firstChild = img.children.item(0);
  if (firstChild.tagName != "IMG") {
    img.removeChild(firstChild);
  
    var new_img = document.createElement('img');
    new_img.setAttribute('src', image);
    new_img.setAttribute('width', '500');
    img.appendChild(new_img);
  } else {
    firstChild.setAttribute('src', image);
  //img.firstElementChild.setAttribute('src', image);
  }
  
  
}

function swapVideo(video) {
  var img = document.getElementById('bio_pic');
  var firstChild = img.children.item(0);
  
  img.removeChild(firstChild);
  //var video_node = document.createElement('<div style="width:600; height:200;background-color:blue;">www.java2s.com</div>');
  //var iframe = '<iframe class="youtube-player" type="text/html" width="500" height="400" src="' + video + '" frameborder="0"></iframe>';
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', video);
  iframe.setAttribute('width', '500');
  iframe.setAttribute('height', '400');
  
  //var video_node = document.createElement(iframe);
  img.appendChild(iframe);
  //<iframe class="youtube-player" type="text/html" width="640" height="385" src="http://www.youtube.com/embed/VIDEO_ID" frameborder="0">
//</iframe>
}

function get_form_validation(formName) {
  if (formName == 'application') {
    return [
      { dropdown: 'read_intro', index: 1, error: 'Please read the instructions and agree before continuing' },
      'dog_name',
      { dropdown: 'read_bio', index: 1, error: 'Please read the whole bio before continuing' },
      'why_this_bio',
      'applicant_name',
      'address',
      { fields: ['city', 'state', 'zip'], required: 'all', error: 'City, State & Zip are required' },
      { fields: ['home_phone', 'cell_phone', 'work_phone'], error: 'Enter at least one phone number' },
      { email: 'email_address' },
      { dropdown: 'head_of_household', index: 1, error: 'Only the head of household can submit' },
      { fields: ['pets_breed_0', 'pets_breed_1', 'pets_breed_2', 'pets_breed_3', 'pets_breed_4', 'pet_history' ],
      error: 'Animal experience history is required', errorField: 'pet_history' },
      'num_adults', 'adult_ages', 'family_relationship',
      'num_children', 'children_ages',
      { dropdown: 'all_agreed', index: 1, error: 'Sumbit only when everyone is ready' },
      { dropdown: 'planned_vacation', error: 'Select YES or NO' },
      { dropdown: 'adopt_immediately', error: 'Select YES or NO' },
      { dropdown: 'available_next_adoption', error: 'Select an answer' },
      { dropdown: 'home_during_day', error: 'Select YES or NO'},
      'hours_alone',
      { dropdown: 'home_pet_will_be', error: 'Select an answer'},
      { dropdown: 'not_home_pet_will_be', error: 'Select an answer'},
      'pet_sleep',
      { dropdown: 'type_home', error: 'Select an answer'},
      { dropdown: 'own_or_rent', error: 'Select an answer'},
      'moving',
      { dropdown: 'fenced_yard', error: 'Select an answer'},
      { dropdown: 'fence_type', error: 'Select an answer'},
      'fence_height',
      { dropdown: 'pool', error: 'Select an answer'},
      'where_obedience', 'where_been_obedience',
      'vet_info',
      { dropdown: 'willing_to_housebreak', error: 'Select YES or NO'},
      { dropdown: 'unwilling_to_homecheck', error: 'Select YES or NO'},
      { dropdown: 'read_training', index: 1, error: 'Please read the instructions and agree before continuing' },
      'chewing', 'digging', 'barking', 'housebreaking',
      'why_this_dog',
      { dropdown: 'given_up_pet', error: 'Select YES or NO'},
      'sick_pet'
    ];
  } else if (formName == 'contact') {
    return [
      'name', 'phone', 
      { email: 'email'},
      { dropdown: 'subject', error: 'Please select a subject' },
      'comment',
      'captcha'
    ];
  } else if (formName == 'rehome') {
    return [
      'applicant_name', 'address',
      { fields: ['city', 'state', 'zip'], required: 'all', error: 'City, State & Zip are required' },
      { fields: ['home_phone', 'cell_phone', 'work_phone'], error: 'Enter at least one phone number' },
      { email: 'email_address'},
      'dog_name', 'yours_or_found', 'how_long_had_dog', 'breed', 'purebred', 'age', 'sex', 'colors', 'coat_length', 'weight',
      'housebroken', 'crate_trained', 'inside_outside', 'get_along_dogs', 'get_along_cats', 'young_children', 'older_children',
      'leash', 'left_alone', 'hours_alone', 'barker', 'digger', 'afraid', 'car', 'training',
      'bit_animal', 'bit_person',
      'dog_origin',
      'altered', 'microchipped', 'up_to_date', 'fecal_test', 'heartworm', 'flea_prevention',
      'vet_info', 'vet_visit', 'paperwork', 'medications', 'health',
      'donation', 'how_long_stay'
    ];
  } else if (formName == 'volunteer_application') {
    return [ 'name', 
    { email: 'email_address'}, 'age', 'experience_with_dogs', 'why_volunteer',
    'planned_attendance', 'cleaning_up'];
  } else if (formName == 'cat_application') {
    return [
      'cat_name',
      { dropdown: 'read_bio', index: 1, error: 'Please read the whole bio before continuing' },
      { fields: ['city', 'state', 'zip'], required: 'all', error: 'City, State & Zip are required' },
      { fields: ['home_phone', 'cell_phone', 'work_phone'], error: 'Enter at least one phone number' },
      { email: 'email_address'},
      { dropdown: 'head_of_household', index: 1, error: 'Only the head of household can submit' },
      { fields: ['pets_breed_0', 'pets_breed_1', 'pets_breed_2', 'pets_breed_3', 'pets_breed_4', 'pet_history' ],
      error: 'Animal experience history is required', errorField: 'pet_history' },
      'num_adults', 'adult_ages', 'family_relationship',
      'num_children', 'children_ages', 'expecting_children', 'who_will_be_responsible', 'fifteen_years',
      'allergies', 
      'type_home', 'own_or_rent', 'home_visit',
      'home_allowed', 'litter_box', 'sleep', 'indoor_outdoor',
      'declaw', 'vet_info', 'cover_costs', 'expense_limit',
      'claw_drapes', 'unacceptable_behavior', 'adjustment_time',
      'if_move', 'if_relationship', 'if_allergic', 'if_travel',
      'give_up_pet_where',
      'given_up_pet'
    ];
  } else if (formName == 'foster_application') {
    return [
      'applicant_name',
      'address',
      { fields: ['city', 'state', 'zip'], required: 'all', error: 'City, State & Zip are required' },
      'phone_number',
      { email: 'email_address'}, 
      'email_freq',
      { dropdown: 'head_of_household', index: 1, error: 'Only the head of household can submit' },
      { fields: ['pets_breed_0', 'pets_breed_1', 'pets_breed_2', 'pets_breed_3', 'pets_breed_4', 'pet_history' ],
      error: 'Animal experience history is required', errorField: 'pet_history' },
      'num_adults', 'adult_ages', 'family_relationship',
      'num_children', 'children_ages',
      { dropdown: 'all_agreed', index: 1, error: 'Sumbit only when everyone is ready' },
      { dropdown: 'planned_vacation', error: 'Select YES or NO' },
      { dropdown: 'foster_immediately', error: 'Select YES or NO' },
      { dropdown: 'allergies', error: 'Select YES or NO' },
      { dropdown: 'home_during_day', error: 'Select YES or NO'},
      'hours_alone',
      { dropdown: 'home_pet_will_be', error: 'Select an answer'},
      { dropdown: 'not_home_pet_will_be', error: 'Select an answer'},
      'pet_sleep',
      { dropdown: 'type_home', error: 'Select an answer'},
      { dropdown: 'own_or_rent', error: 'Select an answer'},
      { dropdown: 'fenced_yard', error: 'Select an answer'},
      { dropdown: 'fence_type', error: 'Select an answer'},
      'fence_height',
      { dropdown: 'pool', error: 'Select an answer'},
      { dropdown: 'willing_to_housebreak', error: 'Select YES or NO'},
      'chewing', 'digging', 'barking', 'housebreaking',
      { dropdown: 'given_up_pet', error: 'Select YES or NO'},
      'medication', 'litter', 'pregnant_mom', 'large_or_small', 'breeds',
      'experiences', 
      'referer'
    ];
  }
  
}


function validate_form(formName) {
  var form = document.forms[formName];

  var required_fields = get_form_validation(formName);
  
  firstError = null;
  validForm = true;
  
  for (var i = 0; i < required_fields.length; i++) {
    var field = required_fields[i];
    if (field.fields) {
      var filled = 0;
      var fields = field.fields;
      var siblings = [];
      for (var j = 0; j < fields.length; j++) {
        siblings[j] = form[fields[j]];
        if (form[fields[j]].value) {
          filled++;
        }
      }
      if (filled <= 0 || (field.required && filled < fields.length)) {
        for (j = 0; j < fields.length; j++) {
          var error = '';
          var errorField = field.errorField || fields[0];
          if (fields[j] == errorField) {
            error = field.error;
          }
          if (!form[fields[j]].value) {
            writeError(form[fields[j]], error, 'error_group', 'error_msg_group', siblings);
          }
        }
      }
    } else if (field.dropdown) {
      if (field.index && form[field.dropdown].selectedIndex != field.index) {
        writeError(form[field.dropdown], field.error);
      } else if (!field.index && form[field.dropdown].selectedIndex <= 0) {
        writeError(form[field.dropdown], field.error);
      }
    } else if (field.email) {
      if(!form[field.email].value) {
        writeError(form[field.email], 'This field is required');
      } else {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(!re.test(form[field.email].value)) {
          writeError(form[field.email], 'Please enter a valid email address');
        }
      }
    } else {
      if(!form[field].value) {
        writeError(form[field], 'This field is required');
      }
    }
  }

  if (firstError) {
    firstError.focus();
  }   
  
  if (validForm) {
  console.log('true');
    return true;
  } else {
  console.log('false1');
    return false;
  }
  
  
  console.log('false2');
  return false;
  }

function writeError(obj, message, errorClass, msgClass, siblings) {
  validForm = false;
  if (obj.hasError) {
    if (!firstError) {
      firstError = obj;
    }
    return;
  }

  obj.className = errorClass || 'error';
  obj.onchange = function() { removeError(obj, siblings) };
  var sp = document.createElement('span');
  sp.className = msgClass || 'error_msg';
  sp.appendChild(document.createTextNode(' ' + message));
  obj.parentNode.appendChild(sp);
  obj.hasError = sp;

  if (!firstError) {
    firstError = obj;
  }

}

function removeError(obj, siblings)
{
  if (!obj.hasError) {
    return;
  }
  
  obj.className = obj.className.substring(0,obj.className.lastIndexOf(' '));
  obj.parentNode.removeChild(obj.hasError);
  obj.hasError = null;
  obj.onchange = null;
  
  if (siblings) {
    for (var i = 0; i < siblings.length; i++) {
  