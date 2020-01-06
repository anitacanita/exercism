const CODON_PROTEIN = {
  "AUG": 	"Methionine",
  "UUC": 	"Phenylalanine",
  "UUU": 	"Phenylalanine",
  "UUA": 	"Leucine",
  "UUG": 	"Leucine",
  "UCU": 	"Serine",
  "UCC": 	"Serine",
  "UCA": 	"Serine",
  "UCG": 	"Serine",
  "UAU": 	"Tyrosine",
  "UAC": 	"Tyrosine",
  "UGU": 	"Cysteine",
  "UGC": 	"Cysteine",
  "UGG": 	"Tryptophan",
  "UAA":  "STOP",
  "UAG":  "STOP",
  "UGA":  "STOP",
};

const STOP_CODONS = ["UAA","UAG","UGA"];

export const translate = (rnaSequence) => {
  if(rnaSequence == undefined) return [];

  var codons = rnaSequence.match(/.{1,3}/g);
  var proteins = [];
  var codon;

  for (codon of codons) {
    if(!Object.keys(CODON_PROTEIN).includes(codon)) {
      throw 'Invalid codon';
    }

    if(STOP_CODONS.includes(codon)) break;
    proteins.push(CODON_PROTEIN[codon]);
  }

  return proteins;
};
