var Brands = [
  "3M",
  "Wrigley's",
  "Levi's",
  "7 For all Mankind",
  "7-Eleven",
  "7Up",
  "A&E",
  "A1 Steak Sauce",
  "AAdvantage",
  "Aamco",
  "ABC",
  "AbeBooks",
  "Abercrombie",
  "Abreva",
  "Absolut",
  "Accenture",
  "Accu-Chek",
  "Ace Hardware",
  "Acer",
  "Acrobat",
  "Acura",
  "Acuvue",
  "Adidas",
  "Adobe",
  "Advair",
  "Advil",
  "Aeropostale",
  "Aerosoles",
  "Aetna",
  "AFLAC",
  "Afrin",
  "AIG",
  "Air Canada",
  "Air Jordan",
  "AirTran",
  "Airwalk",
  "Alamo",
  "Albertsons",
  "Alcan",
  "Aleve",
  "Alka-Seltzer",
  "All",
  "All Star",
  "Allegra",
  "Allianz",
  "Allstate",
  "Allsteel",
  "Almay",
  "Almond Joy",
  "Altoids",
  "Altria",
  "Always",
  "Amana",
  "Amazon",
  "Ambien",
  "AOL",
  "Amgen",
  "Amoco",
  "Amstel Light",
  "Amtrak",
  "Angel Soft",
  "Anheuser-Busch",
  "Ann Taylor",
  "Annedd’ale",
  "Anne Klein",
  "Anthropologie",
  "Apple",
  "Apple Jacks",
  "Applebee’s",
  "Aqua Net",
  "Aquafina",
  "Aquafresh",
  "Aramark",
  "Arby’s",
  "Ariel",
  "Arm & Hammer",
  "Armani",
  "Armol All",
  "Ashley Furniture",
  "Aspirin",
  "Astra Zeneca",
  "AT&T",
  "Atari",
  "Atkins",
  "Audi",
  "Aunt Jemima",
  "Aussie",
  "AutoTrader",
  "AutoZone",
  "Aveda",
  "Aveeno",
  "Avia",
  "Avis",
  "Avon",
  "AXA",
  "Axe",
  "Baby Bjorn",
  "Baby Ruth",
  "BabyGap",
  "Bacardi",
  "Back to Basics",
  "Back to Nature",
  "Bahama Breeze",
  "Baileys",
  "Baker Hughes",
  "Baker’s Choice",
  "Bally Total Fitness",
  "Banana Boat",
  "Banana Republic",
  "Band-Aid",
  "Bank One",
  "Barbie",
  "Barclays",
  "Bare Escentuals",
  "Barnes & Noble",
  "Barrick Gold",
  "Baskin-Robbins",
  "Bausch & Lomb",
  "Baxter",
  "Bayer",
  "Bazooka",
  "BBC",
  "BCBG",
  "BCE",
  "Beanie Babies",
  "Beano",
  "Beaver Buzz",
  "Bebe",
  "Beck’s",
  "Bed Head",
  "Bed, Bath & Beyond",
  "Beetle",
  "Bell Atlantic",
  "Bellsouth",
  "Ben & Jerry’s",
  "Ben-Gay",
  "Benadryl",
  "Benjamin Moore",
  "Bertolli",
  "Best Buy",
  "Best Western",
  "Betty Crocker",
  "Bianchi",
  "Bic",
  "Big Lots",
  "Big Mac",
  "Big Rock Brewery",
  "Billabong",
  "Bimbo",
  "Biolage",
  "Biore",
  "Biosilk",
  "Biotech",
  "Birds Eye",
  "Birkenstock",
  "Bisquick",
  "Bissell",
  "Black Label",
  "BlackBerry",
  "Blistex",
  "Blockbuster",
  "Bloomingdale’s",
  "Blow Pop",
  "Blue Cross",
  "Blue Ribbon",
  "BMW",
  "Bob the Builder",
  "Bobcat",
  "Boeing",
  "Boggle",
  "Bombardier",
  "Bonanza",
  "Bonne Bell",
  "Boost Mobile",
  "Boots",
  "Boppy",
  "Borders",
  "Bosch",
  "BOSE",
  "Boston Market",
  "Boston Scientific",
  "BOTOX",
  "Bounty",
  "Bowflex",
  "BP",
  "Brach’s",
  "Bridgestone",
  "Brite",
  "British Airways",
  "British Rail",
  "Bubble Wrap",
  "Bubble Yum",
  "Bubblicious",
  "Bud Light",
  "Budget",
  "Budweiser",
  "Buffalo Wild Wings",
  "Bugles",
  "Bugs Bunny",
  "Buick",
  "Burberry",
  "Burger King",
  "Burlington Coat Factory",
  "Burt’s Bees",
  "Busch",
  "Busch Gardens",
  "Bush’s Beans",
  "Business Week",
  "Butterball",
  "Butterfinger",
  "Cabbage Patch Kids",
  "Cadbury",
  "Caboodles",
  "Cadillac",
  "Caesar’s Entertainment",
  "Café de Colombia",
  "Calvin Klein",
  "Camel",
  "Campbell’s",
  "Canada Dry",
  "Canadian Tire",
  "Candy Land",
  "Canon",
  "Cap’n Crunch",
  "Capezio",
  "Capital One",
  "Capri Sun",
  "Captain Morgan",
  "Carebear",
  "Carefree",
  "Caress",
  "Carfax",
  "Cargill",
  "Carl’s Jr.",
  "Carling",
  "Carling Black Label",
  "Carmax",
  "Carnation",
  "Carter’s",
  "Cartier",
  "Cascadian Farm",
  "Casey’s General Store",
  "Casio",
  "Cat Chow",
  "Caterpillar",
  "CBS",
  "CDW",
  "Celebrex",
  "Celebrity Cruises",
  "Cemex",
  "Cenovus Energy",
  "CenterPoint Energy",
  "Centrino",
  "Century 21",
  "Champion",
  "Chanel",
  "ChapStick",
  "Charles Schwab",
  "Charmin",
  "Chase",
  "Cheer",
  "Cheerios",
  "Cheesecake Factory",
  "Cheetos",
  "Cheez Whiz",
  "Cheez-It",
  "Chef Boyardee",
  "Chevrolet",
  "Chevron",
  "Chex",
  "Chili’s",
  "Chip’s Ahoy",
  "Chipotle",
  "Chiquita",
  "Chivas",
  "Christian Dior",
  "Chuck E. Cheese",
  "Chuck Taylor",
  "Cialis",
  "Cinemax",
  "Cinnabon",
  "Cinnamon Toast Crunch",
  "Cisco",
  "Citibank",
  "Citigroup",
  "Citizens Bank",
  "Clairol",
  "Clarinex",
  "Claritin",
  "Claritin-D",
  "Clear Eyes",
  "Clearasil",
  "Clearly Canadian",
  "Clif Bar",
  "Clinique",
  "Clorox",
  "Clue",
  "CNN",
  "Coach",
  "Coca-Cola",
  "Cocoa Krispies",
  "Cocoa Puffs",
  "Coke Zero",
  "Coldwater Creek",
  "Coldwell Bank",
  "Coleman",
  "Colgate",
  "Colt 45",
  "Comcast",
  "Comedy Central",
  "Comfort Flex Waistband",
  "Compaq",
  "Complete",
  "Conair",
  "ConAgra",
  "ConocoPhillips",
  "Continental Airlines",
  "Converse",
  "Cool Whip",
  "Coors",
  "Coors Light",
  "Coppertone",
  "Corelle",
  "Corn Flakes",
  "Corn Pops",
  "CorningWare",
  "Corona",
  "Costco",
  "Cott",
  "Cottonelle",
  "Country Crock",
  "Courvoisier",
  "Coventry Health Care",
  "Cover Girl",
  "Cox Communications",
  "Cracker Barrel",
  "Cracker Jack",
  "Craigslist",
  "Crate & Barrel",
  "Crayola",
  "Credit Suisse",
  "Crest",
  "Crestor",
  "Crisco",
  "Crispix",
  "Crown Royal",
  "Crunch ‘n Munch",
  "Crystal Light",
  "Cub Foods",
  "Cummins",
  "Curves",
  "CVS",
  "Daewoo",
  "Daffy Duck",
  "Dairy Queen",
  "Daisy",
  "Danone",
  "Darden",
  "Dasani",
  "Dave & Busters",
  "David’s Bridal",
  "Dawn",
  "DayQuil",
  "Days Inn",
  "DeBeers",
  "Degree",
  "Del Monte",
  "Dell",
  "Delta Air Lines",
  "Denny’s",
  "DenTek",
  "Dentyne",
  "Denver Hayes",
  "Desitin",
  "Detrol",
  "Deutsche Bank",
  "DeVry",
  "DeWALT",
  "DHL",
  "Diageo",
  "Dial",
  "Diaper Genie",
  "Dick’s Sporting Goods",
  "Dickies",
  "Diesel",
  "Diet Coke",
  "Diet Pepsi",
  "Digiorno",
  "Dillard’s",
  "Dinty Moore",
  "Dior",
  "DirectTV",
  "Dirt Devil",
  "Discount Tire",
  "Discover",
  "Discovery Air",
  "Discovery Channel",
  "Dish Network",
  "Disney",
  "Dixie",
  "DKNY",
  "Doc Martin",
  "Dockers",
  "Dodge",
  "Dog Chow",
  "Dolby Surround",
  "Dolce & Gabbana",
  "Dole",
  "Dollar General",
  "Dollar Rent A Car",
  "Dollar Tree Stores",
  "Dom Perignon",
  "Domino’s Pizza",
  "Don de Dieu",
  "Doritos",
  "Doublemint",
  "Doubletree",
  "Dove",
  "Dow Chemical",
  "Downy",
  "Dr Pepper",
  "Dr. Scholl’s",
  "Dramamine",
  "Drano",
  "DreamWorks",
  "Drewry's",
  "Du Maurier",
  "Dunkin Donuts",
  "DuPont",
  "Duracell",
  "Duraflame",
  "Durex",
  "DustBuster",
  "DYMO",
  "Dynamotive Energy Systems",
  "Dyson",
  "E! Entertainment Television",
  "E-Trade",
  "Easy Spirit",
  "Easy-Bake",
  "Easy-Off",
  "Eaton",
  "eBay",
  "Ecco",
  "Eclipse",
  "Edy’s",
  "Egg Beaters",
  "Eggo",
  "Eight O'Clock Coffee Company",
  "Electrasol",
  "Electrolux",
  "Eli Lilly",
  "Elmer Fudd",
  "Elmer’s",
  "Emerson Electric",
  "Emerus",
  "Empire State Building",
  "Enbridge",
  "EnCana",
  "Energizer",
  "Ensure",
  "Enterprise Rent-A-Car",
  "Epcot",
  "Epson",
  "Equal",
  "Espirit",
  "ESPN",
  "Estee Lauder",
  "Etch A Sketch",
  "Ethan Allen",
  "Ethical Ocean",
  "Eucerin",
  "Evenflo",
  "Eveready",
  "Everlast",
  "Evian",
  "Excedrin",
  "Export",
  "Exxon Mobil",
  "Ezine",
  "Facebook",
  "Falcon Bridge",
  "Family Dollar",
  "Famous Amos",
  "Fannie Mae",
  "Fanta",
  "Fantastik",
  "Farberware",
  "Febreze",
  "FedEx",
  "FedEx Office",
  "Fendi",
  "Ferrari",
  "Fiat",
  "Fiber One",
  "Fiber Plus",
  "Fidelity",
  "Fila",
  "Firestone",
  "First Data",
  "First Response",
  "FirstEnergy",
  "Fisher-Price",
  "Fiskar’s",
  "Fleet Farm",
  "Flonase",
  "Florida Orange Juice",
  "Fluor",
  "Folgers",
  "Foot Locker",
  "Forbes",
  "Ford Motor",
  "Formula 409",
  "Fossil",
  "Foster’s",
  "Four Loko",
  "Fox",
  "Freddie Mac",
  "French’s",
  "Fresca",
  "Freshlook",
  "Fresh Steps",
  "Fridgidaire",
  "Friskies",
  "Frito-Lay",
  "FrontLine",
  "Froot Loops",
  "Fruit of the Loom",
  "Fruit Harvest",
  "Fudge Shoppe",
  "Fuji Film",
  "Funyuns",
  "Game Boy",
  "Gap",
  "Gardetto’s",
  "Garmin",
  "Garnier",
  "Gatorade",
  "Geico",
  "General Electric",
  "General Mills",
  "General Motors",
  "George Foreman",
  "George Weston",
  "Georgia-Pacific",
  "Gerber",
  "Giant Eagle",
  "Gillette",
  "Giorgio Armani",
  "Glad",
  "Glade",
  "GlaxoSmithKline",
  "GM",
  "GMAC",
  "GNC",
  "Godiva",
  "Gold Medal",
  "Gold’n Plump",
  "Golden Grahams",
  "Goldfish",
  "Goldman Sachs",
  "Good & Plenty",
  "Good Housekeeping",
  "Good Humor",
  "Goody",
  "Goodyear",
  "Google",
  "Gordon’s",
  "Gore-Tex",
  "Graco",
  "Grape Nuts",
  "Green Giant",
  "Grey Goose",
  "Greyhound",
  "Gucci",
  "Guess?",
  "Guinness",
  "H-E-B",
  "H&M",
  "H&R Block",
  "Haagen-Dazs",
  "Hacky Sack",
  "Haier",
  "Hallmark",
  "Halls",
  "Hamburger Helper",
  "Hampton Inn",
  "Hanes",
  "Hannah Montana",
  "Hard Rock Café",
  "Hardee’s",
  "Harley-Davidson",
  "Harris Teeter",
  "Harry Potter",
  "Harry Rosen",
  "Hartford",
  "Hasbro",
  "Hawaiian Tropic",
  "HBO",
  "Head & Shoulders",
  "Healthy Choice",
  "Heath",
  "Hefty",
  "Heineken",
  "Heinz",
  "Helene Curtis",
  "Hellman’s",
  "Hello Kitty",
  "Helzberg Diamond",
  "Hennessy",
  "Herbal Essences",
  "Hermes Paris",
  "Hershey’s",
  "Hertz",
  "Hewlett-Packard",
  "Hidden Valley",
  "Hillshire Farm",
  "Hilton",
  "Hobby Lobby",
  "Holiday Inn",
  "Hollister",
  "Holly Hobbie",
  "Home Depot",
  "Home Shopping Network",
  "Homedics",
  "Honda",
  "Honey Bunches of Oat",
  "Honeywell",
  "Hooters",
  "Hoover",
  "Hormel",
  "Hostess",
  "Hot Wheels",
  "Hotmail",
  "Hoveround",
  "HSBC",
  "Huggies",
  "Hugo Boss",
  "Hula-Hoop",
  "Humana",
  "Hummer",
  "Hungry-Man",
  "Hunt’s",
  "Hush Puppies",
  "Husky Energy",
  "Hy-Vee",
  "Hyatt",
  "Hydroxycut",
  "Hyundai",
  "I Can’t Believe It’s Not Butter",
  "Iams",
  "IBM",
  "Ice Breakers",
  "Icee",
  "Igloo",
  "IHOP",
  "IKEA",
  "IMAX",
  "Imodium",
  "Imperial Oil",
  "Inco Rogers Communications Empire",
  "InStyle",
  "Infiniti",
  "Infosys",
  "ING",
  "Intel",
  "International Paper",
  "Invisalign",
  "Irish Spring",
  "Isotoner",
  "ITT Technical Institute",
  "iTunes",
  "Ivory",
  "J.C. Penney",
  "J.Crew",
  "J.P. Morgan",
  "Jaan Paan Liquer",
  "Jack Daniels",
  "Jack in the Box",
  "Jackson Hewitt",
  "Jacuzzi",
  "Jaguar",
  "Jameson",
  "Jared Galleria",
  "Jazzercise",
  "Jeep",
  "Jell-O",
  "Jelly Belly",
  "Jenn-Air",
  "Jenny Craig",
  "Jeopardy!",
  "Jergens",
  "JetBlue",
  "Jiffy",
  "Jim Beam",
  "Jimmy Dean",
  "Jockey",
  "Joe’s Crab Shack",
  "John Deere",
  "John Frida",
  "Johnnie Walker",
  "Johnson & Johnson",
  "Johnson Controls",
  "Johnson’s Baby",
  "Johnsonville Foods",
  "Jolly Rancher",
  "Jones New York",
  "Jordache",
  "Jose Cuervo",
  "Juicy Couture",
  "Juicy Fruit",
  "Juicy Juice",
  "JumboTron",
  "Just For Men",
  "JVC",
  "K-Swiss",
  "K-Y",
  "K2",
  "K9 Advantix",
  "Kahlúa",
  "Kaiser Permanente",
  "Karo",
  "Kashi",
  "Keds",
  "Keebler",
  "Kellogg’s",
  "Kenmore",
  "Kenneth Cole",
  "KFC",
  "Kia",
  "Kibbles ‘n Bits",
  "Kids “R” Us",
  "Kimberly-Clark",
  "King Snedley's Beer",
  "Kiss My Face",
  "Kit Kat",
  "KitchenAid",
  "Kix",
  "Kleenex",
  "Klondike",
  "Kmart",
  "Kodak",
  "Kohl’s",
  "Kohler",
  "Kokanee Beer",
  "Kool-Aid",
  "Kotex",
  "Krackel",
  "Kraft",
  "Krazy Glue",
  "Krispy Kreme",
  "Kroger",
  "L.A. Gear",
  "L.A. Weightloss Center",
  "L.L. Bean",
  "L’Oréal",
  "La Choy",
  "La Fin du Monde",
  "La-Z-Boy",
  "Labatt’s",
  "LaCoste",
  "Lady Speed Stick",
  "Lakeport Brewing Company",
  "Lamborghini",
  "Laffy Taffy",
  "Lancome",
  "Land O’Lakes",
  "Land Rover",
  "Lay’s",
  "Lean Cuisine",
  "LeapFrog",
  "Lee",
  "LEGO",
  "Lendingtree",
  "LensCrafters",
  "Levi’s",
  "Lexus",
  "LG",
  "Liberty Medical",
  "Liberty Mutual",
  "Life Savers",
  "Life Time Fitness",
  "Limited",
  "Lincoln",
  "Lincoln Logs",
  "Linens ‘n Things",
  "Lipitor",
  "Lipton",
  "Liquid Paper",
  "Liquid-Plumr",
  "Listerine",
  "Lite-Brite",
  "Little Caesars",
  "Little Debbie",
  "Liz Claiborne",
  "Lockheed Martin",
  "London Drugs",
  "London Fog",
  "Long John Silver’s",
  "Looney Tunes",
  "Louis Vuitton",
  "Lowe’s",
  "Lubriderm",
  "Lucky",
  "Lucky Charms",
  "Lucky Lager",
  "Lufthansa Airlines",
  "Luis Vuitton",
  "Lululemon Athletica",
  "Lunchables",
  "Lunesta",
  "Luvs",
  "Luxottica Retail",
  "Lycra",
  "Lysol",
  "M&M’s",
  "Maalox",
  "Macaroni Grill",
  "Mack",
  "Macy’s",
  "Magic Chef",
  "Magic Marker",
  "Magna Doodle",
  "Magna International",
  "Magnavox",
  "Major League Baseball",
  "Make-up Art Cosmetics",
  "Maker’s Mark",
  "Malibu",
  "Manchester United",
  "Manwich",
  "MapQuest",
  "Marathon",
  "Mark's",
  "Marlboro",
  "Marmot",
  "Marriott",
  "Mars",
  "Marshall Fields",
  "Marshalls",
  "Martha Stewart Living",
  "Martini",
  "Mass Mutual",
  "Master Craft",
  "MasterCard",
  "Matchbox",
  "Mattel",
  "Mattress Giant",
  "Maudite",
  "Max Factor",
  "Maxwell House",
  "Maybelline",
  "Mayo Clinic",
  "Maytag",
  "Mazda",
  "McAfee",
  "McDonald’s",
  "McKesson",
  "Mead",
  "Medtronic",
  "Meijer",
  "Mello Yello",
  "Memorex",
  "Men’s Warehouse",
  "Menard’s",
  "Mentos",
  "Mercedez-Benz",
  "Mercury Insurance",
  "Merrill Lynch",
  "Mervyn’s",
  "MetLife",
  "MGM",
  "Michael Kors",
  "Michaels Stores",
  "Michelin",
  "Michelob",
  "Microsoft",
  "Microsoft Office",
  "Midas",
  "Midol",
  "Mike and Ike",
  "Milk Duds",
  "Milk-Bone",
  "Milky Way",
  "Miller",
  "Miller Lite",
  "Mike and Ike",
  "Mini Cooper",
  "Mini Wheats",
  "Minute Maid",
  "Miracle-Gro",
  "Mitsubishi",
  "Mobil",
  "Mod-Podge",
  "Moet & Chandon",
  "Molson Canadian",
  "Molson Export",
  "Mondetta Clothing Company",
  "Monopoly",
  "Monsanto",
  "Moosehead Brewery",
  "Mop & Glo",
  "Morgan Stanley",
  "Motel 6",
  "Motorola",
  "Motrin",
  "Mountain Dew",
  "Mr. Bubble",
  "Mr. Clean",
  "Mr. Pibb",
  "Mr. Potato Head",
  "Mr. Sub",
  "Mrs. Fields",
  "MSN",
  "MTS",
  "MTV",
  "Munchkin",
  "Murphy Oil",
  "Must See TV",
  "My Little Pony",
  "Mylanta",
  "MySpace",
  "Nabisco",
  "Nair",
  "NAPA Auto Parts",
  "NASA",
  "NASCAR",
  "NASDAQ",
  "Nationwide",
  "Naturalizer",
  "Nature Valley",
  "Nature's Path",
  "Nature’s Way",
  "Nautica",
  "NBC",
  "Needs Convenience",
  "Neiman Marcus",
  "Neosporin",
  "Nerds",
  "Nerf",
  "Nescafe",
  "Nestea",
  "Nestle",
  "Netflix",
  "Netscape",
  "Neutrogena",
  "New Balance",
  "New York Life Insurance",
  "Newsweek",
  "Newton’s",
  "Nexen",
  "Nexis",
  "Nextel",
  "Nexxus",
  "NFL",
  "Nickelodeon",
  "Nicoderm",
  "Nicorette",
  "Nike",
  "Nikon",
  "Nine West",
  "Nintendo",
  "Nissan",
  "Nivea",
  "No Name",
  "Nokia",
  "NordicTrack",
  "Nordstrom",
  "Norelco",
  "Nortel Networks",
  "Northwestern Mutual",
  "Norton AntiVirus",
  "Norweigen Cruises",
  "Novartis",
  "Noxzema",
  "Nu Skin",
  "Nutella",
  "NutraSweet",
  "Nutri-Grain",
  "Nuvaring",
  "NyQuil",
  "Ocean Pacific",
  "Ocean Spray",
  "Off!",
  "Office Depot",
  "Office Max",
  "Oil of Olay",
  "Oland Export Ale",
  "Olay",
  "Old El Paso",
  "Old Milwaukee",
  "Old Navy",
  "Old Spice",
  "Old Style Pilsner",
  "Old Vienna",
  "Olive Garden",
  "Olympus",
  "One-A-Day",
  "Onex",
  "Onstar",
  "Oprah",
  "Oracle",
  "Oral-B",
  "Orbitz",
  "Oreck",
  "Oreo",
  "Original Ranch",
  "Orkin",
  "Ortho Tri-Cyclen",
  "Orville Redenbacher’s",
  "Oscar Mayer",
  "OshKosh B’Gosh",
  "Oster",
  "Oust",
  "Outback Steakhouse",
  "Outlook",
  "Ovaltine",
  "Overstock",
  "Oxiclean",
  "OXO",
  "P.F. Chang’s",
  "Pabst",
  "Pac-Man",
  "Pace Salsa",
  "Pacifico",
  "Palm",
  "Pampers",
  "PanAm Airlines",
  "Panasonic",
  "Panera Bread",
  "Pantene",
  "Papa John’s",
  "Papa Murphy’s",
  "Paper Mate",
  "Paramount",
  "Parker Hannifin",
  "Patagonia",
  "Patron",
  "Paul Mitchell",
  "Paxil",
  "PayDay",
  "Payless Shoe Source",
  "PBS",
  "Pearl Vision",
  "Pearson",
  "Pedialyte",
  "Pediasure",
  "Pedigree",
  "Pennzoil",
  "Pentium",
  "PeoplePC",
  "Pep Boys",
  "Pepcid",
  "Pepperidge Farm",
  "Pepsi",
  "Pepsodent",
  "Percocet",
  "Perkins",
  "Perrier",
  "Pert",
  "Petco",
  "Peter Pan",
  "PetMed Express",
  "Pepto-Bismol",
  "Petro Canada",
  "Petsmart",
  "PEZ",
  "Pfizer",
  "PG&E Corp.",
  "Phat Farm",
  "Philadelphia Cream Cheese",
  "Philip Morris",
  "Philips",
  "Photoshop",
  "Physicians Formula",
  "Picaroons Traditional Ales",
  "Piggly Wiggly",
  "Pillsbury",
  "Pine-Sol",
  "Pioneer",
  "Pixar",
  "Pixy Stix",
  "Pizza 73",
  "Pizza Hut",
  "Pizza Pizza",
  "Pizza Rolls",
  "Planned Parenthood",
  "Planters",
  "Plavix",
  "Play-Doh",
  "Playboy",
  "PlaySkool",
  "PlayStation",
  "Playtex",
  "Pledge",
  "Plymouth",
  "Pokemon",
  "Polaroid",
  "Polly Pocket",
  "Polo Ralph Lauren",
  "Pond’s",
  "Pontiac",
  "Pop-Tarts",
  "Pop Rocks",
  "Popeyes",
  "Porsche",
  "Porta Potti",
  "Post-it",
  "Pound Puppies",
  "Power Corp of Canada",
  "PowerBar",
  "Prada",
  "Prego",
  "Preparation H",
  "President's Choice",
  "Priceline",
  "Princess Cruises",
  "Proactiv",
  "Procter & Gamble",
  "Progressive",
  "Progresso",
  "Project Eden",
  "Promise",
  "Propel",
  "Prozac",
  "Prudential",
  "Publishers Clearing House",
  "Publix",
  "Puffs",
  "Pull-Ups",
  "PUMA",
  "PUR",
  "Purell",
  "Purex",
  "Purina",
  "Pyrex",
  "Q-tips",
  "QNX",
  "Quaker",
  "Qualcomm",
  "Quality Inn",
  "Quebecor",
  "Quick Books",
  "Quicken",
  "Quicksilver",
  "Quilted Northern",
  "Quiznos",
  "Qwest",
  "Radio Shack",
  "Radisson",
  "Ragstock",
  "Raid",
  "Rainbow Brite",
  "Raisinets",
  "Rawlings",
  "Ray-Ban",
  "Rayovac",
  "Raytheon",
  "RCA",
  "RE/MAX",
  "Reader’s Digest",
  "Red Bull",
  "Red Cross",
  "Red Lobster",
  "Red Robin",
  "Red Rose Tea",
  "Reddi-wip",
  "Redken",
  "Reebok",
  "Reef",
  "Reese’s",
  "Regent",
  "Reload",
  "Rembrandt",
  "Remington",
  "Renault",
  "Rent-A-Center",
  "Research in Motion",
  "Reuters",
  "Revlon",
  "Reynolds",
  "Rhapsody",
  "Rice Krispies",
  "Rice-A-Roni",
  "Ricola",
  "Right Guard",
  "Rimmel",
  "Rio Tinto Alcan",
  "Rit",
  "Ritalin",
  "Rite Aid",
  "Ritz",
  "Ritz-Carlton",
  "Road Runner",
  "Robin's Donuts",
  "Robitussin",
  "Rockport",
  "RockStar Energy Drink",
  "Rogaine",
  "Rogers",
  "Rolaids",
  "Rolex",
  "Rollerblade",
  "Rolling Rock",
  "Rolodex",
  "Roots Canada",
  "Rose’s",
  "Ross Stores",
  "Roundy’s",
  "Roxy",
  "Royal Bank of Canada",
  "Royal Bank of Scotland",
  "Royal Caribbean",
  "Rubbermaid",
  "Ruby Tuesday",
  "Ruffles",
  "Russel Stover",
  "Saab",
  "Safe Auto Insurance",
  "Safeway",
  "Saks Fifth Avenue",
  "Sam Adams",
  "Sam's Club",
  "Samsonite",
  "Samsung",
  "Sandals",
  "SanDisk",
  "Sandman Hotels",
  "Sanofi-Aventis",
  "Santander",
  "Sanyo",
  "SAP",
  "Sara Lee",
  "Saturn",
  "Save-On-Foods",
  "Schick",
  "Scholastic",
  "Schooner Lager",
  "Schwan’s",
  "Schwinn",
  "Science Diet",
  "Scion",
  "Scooter Store",
  "Scotch",
  "Scotch-Brite",
  "Scotchgard",
  "Scott",
  "Scottrade",
  "Scrabble",
  "Scrubbing Bubbles",
  "Sea World",
  "Seagram’s",
  "Sealy",
  "Sean John",
  "Sears",
  "Seasonale",
  "Secret",
  "Second Cup",
  "Select Comfort",
  "Selsun Blue",
  "Sensodyne",
  "Serta",
  "Sesame Street",
  "Shake ‘n Bake",
  "Shane Co.",
  "Sharp",
  "Sharper Image",
  "Sharpie",
  "Shell",
  "Sheraton",
  "Sherlock Holmes",
  "Sherwin-Williams",
  "Shop Rite",
  "Shopko",
  "Shout",
  "Siemens",
  "Siera Mist",
  "Silly Putty",
  "Similac",
  "Singapore Airlines",
  "Sirius",
  "Six Apart",
  "Six Flags",
  "Skechers",
  "Skippy",
  "Skittles",
  "Skype",
  "Skyy",
  "Slim Jim",
  "Slim-Fast",
  "Slinky",
  "Slumberland",
  "Slurpee",
  "Smacks",
  "Smart",
  "Smart Ones",
  "Smart Start",
  "Smarties",
  "Smirnoff",
  "Smith & Wesson",
  "Smucker’s",
  "Snack Pack",
  "SnackWell’s",
  "Snapple",
  "Snickers",
  "Snuggle",
  "SoBe",
  "Soft 'n Gentle",
  "Soft Batch",
  "Soft Scrub",
  "Softsoap",
  "Sonic",
  "Sony",
  "South Park",
  "Southern Comfort",
  "Southwest Airlines",
  "SpaghettiOs",
  "SPAM",
  "Spanx",
  "Spark Notes",
  "Special K",
  "Speed Stick",
  "Speedo",
  "Splenda",
  "Sportmart",
  "Sports Authority",
  "Sports Illustrated",
  "Spray ‘n Wash",
  "Sprint",
  "Sprite",
  "Squirt",
  "St. Ive’s",
  "Stain Stick",
  "StairMaster",
  "Staples",
  "Star Wars",
  "Star-Kist",
  "Starbucks",
  "Starburst",
  "State Farm",
  "Steel Reserve",
  "Steelback Brewery",
  "Stella Artois",
  "Steve Madden",
  "Stouffer’s",
  "Stove Top",
  "Stri-Dex",
  "Stride",
  "Suave",
  "Subaru",
  "Subway",
  "Sucrets",
  "Sudafed",
  "Sun Chips",
  "Sunbeam",
  "Sunkist",
  "Suncor Energy",
  "Sunny Delight",
  "Sunoco",
  "Sunsilk",
  "Super 8",
  "Super Bowl",
  "Super Soaker",
  "Supervalu",
  "Sure",
  "Suzuki",
  "Swanson",
  "Swedish Fish",
  "Sweet’n Low",
  "Swiffer",
  "Swiss Army",
  "Sylvan Learning Center",
  "Sylvania",
  "T Rowe Price",
  "T-Mobile",
  "T.G.I. Friday’s",
  "T.J. Maxx",
  "Tabasco",
  "Taco Bell",
  "Tahiti Village",
  "Talbots",
  "Talisman Energy",
  "Tang",
  "Tanqueray",
  "Target",
  "Taster’s Choice",
  "TBS",
  "Technicolor",
  "Teck Cominco",
  "Teflon",
  "Teleflora",
  "TELUS",
  "TempurPedic",
  "Terminix",
  "Tesco",
  "Teva",
  "Texaco",
  "Texas Instruments",
  "Textron",
  "The Buckle",
  "The North Face",
  "The Y",
  "The Yellow Pages",
  "Theraflu",
  "Thermacare",
  "Thermos",
  "Thighmaster",
  "Thomasville",
  "Thomson",
  "Thomson Reuters",
  "Tic Tac",
  "Ticketmaster",
  "Tide",
  "Tidy Cats",
  "Tiffany & Co.",
  "Tilex",
  "Tim Hortons",
  "Timberland",
  "Time",
  "Time Warner",
  "Timex",
  "TiVo",
  "TJX",
  "TLC",
  "TNT",
  "Toll House",
  "Tom Tom",
  "Tommy Hilfiger",
  "Tonka",
  "Tony Roma’s",
  "Tootsie Roll",
  "Toronto-Dominion Bank",
  "Toshiba",
  "Tostitos",
  "Totino’s",
  "Town House",
  "Toy Story",
  "Toyota",
  "Toys “R” Us",
  "TOZ Rum",
  "TracFone",
  "Trader Joe’s",
  "Trading Spaces",
  "Trans Canada",
  "Transitions Lenses",
  "Trapper Keeper",
  "Travelocity",
  "TraveLodge",
  "Traynor Amplifiers",
  "Tresemme",
  "Trident",
  "TrimSpa",
  "Triscuits",
  "Trivial Pursuit",
  "Trix",
  "Trojan",
  "Tropicana",
  "True Value",
  "Tums",
  "Tuna Helper",
  "Tupperware",
  "TurboTax",
  "Turtle Wax",
  "TV Guide",
  "TWA",
  "Twinkies",
  "Twitter",
  "Twix",
  "Twizzlers",
  "Tyco",
  "Tylenol",
  "Tyson",
  "U-Haul",
  "UBS",
  "UGG",
  "Ultra Brite",
  "Uncle Ben’s",
  "Under Armour",
  "United Way",
  "Uno",
  "UPS",
  "Urban Outfitters",
  "USA Today",
  "USPS",
  "V05",
  "V8",
  "Vagisil",
  "Valero Energy",
  "Valtrex",
  "Valvoline",
  "Vanguard Group",
  "Vanity Fair",
  "Vans",
  "VapoRub",
  "Vaseline",
  "Velcro",
  "Velveeta",
  "Verizon",
  "Vespa",
  "Viacom",
  "Viagra",
  "Vicks",
  "Vicodin",
  "Victoria’s Secret",
  "Victrex",
  "Vidal Sassoon",
  "Virgin",
  "Virginia Slims",
  "Visa",
  "Vizio",
  "Vlasic",
  "Vodafone",
  "Vogue",
  "Volkswagen",
  "Volvo",
  "Von Dutch",
  "Vonage",
  "Voyage",
  "Waldenbooks",
  "Walgreens",
  "WalMart",
  "Walt Disney",
  "WaMu",
  "Warner Brothers",
  "Wave Runner",
  "WB",
  "WD-40",
  "WebMD",
  "Weed Eater",
  "Weight Watchers",
  "Welch’s",
  "WellPoint",
  "Wells Fargo",
  "Wendy’s",
  "Wesson",
  "Western Union",
  "Westin Hotels",
  "Westinghouse",
  "WestJet",
  "Wet Ones",
  "What-cha-ma-call-it",
  "Wheat Thins",
  "Wheatables",
  "Wheaties",
  "Whirlpool",
  "Whiskas",
  "Whole Foods Markets",
  "WigWam",
  "Williams-Sonoma",
  "Winchester",
  "Windex",
  "Winn-Dixie",
  "Winston",
  "Winterfresh",
  "Wish-Bone",
  "Wite-Out",
  "Wonderbra",
  "Woolite",
  "Woolworth",
  "World Wildlife Fund",
  "Wrangler",
  "Wrigley’s",
  "WWE",
  "Wyeth",
  "X-Acto",
  "X-Files",
  "X-Men",
  "Xandros",
  "Xbox",
  "Xcel Energy",
  "Xerox",
  "Xhilaration",
  "XM Radio",
  "Xypex",
  "Yahoo!",
  "Yahtzee",
  "Yamaha",
  "Yasmin",
  "Yellow Pages",
  "Yellow Tail",
  "Yoo-hoo",
  "Yoplait",
  "York",
  "YouTube",
  "Zales Jewelry",
  "Zamboni",
  "Zantac",
  "Zappos",
  "Zara",
  "Zellers",
  "Zenith",
  "Zimmer",
  "Ziploc",
  "Zippo",
  "Zodac",
  "Zoloft",
  "Zurich",
  "Zyrtec"
  ]

module.exports = {
  Brands: Brands
}