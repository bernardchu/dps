export const RescueGroupsV2ExampleResponse: string = `function cPets(objName) {
  
    this.name = objName;
    window[objName] = this;
  
    this.petFields = new Array();
    this.petFields['animalID'] = Array();
    this.petFields['animalID']['index'] = 0;
    this.petFields['animalID']['name'] = 'Animal ID';
    this.petFields['status'] = Array();
    this.petFields['status']['index'] = 1;
    this.petFields['status']['name'] = 'Status';
    this.petFields['lastUpdated'] = Array();
    this.petFields['lastUpdated']['index'] = 2;
    this.petFields['lastUpdated']['name'] = 'Last Update';
    this.petFields['rescueID'] = Array();
    this.petFields['rescueID']['index'] = 3;
    this.petFields['rescueID']['name'] = 'Rescue ID';
    this.petFields['name'] = Array();
    this.petFields['name']['index'] = 4;
    this.petFields['name']['name'] = 'Name';
    this.petFields['summary'] = Array();
    this.petFields['summary']['index'] = 5;
    this.petFields['summary']['name'] = 'Summary';
    this.petFields['species'] = Array();
    this.petFields['species']['index'] = 6;
    this.petFields['species']['name'] = 'Species';
    this.petFields['breed'] = Array();
    this.petFields['breed']['index'] = 7;
    this.petFields['breed']['name'] = 'Breed';
    this.petFields['primaryBreed'] = Array();
    this.petFields['primaryBreed']['index'] = 8;
    this.petFields['primaryBreed']['name'] = 'Primary Breed';
    this.petFields['secondaryBreed'] = Array();
    this.petFields['secondaryBreed']['index'] = 9;
    this.petFields['secondaryBreed']['name'] = 'Secondary Breed';
    this.petFields['sex'] = Array();
    this.petFields['sex']['index'] = 10;
    this.petFields['sex']['name'] = 'Gender';
    this.petFields['mixed'] = Array();
    this.petFields['mixed']['index'] = 11;
    this.petFields['mixed']['name'] = 'Mixed';
    this.petFields['dogs'] = Array();
    this.petFields['dogs']['index'] = 12;
    this.petFields['dogs']['name'] = 'Good with Dogs';
    this.petFields['cats'] = Array();
    this.petFields['cats']['index'] = 13;
    this.petFields['cats']['name'] = 'Good with Cats';
    this.petFields['kids'] = Array();
    this.petFields['kids']['index'] = 14;
    this.petFields['kids']['name'] = 'Good with Kids';
    this.petFields['declawed'] = Array();
    this.petFields['declawed']['index'] = 15;
    this.petFields['declawed']['name'] = 'Declawed';
    this.petFields['housetrained'] = Array();
    this.petFields['housetrained']['index'] = 16;
    this.petFields['housetrained']['name'] = 'House Trained';
    this.petFields['age'] = Array();
    this.petFields['age']['index'] = 17;
    this.petFields['age']['name'] = 'Age';
    this.petFields['specialNeeds'] = Array();
    this.petFields['specialNeeds']['index'] = 18;
    this.petFields['specialNeeds']['name'] = 'Special Needs';
    this.petFields['altered'] = Array();
    this.petFields['altered']['index'] = 19;
    this.petFields['altered']['name'] = 'Altered';
    this.petFields['size'] = Array();
    this.petFields['size']['index'] = 20;
    this.petFields['size']['name'] = 'Size';
    this.petFields['uptodate'] = Array();
    this.petFields['uptodate']['index'] = 21;
    this.petFields['uptodate']['name'] = 'Up-to-date';
    this.petFields['color'] = Array();
    this.petFields['color']['index'] = 22;
    this.petFields['color']['name'] = 'Color';
    this.petFields['coatLength'] = Array();
    this.petFields['coatLength']['index'] = 23;
    this.petFields['coatLength']['name'] = 'Coat Length';
    this.petFields['pattern'] = Array();
    this.petFields['pattern']['index'] = 24;
    this.petFields['pattern']['name'] = 'Pattern';
    this.petFields['courtesy'] = Array();
    this.petFields['courtesy']['index'] = 25;
    this.petFields['courtesy']['name'] = 'Courtesy Listing';
    this.petFields['found'] = Array();
    this.petFields['found']['index'] = 26;
    this.petFields['found']['name'] = 'Found';
    this.petFields['foundDate'] = Array();
    this.petFields['foundDate']['index'] = 27;
    this.petFields['foundDate']['name'] = 'Found Date';
    this.petFields['foundZipcode'] = Array();
    this.petFields['foundZipcode']['index'] = 28;
    this.petFields['foundZipcode']['name'] = 'Found Zip Code';
    this.petFields['killDate'] = Array();
    this.petFields['killDate']['index'] = 29;
    this.petFields['killDate']['name'] = 'Euth Date';
    this.petFields['killReason'] = Array();
    this.petFields['killReason']['index'] = 30;
    this.petFields['killReason']['name'] = 'Euth Reason';
    this.petFields['description'] = Array();
    this.petFields['description']['index'] = 31;
    this.petFields['description']['name'] = 'Description';
    this.petFields['pic1'] = Array();
    this.petFields['pic1']['index'] = 32;
    this.petFields['pic1']['name'] = 'Picture';
    this.petFields['pictmn1'] = Array();
    this.petFields['pictmn1']['index'] = 33;
    this.petFields['pictmn1']['name'] = 'Thumbnail';
    this.petFields['pic2'] = Array();
    this.petFields['pic2']['index'] = 34;
    this.petFields['pic2']['name'] = 'Picture';
    this.petFields['pictmn2'] = Array();
    this.petFields['pictmn2']['index'] = 35;
    this.petFields['pictmn2']['name'] = 'Thumbnail';
    this.petFields['pic3'] = Array();
    this.petFields['pic3']['index'] = 36;
    this.petFields['pic3']['name'] = 'Picture';
    this.petFields['pictmn3'] = Array();
    this.petFields['pictmn3']['index'] = 37;
    this.petFields['pictmn3']['name'] = 'Thumbnail';
    this.petFields['pic4'] = Array();
    this.petFields['pic4']['index'] = 38;
    this.petFields['pic4']['name'] = 'Picture';
    this.petFields['pictmn4'] = Array();
    this.petFields['pictmn4']['index'] = 39;
    this.petFields['pictmn4']['name'] = 'Thumbnail';
    this.petFields['video1'] = Array();
    this.petFields['video1']['index'] = 40;
    this.petFields['video1']['name'] = 'Video';
    this.petFields['contactName'] = Array();
    this.petFields['contactName']['index'] = 41;
    this.petFields['contactName']['name'] = 'Contact Name';
    this.petFields['contactEmail'] = Array();
    this.petFields['contactEmail']['index'] = 42;
    this.petFields['contactEmail']['name'] = 'Contact Email';
    this.petFields['contactCellPhone'] = Array();
    this.petFields['contactCellPhone']['index'] = 43;
    this.petFields['contactCellPhone']['name'] = 'Contact Cell Phone';
    this.petFields['contactHomePhone'] = Array();
    this.petFields['contactHomePhone']['index'] = 44;
    this.petFields['contactHomePhone']['name'] = 'Contact Home Phone';
    this.petFields['locationZipcode'] = Array();
    this.petFields['locationZipcode']['index'] = 45;
    this.petFields['locationZipcode']['name'] = 'Location Zipcode';
    this.petFields['locationName'] = Array();
    this.petFields['locationName']['index'] = 46;
    this.petFields['locationName']['name'] = 'Location Name';
    this.petFields['detailLink'] = Array();
    this.petFields['detailLink']['index'] = 47;
    this.petFields['detailLink']['name'] = 'Name';
    this.petFields['created'] = Array();
    this.petFields['created']['index'] = 48;
    this.petFields['created']['name'] = 'Created';
  
    this.mode = '';
    this.pet = new Array();
    this.listId = 'rgPetContainer';
    this.detailId = 'rgPetDetails';
    this.fields = 'name,breed,color,species,age,thumbnail';
    this.orderby = this.petFields['name']['index'];
    this.order = 'asc';
    this.enableSearch = true;
    this.smartBrowse = true;
    this.sortbyField = 'name';
    this.sortbyOrder = 'asc';
    this.hideEmptyFields = false;
    this.detailTemplate = 'template1';
    this.detailWidth = '600';
    this.detailHeight = '620';
    this.picMaxWidth = '400';
    this.pictmnMaxWidth = '100';
    this.picSize = 'thumbnail';
    this.paging = true;
    this.perPage = 10;
    this.perRow = 4;
    this.rows = 4;
    this.detailPage = 'popover';
  
    this.buildPets = function() {
    this.pet = [
    ['17388528','Available','2021-12-29 15:47:12','','Astro','','Cat','Turkish Van (short coat)','Turkish Van','','Male','','Yes','Yes','','','Yes','Adult','','Yes','','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Astro is a 4 year old Turkish Van Mix who was one of many cats we rescued from a hoarding situation. Our amazing volunteers have spent countless hours saving and caring for these cats who were in desperate need of help. Its been such a labor of love but the reward of having these wonderful cats find their forever families will be well worth the efforts.</p> <p>Astro was a little shy when he first went to his current foster home but since then he has really blossomed. He has never been shown love in the way he is experiencing it now and he has really started to trust his humans. His foster mom reports in the beginning he was very cautious of her, keeping his distance except during mealtime, but slowly and surely he has now turned into a lap cat. He loves to watch TV on the couch with his foster family and sleeps with his humans in bed at night. He gets along well with other cats and we think he would do fine with a cat savvy dog. If you are looking for a bonded pair, he and Squawk could be adopted together. They are currently in the same foster home and love playing and lounging on the cat tree together for hours on end. All Astor needs is a family to call his own!</p> <p>He has been neutered, tested negative for FIV/FeLV, vaccinated, dewormed, flea treatment applied and microchipped. His adoption fee is $100. Apply to adopt this handsome guy today!</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_500x721.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_100x144.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473655_500x485.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473655_100x97.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84595485_500x386.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84595485_100x77.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473656_433x504.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473656_100x116.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Astro','2021-10-27 16:54:56'],
    ['17378283','Available','2021-12-29 15:47:28','','Billie','','Cat','Calico / Domestic Long Hair / Mixed (long coat)','Calico','Domestic Long Hair','Female','Yes','Yes','','Yes','','Yes','','','Yes','','Yes','','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Billie is a 7 year old longhaired beautiful calico girl. She was relinquished to our rescue group when her previous owner passed away. She is a wonderful kitty. Besides her stunning looks she is a talker. She will converse with you about everything. She has a sweet and engaging personality.</p> <p>She had been living with two other cats but we think she would thrive in a home where she is the only one. We think she would do fine with older kids or a cat savvy dog. She just needs to be the queen cat of the house. She has a long coat, so it would be a plus for her new person or family to have experience with longer haired breeds so that she will get her regular brushings to maintain her lovely fur. If you are looking for a kitty that wants to hang out with you, whether it be on the couch, in bed or on your lap, Billie is the one. She hopes her forever family finds her soon so she can start the next chapter of her life.</p> <p>She has been spayed, Tested negative for FIV/FeLV, vaccinated, dewormed, flea treatment applied and microchipped. Her adoption fee is $100. Apply to adopt this sweetheart today!</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17378/17378283/84018249_500x551.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17378/17378283/84018249_100x110.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17378/17378283/84023958_500x279.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17378/17378283/84023958_100x55.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17378/17378283/84018250_500x531.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17378/17378283/84018250_100x106.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17378/17378283/84023959_500x511.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17378/17378283/84023959_100x102.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Billie','2021-10-24 18:28:50'],
    ['17694860','Available','2022-01-30 20:50:46','','Breakfast: Eggs Benedict','','Dog','Scottish Terrier Scottie / Miniature Schnauzer / Mixed (long coat)','Scottish Terrier Scottie','Miniature Schnauzer','Male','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','Black with White','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $750</p> <p>&nbsp;</p> <p>The Breakfast Club is a litter of Scottie-Schnauzer mixes who are simply adorable! They are about 10-12 weeks old. They\'ve been fostered in one of our most experienced foster homes and are a social, fun-loving bunch. Here is their daily routine:</p> <p>&nbsp;</p> <p>The pups sleep in their own &ldquo;puppy room&rdquo; where they have access to a crate, beds, and pee pad area. They don\'t get locked in their crate but will often choose to sleep in it anyway. They wake up on their own between 7:30 and 8 to potty, and then go back to sleep until around 8:30- 8:45 or until I come in. After breakfast they run around the yard for 30-40 minutes then have some calmer playtime inside before they nap at around 10. Mornings are when they have the most energy and like to chase each other around the yard. They love exploring the yard and climbing through bushes. Their routine varies but they usually get about three 30 minute play sessions in the yard followed by lots of naps and cuddles. They usually have one last play session around 9:30 and then basically put themselves to bed at 10.</p> <p>&nbsp;</p> <p>Benny is a little charmer! Everyone who meets him falls in love with him. He is the most confident of the litter and is always the first to come running up to say hi. He can still be nervous in new situations but he is very curious and quick to overcome his fears. Benny loves toys of all shapes and sizes. When the pups were first introduced to the toy basket Benny pulled out every single one and brought them all into the crate until there was no room left for him or his siblings. He loves to fetch balls no matter what size. Even if he is in the middle of a nap he will jump up to chase a ball. He is happy playing with his siblings or chewing on toys by himself. He is a little love bug and wants alllll of the attention. When the pups are in the yard exploring he will stop in the middle of playing to say a quick hello to me before re-joining the action.</p> <p>&nbsp;</p> <p>The puppies are only an option for a home that has had a dog in the last 5 years. If there are children in the home, they should be over the age of 8.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694860/85956997_500x374.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694860/85956997_100x74.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694860/85957023_500x375.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694860/85957023_100x75.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694860/85957048_500x375.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694860/85957048_100x75.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694860/85957097_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694860/85957097_100x133.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Breakfast: Eggs Benedict','2022-01-26 15:35:26'],
    ['17694352','Available','2022-01-30 20:51:14','','Breakfast: Frittata','','Dog','Miniature Schnauzer / Scottish Terrier Scottie / Mixed (short coat)','Miniature Schnauzer','Scottish Terrier Scottie','Male','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','Black with White','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $750</p> <p>The Breakfast Club is a litter of Scottie-Schnauzer mixes who are simply adorable! They are about 10-12 weeks old.They\'ve been fostered in one of our most experienced foster homes and are a social, fun-loving bunch. Here is their daily routine:</p> <p>The pups sleep in their own &ldquo;puppy room&rdquo; where they have access to a crate, beds, and pee pad area. They don\'t get locked in their crate but will often choose to sleep in it anyway. They wake up on their own between 7:30 and 8 to potty, and then go back to sleep until around 8:30- 8:45 or until I come in. After breakfast they run around the yard for 30-40 minutes then have some calmer playtime inside before they nap at around 10. Mornings are when they have the most energy and like to chase each other around the yard. They love exploring the yard and climbing through bushes. Their routine varies but they usually get about three 30 minute play sessions in the yard followed by lots of naps and cuddles. They usually have one last play session around 9:30 and then basically put themselves to bed at 10.</p> <p>Frittata is our little shy guy. He really wants attention and is a real sweetheart once he feels safe, but he needs a lot of confidence-boosting. He is so eager to get pets and love but he scares easily when people reach towards him. He tends to keep his distance so he can\'t be picked up, but he always wags his tail for people and loves to lick fingers. He feels safest in his crate, so whenever he wants pets he runs to his crate and wags his tail saying &ldquo;ok, pet me now!&rdquo; In his crate he feels totally secure getting lots of love and kisses and will roll over for belly rubs. He gets scared when people pick him up but is actually quite a cuddle. He gets regular one on one time in my bed where he gets to chew a bully stick while getting pets. At first he was nervous being away from his siblings, but now he loves it and is getting more and more comfortable each day. His favorite thing is playtime. He loves all toys, the more the better, and likes to play &ldquo;keep away&rdquo; with his siblings where he gets everyone chasing him. He definitely prefers playing with a friend to playing solo. He is very quiet most of the time, but is pretty vocal when he plays. He also gets great &ldquo;zoomies&rdquo; and sprints around the whole yard.&nbsp;</p> <p>The puppies are only an option for a home that has had a dog in the last 5 years. If there are children in the home, they should be over the age of 8.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694352/85954580_500x375.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694352/85954580_100x75.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694352/85954591_500x375.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694352/85954591_100x75.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694352/85954607_500x375.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694352/85954607_100x75.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694352/85954621_500x374.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694352/85954621_100x74.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Breakfast: Frittata','2022-01-26 13:45:25'],
    ['17694335','Available','2022-01-30 20:51:52','','Breakfast: Omelet','','Dog','Miniature Schnauzer / Scottish Terrier Scottie / Mixed (medium coat)','Miniature Schnauzer','Scottish Terrier Scottie','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','Black','Medium','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $750</p> <p>The Breakfast Club is a litter of Scottie-Schnauzer mixes who are simply adorable! They are about 10-12 weeks old.They\'ve been fostered in one of our most experienced foster homes and are a social, fun-loving bunch. Here is their daily routine:</p> <p>The pups sleep in their own &ldquo;puppy room&rdquo; where they have access to a crate, beds, and pee pad area. They don\'t get locked in their crate but will often choose to sleep in it anyway. They wake up on their own between 7:30 and 8 to potty, and then go back to sleep until around 8:30- 8:45 or until I come in. After breakfast they run around the yard for 30-40 minutes then have some calmer playtime inside before they nap at around 10. Mornings are when they have the most energy and like to chase each other around the yard. They love exploring the yard and climbing through bushes. Their routine varies but they usually get about three 30 minute play sessions in the yard followed by lots of naps and cuddles. They usually have one last play session around 9:30 and then basically put themselves to bed at 10.</p> <p>Omelet is the most independent of the group. She loves to explore new places and will often disappear into the yard all by herself. She always seems to turn up hanging out in some bush or secret corner. She is also very mellow for a puppy. She will play with her siblings or toys for a few minutes, but often she prefers to sit on the sidelines and watch. On several occasions, I have been convinced she has gone missing from the yard only to find that she has gone back inside to nap in the crate. She finds the cutest positions to sleep. She is regularly found cuddled with a toy or sleeping on her back in the most precious way. She is very submissive, especially with new people, and will often hide for a minute or roll onto her back. She has grown to really like cuddles but still gets a little nervous being picked up. Once she is in my lap she is very happy to be there. She loves when people talk to her and her whole body will wiggle with excitement.</p> <p>The puppies are only an option for a home that has had a dog in the last 5 years. If there are children in the home, they should be over the age of 8.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694335/85954381_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694335/85954381_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694335/85954361_500x375.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694335/85954361_100x75.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694335/85954367_500x374.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694335/85954367_100x74.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694335/85954378_500x375.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694335/85954378_100x75.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Breakfast: Omelet','2022-01-26 13:36:24'],
    ['17694365','Available','2022-01-30 20:53:15','','Breakfast: Pancake','','Dog','Miniature Schnauzer / Scottish Terrier Scottie / Mixed (medium coat)','Miniature Schnauzer','Scottish Terrier Scottie','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','Black with White','Medium','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $750</p> <p>The Breakfast Club is a litter of Scottie-Schnauzer mixes who are simply adorable! They are about 10-12 weeks old.They\'ve been fostered in one of our most experienced foster homes and are a social, fun-loving bunch. Here is their daily routine:</p> <p>The pups sleep in their own &ldquo;puppy room&rdquo; where they have access to a crate, beds, and pee pad area. They don\'t get locked in their crate but will often choose to sleep in it anyway. They wake up on their own between 7:30 and 8 to potty, and then go back to sleep until around 8:30- 8:45 or until I come in. After breakfast they run around the yard for 30-40 minutes then have some calmer playtime inside before they nap at around 10. Mornings are when they have the most energy and like to chase each other around the yard. They love exploring the yard and climbing through bushes. Their routine varies but they usually get about three 30 minute play sessions in the yard followed by lots of naps and cuddles. They usually have one last play session around 9:30 and then basically put themselves to bed at 10.</p> <p>Pancake is a feisty, wiggly little girl who will shower you with kisses. Once she feels comfortable with someone, she loves to climb into their lap to give kisses and get belly rubs. She loves toys and playing with her siblings, especially a good game of tug of war. She is a big attention lover and will often choose to get pets instead of playing. Pancake might be small but she has attitude! This sassy little girl bosses around all her siblings and will not put up with any of their nonsense! Despite thinking she is the toughest girl around, she always likes to have company and follows her person or her siblings everywhere. She is not one to wander off on her own. Of all the puppies she gets the most nervous being alone. She loooves food and is always the first one to come sprinting over when she hears the treat bag. She is very food motivated and ready to learn!</p> <p>The puppies are only an option for a home that has had a dog in the last 5 years. If there are children in the home, they should be over the age of 8.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694365/85954738_500x374.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694365/85954738_100x74.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694365/85954839_500x375.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694365/85954839_100x75.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694365/85954851_500x374.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694365/85954851_100x74.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694365/85954859_500x374.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17694/17694365/85954859_100x74.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Breakfast: Pancake','2022-01-26 13:56:07'],
    ['17710355','Available','2022-02-01 14:56:55','','Cheesecake','','Dog','Cairn Terrier / Mixed (medium coat)','Cairn Terrier','','Male','Yes','Yes','','Yes','','','Adult','','Yes','Small','Yes','','Medium','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $700</p> <p>Cheesecake is one of the 22 dogs we rescued from a hoarding situation a few weeks ago. He is about 1 year old. He\'s done really well in his foster home and is ready to find his forever home!&nbsp; His foster has great things to say about how well he has adjusted. Here\'s her report!</p> <p>Every morning, roughly at 7am, starts with a hello and wag of his tail. He and his foster-siblings go outside to go potty and then come in for breakfast - with his tail wagging and eye-contact to make sure he connects. He loves to play, train for treats and never barks. He is always observing what is happening - whether it be cleaning, cooking, kids watching tv or doing school work. He knows his comfort level and if needed, he will move under a couch, bed or table. He is not afraid of the vacuum, kitchen sounds or the mailman. After a few naps through out the day and lots of exploration in the house and yard, he is ready for dinner, more play time and bed by 9 in his crate.</p> <p>&nbsp;</p> <p>When Cheesecake arrived to our house he was shut down and reticent to leave his crate but had an easy-going demeanor. His eyes showed that he wanted to trust but it was on his own terms - so we followed his lead, treated him a lot and watched this sweet soul emerge. He was cautious with letting us touch or pet him, but he was polite in communicating his nervousness. He is easy going, sweet and so incredibly happy. His tail wags all day long and loves to be loved. He enjoys treats as much as a positive affirmation. He likes to be in the same room/proximity as us but he is never under our feet and appreciates his space. He approaches us when he is comfortable and we respect that. He is a cuddle and snuggle and wants to be with us but not in a velcro type of manner.&nbsp;</p> <p>He eats well, sleeps fine, is potty trained, doesn&rsquo;t bark, wags his tail all day. He is still cautious and slightly reticent. He does not jump on people. He is food motivated and learning to walk on a leash. He can do sit and training has been most effective by him mirroring what our other dogs are doing. He can be left in a crate while we are gone and I feel comfortable with him being alone in the house (he&rsquo;s potty trained, does not chew, etc).</p> <p>Cheesecake\'s biggest challenge is leash walking. We imagine, given his background, that he had never been on a leash before. He\'s slowly learning; having a yard is very helpful for him because he can do his business outdoors without worrying about leash-walking.</p> <p>Cheesecake is only an option for a home that has had a dog in the last 5 years. If there are children in the home, they should be over the age of 8.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710355/86063521_500x618.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710355/86063521_100x123.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710355/86063522_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710355/86063522_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710355/86063542_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710355/86063542_100x133.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Cheesecake','2022-01-30 14:19:11'],
    ['17698880','Available','2022-01-29 16:02:22','','Chocolate Mousse','','Dog','Cairn Terrier / Schnauzer / Mixed (medium coat)','Cairn Terrier','Schnauzer','Male','Yes','Yes','','Yes','','','Adult','','Yes','Medium','Yes','','Medium','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $700</p> <p>Chocolate Mousse is a 2-3 year old mini Irish Wolfhound mix who we rescued from a hoarding situation along with his 21 other friends. He\'s a perfect case of \"one of these things is not like the other...\"; every other pup was under 15 lbs, and this guy is closer to 35! Mousse was pretty shut down when we first met him, but it only took a couple of days for his true friendly nature to shine through. He can still be a bit nervous meeting new folks but bonds quickly and is a lover boy!</p> <p>Here is his routine in his foster home:&nbsp;Mousse usually is up by 7 (or whenever the first person gets up) and is taken outside to go pee. We usually feed him then, or he can wait a bit before eating. Mousse loves to play and be with his people and most of the day he hangs out near his foster mom. He goes for two walks during the day. He loves to hang out in the yard exploring or lying in the son, but so far does not like to go by himself. He is learning to be a house dog, and loves jumping around and playing with toys. He seems very puppyish at times. Mousse is fed 3 times a day (at 7 am, noon and around 6) as he was underweight when he arrived. He goes to sleep around 11 pm and sleeps in his foster parent&rsquo;s bedroom on the floor.</p> <p>When he arrived, Mousse was definitely scared and afraid of sounds and people near him (but was fine with people scratching under his chin). He immediately bonded with his foster mom and doesn\'t like to be far from her, but he will go to other members of the family for a scritch and now likes playing with them. He is timid near strangers. His personality has blossomed and it has been fun to see him learn to be a dog in a home with family. He learned to play with toys, and enjoys going on walks. He is definitely a Velcro dog and likes being with people. He loves the back yard and will explore it and lie in the sun for a while. We have stayed with him when he goes outside so far, but he also doesn\'t like to go outside by himself.</p> <p>Mousse is learning about how to be playful and it&rsquo;s been fun to watch as he learns how to play and enjoy things. He definitely has puppy tendencies and will now chase toys and pounce on them, play tug of war, and likes to chew on bones &ndash; but each of these things took some time for him to figure out. The first bone that he was offered sat untouched for two days before he tried it and now loves them.</p> <p>He can be energetic and playful and likes bounding up and down stairs and can go on very long walks. While he is not allowed on furniture, he is allowed on the bed and likes to jump on and off, and play around. There are also times when he is happy to hang out and sleep.</p> <p>He loves food and drinks lots of water during the day. Mousse is very food motivated and we use his kibble to train him. He will try to counter surf if given a chance. He is a jumper, and jumped on top of his large crate his second day in his foster home.His foster family has been working with him and he knows &lsquo;sit&rsquo;, and sometimes &lsquo;off&rsquo; and &lsquo;leave it&rsquo;.&nbsp;Mousse is a marvelous, cute dog who is having a chance to enjoy life and learn new things. It will be fun to watch him be a dog and grow up!</p> <p>Chocolate Mousse is only an option for a home that has had a dog in the last 5 years. If there are children in the home, they should be over the age of 10.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17698/17698880/85984433_500x699.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17698/17698880/85984433_100x139.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17698/17698880/85984444_500x700.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17698/17698880/85984444_100x140.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17698/17698880/85984449_500x699.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17698/17698880/85984449_100x139.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Chocolate Mousse','2022-01-27 14:46:32'],
    ['17715192','Available','2022-02-01 13:13:30','','Cookies','','Dog','Havanese / Mixed (long coat)','Havanese','','Female','Yes','Yes','Yes','Yes','','','Adult','','Yes','Small','Yes','','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $700</p> <p>Cookies is a 2-3 year old Havanese mix who was rescued from a hoarding situation along with her 21 friends. She\'s petite, weighing just under 10 lbs. Cookies is one of the shyest of the group and will need a special, patient home who will work with her and give her time to come out of her shell. She also thrives in the presence of other dogs, so we will be looking for a home for her with another dog to keep her company.</p> <p>Her foster mom reports that she spent the first day or two hiding but then emerged from her shell a bit and now really enjoys following the foster mom around the house, getting lots of pets and love.&nbsp; She\'s turned into a velcro-dog with a puppy-like energy who frequently tries to engage her foster doggy siblings in play time. She would love to go to a home with a small playful pup who will goof around with her!</p> <p>Cookies is a work in progress. She will need an experienced owner who will work with her on housetraining, leash training, and other doggy basics. She\'s adorable and extremely lovable, which will make all the work worthwhile!</p> <p>Cookies is only an option for home that has had a dog in the last 5 years. If there are children in the home, they need to be over the age of 12.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17715/17715192/86098208_500x547.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17715/17715192/86098208_100x109.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17715/17715192/86098218_500x605.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17715/17715192/86098218_100x121.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17715/17715192/86098222_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17715/17715192/86098222_100x133.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Cookies','2022-01-31 18:14:32'],
    ['17707480','Available','2022-01-29 16:23:05','','Corbin','','Dog','Silky Terrier (long coat)','Silky Terrier','','Male','','Yes','','Yes','','','Adult','','Yes','Small','Yes','','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $750</p> <p>Corbin is a 3 year old Silky Terrier who was surrendered to our rescue when his owner fell on hard times. He has a non-shedding coat that will require regular grooming in order to keep it in tip-top shape. Corbin is a total lover boy. When he first met our volunteer team, he immediately started jumping up on their laps and giving kisses!</p> <p>Here is his routine in his foster home!&nbsp;Corbin sleeps in a crate at night in my bedroom. He goes in voluntarily protests for a few minutes and quickly settles for the night. Immediately upon waking, I take him outside. He completes his \"business\" and we get in a play session. Afterwards, he eats breakfast and we go for a walk. He is crated during the day while I\'m at work. When I return home, we go for a walk, play and have dinner. Typically in bed around 9pm, up by 6am (according to my schedule). He has no problem sleeping in if I do.</p> <p>Corbin is very social. He prefers to stay beside me but will explore the house on his own. He wants to be near his person. He has boundless energy, goes on long walks/hikes and enjoys toys. He will jump into your face for love and attention, so be aware!</p> <p>Corbin is a great little dog! He would flourish in a family who can build his confidence. He definitely needs a family/person to keep him busy as he is super active and enjoys playing and exercise.</p> <p>Corbin is currently fostered with another dog and does well with him. He also previously lived with another dog. He\'s not a nuisance barker in the home but does bark at other dogs while on leash, so his adopter will need to work on this behavior with him.</p> <p>Corbin is only an option for a home that has had a dog in the last 5 years. If there are children in the home, they should be over the age of 8.&nbsp; He will thrive in an active home that engages with him and keeps his little mind busy and working on training!</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707480/86038474_440x443.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707480/86038474_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707480/86038480_354x278.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707480/86038480_100x78.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707480/86038483_304x314.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707480/86038483_100x103.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707480/86038485_264x209.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707480/86038485_100x79.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Corbin','2022-01-29 14:17:05'],
    ['17717005','Available','2022-02-01 02:17:42','','Eclair','','Dog','Miniature Schnauzer / Mixed (medium coat)','Miniature Schnauzer','','Female','Yes','Yes','','Yes','','','Young','','Yes','Small','Yes','','Medium','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $700</p> <p>Eclair is a 1 year old Mini Schnauzer mix who was rescued along with her 21 friends from a hoarding situation.&nbsp; She weighs somewhere in the 15-18 lb range. Like almost all of the dogs from this particular place, Eclair was sweet but terribly shy at first. She\'s making progress in her foster home but will need a patient family to continue this work with her.</p> <p>Here is her routine in her foster!&nbsp;We wake up around 7am and give her food and immediately take her out for a 30 minute walk. She is slowly learning to pee and poop outside during this time. Then she plays with our dog for a while and then takes a long nap during the work hours. We take her out briefly for a short walk during the lunch time when we can. Then, we feed her and take her out around 5-6pm for a longer walk when she sometimes pees. We take her out one last time around 10pm before we go to bed.</p> <p>She was very shy at first but opened up very quickly to humans. She took a little more time with my dog but slowly opened up and they are now very close. She basically stayed in her crate for the first night and she was very scared to explore other places of our house until day 3. She is a big cuddler and snuggler now! She follows me everywhere and wants to sit on top of me all the time. She initially was so scared to go outside and did not walk to walk at all. Now she gets so jumpy and excited when we go out. She is very scared of bigger dogs and starts to bark at them from distance.</p> <p>Eclair was quite shy with the resident 30 lb Aussie in the home at first, but they\'ve since bonded and she loves to play with her. Adopters with a dog in the home should be prepared for it to take a few days or even a couple of weeks for Eclair to settle in and connect with the resident dog. She does like other dogs but can be nervous at first- given where she came from, we can\'t blame her!</p> <p>Eclair will need some more work on leash walking. She still gets nervous and tries to jump into her foster mom\'s lap when she is startled by the sights and sounds of the great outdoors.</p> <p>In the words of her foster mom:&nbsp;\"Eclair just absolutely friendly! She is pretty much a magnet that follows you everywhere. She loves looking at you in the eyes - I almost feel like I can hear her saying \"I love you\" when she looks at me.\"&nbsp; Aw!</p> <p>Eclair is only an option for a home that has had a dog in the last 5 years. If there are children they should be over the age of 10.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17717/17717005/86103847_500x562.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17717/17717005/86103847_100x112.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17717/17717005/86103858_500x607.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17717/17717005/86103858_100x121.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17717/17717005/86103867_500x624.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17717/17717005/86103867_100x124.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Eclair','2022-01-31 20:42:46'],
    ['17659415','Available','2022-01-27 22:40:37','','Flower','','Dog','Shih Tzu (long coat)','Shih Tzu','','Female','','Yes','Yes','Yes','','','Adult','','Yes','Small','Yes','','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $750</p> <p>Flower is a 4-5 year old Shih Tzu who was rescued by our partner rescuers in Korea. She was at the national shelter there and was in terrible shape. Both of her eyes had been injured, she was emaciated and starving. In spite of all that, her gentle and sweet nature shone through!&nbsp; After she was rescued, it was clear that one of her eyes was too damaged to save, so it was removed. Her remaining eye has some scarring, but she can still see out of it and gets around just fine.&nbsp; Her fosters adore her! Here is their report:</p> <p>\"I am up very early so I usually let her out in the backyard by 5:30 AM. She likes to sleep a lot during the day and we take walks or go outside every couple hours for potty breaks. I give her some food in the morning and again in the evening but many times she just grazes whenever she feels like it. Our final walk is about 8 PM.</p> <p>Flower is very sweet and likes to be near her person at all times. Because she only has one eye, she can be startled by sudden movements.&nbsp; She likes to go out on walks but can need a bit of coaxing at first to get moving.She&rsquo;s clearly a smart little dog. Despite there being a rock and a chair holding up the gate at one side, she has figured out how to move both of them to get out! She seems to really love food as any time you go near the refrigerator or the cupboard she is right there by your side.\"</p> <p>Flower is best suited to a quiet, low-key home where there won\'t be too much action to overwhelm her. She is an option for a home with other gentle dogs. She is only an option for a home with prior dog experience. If there are children in the home, they should be over the age of 8.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659415/85730560_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659415/85730560_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659415/85730561_500x565.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659415/85730561_100x113.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659415/85730562_500x494.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659415/85730562_100x98.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Flower','2022-01-17 05:28:22'],
    ['17510094','Available','2022-01-19 18:05:08','','Indy','','Dog','Jindo (Korean) / Mixed (medium coat)','Jindo (Korean)','','Male','Yes','Yes','','Yes','','Yes','Adult','','Yes','Medium','Yes','White','Medium','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption Fee: $550</p> <p>Indy is a 1 year old Jindo mix who weighs 38 lbs. He was a rescue from the Korean meat markets. He has been here in the US for over a month settling and is finally ready to find his forever home. Indy is&nbsp; initially reserved with new people. He is a dog who is almost stoic with strangers. Once he settles in, he is a lover boy with his people. It will take time. He is not a dog who will immediately shower strangers with love, but once he trusts you, he will show his true nature and your patience will truly be rewarded!</p> <p>Indy gets along well with other dogs. He has lived with big and little dogs. He is very playful and enjoys going on long walks. He likes to sniff and smell all the great smells that are out there. He is housetrained.&nbsp;</p> <p>Indy is in a new foster home and here is their report!</p> <p>Indy is now crate-trained. We did a lot of positive conditioning with the crate, so Indy loves the crate now. He doesn\'t sleep there, but he knows the \"crate\" command and, whenever we have a treat, dashes straight to his crate.</p> <p>Indy usually gets up around 7 and goes out in the backyard for potty. He gets breakfast (favorite part of the day 1) right after. We usually let the door to our backyard open throughout the day for him to wander in and out. Sometimes we take the dogs out for a stroll in the morning, although not always. Around noon, we play fetch in the backyard (he\'s learned the part where he chases the ball, but not the part where he brings it back). Between 4 and 5, we go for a longer walk. Then Indy gets dinner (favorite part of the day 2) around 6 and mostly snoozes. He is let out for the last time between 9 and 10 before turning in for the night.</p> <p>Indy loves loves loves other dogs. He\'s also good at reading them and doesn\'t push too far if our dog doesn\'t want to play.&nbsp;</p> <p>The first few days he was with us, he was pretty nervous. Now that he\'s all settled in, he loves our company and is a quiet boy. He loves scratches on the head. We taught him to sit, which took a while but he does it very enthusiastically when we bring out the food.</p> <p dir=\"ltr\">Indy will be successful in a home that will give him the first few days to settle in. Patience is key with this boy, and knowing that it will definitely take him a week or two to get the hang of being in a new place. Having another dog in the house is a huge bonus for him. He definitely likes to play and he needs a buddy to do it with!</p> <p dir=\"ltr\">Indy is best suited to a home with a resident dog who can help him settle in and be his playmate. If there are children in the home, they should be over the age of 12.</p> <p>&nbsp;</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17510/17510094/85804063_500x375.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17510/17510094/85804063_100x75.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17510/17510094/85804064_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17510/17510094/85804064_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17510/17510094/85060102_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17510/17510094/85060102_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17510/17510094/85804065_488x640.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17510/17510094/85804065_100x131.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Indy','2021-12-01 12:03:27'],
    ['17699861','Available','2022-01-27 22:41:17','','Ladybug','','Dog','Jack Russell Terrier / Mixed (short coat)','Jack Russell Terrier','','Female','Yes','Yes','','Yes','','','Adult','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $650</p> <p>Ladybug is a 3 year old JRT mix who weighs about 26 lbs (and could stand to lose a couple of those!). She was an owner surrender to our rescue. Ladybug is an absolutely fabulous dog who has charmed everyone she has met! Her foster mom said she settled in almost immediately and loves to curl up by her feet. She is an expert cuddler and gives sweet little kisses, and is very sensitive to her foster\'s moods and feeiings!</p> <p>Ladybug adores going for walks and getting in all her sniffs. She\'s a great walker and would be an ideal companion for someone who likes to take long walks or strolls. She does like to investigate but if you want to get moving, she will follow your lead.&nbsp; She\'s great on a leash and is not a puller.</p> <p>Ladybug loves other dogs and is a polite greeter. She previously lived with other dogs and is an option to go to a home with them, or to be your only pet.</p> <p>Ladybug is an option for almost any type of home! If there are children they should be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17699/17699861/85988921_500x499.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17699/17699861/85988921_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17699/17699861/85988939_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17699/17699861/85988939_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17699/17699861/85988965_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17699/17699861/85988965_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17699/17699861/85988989_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17699/17699861/85988989_100x100.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Ladybug','2022-01-27 17:39:29'],
    ['17616532','Available','2022-01-15 14:55:24','','Lizzie','','Cat','Tabby (short coat)','Tabby','','Female','','','','Yes','','Yes','Adult','','Yes','','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Lizzie is a 4 year old young lady who is ready to find her forever home. She was relinquished to our rescue group when her previous home could no longer care for her. She is a people cat, she loves to be where you are. She also enjoys sleeping in bed with her foster parents at night and loves to lounge on her cat tree during the day. She is a good balance of chill and playful. She has a very sweet disposition. And of course she is gorgeous, just look at her!</p> <p>We think Lizzie would do best being the only pet in the home. She has proven since being in foster care that she really isn\'t into furry companionship, she prefers her humans and being the center of attention. She could also easily join a home with kids or maybe you are retired and want to have a wonderful companion to share life with. She could definitely be your girl. All she wants is a home and family to call her own. If you think Lizzie is the one you have been looking for, apply to adopt her today.</p> <p>She has been spayed, vaccinated, tested negative for FIV/FeLV, dewormed, flea treatment applied, and microchipped. Her adoption fee is $100.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17616/17616532/85386421_500x531.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17616/17616532/85386421_100x106.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17616/17616532/85386419_500x454.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17616/17616532/85386419_100x90.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17616/17616532/85386420_500x875.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17616/17616532/85386420_100x175.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Lizzie','2022-01-04 20:48:52'],
    ['17657377','Available','2022-02-01 12:48:50','','Maki','','Dog','Border Collie / Mixed (long coat)','Border Collie','','Male','Yes','Yes','Yes','Yes','','','Adult','','Yes','Medium','Yes','','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $750</p> <p>Maki is a 1 year old Border Collie who was surrendered to our rescue. He\'s in the 40-45 lb range. While he\'s a bit nervous at first when adjusting to a new place, he loves people and bonded quickly with his foster. After a short adjustment period he spreads the love to anyone in the household and even visitors.</p> <p>&nbsp;</p> <p>Here is his routine in his foster home:</p> <p>&nbsp;</p> <p>He\'s up at around 6:45. Goes outside to pee and poop, hangs around for a while before having breakfast at 8, followed by another trip outside. He goes out to the bathroom every couple of hours - but will let you know if he really has to go. Throughout the day, he goes outside for play sessions and running around and gets a long afternoon walk. While his fosters are working, he entertains himself with toys and balls inside. At around 6 he gets fed, goes out a couple more times, and then goes to bed at around 10. He sleeps through the night without any issues.</p> <p>&nbsp;</p> <p>When you get him going, Maki is so extremely playful, like a typical Border Collie. He absolutely loves his toys and running around outside. Loves chasing and chewing on balls, loves to \"fetch\" but still working on that final step of actually dropping the ball! He is literally jumping with joy when it\'s time to play outside.</p> <p>&nbsp;</p> <p>In terms of leash walking, Maki is a work in progress. He tends to get excited when he sees squirrels and pull, so he\'ll need some additional training. He is much better with the use of a harness and is significantly improving on leash. When it comes to house-training, Maki had a couple accidents the first few days in his foster but has since gotten the hang of letting them know when he needs to go out, and no more accidents!</p> <p>&nbsp;</p> <p>Maki is best suited to a home with herding breed experience. He has energy and is a smart boy, but he hasn\'t had a lot of prior training and will need a home that\'s excited to do that work with him. Maki is only an option for a home that has had a dog in the last 5 years. If there are children, they should be over the age of 10.</p> <p>&nbsp;</p> <p>&nbsp;</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17657/17657377/85717864_500x675.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17657/17657377/85717864_100x135.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17657/17657377/85717865_500x670.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17657/17657377/85717865_100x134.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17657/17657377/85717866_500x538.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17657/17657377/85717866_100x107.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17657/17657377/85717867_500x624.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17657/17657377/85717867_100x124.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Maki','2022-01-16 13:13:08'],
    ['17700827','Available','2022-01-29 16:03:48','','Marshmallow Fluff','','Dog','Bichon Frise / Poodle (Miniature) (long coat)','Bichon Frise','Poodle (Miniature)','Female','','Yes','','Yes','','','Adult','','Yes','Small','Yes','White','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $750</p> <p>Marshmallow Fluff is a 3-4 year old Bichon-Poodle who was rescued from the shelter. Like so many of our fluffy dogs who require grooming, Marshmallow\'s coat was a heck of a mess! Thankfully our volunteer groomer took excellent care of her, and look at her now! She\'s ready to strut her stuff down the runway!</p> <p>Here her routine in her foster home!&nbsp;Marshmallow Fluff (Fluffy) wakes up and is taken outside to do her business at around 6:45-7:00 am, and eats breakfast after that. She&rsquo;s taken on 1 or 2 short walks in the morning and another walk in the afternoon. She eats dinner at around 5-6 pm. She goes to sleep in a pen in the living room around 10:30pm.</p> <p>Fluff has been very friendly since day one. She has mellowed down a bit, and loves attention. She follows family members around the house.&nbsp; She hasn\'t had any potty accidents in the house since her arrival!&nbsp; She loves going for walks and is great on a leash. She has plenty of energy for walking but afterwards is content to chill on her dog bed for a while. She\'s not a nuisance barker but will bark for classic triggers, such as a dog passing by or someone ringing the doorbell.</p> <p>Marshmallow Fluff will require grooming every 4-6 weeks, so adopters should be prepared for that expense.</p> <p>Marshmallow is an option for a variety of homes, as long as they have some prior dog experience during their lives. She is an option for children over the age of 6.</p> <p>&nbsp;</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700827/85994447_500x619.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700827/85994447_100x123.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700827/85994449_500x664.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700827/85994449_100x132.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','','','Marshmallow Fluff','2022-01-27 21:50:43'],
    ['17684788','Available','2022-01-27 22:41:28','','Mickey','','Dog','Shiba Inu / Jindo (Korean) / Mixed (medium coat)','Shiba Inu','Jindo (Korean)','Male','Yes','Yes','Yes','','','','Adult','','Yes','Small','Yes','White','Medium','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $600</p> <p>Mickey is a 3 year old Shiba-Jindo mix who was rescued from the meat markets of Korea. He weighs about 20 lbs. Mickey is a shy guy and can be a bit nervous meeting new people and in new situations, but he\'s also the gentle sort. He will do well in a patient and peaceful home that allows him to go at his own pace.</p> <p>Here is his routine in his foster home:</p> <p>Mickey generally gets up around 9 or 9:30. We go outside immediately, and he usually just pees at that time. I put some kibble out for him, but he doesn\'t always eat it. He might graze on it throughout the day. He goes outside again in the early afternoon, and will usually do his business right away. When I am working during the afternoon/ evening, he is usually at my feet or really close by. He goes out again, then gets dinner at 7:30. I put him in his crate with a little more than a cup of kibble and a treat, and he stays in there quietly until I get him out, about 20 minutes later. He goes back outside as needed, and then gets crated for bed between midnight and 1am.</p> <p>His foster mom says: \"Mickey is one of the sweetest yet shyest dogs I have ever met. He has never growled at me, my husband or my cats or dog, but he is visibly scared of everything new to him. Despite his obvious fear, he has started doing play bows when he sees me, wagging his tail, and he does like to follow me around the house. He enjoys snuggling with me on the couch, but will not usually jump up on his own.\"</p> <p>Mickey is fostered with a dog and cats and does well with all other creatures. He is crate trained and has not had any accidents in his foster home.&nbsp; Once he\'s comfortable, he loves pets and cuddles.</p> <p>Mickey is only an option for a home that has had a dog in the last 5 years. He would enjoy going to a home with another dog (or even a dog-friendly cat!).&nbsp; If there are children in the home, they should be over the age of 12.</p> <p>&nbsp;</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684788/85898452_500x499.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684788/85898452_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684788/85898459_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684788/85898459_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684788/85898460_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684788/85898460_100x100.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Mickey','2022-01-24 01:04:59'],
    ['17098517','Available','2021-12-07 23:22:26','','Outlaw','','Dog','Corgi / Chihuahua / Mixed (short coat)','Corgi','Chihuahua','Male','Yes','Yes','','Yes','','','Adult','','Yes','Small','Yes','Tan','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption Fee: $550</p> <p>We are open to a foster to adopt set up for this dogs forever home. If you are interested, please mention it in your application so your interviewer can give you the info.</p> <p>Outlaw is a 2 year old Corgi-Chi mix with a lot of spunk and personality. Outlaw weighs in at around 14 lbs and is full of life. Outlaw was rescued from a very crowded shelter and as our volunteer was there looking at dogs she saw Outlaw and couldn\'t leave him behind. When Outlaw first came into the rescue he was scared and shaking. He was so unsure of what was going on but little did he know and soon found out we were there to help him.</p> <p>After being in our rescue for several months he has transformed into a very friendly and very playful puppy. While Outlaw is still a bit wary of strangers, once he gets used to you he becomes totally different and is the playful energetic dog we all knew he could be. His fosters have been working on this with the help of our behaviorist and Outlaw is showing improvement. His new owners will need to continue working with Outlaw to help him with his \"stranger danger\". Outlaw does take some time to warm up to new people but with the right introduction, he can warm up to new people within a few hours. He is very treat motivated, so positive reinforcement of associating meeting new people with treats has been working really well. He doesn\'t like strangers having direct eye contact with him, he will bark out of fear. If no one pays attention to him when he approaches strangers, he does much better. His new owners will need to continue working with Outlaw to help him with his \"stranger danger\" and make him the amazing dog we all know he is.</p> <p>Outlaw is the kind of dog that needs a very strong, confident owner that can take charge and not let him rule the house, he needs a home that will set strict boundaries with him from the very beginning, like not getting on the furniture. Outlaw has proven that if his family is very lenient and lets him take charge with whatever he wants, he acts out and tries to be the \"man in charge\". Outlaw does need his own personal space when it comes to new situations. He also needs a confident owner that will advocate for him out in public and not allow strangers to walk up to him. He will need an adjustment period to acclimate and transition to a new forever home. His fosters have found great success and gained his trust faster by just going about their day and ignoring Outlaw initially. His fosters left a leash on him and allowed him to walk around the house and drag his leash behind him until Outlaw trusted them. If they needed to redirect Outlaw or move him to a different area of the house they grabbed the leash and not him as it would scare him if he was grabbed surprisingly. He has been getting better and faster at adjusting to new environment. With his latest foster, Outlaw settled down within a day and became best friends with the resident dogs.&nbsp;After his initial transition Outlaw will follow his people around the house from room to room and he does the cutest thing when he wants attention and is trying to initiate play. He will push his butt out to you and then lie down on his back for belly rubs. This is his cue that he is ready to start playing.&nbsp;Even though he is 2 years old already, he still behaves like a puppy and every once in a while he might give you a play bite but this is easily stopped with a firm no. He is doing this much less now with his current foster\'s direction.&nbsp;</p> <p>He LOVES belly rubs and will paw at you if you stop and is always asking for belly rubs. Once he settles down he would go search for toys in the house. He is curious and will explore the whole house searching for toys to play with!&nbsp;Outlaw loves to play with a ball and likes to play fetch. Outlaw&rsquo;s foster wrote &ldquo;Outlaw is definitely playful and energetic. He is always next to you and asking for playtime or for getting belly rubs. He lies on his back next to you and pea at you inviting you to start playing with him or start belly rub session. He has also started liking to play with his toys, especially a small ball. He fetches the ball and does a small run-around before lying down and giving you the ball. He has recently started playing tug-of-was as well. You give him the tug rope and he will play with that. He also likes the toys where you put treats inside it. You can occupy him for a long time by putting his favorite treats inside these toys.</p> <p>Outlaws schedule with his fosters is as follows.</p> <p>\"We take him out for his morning walk which is slightly long around 8 AM. He does his business during this walk and is very excited. We give him his breakfast at 9, which is a 1/2 cup of kibble. After his breakfast, he sticks to us while we do our work. He comes to you, paws at you for belly rubs and wants to play with you. We usually play with him by doing belly rubs and some rowdy play with him. He comes to you and lies on his back telling you that he wants to play. He likes to play-bite a little, but will stop if you push him away and stop playing. We take him for another walk around 2 PM. This is also a long walk (around a mile). After coming back, he follows you around and wants to play a bit. but if you ignore him, he goes into his crate and rests up. We give him his dinner around 8 PM, another 1/2 cup of kibble. He eats his dinner and drinks water and lounges about. We take him for his last walk of the day around 9 30 PM - 10 PM. After coming back, he plays for a bit and then we get him into his crate. Sometimes, he goes into his crate on his own, but other times, we pick him up and put him in. He sleeps in his crate throughout the night without any problems.\"</p> <p>Outlaw is an option to without another dog OR with other high energy dogs in the home. He currently lives with 3 other dogs and has been doing amazing with them. He is very submissive to other dogs. He wants to please them. The resident senior dog doesn\'t really play with Outlaw and will tell Outlaw to back down when needed, and Outlaw always respects that and walks away. The two younger dogs love to play with Outlaw, especially the 40 lbs GSD x Shiba Inu Mix. Outlaw and the GSD mix will play for hours every day, he has the energy of a Husky! He would love to have another high energy sibling (if his future home has a dog).&nbsp;Outlaw is an option to live without another dog in the home. He has interacted with both big dogs including a 60 lb husky and small dogs and he tends to be a little nervous around the bigger dogs but is interested with the smaller sized dogs. He has not shown to be a chewer or destructive and is content playing by himself while his foster parents are working during the day. Outlaw has proven to be housebroken and has not had any accidents with his foster home. He will wait until he is taken out on a walk to do all his business. He walks very well on the right harness, his new family will need to continue to improve his leash manner with the right gear.</p> <p>Outlaw is only an option for a home that has had a dog recently and understands the needs of a shy dog. If there are children in the home they will need to be teenagers and equally dog savvy.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17098/17098517/83894823_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17098/17098517/83894823_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17098/17098517/80981180_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17098/17098517/80981180_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17098/17098517/83894821_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17098/17098517/83894821_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17098/17098517/83894822_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17098/17098517/83894822_100x133.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Outlaw','2021-08-07 22:23:18'],
    ['17612810','Available','2022-01-27 22:41:48','','Peanut','','Dog','Chihuahua / Rat Terrier / Mixed (short coat)','Chihuahua','Rat Terrier','Male','Yes','Yes','','Yes','','','Adult','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $650</p> <p>Peanut is a 5 year old Chi- Rat Terrier mix who looks like a little cartoon character! He weighs a grand total of 6 lbs.&nbsp; He was rescued from the shelter and has been loving spending time in his foster home. Here is his daily routine:&nbsp;</p> <p>Peanut currently wakes up between 8 and 9am, though he\'s ready to get up earlier if you allow him. We then go outside for a quick potty break, and then back inside for breakfast. He then lounges around while he waits for his foster family to eat breakfast and get ready. Then it\'s back outside for a short walk. He loves going on walks and sniffing to explore. He always perks up when we take out his leash. Afterwards, we do some basic training to help him learn \"sit\", \"stay\", and \"come\". He is trainable and has almost mastered the command \"sit\", though he\'s funny in that he prefers sitting on soft surfaces and doesn\'t really like to sit on the tile or wood floor. During the day, he spends his time lounging in his crate, on a nearby soft pillow, or snuggling in the lap of any member of his foster family. He loves a good snuggle! Peanut eats dinner between 5:30 and 6:30, has another bathroom break before bedtime and is finally down for the night in his crate between 11 and 12.</p> <p>His foster says:&nbsp;Peanut is super friendly and ready to go onto our laps. When he arrived at our house, he was initially a bit apprehensive and had to follow us everywhere. However, as the days passed, he became more confident and was able to independently lounge on his own in a nearby room and only seek us out if he wanted a snuggle or to confirm where we were in the house.</p> <p>Peanut has not had any potty accidents in his foster home. What a good lil dude!</p> <p>Peanut seems like he would enjoy a quieter home that will be able to take him out for daily walks and provide him plenty of opportunities for lap snuggles. He doesn\'t like sudden movements and can be a bit stubborn at times, so will do best with a family that can provide consistent routines and love.</p> <p>Peanut is only an option for a home that has had a dog in the last 5 years. He loves the company of other small dogs, so he is an option for a multi-dog home. With his petite size, he is likely also an option for a home with a dog-savvy cat. He is an option for a home with children over the age of 8.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17612/17612810/85353038_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17612/17612810/85353038_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17612/17612810/85353039_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17612/17612810/85353039_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17612/17612810/85353040_500x499.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17612/17612810/85353040_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17612/17612810/85353041_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17612/17612810/85353041_100x100.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Peanut','2022-01-03 18:39:31'],
    ['17707646','Available','2022-01-29 16:03:55','','Pizza Roll','','Dog','Yorkshire Terrier Yorkie / Silky Terrier / Mixed (long coat)','Yorkshire Terrier Yorkie','Silky Terrier','Male','Yes','Yes','','Yes','','','Adult','','Yes','Small','Yes','','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $750</p> <p>Pizza Roll is a Yorkie/Silky mix who is in the 15 lb range. He was rescued from a shelter and his fur was a mess, but post-grooming he felt MUCH better and has settled into his foster home nicely.</p> <p>Here is how his foster describes him!&nbsp;</p> <p>Pizza Roll is a happy, confident, friendly, and outgoing Yorkie with a spunky personality. He loves to play with our dogs Max &amp; Mochi and has kept them entertained and active since he came home. He even greeted and played with our neighbor\'s dog (miniature greyhound).&nbsp;</p> <p>He is very friendly with people and kids, greets them enthusiastically, and goes all out of his way to get all your attention and snuggles. He will jump into your lap and rub himself against you to get all the love and snuggles. He loves his head scratches and belly rubs. He is a fun dog and quite an entertaining personality! He makes us laugh a lot with his antics. He is a curious dog who will follow you around the house and want to investigate everything.</p> <p>He loves walks and walks really well on a leash. He pulls a little bit but we&rsquo;re working on that. He has greeted smaller dogs nicely on the walk and generally looks curiously at other dogs and doesn&rsquo;t react. He is always interested and curious.&nbsp;</p> <p>He has quite a lot of energy and can do with a good amount of exercise in an active household. He will need his home to give him a good amount of exercise first thing in the morning. He could even be your jogging buddy!</p> <p>Pizza Roll\'s foster has been working on crate training and with a bit of coaxing to get in (and maybe a yummy treat), he will sleep through the night in his crate. He\'s making great progress on house-training as well.</p> <p>Pizza Roll is fostered with two other small dogs but can be a bit overwhelmed by larger dogs. He could be an option for a home with another dog but would also be perfectly happy to just be on his own with his loving human family.</p> <p>Pizza Roll is only an option for a home that has had a dog in the last 5 years. If there are children in the home, they should be over the age of 8.</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707646/86040456_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707646/86040456_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707646/86040463_500x807.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707646/86040463_100x161.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707646/86040473_500x437.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707646/86040473_100x87.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707646/86040488_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17707/17707646/86040488_100x133.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Pizza Roll','2022-01-29 15:34:14'],
    ['17643300','Available','2022-01-27 22:41:56','','Precious','','Dog','Pug / Mixed (short coat)','Pug','','Female','Yes','Yes','','Yes','','','Adult','','Yes','Small','Yes','Black','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $650</p> <p>Precious is an 8 year old Pug mix who weighs 23lbs. And we don\'t know what that mix is...Funny little dog with many different breeds in her! She has an amazing story of courage and resilience. She is everything that rescue is about and so much more. She found herself at the shelter very pregnant, giving birth and not a stitch of hair on her. Who was ever going to rescue a dog like that? Well, that would DPS. We knew the hair would grow back with proper treatment. We knew we could take care of the puppies. We knew we could offer her an amazing home that would love her like she\'d never been loved before...</p> <p>Fast forward a couple of months and Precious\'s skin is finally healed and her fur has grown in beautifully! Her puppies are in their homes. She\'s this sweet, gentle, kind loving dog. She is everything that you want for a companion. She is a lover and she is a dog who will be your best friend for a lifetime. There isn\'t a sweeter dog out there. She\'s a velcro dog. She likes to know where you\'re at and where you\'re going. Can you imagine how much neglect she has experienced to not have any hair at all when she came in? Well, then to find such amazing love in her foster homes, yeah, she says, \"I\'m down with that kind of love. I\'m gonna follow it to the ends of the earth!\"</p> <p>Here\'s her routine in her current foster home:</p> <p>8:30am our girl wakes up, stretches and heads out for a walk and a bathroom break. Her walks are generally about 20-30 minutes and about a mile long.</p> <p>9:00am breakfast is served, followed by some lounging and sunbathing time while her foster mom begins work at home. This girl loves to sunbathe. The feeling of warmth on her skin. Oh it feels so good to her...</p> <p>12 Noon walkie walkie time! She gets another longer walk and bathroom break for about 45 minutes and 2 mile jaunt around the neighborhood.</p> <p>12:45ish it\'s time to get our grub on! Ok, lunch time is followed by sun bathing with her full belly pointed to the sun while foster mom finishes off her day.</p> <p>6:30ish time to stretch the legs again, take a bathroom break with a 30 minute maybe 1 mile walk.&nbsp; 7ish is dinner time. Food is good!</p> <p>8-10pm is hanging out... she doesn\'t play much with toys, but she does like playing with a treat stuffed toy. It\'s kinda one of those things that keeps her attention for short amounts of time. If our girl has her preference, she wants cuddle and snuggle time. She loves being petted and scratches behind her ears and belly rubs.</p> <p>10:30pm is the last bathroom break before bedtime.</p> <p>&#226&#128&#139When she first arrived it took about a day to adjust. The prior foster advised as long as she has a \"spot\" to call her own she will settle and that she loves pillows or cushions. She did settle a bit once she decided on her spot/bed. She was still whining, but is so sweet, loves affection, and completely house trained. She is not crate trained, but she knows to go to her bed. I typically carry one of her beds into my bedroom to sleep in my room with me at night.&nbsp;</p> <p>She listens well if you tell her \"no\". Precious is a velcro dog with her person and does follow me room to room or will watch me from where she is settled.</p> <p>Precious would be an amazing companion. She is friendly with everyone, quiet, loves scratches and cuddles on your lap or next to you. She does great with kids and is gentle. If she has had enough or they get too rough she will walk/run away and settle in a quiet spot or come to me. She doesn\'t play with toys, but I think with time she can learn to.</p> <p>Precious gets eye drops every day. It helps maintain the moisture. Basically her eyes (like many small breeds) don\'t produce enough tears. So this helps her produce more!</p> <p>Precious is an option for almost any type of home. If there are children in the home, they should be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17643/17643300/85614527_500x538.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17643/17643300/85614527_100x107.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17643/17643300/85614528_500x497.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17643/17643300/85614528_100x99.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17643/17643300/85614529_500x417.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17643/17643300/85614529_100x83.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17643/17643300/85614530_500x574.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17643/17643300/85614530_100x114.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Precious','2022-01-13 04:39:56'],
    ['17563297','Available','2022-01-29 16:05:35','','Raya','','Dog','Dachshund / Chihuahua / Mixed (short coat)','Dachshund','Chihuahua','Female','Yes','Yes','','Yes','No','','Adult','No','Yes','Small','Yes','Tan','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption Fee: $650</p> <p>Raya is an option for Foster-to-Adopt!</p> <p>Raya is a 6 year old Dachshund X Chihuahua mix. She was rescued from a horrible hoarding situation along with a bunch of other dogs, and after bringing her into the rescue we determined she was pregnant! Now that she\'s had all her puppies and they\'re all ready for adoption, it\'s time for Raya to find a forever family of her own!</p> <p>When she came into the rescue she was very scared but has blossomed in the last few months with the help of some dedicated fosters and their dogs. She&nbsp;lives with 4 adult dogs (Pitbull mix, 2 chi mixes, and a Yorkie), along with her 6 puppies. She loves being around all the dogs and does much better when they are around.She relaxed in the presence of her furry foster siblings and began to explore her foster home by following them around.</p> <p>Her foster describes her schedule as follows: \"Raya has been in our home for the last 3 months and in that time she has had a litter of six puppies, so her routine has changed as needed to accommodate her needs while pregnant and as a mom. She has free roam of our home now that she is comfortable and loves to be with our 4 dogs. She now sleeps through the night on our couch or dog bed, as she has just finished weaning her puppies and no longer wants to sleep with them. She wakes up when her puppies do, goes potty outside, and then has breakfast with her puppies. She came to us very undernourished, so we free feed her throughout the day to put some weight on her and we are almost there. We feed her again at dinner time and a snack before bed.\"</p> <p>Raya takes time to warm up to new people. She needs to feel safe and confident with them before she will trust them. She loves to come and give kisses once she\'s gotten to that point; she just likes to play by her rules! She is a total lounger, but is also playful with our dogs and will come to her foster for pets. She doesn\'t really care about toys, but she loves treats!</p> <p>Raya has not been taken on any walks because of her puppies, and thus has not yet started working on leash training. She likes to be in her foster\'s backyard, free-roaming with the other pups while her foster hangs out with them outside.</p> <p>She is not a nuisance barker, a chewer, or a digger. Raya used potty pads when she had her puppies and then transitioned back to going potty outside with no issues. She has had no accidents in her foster home. She has been using a pen instead of a crate. After her puppies were weaned she started sleeping in a dog bed or on the couch with her foster\'s dog Zoey. Her foster family leaves their sliding glass door open most of the day for the dogs to go in and out when needed.</p> <p>The ideal home for Raya is a home with other dogs and loving people ready to help her develop her confidence. She is a total sweetheart and will be a wonderful pet if you have the patience to let her come to you. Once she trusts, her cute personality comes out and she&rsquo;s a love. Patience is the name of the game with her.</p> <p>Raya is only an option for homes that have had a dog of their own as an adult. If there are any children in the home they need to be over the age of ten.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17563/17563297/84838523_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17563/17563297/84838523_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17563/17563297/84838524_500x544.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17563/17563297/84838524_100x108.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17563/17563297/84838525_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17563/17563297/84838525_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17563/17563297/84838526_500x514.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17563/17563297/84838526_100x102.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Raya','2021-12-16 02:01:38'],
    ['17710333','Available','2022-01-30 16:31:47','','Seasonings: Cayenne','','Dog','Chihuahua / Dachshund / Mixed (short coat)','Chihuahua','Dachshund','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $700</p> <p>The Seasonings puppies are a litter of teeny tiny puppies who came to us at the tender age of four to five weeks old. They\'ve been hand-raised by their fosters and are now 10 weeks old, thriving and healthy, and ready for their forever homes! The puppies were barely 1 lb when they arrived at DPS; they\'re now in the 3-4 lb range and probably won\'t grow much bigger than 10 lbs, if that, so they will forever be the perfect pocket-sized pups, ready to travel with you and go on adventures!</p> <p>The puppies spend their day hanging out in their exercise pen when not on their foster family\'s laps. They are fed 3x a day: 7-8 am, 4-5 pm, and right before bedtime. They live with 4 other (adult) dogs and adore their company; they can often be found engaging in games of chase or tug-o-war with them, or cuddling on the couch in puppy piles. They LOVE treats and will come running at the sound of a treat bag opening and love toys of all shapes and sizes!</p> <p>Cayenne is the baby of the litter. She\'s a tad bit smaller than her siblings and likes to follow their lead. She would love to go to a home with another dog who can be her leader and companion.</p> <p>The puppies are only an option for homes that have had a dog in the last 5 years. If there are children in the home, they should be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710333/86063144_500x465.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710333/86063144_100x93.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710333/86063148_500x525.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710333/86063148_100x105.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710333/86063150_500x566.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710333/86063150_100x113.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Seasonings: Cayenne','2022-01-30 14:00:32'],
    ['17710303','Available','2022-01-30 16:32:02','','Seasonings: Cinnamon','','Dog','Chihuahua / Dachshund / Mixed (short coat)','Chihuahua','Dachshund','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $700</p> <p>The Seasonings puppies are a litter of teeny tiny puppies who came to us at the tender age of four to five weeks old. They\'ve been hand-raised by their fosters and are now 10 weeks old, thriving and healthy, and ready for their forever homes! The puppies were barely 1 lb when they arrived at DPS; they\'re now in the 3-4 lb range and probably won\'t grow much bigger than 10 lbs, if that, so they will forever be the perfect pocket-sized pups, ready to travel with you and go on adventures!</p> <p>The puppies spend their day hanging out in their exercise pen when not on their foster family\'s laps.&nbsp; They are fed 3x a day: 7-8 am, 4-5 pm, and right before bedtime. They live with 4 other (adult) dogs and adore their company; they can often be found engaging in games of chase or tug-o-war with them, or cuddling on the couch in puppy piles.&nbsp; They LOVE treats and will come running at the sound of a treat bag opening and love toys of all shapes and sizes!</p> <p>Cinnamon is the most adventurous of the puppies. She loves to explore her surroundings and has even figured out how to go up and down the stairs! She\'s a smart little girl and very trainable.</p> <p>The puppies are only an option for homes that have had a dog in the last 5 years. If there are children in the home, they should be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710303/86063057_500x508.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710303/86063057_100x101.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710303/86063062_500x571.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710303/86063062_100x114.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','','','Seasonings: Cinnamon','2022-01-30 13:54:29'],
    ['17711411','Available','2022-01-30 21:18:22','','Seasonings: Cumin','','Dog','Chihuahua / Dachshund / Mixed (short coat)','Chihuahua','Dachshund','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $700</p> <p>The Seasonings puppies are a litter of teeny tiny puppies who came to us at the tender age of four to five weeks old. They\'ve been hand-raised by their fosters and are now 10 weeks old, thriving and healthy, and ready for their forever homes! The puppies were barely 1 lb when they arrived at DPS; they\'re now in the 3-4 lb range and probably won\'t grow much bigger than 10 lbs, if that, so they will forever be the perfect pocket-sized pups, ready to travel with you and go on adventures!&nbsp;</p> <p>All of the puppies are great little sleepers. Like any puppy, they play hard and sleep hard, but will wake up and peek around if they sense you\'re about to do something fun (like go in the kitchen). They go in their crate on their own if they want a little quiet time, although they\'ll also curl up in a bed in their ex-pen. At night they sleep in the crate with the door open so they can go out and use a potty pad. They generally are put to bed around 10 pm and wake up around 7 am.</p> <p>They love food. They get very excited around food and have a hard time focusing, but I expect when they\'re not all together they can learn well with treats. They get three meals a day, a mix of kibble and wet food. I think they would eat anything you gave them :)</p> <p>They\'ve met a few men, women, and one child around 8, and they\'ve been very social with all of them. They jump over each other to get attention and love.</p> <p>They\'ve met two smaller dogs (~15-20 lbs) and would love to play with them, but haven\'t quite figured out how.</p> <p>Rosemary is the adventurer. She\'s the first one to run to meet a person, to explore the yard, and to try new things. She\'s looking to expand her domain by scaling her human out of the x-pen, and will make it known that she does not like to be left in there when there\'s something more interesting going on outside the pen.</p> <p>Cumin is the sweet, shy type. She\'s gentler than her siblings and loves giving kisses and snuggling up under a blanket with you on the couch. She\'s still got puppy energy though and will play hard with her siblings, explore the yard for sticks to chew on, and scour any room for food.&nbsp;</p> <p>Oregano is bold, clever, and curious. He loves people and a good lap to sit in, but he also loves chewing on any toy (or finger) that comes his way. He\'s the most vocal when it comes to making sure he gets his food, and he seems to be the favorite sibling for anyone else looking to play!&nbsp;</p> <p>Paprika is the lovebug. He\'s the smallest, but that doesn\'t stop him from making sure he gets his share of everything--especially affection. His favorite thing is to be picked up and held against you, and his little tail will wag so hard. He also enjoys finding leaves bigger than his head and carrying them around the yard. He\'s a ferocious little player and can get a bit overboard with his siblings, so probably needs any other dog in his home to be gentle and tolerant.</p> <p>The puppies are only an option for homes that have had a dog in the last 5 years. If there are children in the home, they should be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711411/86072578_500x471.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711411/86072578_100x94.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711411/86072579_500x492.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711411/86072579_100x98.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711411/86072580_500x411.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711411/86072580_100x82.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Seasonings: Cumin','2022-01-30 21:18:05'],
    ['17711408','Available','2022-01-30 21:14:31','','Seasonings: Oregano','','Dog','Chihuahua / Dachshund / Mixed (short coat)','Chihuahua','Dachshund','Male','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $700</p> <p>The Seasonings puppies are a litter of teeny tiny puppies who came to us at the tender age of four to five weeks old. They\'ve been hand-raised by their fosters and are now 10 weeks old, thriving and healthy, and ready for their forever homes! The puppies were barely 1 lb when they arrived at DPS; they\'re now in the 3-4 lb range and probably won\'t grow much bigger than 10 lbs, if that, so they will forever be the perfect pocket-sized pups, ready to travel with you and go on adventures!</p> <p>All of the puppies are great little sleepers. Like any puppy, they play hard and sleep hard, but will wake up and peek around if they sense you\'re about to do something fun (like go in the kitchen). They go in their crate on their own if they want a little quiet time, although they\'ll also curl up in a bed in their ex-pen. At night they sleep in the crate with the door open so they can go out and use a potty pad. They generally are put to bed around 10 pm and wake up around 7 am.</p> <p>They love food. They get very excited around food and have a hard time focusing, but I expect when they\'re not all together they can learn well with treats. They get three meals a day, a mix of kibble and wet food. I think they would eat anything you gave them :)</p> <p>They\'ve met a few men, women, and one child around 8, and they\'ve been very social with all of them. They jump over each other to get attention and love.&nbsp;&nbsp;</p> <p>They\'ve met two smaller dogs (~15-20 lbs) and would love to play with them, but haven\'t quite figured out how.&nbsp;</p> <p>Rosemary is the adventurer. She\'s the first one to run to meet a person, to explore the yard, and to try new things. She\'s looking to expand her domain by scaling her human out of the x-pen, and will make it known that she does not like to be left in there when there\'s something more interesting going on outside the pen.</p> <p>Cumin is the sweet, shy type. She\'s gentler than her siblings and loves giving kisses and snuggling up under a blanket with you on the couch. She\'s still got puppy energy though and will play hard with her siblings, explore the yard for sticks to chew on, and scour any room for food.</p> <p>Oregano is bold, clever, and curious. He loves people and a good lap to sit in, but he also loves chewing on any toy (or finger) that comes his way. He\'s the most vocal when it comes to making sure he gets his food, and he seems to be the favorite sibling for anyone else looking to play!&nbsp;</p> <p>Paprika is the lovebug. He\'s the smallest, but that doesn\'t stop him from making sure he gets his share of everything--especially affection. His favorite thing is to be picked up and held against you, and his little tail will wag so hard. He also enjoys finding leaves bigger than his head and carrying them around the yard. He\'s a ferocious little player and can get a bit overboard with his siblings, so probably needs any other dog in his home to be gentle and tolerant.</p> <p>The puppies are only an option for homes that have had a dog in the last 5 years. If there are children in the home, they should be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711408/86072444_500x442.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711408/86072444_100x88.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711408/86072445_500x467.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711408/86072445_100x93.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711408/86072447_500x491.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711408/86072447_100x98.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Seasonings: Oregano','2022-01-30 21:14:10'],
    ['17711415','Available','2022-01-30 21:25:37','','Seasonings: Paprika','','Dog','Chihuahua / Dachshund / Mixed (short coat)','Chihuahua','Dachshund','Male','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $700&nbsp;</p> <p>The Seasonings puppies are a litter of teeny tiny puppies who came to us at the tender age of four to five weeks old. They\'ve been hand-raised by their fosters and are now 10 weeks old, thriving and healthy, and ready for their forever homes! The puppies were barely 1 lb when they arrived at DPS; they\'re now in the 3-4 lb range and probably won\'t grow much bigger than 10 lbs, if that, so they will forever be the perfect pocket-sized pups, ready to travel with you and go on adventures!</p> <p>All of the puppies are great little sleepers. Like any puppy, they play hard and sleep hard, but will wake up and peek around if they sense you\'re about to do something fun (like go in the kitchen). They go in their crate on their own if they want a little quiet time, although they\'ll also curl up in a bed in their ex-pen. At night they sleep in the crate with the door open so they can go out and use a potty pad. They generally are put to bed around 10 pm and wake up around 7 am.</p> <p>They love food. They get very excited around food and have a hard time focusing, but I expect when they\'re not all together they can learn well with treats. They get three meals a day, a mix of kibble and wet food. I think they would eat anything you gave them :)</p> <p>They\'ve met a few men, women, and one child around 8, and they\'ve been very social with all of them. They jump over each other to get attention and love.</p> <p>They\'ve met two smaller dogs (~15-20 lbs) and would love to play with them, but haven\'t quite figured out how.</p> <p>Rosemary is the adventurer. She\'s the first one to run to meet a person, to explore the yard, and to try new things. She\'s looking to expand her domain by scaling her human out of the x-pen, and will make it known that she does not like to be left in there when there\'s something more interesting going on outside the pen.</p> <p>Cumin is the sweet, shy type. She\'s gentler than her siblings and loves giving kisses and snuggling up under a blanket with you on the couch. She\'s still got puppy energy though and will play hard with her siblings, explore the yard for sticks to chew on, and scour any room for food.</p> <p>Oregano is bold, clever, and curious. He loves people and a good lap to sit in, but he also loves chewing on any toy (or finger) that comes his way. He\'s the most vocal when it comes to making sure he gets his food, and he seems to be the favorite sibling for anyone else looking to play!</p> <p>Paprika is the lovebug. He\'s the smallest, but that doesn\'t stop him from making sure he gets his share of everything--especially affection. His favorite thing is to be picked up and held against you, and his little tail will wag so hard. He also enjoys finding leaves bigger than his head and carrying them around the yard. He\'s a ferocious little player and can get a bit overboard with his siblings, so probably needs any other dog in his home to be gentle and tolerant.</p> <p>The puppies are only an option for homes that have had a dog in the last 5 years. If there are children in the home, they should be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711415/86072602_500x454.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711415/86072602_100x90.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711415/86072603_500x481.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711415/86072603_100x96.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711415/86072604_500x522.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711415/86072604_100x104.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711415/86072605_500x533.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711415/86072605_100x106.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Seasonings: Paprika','2022-01-30 21:25:20'],
    ['17711413','Available','2022-01-30 21:22:20','','Seasonings: Rosemary','','Dog','Chihuahua / Dachshund / Mixed (short coat)','Chihuahua','Dachshund','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $700</p> <p>The Seasonings puppies are a litter of teeny tiny puppies who came to us at the tender age of four to five weeks old. They\'ve been hand-raised by their fosters and are now 10 weeks old, thriving and healthy, and ready for their forever homes! The puppies were barely 1 lb when they arrived at DPS; they\'re now in the 3-4 lb range and probably won\'t grow much bigger than 10 lbs, if that, so they will forever be the perfect pocket-sized pups, ready to travel with you and go on adventures!</p> <p>All of the puppies are great little sleepers. Like any puppy, they play hard and sleep hard, but will wake up and peek around if they sense you\'re about to do something fun (like go in the kitchen). They go in their crate on their own if they want a little quiet time, although they\'ll also curl up in a bed in their ex-pen. At night they sleep in the crate with the door open so they can go out and use a potty pad. They generally are put to bed around 10 pm and wake up around 7 am.&nbsp;</p> <p>They love food. They get very excited around food and have a hard time focusing, but I expect when they\'re not all together they can learn well with treats. They get three meals a day, a mix of kibble and wet food. I think they would eat anything you gave them :)</p> <p>They\'ve met a few men, women, and one child around 8, and they\'ve been very social with all of them. They jump over each other to get attention and love.</p> <p>They\'ve met two smaller dogs (~15-20 lbs) and would love to play with them, but haven\'t quite figured out how.&nbsp;</p> <p>Rosemary is the adventurer. She\'s the first one to run to meet a person, to explore the yard, and to try new things. She\'s looking to expand her domain by scaling her human out of the x-pen, and will make it known that she does not like to be left in there when there\'s something more interesting going on outside the pen.&nbsp;</p> <p>Cumin is the sweet, shy type. She\'s gentler than her siblings and loves giving kisses and snuggling up under a blanket with you on the couch. She\'s still got puppy energy though and will play hard with her siblings, explore the yard for sticks to chew on, and scour any room for food.</p> <p>Oregano is bold, clever, and curious. He loves people and a good lap to sit in, but he also loves chewing on any toy (or finger) that comes his way. He\'s the most vocal when it comes to making sure he gets his food, and he seems to be the favorite sibling for anyone else looking to play!</p> <p>Paprika is the lovebug. He\'s the smallest, but that doesn\'t stop him from making sure he gets his share of everything--especially affection. His favorite thing is to be picked up and held against you, and his little tail will wag so hard. He also enjoys finding leaves bigger than his head and carrying them around the yard. He\'s a ferocious little player and can get a bit overboard with his siblings, so probably needs any other dog in his home to be gentle and tolerant.</p> <p>The puppies are only an option for homes that have had a dog in the last 5 years. If there are children in the home, they should be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711413/86072591_500x512.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711413/86072591_100x102.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711413/86072592_500x545.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711413/86072592_100x109.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711413/86072593_500x483.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711413/86072593_100x96.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711413/86072594_500x470.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17711/17711413/86072594_100x94.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Seasonings: Rosemary','2022-01-30 21:21:45'],
    ['17710345','Available','2022-02-01 02:17:49','','Seasonings: Thyme','','Dog','Chihuahua / Dachshund / Mixed (short coat)','Chihuahua','Dachshund','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $700</p> <p>The Seasonings puppies are a litter of teeny tiny puppies who came to us at the tender age of four to five weeks old. They\'ve been hand-raised by their fosters and are now 10 weeks old, thriving and healthy, and ready for their forever homes! The puppies were barely 1 lb when they arrived at DPS; they\'re now in the 3-4 lb range and probably won\'t grow much bigger than 10 lbs, if that, so they will forever be the perfect pocket-sized pups, ready to travel with you and go on adventures!</p> <p>The puppies spend their day hanging out in their exercise pen when not on their foster family\'s laps. They are fed 3x a day: 7-8 am, 4-5 pm, and right before bedtime. They live with 4 other (adult) dogs and adore their company; they can often be found engaging in games of chase or tug-o-war with them, or cuddling on the couch in puppy piles. They LOVE treats and will come running at the sound of a treat bag opening and love toys of all shapes and sizes!</p> <p>Thyme is the sort who\'s pretty easygoing and happy to follow the pack. She\'ll do as the others do, but can also explore on her own as needed.</p> <p>The puppies are only an option for homes that have had a dog in the last 5 years. If there are children in the home, they should be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710345/86063342_500x547.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710345/86063342_100x109.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710345/86063348_500x485.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17710/17710345/86063348_100x97.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','','','Seasonings: Thyme','2022-01-30 14:05:50'],
    ['17388515','Available','2021-12-29 15:48:20','','Squawk','','Cat','Tabby / Tiger / Mixed (short coat)','Tabby','Tiger','Male','Yes','Yes','Yes','','','Yes','Adult','','Yes','','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Squawk is a 3 year old handsome cream and white Tabby mix who was one of many cats we rescued from a hoarding situation. Our amazing volunteers have spent countless hours saving and caring for these cats who were in desperate need of help. Its been such a labor of love but the reward of having these wonderful cats find their forever families will be well worth the efforts.</p> <p>His foster home reports he has turned out to be one of their favorite cats they have fostered for us. He has an amazing personality. So full of love. He gets along great with other cats so he could easily join a home with another kitty or cat savvy dog. We think he would do fine with older children as well. If you are looking for a bonded pair, he and Astro could be adopted together. They are currently in the same foster home and love playing and lounging on the cat tree together for hours on end. He is quite the conversationalist too. He is a talker and loves to tell you what\'s on his mind. His foster home reports he will carry on full conversations with them and they find it so endearing. He loves to be pet and brushed and hang out in his cozy cat bed. He is ready to find a home that will appreciate and adore him. If that\'s you, apply to adopt him today!</p> <p>He has been neutered, tested negative for FIV/FeLV, vaccinated, dewormed, flea treatment applied and microchipped. His adoption fee is $100.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388515/84473673_398x586.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388515/84473673_100x147.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388515/83346987_500x538.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388515/83346987_100x107.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388515/83346989_500x403.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388515/83346989_100x80.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388515/84473674_433x504.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388515/84473674_100x116.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Squawk','2021-10-27 16:50:33'],
    ['17684800','Available','2022-01-27 22:42:16','','Timothee','','Dog','Dachshund / Corgi / Mixed (medium coat)','Dachshund','Corgi','Male','Yes','','','','','Yes','Adult','','Yes','Small','Yes','Tan/Yellow/Fawn with White','Medium','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption Fee: $650</p> <p>Timothee is a 3 year old Dachshund-Corgi mix. He weighs 13lbs. He was a rescue from the shelter. He is a sweet and gentle boy. He\'s so well behaved. He\'ll be a bit shy at first but if you bring him up on the couch, he will happily snuggle with you and a blanket. He also doesn\'t mind if you want to carry around too!</p> <p>Timothee\'s Day:</p> <p>Timothee usually gets up between 6am-7am. He waits patiently in his kennel until his door is opened. His foster takes him for a short walk so he can go to the bathroom right off the bat. Following that little jaunt, he eats breakfast. After eating, he goes and lounges on the couch. He likes to keep his people within insight or where he can check in on them periodically. Early afternoon, he goes on a short walk returning to snuggle on the couch in his blanket. His foster likes to engage in play &amp; he most shows interest in playing with tug. After dinner in the evening, he generally goes on another walk. At night generally around 10pm he goes into his crate for the night. He sleeps in there and he likes his crate.</p> <p>Though he doesn\'t seem to be food motivated so far and doesn\'t really take your basic treats, he does like the high value treats like chicken. That proves he is a normal pup! He loves ear scratches and belly rubs. He loves to run around the yard and play. He has a good bit of energy without being over the top energetic. He has met the foster\'s 6 year old Granddaughter and loved her. He loves to go on walks and just needs someone with confidence to guide and love him. He needs that little bit of reassurance and then he\'s off to explore. He\'s so adorable that you won\'t be able to contain yourself and you\'ll want to snuggle with him and protect him!</p> <p dir=\"ltr\">His foster mom said, \"Once he started to bond with me, he\'d lie against me with his little body touching me or will snuggle under my arm. He now gives me his belly up and loves belly rubs. He has rolled onto his back for rubs and will ever so gently play. He\'s not a biter or a nipper. He\'s so gentle. He has given me two kisses on my hand. He doesn&rsquo;t jump on you nor does he demand attention other than checking in on your now and then.\"</p> <p dir=\"ltr\">Timothee is crated when his foster mom runs errands. He\'s good in the crate and doesn\'t bark and doesn\'t even bark when she returns. She likes that she can get all her groceries in before letting him out and he\'s the perfect gentleman just waiting patiently for her. Timothee likes to go on walks. His walking ability has improved greatly since he arrived in his foster home and goes on regular walks. He initially pulled but his foster mom would just stop until there was slack in the leash and then resume walking. He\'s improved to about 60% of the time he is a loose leash walker. Wow! That\'s amazing in just 2 weeks. Imagine how much better he\'ll be in another 2 weeks! He is funny though. If she turns to go back home too soon, he just plops himself down. He stops all together. But if she\'s serious and gives the leash a little tug, he gives in and heads back home. Timothee hasn\'t had an accident in the house since the first day. There were first day jitters as everyone got use to everyone else and figured out a routine. But now he walks up to the sliding door when he wants to go outside and do his business. Timothee has barked once when someone was at the door but that\'s the only time he has barked in his foster home.</p> <p dir=\"ltr\">Timothee\'s ideal home will be one that likes to go on walks and isn\'t overly energetic or too loud. He\'s a sensitive type and responds well to the calmness of his foster environment. He\'d also love to cuddle regularly if that\'s ok.</p> <p>His foster home\'s final words: \"I think he is the perfect dog to adopt for first time pet owner. He doesn&rsquo;t exhibit behaviors that require work to overcome. He isn&rsquo;t a barker. He&rsquo;s good with kids and he is so gentle and sweet. Or he\'s just a great option for someone looking for a sweet little companion.</p> <p>Timothee is an option for all kinds of homes from novice to experience. If there are children they need to be over the age of 6.</p> <p dir=\"ltr\">&nbsp;</p> <p>&nbsp;</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684800/85898517_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684800/85898517_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684800/85898522_500x499.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684800/85898522_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684800/85898531_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684800/85898531_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684800/85898537_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17684/17684800/85898537_100x100.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Timothee','2022-01-24 01:21:54'],
    ['17659414','Available','2022-01-29 16:15:41','','Valentine: Candy','','Dog','Italian Greyhound / Chihuahua / Mixed (short coat)','Italian Greyhound','Chihuahua','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $650</p> <p>The Valentines puppies are here to make your Valentine\'s Day extra special! This litter of adorable little ones was rescued from a shelter and have been growing up in a foster home. They\'re 12 weeks old and ready for their forever homes!</p> <p>Here is their daily routine in their foster home:</p> <p>The puppies sleep together in their crate in a cute puppy pile. They wake up at 7, immediately are let out for potty, come back in for breakfast, outside for a quick playtime. They are let out every 3-4 hours for potty. They will become active for 30 mins followed by 1 hr naps, cycle repeating all day. They nap in a dog bed.</p> <p>The Valentine gals are super playful and energetic. They love grabbing their toys, dragging them around, and then hiding them all over the place.</p> <p>Sweetheart in particular is toy obsessed! Her adopters will need to buy plenty of plushies and squeakies... this girl can\'t get enough!&nbsp;Sweetheart is the cuddly one. She usually loves to chill in a sunny spot while her siblings play. She loves human contact and will simply flop down next to a human waiting to be picked up. She is very happy to be picked up, in your lap and be petted and belly scratched. While all the puppies are silly, Sweetheart is the silliest; she does this thing where she moves towards a human while on her back, asking to be picked up/pets.</p> <p>Candy is the most mellow of the group, content to rest on a bed or a lap. She\'s a snuggle bug and will follow her siblings around, but is also content to just be with a human. Her foster says she\'s a \"prim and proper lady,\" because she\'s not all about the silly antics of her siblings. She\'s mature for her age!</p> <p>Hugs is brave and loves to explore. She\'ll check out every nook and cranny of the yard and the house. She also loves playing tug-o-war with Kisses! She is super-excited for puppy training to start. She\'s a treat-motivated girl and is always hungry for more! She\'s also a total love bug. She also loves cuddling with the resident big dog and would be a great option to join an adult dog in the home!</p> <p>&nbsp;</p> <p>Kisses is the undoubted leader of the group. She is the bravest, afraid of nothing and enjoys all activities. She will chase balls... but hasn\'t quite mastered the bringing them back part just yet! She will roughhouse with a dog 10 times her size. She will approach humans for pets and kisses. She does not prefer to be picked up but will climb your lap. She is active and energetic. She will play equally with dogs and humans.</p> <p>The puppies are only an option for a home that has had a dog in the last 5 years. If there are children in the home, they need to be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659414/85955089_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659414/85955089_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659414/85955104_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659414/85955104_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659414/85955113_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659414/85955113_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659414/85955129_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659414/85955129_100x100.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Valentine: Candy','2022-01-17 05:24:45'],
    ['17659409','Available','2022-01-29 16:15:51','','Valentine: Hugs','','Dog','Italian Greyhound / Chihuahua / Mixed (short coat)','Italian Greyhound','Chihuahua','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $650</p> <p>The Valentines puppies are here to make your Valentine\'s Day extra special! This litter of adorable little ones was rescued from a shelter and have been growing up in a foster home. They\'re 12 weeks old and ready for their forever homes!</p> <p>Here is their daily routine in their foster home:</p> <p>The puppies sleep together in their crate in a cute puppy pile. They wake up at 7, immediately are let out for potty, come back in for breakfast, outside for a quick playtime. They are let out every 3-4 hours for potty. They will become active for 30 mins followed by 1 hr naps, cycle repeating all day. They nap in a dog bed.</p> <p>The Valentine gals are super playful and energetic. They love grabbing their toys, dragging them around, and then hiding them all over the place.</p> <p>Sweetheart in particular is toy obsessed! Her adopters will need to buy plenty of plushies and squeakies... this girl can\'t get enough! Sweetheart is the cuddly one. She usually loves to chill in a sunny spot while her siblings play. She loves human contact and will simply flop down next to a human waiting to be picked up. She is very happy to be picked up, in your lap and be petted and belly scratched. While all the puppies are silly, Sweetheart is the silliest; she does this thing where she moves towards a human while on her back, asking to be picked up/pets.</p> <p>Candy is the most mellow of the group, content to rest on a bed or a lap. She\'s a snuggle bug and will follow her siblings around, but is also content to just be with a human. Her foster says she\'s a \"prim and proper lady,\" because she\'s not all about the silly antics of her siblings. She\'s mature for her age!</p> <p>Hugs is brave and loves to explore. She\'ll check out every nook and cranny of the yard and the house. She also loves playing tug-o-war with Kisses! She is super-excited for puppy training to start. She\'s a treat-motivated girl and is always hungry for more! She\'s also a total love bug. She also loves cuddling with the resident big dog and would be a great option to join an adult dog in the home!</p> <p>Kisses is the undoubted leader of the group. She is the bravest, afraid of nothing and enjoys all activities. She will chase balls... but hasn\'t quite mastered the bringing them back part just yet! She will roughhouse with a dog 10 times her size. She will approach humans for pets and kisses. She does not prefer to be picked up but will climb your lap. She is active and energetic. She will play equally with dogs and humans.</p> <p>The puppies are only an option for a home that has had a dog in the last 5 years. If there are children in the home, they need to be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659409/85955436_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659409/85955436_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659409/85955450_500x499.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659409/85955450_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659409/85955470_500x499.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659409/85955470_100x100.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Valentine: Hugs','2022-01-17 05:22:31'],
    ['17659410','Available','2022-01-29 16:15:58','','Valentine: Kisses','','Dog','Italian Greyhound / Chihuahua / Mixed (short coat)','Italian Greyhound','Chihuahua','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $650</p> <p>The Valentines puppies are here to make your Valentine\'s Day extra special! This litter of adorable little ones was rescued from a shelter and have been growing up in a foster home. They\'re 12 weeks old and ready for their forever homes!</p> <p>Here is their daily routine in their foster home:</p> <p>The puppies sleep together in their crate in a cute puppy pile. They wake up at 7, immediately are let out for potty, come back in for breakfast, outside for a quick playtime. They are let out every 3-4 hours for potty. They will become active for 30 mins followed by 1 hr naps, cycle repeating all day. They nap in a dog bed.</p> <p>The Valentine gals are super playful and energetic. They love grabbing their toys, dragging them around, and then hiding them all over the place.&nbsp;</p> <p>Sweetheart in particular is toy obsessed! Her adopters will need to buy plenty of plushies and squeakies... this girl can\'t get enough! Sweetheart is the cuddly one. She usually loves to chill in a sunny spot while her siblings play. She loves human contact and will simply flop down next to a human waiting to be picked up. She is very happy to be picked up, in your lap and be petted and belly scratched. While all the puppies are silly, Sweetheart is the silliest; she does this thing where she moves towards a human while on her back, asking to be picked up/pets.</p> <p>Candy is the most mellow of the group, content to rest on a bed or a lap. She\'s a snuggle bug and will follow her siblings around, but is also content to just be with a human. Her foster says she\'s a \"prim and proper lady,\" because she\'s not all about the silly antics of her siblings. She\'s mature for her age!</p> <p>Hugs is brave and loves to explore. She\'ll check out every nook and cranny of the yard and the house. She also loves playing tug-o-war with Kisses! She is super-excited for puppy training to start. She\'s a treat-motivated girl and is always hungry for more! She\'s also a total love bug. She also loves cuddling with the resident big dog and would be a great option to join an adult dog in the home!</p> <p>Kisses is the undoubted leader of the group. She is the bravest, afraid of nothing and enjoys all activities. She will chase balls... but hasn\'t quite mastered the bringing them back part just yet! She will roughhouse with a dog 10 times her size. She will approach humans for pets and kisses. She does not prefer to be picked up but will climb your lap. She is active and energetic. She will play equally with dogs and humans.</p> <p>The puppies are only an option for a home that has had a dog in the last 5 years. If there are children in the home, they need to be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659410/85955550_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659410/85955550_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659410/85955561_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659410/85955561_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659410/85955569_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659410/85955569_100x100.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Valentine: Kisses','2022-01-17 05:23:15'],
    ['17659413','Available','2022-01-29 16:16:05','','Valentine: Sweetheart','','Dog','Italian Greyhound / Chihuahua / Mixed (short coat)','Italian Greyhound','Chihuahua','Female','Yes','Yes','Yes','Yes','','','Baby','','Yes','Small','Yes','','Short','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Adoption fee: $650</p> <p>The Valentines puppies are here to make your Valentine\'s Day extra special! This litter of adorable little ones was rescued from a shelter and have been growing up in a foster home. They\'re 12 weeks old and ready for their forever homes!</p> <p>Here is their daily routine in their foster home:</p> <p>The puppies sleep together in their crate in a cute puppy pile. They wake up at 7, immediately are let out for potty, come back in for breakfast, outside for a quick playtime. They are let out every 3-4 hours for potty. They will become active for 30 mins followed by 1 hr naps, cycle repeating all day. They nap in a dog bed.&nbsp;</p> <p>The Valentine gals are super playful and energetic. They love grabbing their toys, dragging them around, and then hiding them all over the place.</p> <p>Sweetheart in particular is toy obsessed! Her adopters will need to buy plenty of plushies and squeakies... this girl can\'t get enough! Sweetheart is the cuddly one. She usually loves to chill in a sunny spot while her siblings play. She loves human contact and will simply flop down next to a human waiting to be picked up. She is very happy to be picked up, in your lap and be petted and belly scratched. While all the puppies are silly, Sweetheart is the silliest; she does this thing where she moves towards a human while on her back, asking to be picked up/pets.</p> <p>Candy is the most mellow of the group, content to rest on a bed or a lap. She\'s a snuggle bug and will follow her siblings around, but is also content to just be with a human. Her foster says she\'s a \"prim and proper lady,\" because she\'s not all about the silly antics of her siblings. She\'s mature for her age!</p> <p>Hugs is brave and loves to explore. She\'ll check out every nook and cranny of the yard and the house. She also loves playing tug-o-war with Kisses! She is super-excited for puppy training to start. She\'s a treat-motivated girl and is always hungry for more! She\'s also a total love bug. She also loves cuddling with the resident big dog and would be a great option to join an adult dog in the home!</p> <p>Kisses is the undoubted leader of the group. She is the bravest, afraid of nothing and enjoys all activities. She will chase balls... but hasn\'t quite mastered the bringing them back part just yet! She will roughhouse with a dog 10 times her size. She will approach humans for pets and kisses. She does not prefer to be picked up but will climb your lap. She is active and energetic. She will play equally with dogs and humans.</p> <p>The puppies are only an option for a home that has had a dog in the last 5 years. If there are children in the home, they need to be over the age of 6.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659413/85954283_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659413/85954283_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659413/85954291_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659413/85954291_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659413/85954296_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659413/85954296_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659413/85954303_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17659/17659413/85954303_100x100.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Valentine: Sweetheart','2022-01-17 05:24:06'],
    ['17700149','Available','2022-01-31 19:14:13','','Will Ferrell','','Dog','Cockapoo (long coat)','Cockapoo','','Male','','Yes','','Yes','','','Adult','','Yes','Small','Yes','','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $750</p> <p>Will Farrell is a 2 year old Cockapoo that we rescued from a local shelter. He weighs about 20 lbs. Mr. Farrell came to us a matted mess, with fur loss on his back end due to fleas having chewed it away. He was likely on the streets for some time before Animal Control caught him, and poor dude was stressed out in the shelter. Not to worry... DPS to the rescue! Once our volunteer broke him out of his jail... err, kennel, he was all tail wags and trotted happily to her car for a ride to freedom. One visit to the groomer later, and look at our fancy boy now!</p> <p>Here is his routine in his foster home:&nbsp;</p> <p>Will is a very energetic dog so he has a playful day! He wakes up around 7:30 and goes for a mile walk where he does his morning business. After that, he eats breakfast with us and has his morning zoomies. He naps periodically throughout the day but usually entertains himself with his pink squeaky toy. Around 12:30, he goes on another mile loop. He is happy chilling on the couch and chewing his toy while we finish work for the day. Around 5 pm, he goes on a 2-mile hike. Around 6:30, he has dinner with us and then snuggles up with us on the couch. We take him out around 10:00 for a final bathroom run and he goes to be at 10:30.</p> <p>Will has the sweetest personality. In the first day or two, he opened up to us immediately and just wanted snuggles! At first, we thought he\'d be a velcro dog since he was following us everywhere, but now, he is a bit more independent and self-sufficient. When we walk around or go up to him, he will ask for pets, but if we are busy, he will lay down and snuggle with his toy. He likes to be able to see us or know what we\'re doing, but he is not 100% a velcro dog. If we\'re in a different room for a long time where he can\'t see us, he\'ll come to check in on us and will go back to roaming the apartment. Will is the epitome of happiness and love. He is very energetic but knows when it\'s time to relax and wind down. He is gentle with everyone he meets and just enjoys all the good things about life!</p> <p>Will is great on walks. He walks very fast for a little guy so he does pull a bit but nothing crazy. He does get easily distracted by people, dogs, squirrels, etc., but if you have a good grip on the leash, he doesn\'t go too far. Will appears to be house-trained. He did not have any accidents inside our apartment and knows exactly to go pee and poop when we\'re outside. He is also crate-trained. He doesn\'t mind being in his crate if he has his toy with him.&nbsp;</p> <p>You would never guess that he has had a tough life because he is so positive and happy. He appreciates everything that\'s given to him. I really can\'t say one bad thing about Will, he has stolen our hearts and will undoubtedly do the same to his forever home!</p> <p>Will Farrell is only an option for a home with some prior dog experience. If there are children in the home, they should be over the age of 12.</p> <p>&nbsp;</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700149/85997057_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700149/85997057_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700149/85997058_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700149/85997058_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700149/85997059_500x499.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700149/85997059_100x100.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700149/85997060_500x500.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700149/85997060_100x100.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','Will Ferrell','2022-01-27 18:30:28'],
    ['17700411','Available','2022-01-30 13:39:04','','Wish','','Dog','Cavalier King Charles Spaniel / Mixed (long coat)','Cavalier King Charles Spaniel','','Male','Yes','Yes','','Yes','','','Adult','','Yes','Small','Yes','','Long','','No','No','','','','','<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p> <p>Adoption fee: $700</p> <p>Wish is a 1 year old CKC Spaniel mix who we rescued from the shelter. He weighs about 10 lbs. He has been fostered with his buddy Dream (they came into the shelter together) and a foster sibling. Here is his routine in his foster home!</p> <p>A typical day starts fairly early for us; we wake up around 5:45am, let the boys out of their crates and they come and have snuggles on the bed with us for 15 minutes. Next they go out and go potty in the yard and have a little explore. We typically take them on a short 10-15 min walk in the morning before breakfast (they\'re still learning to walk on the leash), then they have breakfast and do a little bit of training. They spend the majority of the day sleeping and sunbathing, with a few bursts of play thrown in. When I get home from work around 5pm they go out for another slightly longer walk this time, but no more than 30 minutes. They all then get a burst of energy and spend about 20 minutes running around the yard playing, before we settle down and give them their dinner. After dinner it\'s couch time and they spend the evening with us on either on the couch or the floor by our feet sleeping. They go out for a potty break before bedtime around 9:30-10pm and then it\'s in to their crate for bed and not a peep until morning.</p> <p>Wish is a super happy guy! He has such a great personality. He is definitely the braver of the two. He was obviously nervous when we first got him, but as soon as he realized our hands meant pets and love he was always happy to see us. It didn\'t take him long to settle in at all, and he was fast asleep on the couch with us a few hours after getting him. He makes me laugh every day with his cute little face; all he wants to do is please you. He loves snuggling on the couch with us, on his back getting his belly rubbed, but he also loves sitting on the back of the couch above our head. He is a velcro dog who will follow you from room to room but he will also happily sleep in his crate during the day if need be (we sometimes put him in there when we\'re eating, because he\'s still learning his manners around human food.)</p> <p>Wish is such a happy chappy, he always looks like he has a smile on his little face and with his cute underbite you can\'t help but smile back at him, he really is an absolute joy to have around.</p> <p>Wish loves playing with his foster doggy sibling and would be a great option to be a second dog in the home, though he also adores his humans and would love to be spoiled by his new owner! He is only an option for a home with some prior dog experience. If there are children, they should be over the age of 8.</p><br><br></p>','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700411/85992731_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700411/85992731_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700411/85992733_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700411/85992733_100x133.jpg" width="'+this.pictmnMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700411/85992734_500x666.jpg" width="'+this.picMaxWidth+'">','<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17700/17700411/85992734_100x133.jpg" width="'+this.pictmnMaxWidth+'">','','','','','','','','','','Wish','2022-01-27 20:21:09']
    ];
    }
  
    this.init = function() {
  
      this.buildPets();
  
      if (!this.sortbyField) {
        this.sortbyField = 'lastUpdated';
        this.sortbyOrder = 'desc';
      }
  
      if (cgiVar('toolkitAnimalID')) {
        showDetails(this.name, null, cgiVar('toolkitAnimalID'));
      }
  
      this.fieldsArray = this.fields.split(',');
  
      var orderby = readCookie('rgOrderby');
      if (orderby && (this.mode == 'list')) {
        if (this.sortbyField && this.sortbyOrder && orderby == this.petFields[this.sortbyField]['index']){
          this.order = this.sortbyOrder;
        }
        this.sortPetArrayOnLoad(orderby);
      } else {
        if (this.sortbyField && this.sortbyOrder) {
          this.order = this.sortbyOrder;
          this.sortPetArrayOnLoad(this.petFields[this.sortbyField]['index']);
        }
      }
  
      this.page = 1;
  
    }
  
  
    this.list = function(container) {
      this.listId = container;
      this.mode = 'list';
      this.init();
      this.writeList();
  
    }
  
    this.list2 = function(container) {
      this.listId = container;
      this.mode = 'list2';
      this.init();
      this.writeList2();
  
    }
  
    this.grid = function(container) {
      this.listId = container;
      this.mode = 'grid';
      this.init();
      this.writeGrid();
  
    }
  
    this.random = function(div, url) {
      this.buildPets();
      divObj = document.getElementById(div);
      this.petsWithPic = new Array();
      for (x = 0; x < this.pet.length; x++) {
        if (this.pet[x][this.petFields['pictmn1']['index']]) {
          this.petsWithPic.push(x);
        }
      }
      if (this.petsWithPic.length == 0) return false;
      var r=Math.floor(Math.random()*this.petsWithPic.length);
      divObj.className = 'rgPetRandom';
      divObj.innerHTML = '<div class="randomTitle">Featured Adoptable Pet</div>'+this.pet[this.petsWithPic[r]][this.petFields['pictmn1']['index']] +
          '<div class="randomPetName">'+this.pet[this.petsWithPic[r]][this.petFields['name']['index']]+'</div>'+
          '<div class="randomPetBreed">'+this.pet[this.petsWithPic[r]][this.petFields['breed']['index']]+'</div>';
      divObj.animalID = this.pet[this.petsWithPic[r]][this.petFields['animalID']['index']];
      divObj.onclick = function(e) {
        if (url.indexOf('?') == -1) url += '?';
        location.href = url+'&toolkitAnimalID='+this.animalID;
      }
    }
  
    this.featured = function(div, url, animalID) {
      this.buildPets();
      divObj = document.getElementById(div);
      for (x = 0; x < this.pet.length; x++) {
        if (this.pet[x][this.petFields['animalID']['index']] == animalID && this.pet[x][this.petFields['pictmn1']['index']]) {
          var rowNumber = x;
          break;
        }
      }
      if (rowNumber === false) { alert('failed'); return false; }
      divObj.className = 'rgPetRandom';
      divObj.innerHTML = '<div class="randomTitle">Featured Adoptable Pet</div>'+this.pet[rowNumber][this.petFields['pictmn1']['index']] +
          '<div class="randomPetName">'+this.pet[rowNumber][this.petFields['name']['index']]+'</div>'+
          '<div class="randomPetBreed">'+this.pet[rowNumber][this.petFields['breed']['index']]+'</div>';
      divObj.animalID = animalID;
      divObj.onclick = function(e) {
        if (url.indexOf('?') == -1) url += '?';
        location.href = url+'&toolkitAnimalID='+animalID;
      }
    }
  
    this.detail = function() {
  
      this.init();
      this.animalID = cgiVar('toolkitAnimalID');
  
      for (x=0; x<this.pet.length; x++) {
        if (this.pet[x][this.petFields['animalID']['index']] == this.animalID) {
          this.currentAnimalIndex = x;
          for (y=0; y<this.fieldsArray.length; y++) {
            obj = document.getElementById('pet'+this.fieldsArray[y]);
            if (obj) {
              var val = this.pet[x][this.petFields[this.fieldsArray[y]]['index']]
              if (val != '') {
                obj.innerHTML = val;
              } else if (this.hideEmptyFields) {
                field = document.getElementById('pet'+this.fieldsArray[y]+'Field');
                if (field) field.style.display = 'none';
              }
            }
          }
        }
      }
  
    }
  
    this.writeList = function() {
  
      var petContainer = document.getElementById(this.listId);
      //alert(this.listId);
  
  
      var table = document.createElement('table');
      table.cellSpacing = 0;
      table.id = 'rgPetTable'+this.name;
      table.className = 'rgPetTable list';
  
      var thead = document.createElement('thead');
  
      if (this.enableSearch) {
        var search = '';
          search += '<table class="nostyles" cellpadding="0" cellspacing="0" border="0"><tbody><tr>';
        if (this.paging) search += '<td><span id="prevButtons" style="float:left;"></span></td>';
        search += '<td><form method="POST" name="rgPetsSearchForm'+this.name+'" id="rgPetsSearchForm'+this.name+'" onSubmit="return '+this.name+'.setupSearch(this);" style="display:inline;">' +
          '<input type="text" name="rgPetsSearchText" id="rgPetsSearchText'+this.name+'">&nbsp;' +
          '<input type="submit" value="Search!" id="rgSearchButton'+this.name+'">&nbsp;' +
          '<input type="button" value="View all Animals" id="rgSearchClearButton'+this.name+'" onClick="'+this.name+'.clearSearch(document.rgPetsSearchForm'+this.name+');">' +
          '</form></td>';
        if (this.paging) search += '<td><span id="nextButtons" style="float:right;"></span></td>';
        if (this.paging) search += '</tr><tr><td colspan="3"><span id="pageCount" style="white-space:nowrap;"></span></td>';
        search += '</tr></tbody></table>';
        var tr = document.createElement('tr');
        tr.className = 'rgPetTableHeadSearch';
        var td = document.createElement('td');
        td.colSpan = this.fieldsArray.length;
        td.align = 'center';
        td.id = 'rgPetTableHeadSearch'+this.name;
        td.innerHTML = search;
        tr.appendChild(td);
        thead.appendChild(tr);
      } else if (this.paging) {
        search += '<table cellpadding="0" cellspacing="0" border="0"><tbody><tr>';
        if (this.paging) search += '<td><span id="prevButtons" style="float:left;"></span></td>'+
            '<td><span id="pageCount" style="white-space:nowrap;"></span></td>'+
            '<td><span id="nextButtons" style="float:right;"></span></td>';
        search += '</tr></tbody></table>';
        var tr = document.createElement('tr');
        tr.className = 'rgPetTableHeadSearch';
        var td = document.createElement('td');
        td.colSpan = this.fieldsArray.length;
        td.align = 'center';
        td.id = 'rgPetTableHeadSearch'+this.name;
        td.innerHTML = search;
        tr.appendChild(td);
        thead.appendChild(tr);
      }
  
      var tr = document.createElement('tr');
      tr.id = 'rgPetTableHeadFields'+this.name;
      tr.className = 'rgPetTableHeadFields';
  
      for (x=0; x<this.fieldsArray.length; x++) {
        var td = document.createElement('td');
        //td.id = this.name+"TableHeader" + this.fieldsArray[x];
        td.innerHTML = '<a href="" onClick="'+this.name+'.sortby(\'' + this.petFields[this.fieldsArray[x]]['index'] + '\'); return false;">' + this.petFields[this.fieldsArray[x]]['name'] + '</a>';
        tr.appendChild(td);
      }
  
      thead.appendChild(tr);
  
      table.appendChild(thead);
  
      var tbody = document.createElement('tbody');
  
      var rowCounter=0;
      this.displayablePets = 0;
      var petsWrittenOut = 0;
  
      if (this.page) {
        start = (this.page-1)*this.perPage;
      } else {
        this.page = 1;
        start = 0;
      }
  
      for (var y=0; y<this.pet.length; y++) {
  
        if (this.searchText) {
          var skipThisPet = true;
          for (var x=0; x<this.pet[y].length; x++) {
            val = String(this.pet[y][x]);
            if (val != '') {
              val = val.toUpperCase();
              if (val.indexOf(this.searchText.toUpperCase()) != -1) {
                skipThisPet = false;
              }
            }
          }
          if (skipThisPet) continue;
        }
  
        skipThisPet = false;
  
        for (i in this.petFields) {
          if (typeof(this.petFields[i]['filterby']) != 'undefined') {
            val = String(this.pet[y][this.petFields[i]['index']]);
            val = val.toUpperCase();
            var filterStr = String(this.petFields[i]['filterby']);
            filterStr = filterStr.toUpperCase();
            if (filterStr != val) {
              skipThisPet = true;
            }
          }
        }
        if (skipThisPet) continue;
  
        this.displayablePets += 1;
  
        if (this.displayablePets > this.page * this.perPage) continue;
        if (this.displayablePets <= start) continue;
  
        petsWrittenOut += 1;
  
        var tr = document.createElement('tr');
        tr.rowNumber = y;
        tr.id = this.name+y;
        tr.rgPetsClassName = this.name;
        tr.animalID = this.pet[y][this.petFields['animalID']['index']];
        if (isEven(rowCounter)) {
          tr.rowNumber = y;
          tr.origClassName = 'rgPetTableRowEven';
          tr.className = 'rgPetTableRowEven';
        } else {
          tr.origClassName = 'rgPetTableRowOdd';
          tr.className = 'rgPetTableRowOdd';
        }
        rowCounter+=1;
  
        if ('Yes' == 'Yes') {
          tr.onclick = function(evt) { showDetails(this.rgPetsClassName, this.rowNumber); };
          tr.onmouseover = function(evt) { this.className = 'rgPetTableRowOver'; };
          tr.onmouseout = function(evt) { this.className = this.origClassName; };
        } else {
          tr.onmouseover = function(evt) { this.className = 'rgPetTableRowOverInactive'; };
          tr.onmouseout = function(evt) { this.className = this.origClassName; };
        }
        //rgPets.pet[this.rowNumber][rgPets.petFields['animalID']['index']], rgPets.detailId); };
  
        for (x=0; x<this.fieldsArray.length; x++) {
  
          td = document.createElement('td');
          td.className = "rgPetTableCell" + this.fieldsArray[x] + this.name;
          var fieldValue = this.pet[y][this.petFields[this.fieldsArray[x]]['index']];
          if (typeof(this.petFields[this.fieldsArray[x]]['listLength']) != "undefined") {
            if (fieldValue.length > this.petFields[this.fieldsArray[x]]['listLength']) {
              fieldValue = fieldValue.substring(0, this.petFields[this.fieldsArray[x]]['listLength']);
            }
          }
          var val = '<div class=\"pet' + this.fieldsArray[x] + '\">';
          val += fieldValue + '</div>';
          if (val) {
            td.innerHTML = val;
          }
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
  
      }
  
      if (rowCounter == 0) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.colSpan = this.fieldsArray.length;
        td.className = 'rgPetTableRowZeroPets';
        td.innerHTML = 'No pets found.';
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
  
      table.appendChild(tbody);
      petContainer.innerHTML = '';
      petContainer.appendChild(table);
  
      if (this.searchText) {
        searchForm = eval('document.rgPetsSearchForm'+this.name);
        searchForm.rgPetsSearchText.value = this.searchText;
      }
  
      this.pages = Math.ceil(this.displayablePets/this.perPage);
      if (this.paging && this.displayablePets > rowCounter) {
        obj = document.getElementById('nextButtons');
        obj2 = document.getElementById('pageCount');
        obj2.innerHTML = '(page '+this.page+' of '+this.pages+' )';
        if (this.pages > this.page) {
          obj.innerHTML = '<a href="#" onClick="'+this.name+'.page+=1;'+this.name+'.writeList();return false;">Next&nbsp;&raquo;</a>';
        } else {
          obj.innerHTML = 'Next&nbsp;&raquo;';
        }
        obj = document.getElementById('prevButtons');
        if (this.page > 1) {
          obj.innerHTML = '<a href="#" onClick="'+this.name+'.page-=1;'+this.name+'.writeList();return false;">&laquo;&nbsp;Previous</a>';
        } else {
          obj.innerHTML = '&laquo;&nbsp;Previous';
        }
      }
  
    }
  
    this.writeList2 = function() {
  
      var petContainer = document.getElementById(this.listId);
      //alert(this.listId);
  
      var table = document.createElement('table');
      table.cellSpacing = 0;
      table.id = 'rgPetTable'+this.name;
      table.className = 'rgPetTable list2';
  
      var thead = document.createElement('thead');
  
      if (this.enableSearch) {
        var search = '';
        search += '<table class="nostyles" cellpadding="0" cellspacing="0" border="0"><tbody><tr>';
        if (this.paging) search += '<td><span id="prevButtons" style="float:left;"></span></td>';
        search += '<td><form method="POST" name="rgPetsSearchForm'+this.name+'" id="rgPetsSearchForm'+this.name+'" onSubmit="return '+this.name+'.setupSearch(this);" style="display:inline;">' +
          '<input type="text" name="rgPetsSearchText" id="rgPetsSearchText'+this.name+'">&nbsp;' +
          '<input type="submit" value="Search!" id="rgSearchButton'+this.name+'">&nbsp;' +
          '<input type="button" value="View all Animals" id="rgSearchClearButton'+this.name+'" onClick="'+this.name+'.clearSearch(document.rgPetsSearchForm'+this.name+');">' +
          '</form></td>';
        if (this.paging) search += '<td><span id="nextButtons" style="float:right;"></span></td>';
        if (this.paging) search += '</tr><tr><td colspan="3"><span id="pageCount" style="white-space:nowrap;"></span></td>';
        search += '</tr></tbody></table>';
        var tr = document.createElement('tr');
        tr.className = 'rgPetTableHeadSearch';
        var td = document.createElement('td');
        td.colSpan = this.fieldsArray.length;
        td.align = 'center';
        td.id = 'rgPetTableHeadSearch'+this.name;
        td.innerHTML = search;
        tr.appendChild(td);
        thead.appendChild(tr);
      } else if (this.paging) {
        var search = '';
        search += '<table cellpadding="0" cellspacing="0" border="0"><tbody><tr>';
        if (this.paging) search += '<td><span id="prevButtons" style="float:left;"></span></td>'+
            '<td><span id="pageCount" style="white-space:nowrap;"></span></td>'+
            '<td><span id="nextButtons" style="float:right;"></span></td>';
        search += '</tr></tbody></table>';
        var tr = document.createElement('tr');
        tr.className = 'rgPetTableHeadSearch';
        var td = document.createElement('td');
        td.colSpan = this.fieldsArray.length;
        td.align = 'center';
        td.id = 'rgPetTableHeadSearch'+this.name;
        td.innerHTML = search;
        tr.appendChild(td);
        thead.appendChild(tr);
      }
  
      table.appendChild(thead);
  
      var tbody = document.createElement('tbody');
  
      var rowCounter=0;
      this.displayablePets = 0;
      var petsWrittenOut = 0;
  
      if (this.page) {
        start = (this.page-1)*this.perPage;
      } else {
        this.page = 1;
        start = 0;
      }
  
      for (var y=0; y<this.pet.length; y++) {
  
        if (this.searchText) {
          var skipThisPet = true;
          for (var x=0; x<this.pet[y].length; x++) {
            val = String(this.pet[y][x]);
            if (val != '') {
              val = val.toUpperCase();
              if (val.indexOf(this.searchText.toUpperCase()) != -1) {
                skipThisPet = false;
              }
            }
          }
          if (skipThisPet) continue;
        }
  
        skipThisPet = false;
  
        for (i in this.petFields) {
          if (typeof(this.petFields[i]['filterby']) != 'undefined') {
            val = String(this.pet[y][this.petFields[i]['index']]);
            val = val.toUpperCase();
            var filterStr = String(this.petFields[i]['filterby']);
            filterStr = filterStr.toUpperCase();
            if (filterStr != val) {
              skipThisPet = true;
            }
          }
        }
        if (skipThisPet) continue;
  
        this.displayablePets += 1;
  
        if (this.displayablePets > this.page * this.perPage) continue;
        if (this.displayablePets <= start) continue;
  
        petsWrittenOut += 1;
  
        var tr = document.createElement('tr');
        tr.rowNumber = y;
        tr.id = this.name+y;
        tr.rgPetsClassName = this.name;
        tr.animalID = this.pet[y][this.petFields['animalID']['index']];
        if (isEven(rowCounter)) {
          tr.rowNumber = y;
          tr.origClassName = 'rgPetTableRowEven';
          tr.className = 'rgPetTableRowEven';
        } else {
          tr.origClassName = 'rgPetTableRowOdd';
          tr.className = 'rgPetTableRowOdd';
        }
        rowCounter+=1;
  
        tr.onclick = function(evt) { showDetails(this.rgPetsClassName, this.rowNumber); };
          //rgPets.pet[this.rowNumber][rgPets.petFields['animalID']['index']], rgPets.detailId); };
        tr.onmouseover = function(evt) { this.className = 'rgPetTableRowOver'; };
        tr.onmouseout = function(evt) { this.className = this.origClassName; };
  
        td = document.createElement('td');
  
        var str = '';
        if (this.picSize == 'thumbnail') {
          if (this.pet[y][this.petFields['pictmn1']['index']] != '') {
            str += '<div class="rgPetTableCellpictmn1" id="rgPetTableCellpictmn1' + this.name +'">'+this.pet[y][this.petFields['pictmn1']['index']]+'</div>';
          }
        } else if (this.picSize == 'fullsize') {
          if (this.pet[y][this.petFields['pic1']['index']] != '') {
            //alert(this.pet[y][this.petFields['pic1']['index']]);
            str += '<div class="rgPetTableCellpic1" id="rgPetTableCellpic1' + this.name +'">'+this.pet[y][this.petFields['pic1']['index']]+'</div>';
          }
        }
  
        for (x=0; x<this.fieldsArray.length; x++) {
          if (this.pet[y][this.petFields[this.fieldsArray[x]]['index']] == '') continue;
          if (this.petFields[this.fieldsArray[x]]['name']) {
            str += '<div class=\"pet' + this.fieldsArray[x] + '\">' +
                '<span class="rgPetTableCellLabel rgPetTableCellLabel' + this.fieldsArray[x] + ' rgPetTableCellLabel' + this.fieldsArray[x] + this.name + '">' + this.petFields[this.fieldsArray[x]]['name'] + ': </span>' +
                '<span class="rgPetTableCellValue rgPetTableCellValue' + this.fieldsArray[x] + ' rgPetTableCellValue' + this.fieldsArray[x] + this.name + '">' + this.pet[y][this.petFields[this.fieldsArray[x]]['index']] + '</span>' +
                '</div>';
          } else {
            str += '<div class=\"pet' + this.fieldsArray[x] + '\">' +
                '<span class="rgPetTableCellValue' + this.fieldsArray[x] + '">' + this.pet[y][this.petFields[this.fieldsArray[x]]['index']] + '</span>' +
                '</div>';
          }
        }
  
        if (str) {
          td.innerHTML = str;
        }
        tr.appendChild(td);
  
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      petContainer.innerHTML = '';
      petContainer.appendChild(table);
  
      if (this.searchText) {
        searchForm = eval('document.rgPetsSearchForm'+this.name);
        searchForm.rgPetsSearchText.value = this.searchText;
      }
  
      this.pages = Math.ceil(this.displayablePets/this.perPage);
      if (this.paging && this.displayablePets > rowCounter) {
        obj = document.getElementById('nextButtons');
        obj2 = document.getElementById('pageCount');
        obj2.innerHTML = '(page '+this.page+' of '+this.pages+' )';
        if (this.pages > this.page) {
          obj.innerHTML = '<a href="#" onClick="'+this.name+'.page+=1;'+this.name+'.writeList2();return false;">Next&nbsp;&raquo;</a>';
        } else {
          obj.innerHTML = 'Next&nbsp;&raquo;';
        }
        obj = document.getElementById('prevButtons');
        if (this.page > 1) {
          obj.innerHTML = '<a href="#" onClick="'+this.name+'.page-=1;'+this.name+'.writeList2();return false;">&laquo;&nbsp;Previous</a>';
        } else {
          obj.innerHTML = '&laquo;&nbsp;Previous';
        }
      }
  
    }
  
    this.writeGrid = function() {
  
      if (!this.perRow) this.perRow = 4;
      if (!this.rows) this.rows = 3;
  
      this.perPage = (this.perRow * this.rows);
  
      var petContainer = document.getElementById(this.listId);
      //alert(this.listId);
  
      var table = document.createElement('table');
      table.cellSpacing = 0;
      table.id = 'rgPetTable'+this.name;
      table.className = 'rgPetTable grid';
  
      var thead = document.createElement('thead');
  
      if (this.enableSearch) {
        var search = '';
        search += '<table class="nostyles" cellpadding="0" cellspacing="0" border="0"><tbody><tr>';
        if (this.paging) search += '<td><span id="prevButtons'+this.name+'" style="float:left;"></span></td>';
        search += '<td><form method="POST" name="rgPetsSearchForm'+this.name+'" id="rgPetsSearchForm'+this.name+'" onSubmit="return '+this.name+'.setupSearch(this);" style="display:inline;">' +
          '<input type="text" name="rgPetsSearchText" id="rgPetsSearchText'+this.name+'">&nbsp;' +
          '<input type="submit" value="Search!" id="rgSearchButton'+this.name+'">&nbsp;' +
          '<input type="button" value="View all Animals" id="rgSearchClearButton'+this.name+'" onClick="'+this.name+'.clearSearch(document.rgPetsSearchForm'+this.name+');">' +
          '</form></td>';
        if (this.paging) search += '<td><span id="nextButtons'+this.name+'" style="float:right;"></span></td>';
        if (this.paging) search += '</tr><tr><td colspan="3"><span id="pageCount'+this.name+'" style="white-space:nowrap;"></span></td>';
        search += '</tr></tbody></table>';
        var tr = document.createElement('tr');
        tr.className = 'rgPetTableHeadSearch';
        var td = document.createElement('td');
        td.colSpan = this.perRow;
        td.align = 'center';
        td.id = 'rgPetTableHeadSearch'+this.name;
        td.innerHTML = search;
        tr.appendChild(td);
        thead.appendChild(tr);
      } else if (this.paging) {
        var search = '<table cellpadding="0" cellspacing="0" border="0"><tbody><tr>';
        if (this.paging) search += '<td><span id="prevButtons'+this.name+'" style="float:left;"></span></td>'+
            '<td><span id="pageCount'+this.name+'" style="white-space:nowrap;"></span></td>'+
            '<td><span id="nextButtons'+this.name+'" style="float:right;"></span></td>';
        search += '</tr></tbody></table>';
        var tr = document.createElement('tr');
        tr.className = 'rgPetTableHeadSearch';
        var td = document.createElement('td');
        td.colSpan = this.perRow;
        td.align = 'center';
        td.id = 'rgPetTableHeadSearch'+this.name;
        td.innerHTML = search;
        tr.appendChild(td);
        thead.appendChild(tr);
      }
  
      table.appendChild(thead);
  
      var tbody = document.createElement('tbody');
  
      var rowCounter=0;
      this.displayablePets = 0;
      var petsWrittenOut = 0;
  
      if (this.page) {
        start = (this.page-1)*this.perPage;
      } else {
        this.page = 1;
        start = 0;
      }
  
      for (var y=0; y<this.pet.length; y++) {
  
        if (this.searchText) {
          var skipThisPet = true;
          for (var x=0; x<this.pet[y].length; x++) {
            val = String(this.pet[y][x]);
            if (val != '') {
              val = val.toUpperCase();
              if (val.indexOf(this.searchText.toUpperCase()) != -1) {
                skipThisPet = false;
              }
            }
          }
          if (skipThisPet) continue;
        }
  
        skipThisPet = false;
  
        for (i in this.petFields) {
          if (typeof(this.petFields[i]['filterby']) != 'undefined') {
            val = String(this.pet[y][this.petFields[i]['index']]);
            val = val.toUpperCase();
            var filterStr = String(this.petFields[i]['filterby']);
            filterStr = filterStr.toUpperCase();
            if (filterStr != val) {
              skipThisPet = true;
            }
          }
        }
        if (skipThisPet) continue;
  
        this.displayablePets += 1;
  
        if (this.displayablePets > this.page * this.perPage) continue;
        if (this.displayablePets <= start) continue;
  
        petsWrittenOut += 1;
  
        if ((petsWrittenOut-1) % this.perRow === 0) {
  
          // We need to create a new row
          var tr = document.createElement('tr');
          tbody.appendChild(tr);
          rowCounter+=1;
  
        }
  
        td = document.createElement('td');
        td.className = "rgPetTableCell" + this.fieldsArray[x] + this.name;
        td.style.verticalAlign = 'top';
        td.animalID = this.pet[y][this.petFields['animalID']['index']];
        td.animalNumber = y;
  
        var val = '<div class="gridCell">' +
            '<table class="nostyles"><tr>';
  
        if (this.picSize == 'thumbnail') {
          val += '<td style="vertical-align:middle;height:120px;width:' + this.pictmnMaxWidth + 'px;">' +
            this.pet[y][this.petFields['pictmn1']['index']] + '</td>';
        } else if (this.picSize == 'fullsize') {
          val += '<td style="vertical-align:middle;height:120px;width:' + this.picMaxWidth + 'px;">' +
            this.pet[y][this.petFields['pic1']['index']] + '</td>';
        }
        val += '</tr></table></div>';
  
        val += '<div class="petname">'+this.pet[y][this.petFields['name']['index']] + '</div>' +
            '<div class="petbreed">'+this.pet[y][this.petFields['breed']['index']] + '</div>';
        td.innerHTML = val;
  
        if ('Yes' == 'Yes') {
          td.rgPetsClassName = this.name;
          td.onclick = function(evt) { showDetails(this.rgPetsClassName, this.animalNumber, this.animalID); };
          td.onmouseover = function(evt) { this.className = 'rgPetTableCellOver'; };
          td.onmouseout = function(evt) { this.className = this.origClassName; };
        } else {
          td.onmouseover = function(evt) { this.className = 'rgPetTableCellOver'; };
          td.onmouseout = function(evt) { this.className = this.origClassName; };
        }
  
        tr.appendChild(td);
  
        if (y == this.pet.length-1 && (petsWrittenOut-1) % this.perRow !== 0) {
          c = this.displayablePets;
          while (c % this.perRow !== 0) {
            td = document.createElement('td');
            td.className = "rgPetTableCell" + this.fieldsArray[x] + this.name;
            td.innerHTML = '&nbsp;';
            tr.appendChild(td);
            c+=1;
          }
        }
  
      }
  
      if (rowCounter == 0) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.colSpan = this.perRow;
        td.className = 'rgPetTableRowZeroPets';
        td.innerHTML = 'No pets found.';
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
  
      table.appendChild(tbody);
      petContainer.innerHTML = '';
      petContainer.appendChild(table);
  
      if (this.searchText) {
        searchForm = eval('document.rgPetsSearchForm'+this.name);
        searchForm.rgPetsSearchText.value = this.searchText;
      }
  
      this.pages = Math.ceil(this.displayablePets/this.perPage);
      if (this.paging && this.displayablePets > rowCounter) {
        obj = document.getElementById('nextButtons'+this.name);
        obj2 = document.getElementById('pageCount'+this.name);
        obj2.innerHTML = '(page '+this.page+' of '+this.pages+' )';
        if (this.pages > this.page) {
          obj.innerHTML = '<a href="#" onClick="'+this.name+'.page+=1;'+this.name+'.writeGrid();return false;">Next&nbsp;&raquo;</a>';
        } else {
          obj.innerHTML = 'Next&nbsp;&raquo;';
        }
        obj = document.getElementById('prevButtons'+this.name);
        if (this.page > 1) {
          obj.innerHTML = '<a href="#" onClick="'+this.name+'.page-=1;'+this.name+'.writeGrid();return false;">&laquo;&nbsp;Previous</a>';
        } else {
          obj.innerHTML = '&laquo;&nbsp;Previous';
        }
      }
  
    }
  
    this.clearList = function() {
      var petContainer = document.getElementById(this.listId);
      petContainer.innerHTML = '';
    }
  
    this.clearSearch = function(form) {
      form.rgPetsSearchText.value = '';
      this.searchText = '';
      this.clearList();
      if (this.mode == 'list') {
        this.writeList();
      } else if (this.mode == 'list2') {
        this.writeList2();
      } else if (this.mode == 'grid') {
        this.writeGrid();
      }
      return false;
    }
  
    this.setupSearch = function(form) {
      this.searchText = form.rgPetsSearchText.value;
      this.clearList();
      if (this.mode == 'list') {
        this.writeList();
      } else if (this.mode == 'list2') {
        this.writeList2();
      } else if (this.mode == 'grid') {
        this.writeGrid();
      }
      return false;
    }
  
    this.sortPetArray = function(fieldIndex) {
      if (this.mode == 'list') {
        if (this.orderby == fieldIndex) {
          if (this.order == 'asc') {
            this.order = 'desc';
          } else {
            this.order = 'asc';
          }
        } else this.order = 'asc';
      }
      this.pet.multiSort(fieldIndex);
      this.orderby = fieldIndex;
      if (this.order == 'desc') this.pet.reverse();
      if (this.mode == 'list') {
        createCookie('rgOrderby',fieldIndex,3);
      }
    }
  
    this.sortPetArrayOnLoad = function(fieldIndex) {
      this.pet.multiSort(fieldIndex);
      this.orderby = fieldIndex;
      if (this.order == 'desc') this.pet.reverse();
      if (this.mode == 'list') {
        createCookie('rgOrderby',fieldIndex,3);
      }
    }
  
    this.sortby = function(fieldIndex) {
      this.doSort(fieldIndex);
      this.clearList();
      this.writeList();
    }
  
    this.doSort = function(fieldIndex) {
      this.sortPetArray(fieldIndex);
    }
  
    this.nextPet = function() {
      if (this.currentDetailRow < this.pet.length-1) {
        nextDetailRow = this.currentDetailRow+1;
        nextDetailPet = this.pet[nextDetailRow][this.petFields['animalID']['index']];
      } else {
        nextDetailRow = 0;
        nextDetailPet = this.pet[nextDetailRow][this.petFields['animalID']['index']];
      }
      document.getElementById('detailFrame').src = this.detailUrl(nextDetailPet);
      this.currentDetailPet = nextDetailPet;
      this.currentDetailRow = nextDetailRow;
    }
  
    this.prevPet = function() {
      if (this.currentDetailRow > 0) {
        nextDetailRow = this.currentDetailRow-1;
        nextDetailPet = this.pet[nextDetailRow][this.petFields['animalID']['index']];
      } else {
        nextDetailRow = this.pet.length-1;
        nextDetailPet = this.pet[nextDetailRow][this.petFields['animalID']['index']];
      }
      document.getElementById('detailFrame').src = this.detailUrl(nextDetailPet);
      this.currentDetailPet = nextDetailPet;
      this.currentDetailRow = nextDetailRow;
    }
  
    this.detailUrl = function(animalID) {
      var tempURL = location.href.split('://');
      if (tempURL['0'] == 'https') {
        var url = 'https://toolkit.rescuegroups.org';
      } else {
        var url = 'https://toolkit.rescuegroups.org';
      }
      url += '/javascript/v2.0/'+this.detailTemplate+'?animalID='+animalID+'&key=bfdtP6EE&referer=';
      return url;
    }
  
  
  }
  
  Array.prototype.multiSort = function(index){
    // Written By: WillyDuitt@hotmail.com | 03-10-2005 \\;
    for(var i=0; i<this.length; i++){
      var temp = this[i].splice(index,1);
      this[i].unshift(temp);
    }
  
    this.sort();
  
    for(var i=0; i<this.length; i++){
      for(var x=(index-1); x>=0; x=(x-1)){
        var temp = this[i].splice(index,1);
        this[i].unshift(temp);
      }
    }
  
    return true;
  }
  
  function cgiVar(varName) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if (pair[0] == varName) {
        return pair[1];
      }
    }
    return '';
  }
  
  function isEven(value){
    if (value%2 == 0)
      return true;
    else
      return false;
  }
  
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }
  
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  
  function eraseCookie(name) {
    createCookie(name,"",-1);
  }
  
  function showDetails(cName, rNumber, animalID) {
  
    rgPetsObj = eval(cName);
  
    if (!animalID) {
      row = document.getElementById(rgPetsObj.name+rNumber);
      animalID = row.animalID;
    }
  
    if (rgPetsObj.detailPage == 'popover') {
  
      detailObj =
        new YAHOO.widget.Panel(rgPetsObj.detailId, {
          constraintoviewport: true,
          width:       (parseInt(rgPetsObj.detailWidth)+20)+'px',
          fixedcenter: "contained",
          close:       true,
          draggable:   true,
          modal:       true,
          visible:     false
        }
      );
      document.getElementsByTagName('body')[0].className+=' yui-skin-sam';
      detailObj.render(document.body);
      str = '<div id="bdNavLinks" style="text-align:right;"><a href="" onClick="'+rgPetsObj.name+'.prevPet();return false;">Previous</a>&nbsp;&nbsp;<a href="" onClick="'+rgPetsObj.name+'.nextPet();return false;">Next</a></div><iframe id="detailFrame" width="'+rgPetsObj.detailWidth+'px" height="'+rgPetsObj.detailHeight+'px" scrolling="auto" frameborder="no" src="'+rgPetsObj.detailUrl(animalID)+'">';
      detailObj.setBody(str);
      detailObj.setHeader('');
      detailObj.setFooter('<div id="closeDetails"><a href="" onClick="detailObj.hide(); return false;">Close</a></div>');
      detailObj.render();
      detailObj.center();
      detailObj.show();
      document.getElementById(rgPetsObj.detailId).focus();
  
      rgPetsObj.currentDetailPet = animalID;
      rgPetsObj.currentDetailRow = rNumber;
  
    } else if (rgPetsObj.detailPage = 'popup') {
  
      window.open(rgPetsObj.detailUrl(animalID),'detailPage','scrollbars=1,width='+parseInt(rgPetsObj.detailWidth)+',height='+parseInt(rgPetsObj.detailHeight));
  
    }
  
  }
  
  
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-23218855-6']);
    _gaq.push(['_setDomainName', 'none']);
    _gaq.push(['_setAllowLinker', true]);
    _gaq.push(['_trackPageview']);
  
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();`;
