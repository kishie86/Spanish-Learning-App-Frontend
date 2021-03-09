# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
SpanishLanguage.destroy_all
UserLanguage.destroy_all
Word.destroy_all
ProgressForm.destroy_all


u1 = User.create(username: "Kishana Liburd", email: "kishana.liburd@gmail.com", password: "cloud")
u2 = User.create(username: "Richard Gaston", email: "richard@gaston.com", password: "cloud")
u3 = User.create(username: "Timothy Richard", email: "timrichard@ricard.com", password: "cloud")

sl1 = SpanishLanguage.create(name: "Spanish", image: "https://i.pinimg.com/originals/91/1d/7d/911d7d6eeb2125b17d099a264d68c7dc.jpg")
sl2 = SpanishLanguage.create(name: "French", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png")
sl3 = SpanishLanguage.create(name: "Portuguese", image: "https://mdnautical.com/24103/portugal-courtesy-flag.jpg")
sl4 = SpanishLanguage.create(name: "German", image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg")
sl5 = SpanishLanguage.create(name: "Italian", image: "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/760x760/products/3332/18818/italy-flag__19720.1575335174.jpg?c=2")
sl6 = SpanishLanguage.create(name: "Swedish", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png")
sl7 = SpanishLanguage.create(name: "Turkish", image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_Turkey.png")
sl8 = SpanishLanguage.create(name: "Dutch", image: "https://cdn.britannica.com/82/2982-004-ABEB3852/flag-prototype-Netherlands-countries-European-flags.jpg")
sl9 = SpanishLanguage.create(name: "Indonesian", image: "https://cdn.britannica.com/48/1648-004-A33B72D8/Flag-Indonesia.jpg")
sl10 = SpanishLanguage.create(name: "Danish", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png")



ul1 = UserLanguage.create(spanish_language_id: sl1.id, user_id: u1.id)
ul2 = UserLanguage.create(spanish_language_id: sl1.id, user_id: u2.id)
ul3 = UserLanguage.create(spanish_language_id: sl1.id, user_id: u3.id)


sw1 = Word.create(image: "https://thumbs.dreamstime.com/b/hello-girl-waving-you-saying-hi-friendly-smiling-looking-positive-raising-palm-greeting-welcoming-newbies-entering-company-149965492.jpg", english_word: "hello", non_english_word: "hola", spanish_language_id: sl1.id)
sw2 = Word.create(image: "https://www.foreo.com/mysa/wp-content/uploads/sites/2/2018/04/Say-Goodbye-to-Batwings-with-3-Easy-At-Home-Tricep-Exercises.jpg", english_word: "bye", non_english_word: "adios", spanish_language_id: sl1.id)
sw3 = Word.create(image: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg", english_word: "house", non_english_word: "casa", spanish_language_id: sl1.id)
sw4 = Word.create(image: "https://www.thespruce.com/thmb/dA3IqLweMEIMynakpkZHmjZpcoo=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/LuxBRBevHillsFlatsx-5bfde9024cedfd0026059997.jpg", english_word: "bathroom", non_english_word: "cuarto de bano", spanish_language_id: sl1.id)
sw5 = Word.create(image: "https://www.wdiy.org/sites/wdiy/files/201910/Sharing-Food.jpg", english_word: "food", non_english_word: "comida", spanish_language_id: sl1.id)
sw6 = Word.create(image: "https://cache.marriott.com/marriottassets/marriott/SCLSI/sclsi-cid-restaurant-0396-hor-feat.jpg?downsize=1024px:*", english_word: "restaurant", non_english_word: "restaurante", spanish_language_id: sl1.id)
sw7 = Word.create(image: "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1", english_word: "apple", non_english_word: "manzana", spanish_language_id: sl1.id)
sw8 = Word.create(image: "https://cdn.cnn.com/cnnnext/dam/assets/200713171600-02-silk-road-cats-super-tease.jpg", english_word: "cat", non_english_word: "gata", spanish_language_id: sl1.id)
sw9 = Word.create(image: "https://images.macrumors.com/t/Es8C43YkyLzlzzzDsE9KbmQ9dDI=/1600x0/article-new/2020/11/iphone-12-pro-max-verge.jpg", english_word: "phone", non_english_word: "telefono", spanish_language_id: sl1.id)
sw10 = Word.create(image: "https://secure.img1-fg.wfcdn.com/im/19556338/resize-h600-w600%5Ecompr-r85/3444/34441276/Kitchen+%26+Dining+Chairs.jpg", english_word: "chair", non_english_word: "silla", spanish_language_id: sl1.id)

pf1 = ProgressForm.create(name:"Kishana Liburd", date:"01-08-2021", quiz: "Quiz 1", content:"Would love to learn more verbs by next week.")
pf2 = ProgressForm.create(name:"Richard Gaston", date:"01-17-2021", quiz: "Quiz 1", content:"Would love to practive full sentences.")
pf3 = ProgressForm.create(name:"Timothy Richard", date:"02-12-2021", quiz: "Quiz 1", content:"Need to improve. I have some more studying to do.",)



