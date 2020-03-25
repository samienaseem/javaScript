function createcelebrity(first,last,fans) {

	this.firstname=first;
	this.lastname=last;
	this.fans=fans;
	return this;
	// body...
}

createcelebrity.prototype.age=20;

var srk=createcelebrity.call(srk,"samie","naseem",10);
console.log(srk);