import { TypeBlogPosts } from "../types/typeConstans";
import { TypeSocialNetworks } from "../types/typesComponents";

export const blogPosts: TypeBlogPosts[] = [
  {
    id: '1',
    title: "Ceviche: El Plato Bandera del Perú",
    author: "PeruvianFoodBlog.com",
    description: "Descubre los secretos para preparar el auténtico ceviche peruano con este paso a paso ilustrado. Desde elegir el pescado fresco hasta lograr el equilibrio perfecto de limón, cebolla y ajís.",
    url: "https://peruvianfoodblog.com/ceviche-receta-tradicional",
    imageUrl: "https://i.imgur.com/cevichefw.jpg",
    date: "2022-01-10",
    content: "El ceviche es el plato bandera de la gastronomía peruana. Esta preparación a base de pescado fresco marinado en limón, cebolla y ajíes tiene sus orígenes en la antigua tradición culinaria de los pueblos costeros del Perú..."
  },
  {
    id: '2',
    title: "Lomo Saltado: El Sabor Criollo en un Salteado",
    author: "PeruDelicious.com",
    description: "El lomo saltado es uno de los platos más populares de la cocina criolla peruana. Descubre cómo preparar esta receta fácil pero deliciosa, con cortes de carne, cebolla, tomate y papas fritas.",
    url: "https://perudelicious.com/lomo-saltado-receta",
    imageUrl: "https://i.imgur.com/lomosaltadofw.jpg",
    date: "2022-01-10",
    content: "El lomo saltado es un plato típico de la cocina criolla peruana que combina influencias chinas y peruanas. Esta deliciosa preparación consiste en trozos de lomo de res salteados con cebolla, tomate y papas fritas..."
  },
  {
    id: '3',
    title: "Classic Spaghetti Bolognese",
    author: "PeruDelicious.com",
    description: "A hearty and flavorful meat sauce paired with al dente spaghetti.",
    url: "https://perudelicious.com/lomo-saltado-receta",
    imageUrl: "https://example.com/spaghetti-bolognese.jpg",
    date: "2023-03-01",
    content: "Spaghetti Bolognese is a classic Italian dish that combines rich and savory ground beef with tomatoes, herbs, and al dente spaghetti. This recipe is a staple in many households for its comforting flavors and easy preparation.\n\nTo begin, you'll need to gather your ingredients: ground beef, onions, garlic, carrots, celery, canned tomatoes, red wine, beef broth, and a variety of herbs and spices. Start by sautéing the finely chopped vegetables until softened, then add the ground beef and cook until browned. Deglaze the pan with red wine, allowing the alcohol to evaporate, then add the remaining ingredients and simmer for at least an hour to allow the flavors to meld.\n\nWhile the sauce is simmering, bring a large pot of salted water to a boil and cook your spaghetti until al dente. Drain the spaghetti and toss it with the Bolognese sauce, making sure each strand is evenly coated. Garnish with freshly grated Parmesan cheese and chopped parsley for a burst of flavor and color.\n\nThis dish is perfect for a cozy family dinner or a casual gathering with friends. Pair it with a simple green salad and a glass of full-bodied red wine for a truly Italian experience. Buon appetito!"
  },
  /* {
    id: 2,
    title: "Creamy Mushroom Risotto",
    description: "A rich and satisfying Italian rice dish with a velvety mushroom sauce.",
    imageUrl: "https://example.com/mushroom-risotto.jpg",
    date: "2023-02-15",
    text: "Risotto is a beloved Italian dish that showcases the versatility of Arborio rice and its ability to absorb flavors. This creamy mushroom risotto is a delightful variation that is sure to please even the most discerning palates.\n\nTo begin, you'll need to gather your ingredients: Arborio rice, mushrooms (such as cremini, portobello, or a mix), onions, garlic, vegetable or chicken broth, white wine, butter, Parmesan cheese, and fresh herbs like thyme and parsley. Start by sautéing the finely chopped onions and mushrooms until they release their fragrance and the mushrooms are browned.\n\nNext, add the Arborio rice and toast it briefly in the pan to coat it with the flavors. Deglaze the pan with a splash of white wine, allowing the alcohol to evaporate. From here, it's a slow and steady process of adding hot broth to the rice, stirring frequently, and allowing the rice to gradually absorb the liquid and release its starches, creating a creamy and velvety texture.\n\nAs the risotto nears completion, stir in the butter and grated Parmesan cheese to further enrich the dish. Finish with fresh herbs, a squeeze of lemon juice, and a drizzle of truffle oil (optional) for an added layer of earthy flavor.\n\nServe this risotto as a main course or as a luxurious side dish. Pair it with a crisp white wine and a simple green salad for a delightful Italian-inspired meal. Enjoy the comforting and indulgent flavors of this creamy mushroom risotto!"
  },
  {
    id: 3,
    title: "Crispy Oven-Baked Chicken Wings",
    description: "Perfectly crispy and flavorful chicken wings without the mess of deep-frying.",
    imageUrl: "https://example.com/baked-chicken-wings.jpg",
    date: "2023-01-20",
    text: "Chicken wings are a crowd-pleasing favorite, but deep-frying can be a messy and intimidating process. Enter these crispy oven-baked chicken wings – all the crunch and flavor without the hassle!\n\nTo achieve that irresistible crispiness, the key is a two-step baking process. First, pat the wings dry and toss them with a mixture of baking powder, salt, and your preferred spices or seasoning blend. The baking powder helps create a crispy, crunchy exterior while the seasonings infuse the wings with flavor.\n\nArrange the seasoned wings on a wire rack set over a baking sheet and bake at a high temperature (425°F or 220°C) for 30 minutes. This initial baking helps render the fat from the skin and partially cooks the wings. Then, increase the oven temperature to 450°F (230°C) and bake for another 20-25 minutes, flipping the wings halfway through, until they're golden brown and crispy all over.\n\nOnce out of the oven, you can toss the hot wings in your favorite sauce or seasoning blend. Try a classic Buffalo sauce for a tangy kick, or experiment with flavors like honey garlic, Korean gochujang, or lemon pepper. Serve these crispy wings hot with celery sticks, carrots, and your favorite dipping sauce for a delicious and satisfying appetizer or game-day snack.\n\nNot only are these oven-baked wings a healthier alternative to deep-frying, but they're also incredibly easy to prepare and cleanup is a breeze. Enjoy the crispy, saucy goodness without the mess!"
  },
  {
    id: 4,
    title: "Authentic Greek Moussaka",
    description: "A layered casserole of eggplant, ground meat, and creamy béchamel sauce.",
    imageUrl: "https://example.com/greek-moussaka.jpg", 
    date: "2023-04-10",
    text: "Moussaka is a beloved Greek dish that combines layers of tender eggplant, richly spiced ground meat, and a creamy béchamel sauce. This hearty casserole is a true labor of love, but the result is a comforting and unforgettable meal.\n\nTo begin, you'll need to prepare the eggplant by slicing it into rounds and salting them to draw out any bitterness. While the eggplant is resting, you can start on the meat sauce. Sauté onions, garlic, and ground lamb or beef with a blend of aromatic spices like cinnamon, allspice, and oregano. Deglaze the pan with red wine and let the sauce simmer until thickened.\n\nOnce the eggplant slices have released their moisture, pat them dry and brush them with olive oil before baking or frying until golden brown and tender. In a separate pan, make a classic béchamel sauce by cooking a roux with butter and flour, then gradually whisking in warm milk until thickened.\n\nTo assemble the moussaka, layer the baked eggplant slices in a baking dish, followed by the meat sauce, and finally top with the creamy béchamel sauce. You can also add a layer of grated Kefalotiri or Parmesan cheese between the meat and béchamel for an extra indulgent touch.\n\nBake the moussaka until the top is golden brown and bubbling, then let it rest for a few minutes before slicing and serving. This rich and comforting dish is best enjoyed with a crisp Greek salad and crusty bread to soak up every last bit of the flavorful juices."
  },
  {
    id: 5,
    title: "Refreshing Watermelon Salad with Feta",
    description: "A light and refreshing summer salad with juicy watermelon, salty feta, and a zesty lime dressing.",
    imageUrl: "https://example.com/watermelon-feta-salad.jpg",
    date: "2023-06-01",
    text: "As the warm summer months approach, there's nothing more refreshing than a crisp and juicy watermelon salad. This delightful combination of sweet watermelon, salty feta cheese, and a zesty lime dressing is sure to become a staple at your summertime gatherings.\n\nStart by dicing a ripe, seedless watermelon into bite-sized cubes and placing them in a large bowl. Add crumbled feta cheese, thinly sliced red onion, and fresh mint leaves for a burst of flavor and aroma.\n\nFor the dressing, whisk together lime juice, olive oil, honey, and a pinch of salt and pepper. You can also add a touch of chili flakes or cayenne pepper for a subtle kick of heat to balance the sweetness of the watermelon.\n\nDrizzle the zesty dressing over the salad and gently toss to coat all the ingredients evenly. Let the salad rest for a few minutes to allow the flavors to meld and the watermelon to release its juices, creating a light and refreshing pool at the bottom of the bowl.\n\nThis watermelon salad is not only a delightful side dish but can also be served as a light main course when topped with grilled chicken or shrimp. It's the perfect accompaniment to outdoor barbecues, picnics, or as a cool and revitalizing lunch on a hot summer day.\n\nEmbrace the flavors of the season with this vibrant and refreshing watermelon salad. Its combination of sweet, salty, and tangy notes will have you savoring every bite and craving more."
  },
  {
    id: 6,
    title: "Hearty Vegetarian Chili",
    description: "A protein-packed, meatless chili brimming with beans, vegetables, and warm spices.",
    imageUrl: "https://example.com/vegetarian-chili.jpg",
    date: "2023-03-15",
    text: "Chili is a beloved comfort food, but it doesn't have to be meat-centric to be delicious and satisfying. This vegetarian chili recipe is packed with plant-based protein, fiber, and a blend of warm spices that will have even the most ardent carnivores coming back for seconds.\n\nThe base of this chili starts with a trio of beans – kidney, black, and pinto – providing a hearty texture and plenty of protein. Sautéed onions, bell peppers, and garlic add depth of flavor, while fire-roasted tomatoes and a generous dose of chili powder, cumin, and smoked paprika bring the heat and smokiness.\n\nTo replicate the savory umami notes typically provided by meat, you'll incorporate ingredients like soy sauce, Worcestershire sauce (vegetarian-friendly), and a touch of cocoa powder or coffee for an extra layer of richness.\n\nOnce all the ingredients have simmered together, you can adjust the consistency to your liking by adding vegetable broth or crushed tomatoes for a thinner chili or leaving it as is for a heartier stew-like texture.\n\nServe this vegetarian chili piping hot, garnished with diced avocado, sliced jalapeños, fresh cilantro, and a dollop of vegan sour cream or shredded non-dairy cheese. Pair it with cornbread or tortilla chips for a complete and satisfying meal that will warm you from the inside out.\n\nWhether you're a committed vegetarian or simply looking to incorporate more plant-based meals into your diet, this chili is sure to become a new family favorite."
  },
  {
    id: 7,
    title: "Classic French Crêpes",
    description: "Delicate and lacy French-style crêpes, perfect for sweet or savory fillings.",
    imageUrl: "https://example.com/french-crepes.jpg",
    date: "2023-02-01",
    text: "Crêpes are a quintessential French treat that can be enjoyed for breakfast, lunch, or dessert. These delicate and lacy pancakes are a canvas for both sweet and savory fillings, making them incredibly versatile and always satisfying.\n\nThe key to achieving the perfect crêpe batter is a combination of simplicity and technique. You'll need just a few basic ingredients: flour, eggs, milk, butter, and a pinch of salt. Whisk the ingredients together until the batter is smooth and lump-free, then let it rest for at least 30 minutes to allow the flour to fully hydrate.\n\nHeating a seasoned crêpe pan or small non-stick skillet is crucial for obtaining that delicate, lacy texture. Once the pan is hot, brush it with a thin layer of melted butter or oil, then quickly pour in a small amount of batter, swirling the pan to evenly coat the surface.\n\nCook the crêpe over medium heat until the edges begin to brown and the center is set, then carefully flip it over to cook the other side briefly. Remove the cooked crêpe from the pan and continue the process until all the batter is used up.\n\nFor a sweet treat, try filling the crêpes with fresh fruit, Nutella, or a dusting of powdered sugar and a squeeze of lemon juice. Savory options include ham and cheese, sautéed mushrooms and spinach, or smoked salmon and cream cheese.\n\nWhether you're enjoying them for a leisurely brunch or a romantic dessert, French crêpes are a delightful and versatile treat that will transport you to the charming cafés of Paris with every bite."
  },
  {
    id: 8,
    title: "Authentic Pad Thai",
    description: "A flavorful and authentic take on the classic Thai stir-fried noodle dish.",
    imageUrl: "https://example.com/pad-thai.jpg",
    date: "2023-05-10",
    text: "Pad Thai is a beloved Thai street food that has gained immense popularity worldwide. However, many versions stray from the authentic flavors and ingredients of this iconic dish. This recipe aims to capture the true essence of Pad Thai, with its perfectly balanced blend of salty, sweet, sour, and umami flavors.\n\nTo begin, you'll need to gather the key ingredients: rice noodles, shrimp (or chicken or tofu for a vegetarian option), bean sprouts, chives, eggs, and a variety of aromatics like garlic, shallots, and Thai chilies. The sauce is a harmonious combination of fish sauce, tamarind paste, palm sugar, and lime juice.\n\nStart by soaking the rice noodles in hot water until they're pliable but still firm, then drain and set aside. In a hot wok or large skillet, fry the shallots, garlic, and chilies until fragrant, then push them to the side and scramble the eggs in the center of the wok. Add the noodles, sauce ingredients, and your protein of choice, tossing everything together until the noodles are evenly coated and heated through.\n\nRemove the Pad Thai from heat and fold in the bean sprouts, chives, and a generous squeeze of lime juice. Garnish with crushed peanuts, fresh cilantro, and a wedge of lime for an added burst of flavor.\n\nThe beauty of Pad Thai lies in its harmonious balance of flavors – the tanginess of the tamarind, the sweetness of the palm sugar, the saltiness of the fish sauce, and the heat from the chilies all coming together in perfect harmony. Serve this authentic Pad Thai as a main dish or as part of a larger Thai feast, and experience the vibrant flavors of Thai street food in your own home."
  },
  {
    id: 9,
    title: "Hearty Beef and Barley Soup", 
    description: "A comforting and nutritious soup featuring tender beef, chewy barley, and a rich broth.",
    imageUrl: "https://example.com/beef-barley-soup.jpg",
    date: "2023-01-15",
    text: "When the chill sets in, there's nothing more comforting than a steaming bowl of hearty beef and barley soup. This classic recipe combines tender chunks of beef, chewy barley grains, and a rich, flavorful broth that will warm you from the inside out.\n\nTo begin, you'll need to sear beef chuck or brisket in a large pot or Dutch oven until browned on all sides. This initial browning adds depth of flavor to the broth. Next, add diced onions, carrots, celery, and garlic to the pot and sauté until fragrant and softened. Deglaze the pot with a splash of red wine or beef broth, scraping up any browned bits from the bottom.\n\nAdd the seared beef, barley, and enough beef broth to cover everything by a few inches. Bring the soup to a simmer and let it cook for at least an hour and a half, until the beef is fork-tender and the barley is plump and chewy. Season with bay leaves, thyme, salt, and pepper to taste.\n\nAs the soup simmers, the barley will release its starches, creating a rich and velvety broth. You can adjust the consistency by adding more broth if it becomes too thick. For an extra layer of flavor, stir in a splash of Worcestershire sauce or a touch of tomato paste towards the end of cooking.\n\nServe this hearty beef and barley soup piping hot, garnished with fresh parsley or thyme. It's the perfect meal for a cozy night in, paired with crusty bread or biscuits for sopping up every last drop of the flavorful broth. Leftovers taste even better the next day, making this soup a convenient and satisfying make-ahead meal."
  },
  {
    id: 10,
    title: "Vibrant Rainbow Veggie Wraps",
    description: "Colorful and nutritious veggie wraps with a creamy hummus spread.",
    imageUrl: "https://example.com/rainbow-veggie-wraps.jpg",
    date: "2023-04-01",
    text: "These vibrant rainbow veggie wraps are a feast for the eyes and a delightful treat for the taste buds. Packed with a rainbow of fresh vegetables, creamy hummus, and wrapped in a soft tortilla or flatbread, they make for a healthy and satisfying lunch or light dinner option.\n\nTo assemble these wraps, you'll need a variety of colorful veggies like shredded carrots, thinly sliced bell peppers, cucumber, avocado, sprouts, and any other favorite veggies you have on hand. You'll also need a good quality store-bought or homemade hummus, as well as soft tortillas or flatbreads.\n\nStart by spreading a generous layer of hummus onto each tortilla or flatbread, leaving a small border around the edges. Then, arrange your veggies in a colorful pattern over the hummus, being mindful of textures and flavors that complement each other well.\n\nFor an added burst of flavor, you can include extras like sliced olives, crumbled feta or goat cheese, or a sprinkle of za'atar or dukkah spice blend. Once you've arranged your fillings, carefully roll up the wrap, tucking in the sides as you go to create a tight cylinder.\n\nThese rainbow veggie wraps can be enjoyed fresh or packed for a convenient on-the-go lunch. They're also highly customizable, so you can switch up the veggies and fillings based on your preferences or what's in season.\n\nNot only are these wraps a delicious and satisfying meal option, but they're also incredibly nutritious, providing a range of vitamins, minerals, and fiber from the vibrant veggies and protein-rich hummus. Enjoy the taste of the rainbow with every colorful and flavorful bite!"
  },
  {
    id: 11,
    title: "Decadent Chocolate Lava Cakes",
    description: "Indulgent individual molten cakes with a rich, gooey chocolate center.",
    imageUrl: "https://example.com/chocolate-lava-cakes.jpg",
    date: "2023-02-14",
    text: "Chocolate lovers, rejoice! These decadent chocolate lava cakes are the ultimate indulgence, featuring a rich, molten chocolate center that oozes out with every bite. Perfect for a romantic dessert or a special occasion treat, these individual cakes are sure to impress.\n\nThe key to achieving the perfect lava cake lies in the baking time. You'll want to slightly underbake the cakes so that the center remains delightfully gooey while the exterior forms a tender, cake-like crust. To ensure success, it's essential to use high-quality bittersweet or semisweet chocolate and follow the recipe instructions carefully.\n\nTo make the lava cakes, you'll start by melting the chocolate and butter together until smooth and glossy. In a separate bowl, whisk together eggs, sugar, and a touch of vanilla extract until light and frothy. Gently fold the chocolate mixture into the egg mixture, being careful not to overmix. Divide the batter among greased ramekins or oven-safe cups.\n\nBake the lava cakes at a high temperature for a precise amount of time, usually around 10-12 minutes. The cakes should have a slight jiggle in the center when removed from the oven, indicating that the inside is still molten.\n\nOnce out of the oven, let the lava cakes cool for a few minutes before running a knife around the edges and inverting them onto serving plates. Garnish with a dusting of powdered sugar, a dollop of whipped cream, or a scoop of vanilla ice cream for an added touch of indulgence.\n\nThese chocolate lava cakes are a true showstopper, combining the rich, intense flavor of dark chocolate with a decadent, molten center that will have you savoring every bite. Serve them warm, straight from the oven, and prepare to be transported to a world of pure chocolate bliss."
  },
  {
    id: 12,
    title: "Crispy Oven-Baked Fish Tacos",
    description: "Flaky, seasoned white fish in a crispy panko crust, served in warm tortillas with fresh toppings.",
    imageUrl: "https://example.com/fish-tacos.jpg",
    date: "2023-05-05",
    text: "Fish tacos are a beloved and refreshing dish that combines the flavors of the sea with the vibrant and zesty flavors of Mexican cuisine. These crispy oven-baked fish tacos are a healthier twist on the classic, featuring flaky white fish fillets coated in a crispy panko breadcrumb crust and served in warm corn tortillas with a variety of fresh and flavorful toppings.\n\nTo start, you'll need to select a firm white fish like cod, halibut, or tilapia. Pat the fish fillets dry and season them with a blend of spices like chili powder, cumin, paprika, and garlic powder. In a shallow dish, combine panko breadcrumbs with grated Parmesan cheese and a hint of lime zest for an extra kick of flavor.\n\nDip the seasoned fish fillets into a beaten egg mixture, then coat them thoroughly in the panko mixture, pressing gently to help the crumbs adhere. Arrange the breaded fillets on a parchment-lined baking sheet and lightly spray or drizzle with oil.\n\nBake the fish in a preheated oven until the crumbs are golden brown and the fish is cooked through and flaky. While the fish is baking, prepare your toppings – shredded cabbage or lettuce, diced tomatoes, sliced avocado, fresh cilantro, lime wedges, and your favorite salsa or crema.\n\nOnce the fish is ready, gently break it into bite-sized pieces and assemble your tacos by layering the fish and desired toppings onto warm corn tortillas. You can also offer additional condiments like hot sauce, pickled onions, or crumbled queso fresco for an extra burst of flavor.\n\nThese crispy oven-baked fish tacos are a lighter and healthier alternative to the traditional fried version, but they don't sacrifice any of the delicious flavors or textures. Enjoy them as a casual weeknight meal or serve them as an impressive dish for your next backyard gathering or Taco Tuesday celebration."
  },
  {
    id: 13,
    title: "Instant Pot Beef Bourguignon",
    description: "A classic French beef stew made easier and faster in the Instant Pot.",
    imageUrl: "https://example.com/beef-bourguignon.jpg",
    date: "2023-01-10",
    text: "Beef Bourguignon is a beloved French dish that traditionally requires hours of simmering to develop its rich, complex flavors. However, with the help of the Instant Pot, you can enjoy this comforting stew in a fraction of the time without sacrificing any of the deliciousness.\n\nTo begin, you'll need to brown cubes of beef chuck or brisket in batches in the Instant Pot using the sauté function. This initial browning adds depth of flavor and creates fond – those delicious browned bits on the bottom of the pot that will later dissolve into the sauce.\n\nOnce the beef is browned, remove it from the pot and sauté diced onions, carrots, and mushrooms until softened. Deglaze the pot with a generous splash of red wine, scraping up the fond with a wooden spoon.\n\nReturn the browned beef to the pot, along with beef broth, tomato paste, thyme, bay leaves, and a bouquet garni (a bundle of fresh herbs tied together). Seal the Instant Pot and cook on high pressure for about an hour, allowing the pressure to release naturally.\n\nOnce the cooking time is up, remove the lid and discard the bouquet garni. Create a slurry by whisking together a bit of the hot cooking liquid with some flour or cornstarch, then stir it back into the pot to thicken the sauce to your desired consistency.\n\nServe this rich and flavorful Instant Pot Beef Bourguignon over a bed of creamy mashed potatoes or buttered egg noodles, garnished with fresh parsley or thyme. The tender, fall-off-the-bone beef and velvety sauce are sure to transport you to a cozy French bistro with every bite.\n\nThanks to the Instant Pot, this classic dish is now accessible for busy weeknights or lazy Sundays, allowing you to enjoy the comforting flavors of Beef Bourguignon without the hassle of all-day simmering."
  },
  {
    id: 14,
    title: "Veggie-Packed Frittata Muffins",
    description: "Portable and nutritious egg muffins loaded with colorful veggies, perfect for meal prep.",
    imageUrl: "https://example.com/frittata-muffins.jpg",
    date: "2023-03-20",
    text: "Frittata muffins are a versatile and convenient way to enjoy a protein-packed breakfast or snack on the go. These veggie-packed muffins are not only delicious but also incredibly nutritious, making them a perfect meal prep option for busy mornings or lunchboxes.\n\nThe beauty of frittata muffins lies in their customizability. You can use any combination of fresh or leftover vegetables you have on hand, such as bell peppers, onions, spinach, mushrooms, zucchini, or even diced potatoes or sweet potatoes.\n\nTo start, grease a muffin tin and preheat your oven. In a large bowl, whisk together eggs, milk (or plant-based milk alternative), and your choice of seasonings like salt, pepper, garlic powder, and fresh herbs. Fold in your chopped vegetables, ensuring they are evenly distributed throughout the egg mixture.\n\nCarefully spoon the veggie-egg mixture into the prepared muffin cups, filling them about three-quarters full. You can also add toppings like shredded cheese, crumbled feta, or diced ham or bacon if desired.\n\nBake the frittata muffins in the preheated oven until puffed and cooked through, with the centers set. Allow them to cool slightly before removing them from the tin and serving warm or at room temperature.\n\nThese veggie-packed frittata muffins are not only delicious but also incredibly convenient. Store them in the refrigerator for a grab-and-go breakfast or pack them in lunchboxes for a satisfying and nutritious snack or light meal. They're also freezer-friendly, making them ideal for meal prep and ensuring you always have a healthy option on hand.\n\nWith their endless versatility and nutrient-dense ingredients, these frittata muffins are a perfect addition to any well-rounded meal plan. Enjoy them on their own or pair them with fresh fruit, a side salad, or a slice of whole-grain toast for a complete and balanced meal."
  },
  {
    id: 15,
    title: "Creamy Shrimp Linguine with Lemon and Dill",
    description: "A light and refreshing pasta dish featuring juicy shrimp in a creamy lemon-dill sauce.",
    imageUrl: "https://example.com/shrimp-linguine.jpg",
    date: "2023-06-10",
    text: "When you're craving a bright and flavorful pasta dish that won't weigh you down, this creamy shrimp linguine with lemon and dill is the perfect solution. Combining succulent shrimp with a light cream sauce infused with the zesty notes of lemon and the fresh aroma of dill, this dish is a celebration of summer flavors.\n\nTo begin, you'll need to cook the linguine according to package instructions until al dente. While the pasta is cooking, prepare the shrimp by seasoning them with salt, pepper, and a touch of garlic powder or paprika if desired.\n\nIn a large skillet, melt butter and sauté the shrimp until they turn pink and opaque, being careful not to overcook them. Remove the shrimp from the skillet and set them aside.\n\nIn the same skillet, create a roux by cooking flour in the remaining butter for a minute or two, whisking constantly to prevent burning. Gradually whisk in chicken or vegetable broth and heavy cream, continuing to whisk until the sauce thickens slightly.\n\nAdd the cooked linguine directly to the creamy sauce, along with the zest and juice of one or two lemons (depending on your desired level of tanginess), and a generous handful of fresh dill. Toss everything together until the pasta is evenly coated in the lemon-dill sauce.\n\nFinally, fold in the sautéed shrimp and let them heat through for a minute or two. Taste and adjust the seasoning with salt, pepper, and an extra squeeze of lemon juice if needed.\n\nServe this vibrant and refreshing shrimp linguine immediately, garnished with additional dill and a sprinkle of grated Parmesan cheese, if desired. The combination of juicy shrimp, tangy lemon, and aromatic dill creates a symphony of flavors that will transport you to a summer evening by the sea with every bite."
  },
  {
    id: 16,
    title: "Crispy Baked Falafel with Tzatziki Sauce",
    description: "Herbaceous and flavorful baked falafel patties served with a cool and creamy tzatziki sauce.",
    imageUrl: "https://example.com/baked-falafel.jpg",
    date: "2023-04-15",
    text: "Falafel, those crispy and flavorful chickpea fritters, are a beloved Middle Eastern staple that can be enjoyed in various ways. This recipe for baked falafel patties takes the traditional deep-fried version and gives it a healthier twist, without sacrificing any of the delicious flavors or textures.\n\nTo make the falafel mixture, you'll start by soaking dried chickpeas overnight, then blending them with fresh herbs like parsley, cilantro, and green onions. Add in spices like cumin, coriander, and a hint of cayenne, along with garlic, lemon juice, and a binding agent like flour or breadcrumbs.\n\nOnce the mixture is well-combined, form it into small patties or balls and arrange them on a parchment-lined baking sheet. Lightly coat the falafel patties with cooking spray or a drizzle of oil to help them crisp up in the oven.\n\nWhile the falafel bakes to golden perfection, prepare the cool and creamy tzatziki sauce by mixing together Greek yogurt, grated cucumber, lemon juice, garlic, and fresh dill or mint. Season with salt and pepper to taste.\n\nOnce the falafel patties are out of the oven, you can enjoy them in a variety of ways. Serve them as an appetizer or snack, wrapped in warm pita bread with the tzatziki sauce, fresh veggies, and a sprinkle of crumbled feta. Or, build a falafel salad by arranging the patties over a bed of mixed greens, topped with the tzatziki sauce, diced tomatoes, and sliced red onions.\n\nNot only are these baked falafel patties a delicious and satisfying option, but they're also packed with plant-based protein, fiber, and a variety of herbs and spices that offer numerous health benefits. Pair them with the refreshing tzatziki sauce for a delightful contrast of flavors and textures that will transport you to the vibrant streets of the Middle East with every bite."
  },
  {
    id: 17,
    title: "Grilled Peach and Burrata Salad",
    description: "A summer salad featuring grilled peaches, creamy burrata, and a balsamic glaze.",
    imageUrl: "https://example.com/peach-burrata-salad.jpg",
    date: "2023-07-01",
    text: "When the warm summer days arrive, there's nothing quite like a refreshing salad that showcases the season's bounty of fresh produce. This grilled peach and burrata salad is a true celebration of summer flavors, combining the sweet and juicy notes of grilled peaches with the rich and creamy texture of burrata cheese, all tied together with a tangy balsamic glaze.\n\nTo begin, you'll need to fire up your grill or preheat your grill pan. Slice ripe peaches in half and lightly brush them with a bit of olive oil or melted butter. Grill the peach halves until they develop beautiful char marks and become slightly softened, but still hold their shape.\n\nWhile the peaches are grilling, prepare the salad base by arranging a bed of fresh greens, such as arugula or mixed greens, on a large platter or individual serving plates. Top the greens with sliced cucumbers, cherry tomatoes, thinly sliced red onions, and fresh basil or mint leaves.\n\nOnce the grilled peaches are cool enough to handle, slice them into wedges and scatter them over the salad. Tear or slice the creamy burrata cheese and arrange it among the peach wedges, allowing the soft interior to spill out and create pockets of indulgent richness.\n\nFinish the salad with a drizzle of balsamic glaze, which will provide a sweet and tangy contrast to the other flavors. You can also sprinkle on some toasted nuts or seeds for added crunch and texture.\n\nThis grilled peach and burrata salad is a true celebration of summer's bounty, showcasing the perfect balance of sweet and savory, creamy and crisp, and fresh and indulgent flavors. Serve it as a light main course or as an impressive side dish at your next backyard gathering or al fresco dinner party."
  },
  {
    id: 18,
    title: "Smoky Slow Cooker Pulled Pork",
    description: "Tender and flavorful pulled pork cooked low and slow, perfect for sandwiches and more.",
    imageUrl: "https://example.com/pulled-pork.jpg",
    date: "2023-09-01", 
    text: "There's nothing quite like the aroma of slow-cooked pulled pork wafting through the house, promising a meal that's rich, tender, and full of smoky flavor. This smoky slow cooker pulled pork recipe is a set-it-and-forget-it marvel that requires minimal effort but yields maximum deliciousness.\n\nStart by selecting a high-quality pork shoulder or Boston butt roast, which are well-marbled cuts that become incredibly tender and succulent when cooked low and slow. Generously season the pork with a flavorful dry rub, using a blend of spices like smoked paprika, brown sugar, cumin, chili powder, and garlic powder.\n\nPlace the seasoned pork in your slow cooker and add a combination of liquids, such as apple cider vinegar, chicken or beef broth, and a splash of your favorite barbecue sauce. This liquid will help create a flavorful braising liquid as the pork cooks.\n\nCover the slow cooker and let the pork roast cook on low heat for 8-10 hours, or until it's fall-off-the-bone tender and easily shreds apart with a fork. Near the end of the cooking time, you can remove the pork from the slow cooker and use two forks to shred the meat, discarding any excess fat or bones.\n\nReturn the shredded pork to the slow cooker and toss it with some of the flavorful cooking liquid until it's well-coated and moist. You can also stir in additional barbecue sauce or other seasonings at this point to enhance the flavor even further.\n\nServe this smoky slow cooker pulled pork piled high on soft buns or rolls, topped with your favorite coleslaw, pickles, and extra barbecue sauce on the side. It also makes a delicious filling for tacos, burritos, or loaded baked potatoes. Leftovers can be stored and enjoyed throughout the week, as the flavors only continue to develop and deepen over time."
  },
  {
    id: 19,
    title: "Spicy Thai Coconut Curry Shrimp",
    description: "Juicy shrimp simmered in a rich and fragrant Thai coconut curry sauce.",
    imageUrl: "https://example.com/thai-curry-shrimp.jpg",
    date: "2023-03-01",
    text: "If you're a fan of bold and vibrant flavors, this spicy Thai coconut curry shrimp is sure to become a new favorite. Combining succulent shrimp with a rich and aromatic coconut curry sauce infused with fragrant herbs and a kick of heat, this dish is a true taste of Southeast Asia.\n\nTo begin, you'll need to gather your ingredients: fresh or frozen shrimp (peeled and deveined), coconut milk, red or green curry paste, fish sauce, brown sugar, lime juice, and an assortment of fresh aromatics like lemongrass, ginger, garlic, and Thai chilies.\n\nIn a large skillet or wok, sauté the curry paste with a bit of oil until fragrant, then add the minced aromatics and sauté for another minute or two. Pour in the coconut milk and fish sauce, and let the mixture simmer for a few minutes to allow the flavors to meld.\n\nAdd the shrimp to the simmering curry sauce and cook until they turn pink and opaque, being careful not to overcook them. Finish the dish by stirring in the brown sugar, lime juice, and any additional vegetables you'd like, such as sliced bell peppers, snow peas, or bamboo shoots.\n\nServe this spicy Thai coconut curry shrimp over a bed of steamed jasmine rice or with a side of fresh greens for a pop of color and freshness. Garnish with freshly chopped cilantro, thinly sliced red chilies (if you want an extra kick of heat), and a sprinkle of crushed peanuts for added crunch.\n\nWith its intoxicating aroma and perfectly balanced flavors of sweet, sour, salty, and spicy, this Thai coconut curry shrimp is a true taste sensation that will transport you to the bustling streets of Bangkok with every bite. Adjust the spice level to your preference, and get ready to experience a burst of flavors that will tantalize your taste buds."
  } */
];

export const socialNetworks: TypeSocialNetworks[] = [
  {
    id: 1,
    social_network: 'Facebook',
    url: 'https://www.facebook.com/alexvalverde666',
    icon: 'Facebook-Icon'
  },
  {
    id: 2,
    social_network: 'Instagram',
    url: 'https://www.instagram.com/alexvalverde._/',
    icon: 'Instagram-Icon'
  },
  {
    id: 3,
    social_network: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexvdev/',
    icon: 'LinkedIn-Icon'
  },
  {
    id: 4,
    social_network: 'Github',
    url: 'https://github.com/aleexvdev',
    icon: 'Github-Icon'
  },
];

export const bannerBlogs: {id:number; text:string;}[] = [
  {
    id: 1,
    text: "A delight for your senses"
  },
  {
    id: 2,
    text: "Enjoy unforgettable flavors"
  },
  {
    id: 3,
    text: "Delicious from the first bite"
  },
  {
    id: 4,
    text: "Extraordinary culinary experiences"
  },
  {
    id: 5,
    text: "Prepare a treat fit for royalty"
  }
];