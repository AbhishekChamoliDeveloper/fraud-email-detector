const spamFraudWords = [
  "Accept credit cards",
  "Act now! Don’t hesitate!",
  "Additional income",
  "Addresses on CD",
  "All natural",
  "Amazing",
  "Apply online",
  "As seen on",
  "Auto email removal",
  "Avoid bankruptcy",
  "Be amazed",
  "Be your own boss",
  "Being a member",
  "Big bucks",
  "Bill 1618",
  "Billing address",
  "Billion dollars",
  "Brand new pager",
  "Bulk email",
  "Buy direct",
  "Buying judgments",
  "Cable converter",
  "Call free",
  "Call now",
  "Calling creditors",
  "Cancel at any time",
  "Can’t live without",
  "Cash bonus",
  "Cashcashcash",
  "Casino",
  "Cellphone cancer scam",
  "Cents on the dollar",
  "Check or money order",
  "Claims not to be selling anything",
  "Claims to be legal",
  "Claims you are a winner",
  "Click below",
  "Click here link",
  "Click to remove",
  "Click to remove mailto",
  "Compare rates",
  "Compete for your business",
  "Confidentially on all orders",
  "Congratulations",
  "Consolidate debt and credit",
  "Copy accurately",
  "Copy DVDs",
  "Credit bureaus",
  "Credit card offers",
  "Cures baldness",
  "Dear email",
  "Dear friend",
  "Dear somebody",
  "Different reply to",
  "Dig up dirt on friends",
  "Direct email",
  "Direct marketing",
  "Discusses search engine listings",
  "Do it today",
  "Don’t delete",
  "Drastically reduced",
  "Earn per week",
  "Easy terms",
  "Eliminate bad credit",
  "Email harvest",
  "Email marketing",
  "Expect to earn",
  "Fantastic deal",
  "Fast Viagra delivery",
  "Financial freedom",
  "Find out anything",
  "For free",
  "For instant access",
  "For just $ [some amount]",
  "Free access",
  "Free cell phone",
  "Free consultation",
  "Free DVD",
  "Free grant money",
  "Free hosting",
  "Free installation",
  "Free investment",
  "Free leads",
  "Free membership",
  "Free money",
  "Free offer",
  "Free preview",
  "Free priority mail",
  "Free quote",
  "Free sample",
  "Free trial",
  "Free website",
  "Full refund",
  "Get it now",
  "Get paid",
  "Get started now",
  "Gift certificate",
  "Great offer",
  "Guarantee",
  "Have you been turned down?",
  "Hidden assets",
  "Home employment",
  "Human growth hormone",
  "If only it were that easy",
  "In accordance with laws",
  "Increase sales",
  "Increase traffic",
  "Insurance",
  "Investment decision",
  "It’s effective",
  "Join millions of Americans",
  "Laser printer",
  "Limited time only",
  "Long distance phone offer",
  "Lose weight spam",
  "Lower interest rates",
  "Lower monthly payment",
  "Lowest price",
  "Luxury car",
  "Mail in order form",
  "Marketing solutions",
  "Mass email",
  "Meet singles",
  "Member stuff",
  "Message contains disclaimer",
  "Money back",
  "Money making",
  "Month trial offer",
  "More internet traffic",
  "Mortgage rates",
  "Multi level marketing",
  "MLM",
  "Name brand",
  "New customers only",
  "New domain extensions",
  "Nigerian",
  "No age restrictions",
  "No catch",
  "No claim forms",
  "No cost",
  "No credit check",
  "No disappointment",
  "No experience",
  "No fees",
  "No gimmick",
  "No inventory",
  "No investment",
  "No medical exams",
  "No middleman",
  "No obligation",
  "No purchase necessary",
  "No questions asked",
  "No selling",
  "No strings attached",
  "Not intended",
  "Off shore",
  "Offer expires",
  "Offers coupon",
  "Offers extra cash",
  "Offers free (often stolen) passwords",
  "Once in lifetime",
  "One hundred percent free",
  "One hundred percent guaranteed",
  "One time mailing",
  "Online biz opportunity",
  "Online pharmacy",
  "Only $",
  "Opportunity",
  "Opt in",
  "Order now",
  "Order status",
  "Orders shipped by priority mail",
  "Outstanding values",
  "Pennies a day",
  "People just leave money laying around",
  "Please read",
  "Potential earnings",
  "Print form signature",
  "Print out and fax",
  "Produced and sent out",
  "Profits",
  "Promise you …!",
  "Pure profit",
  "Real thing",
  "Refinance home",
  "Removal instructions",
  "Remove in quotes",
  "Remove subject",
  "Removes wrinkles",
  "Reply remove subject",
  "Requires initial investment",
  "Reserves the right",
  "Reverses aging",
  "Risk free",
  "Round the world",
  "S 1618",
  "Safeguard notice",
  "Satisfaction guaranteed",
  "Save $",
  "Save big money",
  "Save up to",
  "Score with babes",
  "Section 301",
  "See for yourself",
  "Sent in compliance",
  "Serious cash",
  "Serious only",
  "Shopping spree",
  "Sign up free today",
  "Social security number",
  "Special promotion",
  "Stainless steel",
  "Stock alert",
  "Stock disclaimer statement",
  "Stock pick",
  "Stop snoring",
  "Strong buy",
  "Stuff on sale",
  "Subject to credit",
  "Supplies are limited",
  "Take action now",
  "Talks about hidden charges",
  "Talks about prizes",
  "Tells you it’s an ad",
  "Terms and conditions",
  "The best rates",
  "The following form",
  "They keep your money – no refund!",
  "They’re just giving it away",
  "This isn’t junk",
  "This isn’t spam",
  "University diplomas",
  "Unlimited",
  "Unsecured credit/debt",
  "Urgent",
  "US dollars",
  "Vacation offers",
  "Viagra and other drugs",
  "Wants credit card",
  "We hate spam",
  "We honor all",
  "Weekend getaway",
  "What are you waiting for?",
  "While supplies last",
  "While you sleep",
  "Who really wins?",
  "Why pay more?",
  "Will not believe your eyes",
  "Winner",
  "Winning",
  "Work at home",
  "You have been selected",
  "Your income",
  "As seen on",
  "Buy",
  "Buy direct",
  "Buying judgments",
  "Clearance",
  "Order",
  "Order status",
  "Orders shipped by shopper",
  "Dig up dirt on friends",
  "Meet singles",
  "Score with babes",
  "XXX",
  "Near youAdditional income",
  "Be your own boss",
  "Compete for your business",
  "Double your",
  "Earn $",
  "Earn extra cash",
  "Earn per week",
  "Expect to earn",
  "Extra income",
  "Home based",
  "Home employment",
  "Homebased business",
  "Income from home",
  "Make $",
  "Make money",
  "Money making",
  "Online biz opportunity",
  "Online degree",
  "Opportunity",
  "Potential earnings",
  "University diplomas",
  "While you sleep",
  "Work at home",
  "Work from home",
  "Financial - General",
  "$$$",
  "Affordable",
  "Bargain",
  "Beneficiary",
  "Best price",
  "Big bucks",
  "Cash",
  "Cash bonus",
  "Cashcashcash",
  "Cents on the dollar",
  "Cheap",
  "Check",
  "Claims",
  "Collect",
  "Compare rates",
  "Cost",
  "Credit",
  "Credit bureaus",
  "Discount",
  "Earn",
  "Easy terms",
  "F r e e",
  "Fast cash",
  "For just $XXX",
  "Hidden assets",
  "hidden charges",
  "Income",
  "Incredible deal",
  "Insurance",
  "Investment",
  "Loans",
  "Lowest price",
  "Million dollars",
  "Money",
  "Money back",
  "Mortgage",
  "Mortgage rates",
  "No cost",
  "No fees",
  "One hundred percent free",
  "Only $",
  "Pennies a day",
  "Price",
  "Profits",
  "Pure profit",
  "Quote",
  "Refinance",
  "Save $",
  "Save big money",
  "Save up to",
  "Serious cash",
  "Subject to credit",
  "They keep your money — no refund!",
  "Unsecured credit",
  "Unsecured debt",
  "US dollars",
  "Why pay more?",
  "Financial - Business",
  "Accept credit cards",
  "Cards accepted",
  "Check or money order",
  "Credit card offers",
  "Explode your business",
  "Full refund",
  "Investment decision",
  "No credit check",
  "No hidden Costs",
  "No investment",
  "Requires initial investment",
  "Sent in compliance",
  "Stock alert",
  "Stock disclaimer statement",
  "Stock pick",
  "Financial - Personal",
  "Avoice bankruptcy",
  "Calling creditors",
  "Collect child support",
  "Consolidate debt and credit",
  "Consolidate your debt",
  "Eliminate bad credit",
  "Eliminate debt",
  "Financially independent",
  "Get out of debt",
  "Get paid",
  "Lower interest rate",
  "Lower monthly payment",
  "Lower your mortgage rate",
  "Lowest insurance rates",
  "Pre-approved",
  "Refinance home",
  "Social security number",
  "Your income",
  "General",
  "Acceptance",
  "Accordingly",
  "Avoid",
  "Chance",
  "Dormant",
  "Freedom",
  "Here",
  "Hidden",
  "Home",
  "Leave",
  "Lifetime",
  "Lose",
  "Maintained",
  "Medium",
  "Miracle",
  "Never",
  "Passwords",
  "Problem",
  "Remove",
  "Reverses",
  "Sample",
  "Satisfaction",
  "Solution",
  "Stop",
  "Success",
  "Teen",
  "WifeAd",
  "Auto email removal",
  "Bulk email",
  "Click",
  "Click below",
  "Click here",
  "Click to remove",
  "Direct email",
  "Direct marketing",
  "Email harvest",
  "Email marketing",
  "Form",
  "Increase sales",
  "Increase traffic",
  "Increase your sales",
  "Internet market",
  "Internet marketing",
  "Marketing",
  "Marketing solutions",
  "Mass email",
  "Member",
  "Month trial offer",
  "More Internet Traffic",
  "Multi level marketing",
  "Notspam",
  "One time mailing",
  "Online marketing",
  "Open",
  "Opt in",
  "Performance",
  "Removal instructions",
  "Sale",
  "Sales",
  "Search engine listings",
  "Search engines",
  "Subscribe",
  "The following form",
  "This isn't junk",
  "This isn't spam",
  "Undisclosed recipient",
  "Unsubscribe",
  "Visit our website",
  "We hate spam",
  "Web traffic",
  "Will not believe your eyes",
  "Medical",
  "Cures baldness",
  "Diagnostic",
  "Fast Viagra delivery",
  "Human growth hormone",
  "Life insurance",
  "Lose weight",
  "Lose weight spam",
  "Medicine",
  "No medical exams",
  "Online pharmacy",
  "Removes wrinkles",
  "Reverses aging",
  "Stop snoring",
  "Valium",
  "Viagra",
  "Vicodin",
  "Weight loss",
  "Xanax",
  "Numbers",
  "#1",
  "100% free",
  "100% satisfied",
  "4U",
  "50% off",
  "Billion",
  "Billion dollars",
  "Join millions",
  "Join millions of Americans",
  "Million",
  "One hundred percent guaranteed",
  "Thousands",
  "Offers",
  "Being a member",
  "Billing address",
  "Call",
  "Cannot be combined with any other offer",
  "Confidentially on all orders",
  "Deal",
  "Financial freedom",
  "Gift certificate",
  "Giving away",
  "Guarantee",
  "Have you been turned down?",
  "If only it were that easy",
  "Important information regarding",
  "In accordance with laws",
  "Long distance phone offer",
  "Mail in order form",
  "Message contains",
  "Name brand",
  "Nigerian",
  "No age restrictions",
  "No catch",
  "No claim forms",
  "No disappointment",
  "No experience",
  "No gimmick",
  "No inventory",
  "No middleman",
  "No obligation",
  "No purchase necessary",
  "No questions asked",
  "No selling",
  "No strings attached",
  "No-obligation",
  "Not intended",
  "Obligation",
  "Off shore",
  "Offer",
  "Per day",
  "Per week",
  "Priority mail",
  "Prize",
  "Prizes",
  "Produced and sent out",
  "Reserves the right",
  "Shopping spree",
  "Stuff on sale",
  "Terms and conditions",
  "The best rates",
  "They’re just giving it away",
  "Trial",
  "Unlimited",
  "Unsolicited",
  "Vacation",
  "Vacation offers",
  "Warranty",
  "We honor all",
  "Weekend getaway",
  "What are you waiting for?",
  "Who really wins?",
  "Win",
  "Winner",
  "Winning",
  "Won",
  "You are a winner!",
  "You have been selected",
  "You’re a Winner!",
  "Calls-to-Action",
  "Cancel at any time",
  "Compare",
  "Copy accurately",
  "Get",
  "Give it away",
  "Print form signature",
  "Print out and fax",
  "See for yourself",
  "Sign up free today",
  "Free",
  "Free",
  "Free access",
  "Free cell phone",
  "Free consultation",
  "Free DVD",
  "Free gift",
  "Free grant money",
  "Free hosting",
  "Free installation",
  "Free Instant",
  "Free investment",
  "Free leads",
  "Free membership",
  "Free money",
  "Free offer",
  "Free preview",
  "Free priority mail",
  "Free quote",
  "Free sample",
  "Free trial",
  "Free website",
  "Descriptions/Adjectives",
  "All natural",
  "All new",
  "Amazing",
  "Certified",
  "Congratulations",
  "Drastically reduced",
  "Fantastic deal",
  "For free",
  "Guaranteed",
  "It’s effective",
  "Outstanding values",
  "Promise you",
  "Real thing",
  "Risk free",
  "Satisfaction guaranteed",
  "Sense of Urgency",
  "Access",
  "Act now!",
  "Apply now",
  "Apply online",
  "Call free",
  "Call now",
  "Can't live without",
  "Do it today",
  "Don't delete",
  "Don't hesitate",
  "For instant access",
  "For Only",
  "For you",
  "Get it now",
  "Get started now",
  "Great offer",
  "Info you requested",
  "Information you requested",
  "Instant",
  "Limited time",
  "New customers only",
  "Now",
  "Now only",
  "Offer expires",
  "Once in lifetime",
  "One time",
  "Only",
  "Order now",
  "Order today",
  "Please read",
  "Special promotion",
  "Supplies are limited",
  "Take action now",
  "Time limited",
  "Urgent",
  "While supplies last",
  "Nouns",
  "Addresses on CD",
  "Beverage",
  "Bonus",
  "Brand new pager",
  "Cable converter",
  "Casino",
  "Celebrity",
  "Copy DVDs",
  "Laser printer",
  "Legal",
  "Luxury car",
  "New domain extensions",
  "Phone",
  "Rolex",
  "Stainless steel",
  "password",
  "enter password",
  "enter your password",
  "account",
  "%Satisfied",
  "%",
  "off",
  "Acceptance",
  "Accordingly",
  "Act",
  "Now",
  "Affordable",
  "All",
  "New",
  "As",
  "seen on",
  "Auto email removal",
  "Avoid",
  "Bargain",
  "Be amazed",
  "Bonus",
  "Brand new pager",
  "Bulk email",
  "Buy",
  "Buy direct",
  "Buying judgments",
  "Cable converter",
  "Call",
  "Call free",
  "Call now",
  "Can’t live without",
  "Cancel at any time",
  "Casino",
  "Celebrity",
  "Chance",
  "Claims not to be selling anything",
  "Clearance",
  "Click",
  "Click below",
  "Click here",
  "Click to remove",
  "Compare",
  "Compare",
  "Compare rates",
  "Compete for your business",
  "Copy accurately",
  "Copy DVDs",
  "Deal",
  "Direct email",
  "Direct marketing",
  "Do it today",
  "Don’t delete",
  "Don’t hesitate!",
  "Dormant",
  "Email harvest",
  "Email marketing",
  "Explode your business",
  "F r e e",
  "Fantastic deal",
  "For just $(insert whatever amount)",
  "For Only",
  "Form",
  "Free",
  "Free consultation",
  "Free DVD",
  "Free hosting",
  "Freedom",
  "Get",
  "Get it away",
  "Get it now",
  "Gift certificate",
  "Give it away",
  "Guarantee",
  "Guaranteed",
  "Have you been turned down?",
  "Have you been turned down?",
  "Here",
  "Hidden",
  "Home",
  "Increase sales",
  "Increase traffic",
  "Increase your sales",
  "Incredible deal",
  "Internet market",
  "Internet marketing",
  "It’s effective",
  "Join millions",
  "Join millions of Americans",
  "Laser printer",
  "Leave",
  "Lifetime",
  "limited time",
  "Limited time offer",
  "Long distance phone offer",
  "Lose",
  "Luxury car",
  "Mail in order form",
  "Maintained",
  "Marketing",
  "Marketing solutions",
  "Mass email",
  "Medium",
  "Member",
  "Miracle",
  "Month trial offer",
  "More Internet Traffic",
  "Multi level marketing",
  "Never",
  "New domain extensions",
  "No age restrictions",
  "No cost",
  "No disappointment",
  "No gimmick",
  "No inventory",
  "No middleman",
  "No obligation",
  "No purchase necessary",
  "No questions asked",
  "No selling",
  "No strings attached",
  "No-obligation",
  "Notspam",
  "Now",
  "Now only",
  "One hundred percent free",
  "One hundred percent guaranteed",
  "One time mailing",
  "Online marketing",
  "Open",
  "Opportunity",
  "Opt in",
  "Order",
  "Order now",
  "Order shipped by",
  "Passwords",
  "Performance",
  "Print form signature",
  "Print out and fax",
  "Priority mail",
  "Prize",
  "Prizes",
  "Problem",
  "Produced and sent out",
  "Promise you",
  "Quote",
  "Quotes",
  "Removal instructions",
  "Remove",
  "Reserves the right",
  "Reverses",
  "Rolex",
  "Sale",
  "Sales",
  "Sample",
  "Satisfaction",
  "Save $",
  "Save big money",
  "Search engine listings",
  "Search engines",
  "See for yourself",
  "Serious only",
  "Shopping spree",
  "Sign up free today",
  "Solution",
  "Stainless steel",
  "Stop",
  "Strong buy",
  "Stuff on sale",
  "Subscribe",
  "Success",
  "Teen",
  "The best rates",
  "The following form",
  "They’re just giving it away",
  "This isn’t a scam",
  "This isn't junk",
  "This isn't spam",
  "This won’t last",
  "Undisclosed recipient",
  "Unlimited",
  "Unsolicited",
  "Unsubscribe",
  "Urgent",
  "Vacation",
  "Vacation offers",
  "Visit our website",
  "Warranty",
  "We hate spam",
  "We honor all",
  "Web traffic",
  "Weekend getaway",
  "While supplies last",
  "While you sleep",
  "Who really wins?",
  "Will not believe your eyes",
  "Win",
  "Winner",
  "Winning",
  "Won",
  "You are a winner!",
  "You have been selected",
  "% free",
  "Accept credit cards",
  "Access",
  "Ad",
  "Amazing",
  "Auto email removal",
  "Being a member",
  "Best price",
  "Billing address",
  "Bulk email",
  "Cancel at any time",
  "Cannot be combined with any other offer",
  "Cards accepted",
  "Dear [email/friend/somebody]",
  "Dig up dirt on friends",
  "Direct email",
  "Direct marketing",
  "Email harvest",
  "Email marketing",
  "Free gift",
  "Free leads",
  "Free preview",
  "Free sample",
  "Free trial",
  "Full refund",
  "Get started now",
  "Gift certificate",
  "Give it away",
  "Great offer",
  "If only it were that easy",
  "Important information regarding",
  "Increase traffic",
  "Info you requested",
  "Information you requested",
  "Internet market",
  "Internet marketing",
  "Maintained",
  "Marketing",
  "Marketing solutions",
  "Mass email",
  "Member",
  "Member stuff",
  "Message contains",
  "Message contains disclaimer",
  "MLM",
  "Multi level marketing",
  "Multi-level marketing",
  "Name brand",
  "No catch",
  "No disappointment",
  "No hidden",
  "Not intended",
  "Obligation",
  "Offer",
  "Online marketing",
  "Order status",
  "Please read",
  "Safeguard notice",
  "Satisfaction",
  "Satisfaction guaranteed",
  "Search engine listings",
  "Search engines",
  "Sent in compliance",
  "Solution",
  "Special promotion",
  "Supplies are limited",
  "Talks about hidden charges",
  "Tells you it’s an ad",
  "Terms and conditions",
  "The following form",
  "This isn’t junk",
  "This isn’t spam",
  "Trial",
  "We hate spam",
  "Web traffic",
  "Weekend getaway",
  "As seen on",
  "Bargain",
  "Be amazed",
  "Bonus",
  "Buy direct",
  "Buying judgments",
  "Call",
  "Call free",
  "Can’t live without",
  "Cheap",
  "Claims not to be selling anything",
  "Clearance",
  "Click to remove",
  "Collect",
  "Compare rates",
  "Compete for your business",
  "Deal",
  "Don’t hesitate!",
  "Explode your business",
  "F r e e",
  "Fantastic deal",
  "For just $(insert whatever amount)",
  "For Only",
  "Free DVD",
  "Free hosting",
  "Get it now",
  "Guarantee",
  "Guaranteed",
  "Have you been turned down?",
  "Increase sales",
  "Increase your sales",
  "Incredible deal",
  "It’s effective",
  "Join millions",
  "Join millions of Americans",
  "Lifetime",
  "limited time",
  "Limited time offer",
  "Long distance phone offer",
  "Mail in order form",
  "Money back",
  "New domain extensions",
  "No cost",
  "No gimmick",
  "No inventory",
  "No middleman",
  "No obligation",
  "No questions asked",
  "No selling",
  "No strings attached",
  "No-obligation",
  "Now",
  "Now only",
  "One hundred percent free",
  "One hundred percent guaranteed",
  "Opportunity",
  "Order shipped by",
  "Problem",
  "Promise you",
  "Quote",
  "Quotes",
  "Sale",
  "Sales",
  "Save $",
  "Save big money",
  "See for yourself",
  "Serious only",
  "Sign up free today",
  "Strong buy",
  "Stuff on sale",
  "Success",
  "The best rates",
  "They’re just giving it away",
  "This isn’t a scam",
  "This won’t last",
  "Unlimited",
  "Urgent",
  "Warranty",
  "We honor all",
  "While supplies last",
  "While you sleep",
  "Will not believe your eyes",
  "Financial",
  "“Hidden” assets",
  "$$$",
  "Additional income",
  "Apply Online",
  "Avoid bankruptcy",
  "Be your own boss",
  "Beneficiary",
  "Big bucks",
  "Billion",
  "Billion dollars",
  "Calling creditors",
  "Cash",
  "Cash bonus",
  "Casino",
  "Cents on the dollar",
  "Check",
  "Check or money order",
  "Collect child support",
  "Consolidate debt and credit",
  "Consolidate your debt",
  "Cost",
  "Costs",
  "Credit",
  "Credit bureaus",
  "Credit card offers",
  "Discount",
  "Double your",
  "Double your income",
  "Earn",
  "Earn $",
  "Earn extra cash",
  "Earn per week",
  "Easy terms",
  "Eliminate bad credit",
  "Eliminate debt",
  "Expect to earn",
  "Extra income",
  "Fast cash",
  "Financial freedom",
  "Financially independent",
  "For free",
  "For just $xxx",
  "Free grant money",
  "Free investment",
  "Free money",
  "Get out of debt",
  "Get paid",
  "Hidden assets",
  "Hidden charges",
  "Home based",
  "Home employment",
  "Home Based business",
  "Income",
  "Income from home",
  "Investment",
  "Investment decision",
  "Leave",
  "Loans",
  "Lower interest rate",
  "Lower interest rates",
  "Lower monthly payment",
  "Lower your mortgage rate",
  "Lowest insurance rates",
  "Make $",
  "Make money",
  "Million",
  "Million dollars",
  "Money",
  "Money making",
  "Mortgage",
  "Mortgage rates",
  "Nigerian",
  "No credit check",
  "No fees",
  "No investment",
  "Off shore",
  "One time",
  "Online biz opportunity",
  "Only $",
  "Pennies a day",
  "Potential earnings",
  "Pre-approved",
  "Price",
  "Prices",
  "Print form signature",
  "Profits",
  "Pure Profits",
  "Refinance",
  "Refinance home",
  "Refinanced home",
  "Risk free",
  "Save up to",
  "Serious cash",
  "Social security number",
  "Stock alert",
  "Stock disclaimer statement",
  "Stock pick",
  "Subject to cash",
  "Subject to credit",
  "They keep your money – no refund",
  "Thousands",
  "Unsecured credit",
  "Unsecured credit/debt",
  "Unsecured debt",
  "US dollars",
  "Why pay more?",
  "Winner",
  "Winning",
  "Work at home",
  "Work from home",
  "Your income",
  "Medical",
  "CURES BALDNESS",
  "DIAGNOSTICS",
  "FAST",
  "VIAGRA DELIVERY",
  "Human",
  "growth hormone",
  "Life",
  "Insurance Lose weight",
  "Lose",
  "weight spam",
  "Medicine",
  "No medical exams",
  "Online pharmacy",
  "Removes wrinkles",
  "Reverses aging",
  "Stop",
  "snoring",
  "Valium Viagra",
  "Vicodin",
  "Weight loss",
  "Xanax",
  "Ecommerce",
  "AS SEEN ON",
  "BUY",
  "BUY DIRECT",
  "Buying judgments",
  "Clearance",
  "Confidentially on all orders",
  "Order",
  "Order status",
  "Order today",
  "Orders shipped by",
  "Orders shipped by",
  "Outstanding values",
  "Sample",
  "shopper",
  "Wants credit card",
  "What are you wait",
  "Accept credit cards",
  "Acceptance",
  "Access",
  "Access now",
  "Access for free",
  "Accordingly",
  "Act Now",
  "Act immediately",
  "Action",
  "Action required",
  "Ad",
  "Additional income",
  "Addresses on CD",
  "Affordable",
  "Affordable deal",
  "All natural",
  "All new",
  "Amazed",
  "Amazing",
  "Amazing offer",
  "Amazing stuff",
  "Apply here",
  "Apply now",
  "Apply Online",
  "As seen on",
  "At no cost",
  "Auto email removal",
  "Avoid",
  "Avoid bankruptcy",
  "Bargain",
  "Be amazed",
  "Be surprised",
  "Be your own boss",
  "Believe me",
  "Being a member",
  "Beneficiary",
  "Best bargain",
  "Best deal",
  "Best price",
  "Best offer",
  "Beverage",
  "Big bucks",
  "Bill 1618",
  "Billing",
  "Billing address",
  "Billionaire",
  "Billion",
  "Billion dollars",
  "Bonus",
  "Boss",
  "Brand new pager",
  "Bulk email",
  "Buy",
  "Buy now",
  "Buy direct",
  "Buying judgments",
  "0%",
  "0% risk",
  "777",
  "99%",
  "99.9%",
  "100%",
  "100% more",
  "#1",
  "$$$",
  "100% free",
  "100% satisfied",
  "4U",
  "50% off",
  "Cable converter",
  "Call",
  "Call free",
  "Call me",
  "Call now",
  "Calling creditors",
  "Can’t live without",
  "Cancel",
  "Cancel at any time",
  "Cancel now",
  "Cancelation required",
  "Cannot be combined",
  "with any other offer",
  "Cards accepted",
  "Cash",
  "Cash out",
  "Cash bonus",
  "Cashcashcash",
  "Casino",
  "Celebrity",
  "Cell phone cancer",
  "scam",
  "Cents on the dollar",
  "Certified",
  "Chance",
  "Cheap",
  "Check",
  "Check or money order",
  "Claims",
  "Claim now",
  "Claim your discount",
  "Claims not to be selling",
  "anything",
  "C",
  "Claims not to be selling",
  "anything",
  "Claims to be in",
  "accordance with some",
  "spam law",
  "Claims to be legal",
  "Clearance",
  "Click",
  "Click below",
  "Click here",
  "Click now",
  "Click to get",
  "Click to remove",
  "Collect",
  "Collect child support",
  "Compare",
  "Compare now",
  "Compare online",
  "Compare rates",
  "Compete for your",
  "business",
  "Confidentially on all",
  "orders",
  "Congratulations",
  "Consolidate debt and",
  "credit",
  "Consolidate your debt",
  "Copy accurately",
  "Copy DVDs",
  "Costs",
  "Credit",
  "Credit bureaus",
  "Credit card offers",
  "Cures",
  "Cures baldness",
  "Deal",
  "Dear",
  "[email/friend/somebody]",
  "Debt",
  "Diagnostics",
  "Dig up dirt on friends",
  "Direct email",
  "Direct marketing",
  "Discount",
  "Do it now",
  "Do it today",
  "Don’t delete",
  "Don’t hesitate",
  "Dormant",
  "Double your",
  "Double your cash",
  "Double your income",
  "Double your wealth",
  "Drastically reduced",
  "F",
  "F r e e",
  "Fantastic",
  "Fantastic deal",
  "Fantastic offer",
  "Fast cash",
  "Fast Viagra delivery",
  "Financial freedom",
  "Financially independent",
  "For free",
  "For instant access",
  "For just $ (some",
  "amount)",
  "For just $xxx",
  "For Only",
  "For you",
  "Form",
  "Free",
  "Free access",
  "Free bonus",
  "Free cell phone",
  "Free consultation",
  "Free DVD",
  "Free gift",
  "Free grant money",
  "Free hosting",
  "Free info",
  "Free information",
  "Free installation",
  "Free instant",
  "Free investment",
  "Free iPhone",
  "Free leads",
  "Free Macbook",
  "Free membership",
  "Free money",
  "Free offer",
  "Free preview",
  "Free priority mail",
  "Free quote",
  "Free sample",
  "Free trial",
  "Free website",
  "Freedom",
  "Friend",
  "Full refund",
  "Earn",
  "Earn $",
  "Earn extra cash",
  "Earn money",
  "Earn monthly",
  "Earn from home",
  "Earn per month",
  "Earn per week",
  "Easy terms",
  "Eliminate bad credit",
  "Eliminate debt",
  "Email extractor",
  "Email harvest",
  "Email marketing",
  "Exclusive deal",
  "Expect to earn",
  "Expire",
  "Explode your business",
  "Extra",
  "Extra cash",
  "Extra income",
  "Extract email",
  "E",
  "H I",
  "Have you been turned",
  "down?",
  "Hello",
  "Here",
  "Hidden",
  "Hidden assets",
  "Hidden charges",
  "Hidden fees",
  "High score",
  "Home",
  "Home based",
  "Home employment",
  "Home based business",
  "Human growth",
  "hormone",
  "Huge discount",
  "Hurry up",
  "If only it were that easy",
  "Important information",
  "regarding",
  "Important notification",
  "In accordance with laws",
  "Income",
  "Income from home",
  "Increase sales",
  "Increase traffic",
  "Increase your chances",
  "Increase your sales",
  "Incredible deal",
  "Info you requested",
  "Information you",
  "requested",
  "Instant",
  "Instant earnings",
  "Instant income",
  "Insurance",
  "Internet market",
  "Internet marketing",
  "Investment",
  "Investment decision",
  "It’s effective",
  "Get",
  "Get it now",
  "Get out of debt",
  "Get paid",
  "Get started now",
  "Gift certificate",
  "Give it away",
  "Giving away",
  "Great",
  "Great deal",
  "Great offer",
  "Guarantee",
  "Guaranteed",
  "Guaranteed deposit",
  "Guaranteed income",
  "Guaranteed payment",
  "G",
  "L",
  "Join millions -",
  "Join millions of",
  "Americans",
  "Junk",
  "J",
  "Laser printer",
  "Leave",
  "Legal",
  "Legal notice",
  "Life",
  "Life Insurance",
  "Lifetime",
  "Lifetime access",
  "Lifetime deal",
  "Limited amount",
  "Limited number",
  "Limited offer",
  "Limited supply",
  "Limited time",
  "Limited time offer",
  "Limited time only",
  "Loan",
  "Long distance phone",
  "offer",
  "Lose",
  "Lose weight",
  "Lose weight spam",
  "Lower interest rates",
  "Lower monthly payment",
  "Lower your mortgage",
  "rate",
  "Lowest insurance rates",
  "Lowest price",
  "Lowest rate",
  "Luxury",
  "Luxury car",
  "K",
  "N",
  "Name brand",
  "Never",
  "Never before",
  "New customers only",
  "New domain extensions",
  "Nigerian",
  "No age restrictions",
  "No catch",
  "No claim forms",
  "No cost",
  "No credit check",
  "No deposit required",
  "No disappointment",
  "No experience",
  "No fees",
  "No gimmick",
  "No hidden",
  "No hidden сosts",
  "No hidden fees",
  "No interests",
  "No inventory",
  "No investment",
  "No investment required",
  "No medical exams",
  "No middleman",
  "No obligation",
  "No payment required",
  "No purchase necessary",
  "No questions asked",
  "No selling",
  "No strings attached",
  "No-obligation",
  "Not intended",
  "Not junk",
  "Not scam",
  "Not spam",
  "Now",
  "Now only",
  "Number 1",
  "Number one",
  "Mail in order form",
  "Maintained",
  "Make $",
  "Make money",
  "Marketing",
  "Marketing solutions",
  "Mass email",
  "Medicine",
  "Medium",
  "Meet girls",
  "Meet me",
  "Meet singles",
  "Meet women",
  "Member",
  "Member stuff",
  "Message contains",
  "Message contains",
  "disclaimer",
  "Million",
  "Millionaire",
  "Million dollars",
  "Miracle",
  "MLM",
  "Money",
  "Money back",
  "Money making",
  "Month trial offer",
  "More Internet Traffic",
  "Mortgage",
  "Mortgage rates",
  "Multi-level marketing",
  "M",
  "P Q",
  "Passwords",
  "Pennies a day",
  "Per day",
  "Per month",
  "Per week",
  "Performance",
  "Phone",
  "Please read",
  "Potential earnings",
  "Pre-approved",
  "Presently",
  "Price",
  "Price protection",
  "Print form signature",
  "Print out and fax",
  "Priority mail",
  "Prize",
  "Problem",
  "Produced and sent out",
  "Profits",
  "Promise",
  "Promise you",
  "Purchase",
  "Pure profits",
  "Obligation Quote",
  "Offshore",
  "Offer",
  "Offer expires",
  "Once in lifetime",
  "Once in a lifetime",
  "One hundred percent",
  "free",
  "One hundred percent",
  "guaranteed",
  "One time",
  "One time mailing",
  "Online biz opportunity",
  "Online degree",
  "Online job",
  "Online income",
  "Online marketing",
  "Online pharmacy",
  "Only",
  "Only $",
  "Open",
  "Opportunity",
  "Opt in",
  "Order",
  "Order now",
  "Order shipped by",
  "Order status",
  "Order today",
  "Outstanding values",
  "S 1618",
  "Safeguard notice",
  "Sale",
  "Sample",
  "Satisfaction",
  "Satisfaction guaranteed",
  "Save $",
  "Save money",
  "Save now",
  "Save big money",
  "Save up to",
  "Score",
  "Score with babes",
  "Search engine listings",
  "Search engines",
  "Section 301",
  "See for yourself",
  "Sent in compliance",
  "Serious",
  "Serious cash",
  "Serious only",
  "Serious offer",
  "Shopper",
  "Shopping spree",
  "Sign up free today",
  "Social security number",
  "Solution",
  "Spam",
  "Special deal",
  "Special discount",
  "Special for you",
  "Special offer",
  "Special promotion",
  "Stainless steel",
  "Stock alert",
  "Stock disclaimer",
  "statement",
  "Stock pick",
  "Stop",
  "Stop calling me",
  "Stop emailing me",
  "Stop snoring",
  "Strong buy",
  "Stuff on sale",
  "Subject to cash",
  "Subject to credit",
  "Subscribe",
  "Subscribe now",
  "Subscribe for free",
  "Success",
  "Supplies",
  "Supplies are limited",
  "Rates",
  "Real thing",
  "Refinance",
  "Refinance home",
  "Refund",
  "Removal",
  "Removal instructions",
  "Remove",
  "Removes wrinkles",
  "Request",
  "Request now",
  "Request today",
  "Requires initial",
  "investment",
  "Reserves the right",
  "Reverses",
  "Reverses aging",
  "Risk free",
  "Risk-free",
  "Rolex",
  "Round the world",
  "R",
  "U V",
  "9",
  "Undisclosed recipient",
  "University diplomas",
  "Unlimited",
  "Unsecured credit",
  "Unsecured debt",
  "Unsolicited",
  "Unsubscribe",
  "Urgent",
  "US dollars",
  "Vacation",
  "Vacation offers",
  "Valium",
  "Viagra",
  "Vicodin",
  "VIP",
  "Visit our website",
  "Take action",
  "Take action now",
  "Talks about hidden",
  "charges",
  "Talks about prizes",
  "Teen",
  "Tells you it’s an ad",
  "Terms",
  "Terms and conditions",
  "The best rates",
  "The following form",
  "They keep your money",
  "- no refund!",
  "They’re just giving it",
  "away",
  "This isn’t a scam",
  "This isn’t junk",
  "This isn’t spam",
  "This won’t last",
  "Thousands",
  "Time limited",
  "Traffic",
  "Trial",
  "T",
  "X",
  "Y",
  "1 0",
  "Xanax",
  "You are a winner!",
  "You have been chosen",
  "You have been",
  "selected",
  "Your chance",
  "Your income",
  "Your status",
  "Wants credit card",
  "Warranty",
  "Warranty expired",
  "We hate spam",
  "We honor all",
  "Web traffic",
  "Website visitors",
  "Weekend getaway",
  "Weight",
  "Weight loss",
  "What are you waiting",
  "for?",
  "What’s keeping you?",
  "While available",
  "While in stock",
  "While supplies last",
  "While you sleep",
  "Who really wins?",
  "Why pay more?",
  "Wife",
  "Will not believe your",
  "eyes",
  "Win",
  "Winner",
  "Winning",
  "Won",
  "Work from home",
];

export default spamFraudWords;