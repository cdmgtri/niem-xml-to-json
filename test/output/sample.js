
let IEPD = {
  "@context": {
    "ext": "http://example.com/exchanges/passport-exchange/extension/1.0#",
    "nc": "http://release.niem.gov/niem/niem-core/4.0/#",
    "j": "http://release.niem.gov/niem/domains/jxdm/6.1/#",
    "structures": "http://release.niem.gov/niem/structures/4.0/#"
  },
  "ext:PassportExchange": {
    "nc:Passport": {
      "structures:metadata": "m1",
      "nc:DocumentEffectiveDate": {
        "nc:Date": {
          "rdf:value": "2010-05-16",
          "@id": "d1"
        }
      },
      "nc:DocumentExpirationDate": {
        "nc:Date": "2020-05-15"
      },
      "nc:PassportNumberIdentification": {
        "nc:IdentificationID": "C00001549"
      },
      "nc:PersonName": {
        "nc:PersonGivenName": "George",
        "nc:PersonMiddleName": [
          "P",
          "Q"
        ],
        "nc:PersonSurName": "Burdell"
      },
      "nc:PersonBirthDate": {
        "nc:Date": "1970-01-01"
      },
      "nc:PersonBirthLocation": {
        "nc:Address": {
          "nc:LocationState": {
            "nc:StateISO3166Code": "US-NY"
          },
          "nc:LocationCountry": {
            "nc:LocationCountryISO3166Alpha3Code": "USA"
          }
        }
      },
      "nc:PassportCategoryCode": "Individual",
      "ext:PersonCitizenshipISO3166Alpha3Code": "USA",
      "nc:PassportIssuingOrganization": {
        "nc:OrganizationName": "United States Department of State"
      },
      "j:PersonSexCode": "M",
      "ext:PassportMinorIndicator": false,
      "ext:PassportExpeditedIndicator": false,
      "ext:PassportRenewalIndicator": true
    },
    "nc:Metadata": {
      "@id": "m1",
      "nc:ReportedDate": {
        "nc:Date": "2010-05-15"
      },
      "nc:ReportingPersonText": "Alice Smith"
    }
  }
};

module.exports = IEPD;
