export class RescueGroupsV2AnimalRawDescriptionBuilder {
  public boilerplate = [
    '<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p>',
    '<p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p>'
  ];

  private _upcoming = ['<p>This dog will be at a meet and greet event on Saturday, February 5th unless he/she is adopted prior to the event with a set up home. The event is from 12 pm to 3 pm at Palo Alto\'s Pet Food Express. Those interested in meeting the dog can come out to our meet and greet event. We no longer do application approval onsite. Anyone adopting has been previously approved and set up to meet prior to the event.</p>'];
  public get upcoming(): string[] {
    return this._upcoming;
  }
  public setUpcoming(upcoming: string) {
    this._upcoming = [upcoming];
  }

  private bio = [
    '<p>Astro is a 4 year old Turkish Van Mix who was one of many cats we rescued from a hoarding situation. Our amazing volunteers have spent countless hours saving and caring for these cats who were in desperate need of help. Its been such a labor of love but the reward of having these wonderful cats find their forever families will be well worth the efforts.</p>',
    '<p>Astro was a little shy when he first went to his current foster home but since then he has really blossomed. He has never been shown love in the way he is experiencing it now and he has really started to trust his humans. His foster mom reports in the beginning he was very cautious of her, keeping his distance except during mealtime, but slowly and surely he has now turned into a lap cat. He loves to watch TV on the couch with his foster family and sleeps with his humans in bed at night. He gets along well with other cats and we think he would do fine with a cat savvy dog. If you are looking for a bonded pair, he and Squawk could be adopted together. They are currently in the same foster home and love playing and lounging on the cat tree together for hours on end. All Astor needs is a family to call his own!</p>',
    '<p>He has been neutered, tested negative for FIV/FeLV, vaccinated, dewormed, flea treatment applied and microchipped. His adoption fee is $100. Apply to adopt this handsome guy today!</p>'
  ];

  public isUpcoming = true;

  public set age(age: string) {
    this.bio[0] = `<p>Astro is a ${age} Turkish Van Mix who was one of many cats we rescued from a hoarding situation.`
  }

  public build(): string {
    return this.boilerplate.concat(this.isUpcoming ? this.upcoming : []).concat(this.bio).join();
  }
}