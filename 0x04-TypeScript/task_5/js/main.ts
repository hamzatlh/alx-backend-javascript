// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Define the sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  let totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'major' };
}

// Define the sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  let totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'minor' };
}
