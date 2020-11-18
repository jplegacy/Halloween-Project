var candy = [
    "http://assets.stickpng.com/thumbs/58d2a6fcdc164e9dd9e668f9.png",
    "https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0c4.png",
    "https://cdn.shopify.com/s/files/1/1143/5154/products/3musk.png?v=1458161633",
    "https://clipart4biz.com/images/candy-transparent-sour-1.png",
    "https://veganfoodlover.com/wp-content/uploads/2015/10/airheads-vegan.png",
    "https://www.stickpng.com/assets/thumbs/58a7a3055ad0fd0b7fdd33d5.png",
    "https://www.hersheys.com/is/image/content/dam/smartlabelproductsimage/jollyrancher/00010700519214-0005.png?wid=570&hei=570&fmt=png-alpha",
    "https://i.ya-webdesign.com/images/rice-crispy-treats-png-7.png",
    "https://theamericancandystore.co.uk/688-large_default/warheads-extreme-sour-hard-candy.jpg",
    "https://img.pngio.com/download-free-png-sour-patch-kids-theater-box-dlpngcom-sour-patch-png-750_750.png",
    "https://www.pngtube.com/myfile/full/269-2690312_swedish-fish-red-fish-2-oz-buy-it.png",
    "https://www.jbcsource.com/michristmas2019/wp-content/uploads/sites/48/2016/10/sourIntenseFruit.png",
    "https://www.hersheys.com/is/image/content/dam/twizzlers/en_ca/images/products/Twizzler_FilledTwists_StrawberrynCreme.png?hei=570&wid=570&fmt=png-alpha",
    "https://www.sweetartscandy.com/image/1171",
    "http://www.marsfoodservices.com/images/default-source/default-album/hbb_awo_clm2_532951f.gif?sfvrsn=0"
];

var costumes = [
    "http://www.pngall.com/wp-content/uploads/2017/03/Halloween-Costume-PNG-Clipart.png",
    "https://i.pinimg.com/originals/95/d2/fd/95d2fd6ba5b62e136a46b3ddb2b86187.png",
    "https://www.stickpng.com/assets/images/5bd596ffcd5c3005c3d6fea6.png",
    "https://i.pinimg.com/originals/5b/9b/d3/5b9bd3f3c68ddb25c6748300c1d91872.png",
    "https://www.clipartwiki.com/clipimg/full/52-525909_free-icons-png-scary-clown-png-transparent.png",
    "https://i.pinimg.com/originals/65/ba/28/65ba2861461687efa6e8b3d290400628.png",
    "https://i.pinimg.com/originals/de/f7/58/def758dc2f53578000d7bfc59160f506.png",
    "https://purepng.com/public/uploads/large/purepng.com-captain-americacaptain-americacaptainamericafictional-charactercomic-booksmarvel-comicsupersoldierthe-warcostumesteve-rogers-17015285308328iutm.png",
    "https://t6.rbxcdn.com/2e1f72908355ab9c7af8b1ff0789f325"


];

$(".party").hide(0);


$(".button").click(function() {
    $(".start").fadeOut(400);
    $(".party").fadeIn(800);
});


$(".candyButton").click(function() {
    var number = candy[Math.round(Math.random() * 17)];
    $(".candyPic").attr("src", number);

});

$(".costumeButton").click(function() {
    var number = costumes[Math.round(Math.random() * 9)];
    $(".costumePic").attr("src", number);

});

$("select.halloween").change(function(){
        var input = $("option:selected").val();
        
        if(input === "Buying a Costume & Candy"){
            alert("Your Friends love you");
        }
        else if(input === "Buying Candy Only"){
            alert("Good luck getting into the party, your friends will enjoy the snacks though");
            }
        else if(input === "Buying Costume Only"){
            alert("Why even bother coming to the party... You LOSER");
            }
    });




