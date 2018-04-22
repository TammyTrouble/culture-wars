export class Queer {
	readonly id: number;
	readonly name: string;
	readonly gender: number;
	readonly cis: boolean;
	readonly orientation: string;
	region: string;

	influence: number = 0;
/*	readonly charisma: number;
	readonly intelligence: number;
	readonly fortitude: number;
	readonly dexterity: number;*/

	constructor(
		theID: number,
		theName: string,
		theGender: number,
		theCis: boolean,
		theOrientation: string,
		theRegion: string,
/*		theCharisma: number,
		theIntelligence: number,
		theFortitude: number,
		theDexterity: number*/)
		{
			this.id = theID;
			this.name = theName;
			this.gender = theGender;
			this.cis = theCis;
			this.orientation = theOrientation;
			this.region = theRegion;

	}
}
