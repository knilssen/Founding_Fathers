

var page_data = document.getElementById('page_location');
var page_number = page_data.dataset.page_number;
var page_start = page_data.dataset.page_number_start;
var page_end = page_data.dataset.page_number_end;
var next_page = (parseInt(page_number)+1).toString();
var page_state_number = page_data.dataset.page_state_number;
var page_state_number_length = page_state_number.length;
var state_name_page_path = page_data.dataset.page_path;

console.log('page_data', page_data);
console.log('page_number', page_number);
console.log('page_start', page_start);
console.log('page_end', page_end);
console.log('next_page', next_page);

for (i = page_start; i <= page_end; i++) {
  if (i == page_number){
    $('#paginate_pages').append('<span class="item current">'+i+'</span>');
  } else {
    $('#paginate_pages').append('<a class="item" href="?page='+i+'">'+i+'</a>');
  }
}

if (page_number != page_end){
  $('#paginate_more').append('<a class="item more" href="?page=' + next_page + '">SHOW ME MORE</a>');
}

if (page_number > 1) {
  var page_path = page_data.dataset.page_path +  " | Page " + page_number;
  page_data.dataset.page_path = page_path;
}

// Handles the case when an article has too many people mentioned and the avatars below the article overflow into a second line
var avatar_holder_width = $('.list-items .box-left').width();
var total_avatars_held = ~~(avatar_holder_width/33);

var article_avatar_NodeList = document.querySelectorAll('.list-users');
for (var i = 0; i < article_avatar_NodeList.length; i++) {
  var amount_people = article_avatar_NodeList[i].dataset.number_people_linked;
  var avatar_NodeList = article_avatar_NodeList[i].querySelectorAll('.people');
  // console.log('amount of people:', amount_people, 'total_avatars_held:', total_avatars_held-1);

  if (amount_people > (total_avatars_held -1)){
    for (var ii = total_avatars_held-2; ii < avatar_NodeList.length; ii++) {
      avatar_NodeList[ii].style.display = "none";
    };
    article_avatar_NodeList[i].querySelector('.more_people').style.display = "block";
  };
};


$('.source_row').each(function(){
  var parent_height = $(this).parent().height();
  var title_height = $(this).parent().find('.title_row').height();
  var source_height = $(this).height();
  var date_height = $(this).parent().find('.date_row').height();

  var padding_height = parent_height - (title_height + source_height + date_height + 12)

  $(this).css("margin-top", padding_height);
});


var tops = document.getElementById('article_image');
var sides = $('.box-photo').width();

// Lazy loads all images on the page
$( document ).ready(function() {

  var bLazy = new Blazy({
    selector: 'img' // all images

    , breakpoints: [{
              width: 420 // max-width
		        , src: 'data-src-small'
       }
     , {
              width: 768 // max-width
            , src: 'data-src-medium'
    }]

    , success: function(ele){
        if ($(ele).hasClass("article_top_image")){

          var height = $(ele).prop('naturalHeight');
          var width = $(ele).prop('naturalWidth');

          if (height > width) {
            $(ele).width('100%');
          }

          if (height < width) {
            $(ele).height(tops);
          }

          if (Math.round($(ele).width(), -1) < Math.round(sides, -1)) {
            // console.log("correcting for small width", $(ele).width(), sides);
            $(ele).height("auto");
            $(ele).width(sides);
          }

          if (Math.round($(ele).height(), -1) < Math.round(tops, -1)) {
            // console.log("correcting for small height", $(ele).height(), tops);
            $(ele).width("auto");
            $(ele).height(tops);
          }

        }

    }
  });

});


var counties_dict = {
  '30': {'077': 'Powell County', '075': 'Powder River County', '005': 'Blaine County', '071': 'Phillips County', '045': 'Judith Basin County', '091': 'Sheridan County', '093': 'Silver Bow County', '089': 'Sanders County', '079': 'Prairie County', '049': 'Lewis and Clark County', '011': 'Carter County', '039': 'Granite County', '111': 'Yellowstone County', '015': 'Chouteau County', '017': 'Custer County', '033': 'Garfield County', '031': 'Gallatin County', '037': 'Golden Valley County', '035': 'Glacier County', '057': 'Madison County', '029': 'Flathead County', '073': 'Pondera County', '051': 'Liberty County', '083': 'Richland County', '019': 'Daniels County', '101': 'Toole County', '053': 'Lincoln County', '061': 'Mineral County', '063': 'Missoula County', '065': 'Musselshell County', '067': 'Park County', '069': 'Petroleum County', '081': 'Ravalli County', '087': 'Rosebud County', '085': 'Roosevelt County', '095': 'Stillwater County', '025': 'Fallon County', '027': 'Fergus County', '109': 'Wibaux County', '007': 'Broadwater County', '023': 'Deer Lodge County', '047': 'Lake County', '103': 'Treasure County', '009': 'Carbon County', '097': 'Sweet Grass County', '043': 'Jefferson County', '107': 'Wheatland County', '041': 'Hill County', '105': 'Valley County', '003': 'Big Horn County', '001': 'Beaverhead County', '013': 'Cascade County', '099': 'Teton County', '021': 'Dawson County', '055': 'McCone County', '059': 'Meagher County'},
  '42': {'077': 'Lehigh County', '075': 'Lebanon County', '005': 'Armstrong County', '071': 'Lancaster County', '045': 'Delaware County', '091': 'Montgomery County', '093': 'Montour County', '089': 'Monroe County', '079': 'Luzerne County', '049': 'Erie County', '011': 'Berks County', '117': 'Tioga County', '039': 'Crawford County', '111': 'Somerset County', '015': 'Bradford County', '113': 'Sullivan County', '017': 'Bucks County', '033': 'Clearfield County', '031': 'Clarion County', '119': 'Union County', '037': 'Columbia County', '035': 'Clinton County', '123': 'Warren County', '057': 'Fulton County', '029': 'Chester County', '073': 'Lawrence County', '051': 'Fayette County', '083': 'McKean County', '019': 'Butler County', '101': 'Philadelphia County', '053': 'Forest County', '061': 'Huntingdon County', '063': 'Indiana County', '065': 'Jefferson County', '067': 'Juniata County', '069': 'Lackawanna County', '081': 'Lycoming County', '087': 'Mifflin County', '085': 'Mercer County', '095': 'Northampton County', '025': 'Carbon County', '121': 'Venango County', '027': 'Centre County', '109': 'Snyder County', '007': 'Beaver County', '125': 'Washington County', '023': 'Cameron County', '127': 'Wayne County', '047': 'Elk County', '103': 'Pike County', '009': 'Bedford County', '097': 'Northumberland County', '043': 'Dauphin County', '107': 'Schuylkill County', '041': 'Cumberland County', '105': 'Potter County', '133': 'York County', '003': 'Allegheny County', '129': 'Westmoreland County', '001': 'Adams County', '131': 'Wyoming County', '013': 'Blair County', '099': 'Perry County', '021': 'Cambria County', '055': 'Franklin County', '115': 'Susquehanna County', '059': 'Greene County'},
  '36': {'077': 'Otsego County', '075': 'Oswego County', '005': 'Bronx County', '071': 'Orange County', '045': 'Jefferson County', '091': 'Saratoga County', '093': 'Schenectady County', '089': 'St. Lawrence County', '079': 'Putnam County', '049': 'Lewis County', '011': 'Cayuga County', '117': 'Wayne County', '039': 'Greene County', '111': 'Ulster County', '015': 'Chemung County', '113': 'Warren County', '017': 'Chenango County', '033': 'Franklin County', '031': 'Essex County', '119': 'Westchester County', '037': 'Genesee County', '035': 'Fulton County', '123': 'Yates County', '057': 'Montgomery County', '029': 'Erie County', '073': 'Orleans County', '051': 'Livingston County', '083': 'Rensselaer County', '019': 'Clinton County', '101': 'Steuben County', '053': 'Madison County', '061': 'New York County', '063': 'Niagara County', '065': 'Oneida County', '067': 'Onondaga County', '069': 'Ontario County', '081': 'Queens County', '087': 'Rockland County', '085': 'Richmond County', '095': 'Schoharie County', '025': 'Delaware County', '121': 'Wyoming County', '027': 'Dutchess County', '109': 'Tompkins County', '007': 'Broome County', '023': 'Cortland County', '047': 'Kings County', '103': 'Suffolk County', '009': 'Cattaraugus County', '097': 'Schuyler County', '043': 'Herkimer County', '107': 'Tioga County', '041': 'Hamilton County', '105': 'Sullivan County', '003': 'Allegany County', '001': 'Albany County', '013': 'Chautauqua County', '099': 'Seneca County', '021': 'Columbia County', '055': 'Monroe County', '115': 'Washington County', '059': 'Nassau County'},
  '49': {'005': 'Cache County', '045': 'Tooele County', '049': 'Utah County', '011': 'Davis County', '039': 'Sanpete County', '015': 'Emery County', '017': 'Garfield County', '033': 'Rich County', '031': 'Piute County', '037': 'San Juan County', '035': 'Salt Lake County', '057': 'Weber County', '029': 'Morgan County', '051': 'Wasatch County', '019': 'Grand County', '053': 'Washington County', '025': 'Kane County', '027': 'Millard County', '007': 'Carbon County', '023': 'Juab County', '047': 'Uintah County', '009': 'Daggett County', '043': 'Summit County', '041': 'Sevier County', '003': 'Box Elder County', '001': 'Beaver County', '013': 'Duchesne County', '021': 'Iron County', '055': 'Wayne County'},
  '32': {'019': 'Lyon County', '023': 'Nye County', '027': 'Pershing County', '003': 'Clark County', '011': 'Eureka County', '001': 'Churchill County', '013': 'Humboldt County', '007': 'Elko County', '015': 'Lander County', '005': 'Douglas County', '017': 'Lincoln County', '033': 'White Pine County', '510': 'Carson City', '009': 'Esmeralda County', '031': 'Washoe County', '029': 'Storey County', '021': 'Mineral County'},
  '24': {'005': 'Baltimore County', '045': 'Wicomico County', '011': 'Caroline County', '039': 'Somerset County', '015': 'Cecil County', '017': 'Charles County', '019': 'Dorchester County', '031': 'Montgomery County', '037': "Saint Mary's County", '035': "Queen Anne's County", '029': 'Kent County', '047': 'Worcester County', '025': 'Harford County', '027': 'Howard County', '021': 'Frederick County', '023': 'Garrett County', '033': "Prince George's County", '009': 'Calvert County', '043': 'Washington County', '041': 'Talbot County', '003': 'Anne Arundel County', '001': 'Allegany County', '013': 'Carroll County', '510': 'Baltimore City'},
  '25': {'025': 'Suffolk County', '023': 'Plymouth County', '027': 'Worcester County', '003': 'Berkshire County', '011': 'Franklin County', '001': 'Barnstable County', '013': 'Hampden County', '007': 'Dukes County', '015': 'Hampshire County', '005': 'Bristol County', '017': 'Middlesex County', '019': 'Nantucket County', '009': 'Essex County', '021': 'Norfolk County'},
  '26': {'151': 'Sanilac County', '077': 'Kalamazoo County', '153': 'Schoolcraft County', '075': 'Jackson County', '155': 'Shiawassee County', '005': 'Allegan County', '157': 'Tuscola County', '071': 'Iron County', '045': 'Eaton County', '091': 'Lenawee County', '093': 'Livingston County', '163': 'Wayne County', '089': 'Leelanau County', '079': 'Kalkaska County', '049': 'Genesee County', '011': 'Arenac County', '117': 'Montcalm County', '039': 'Crawford County', '111': 'Midland County', '015': 'Barry County', '113': 'Missaukee County', '017': 'Bay County', '033': 'Chippewa County', '139': 'Ottawa County', '031': 'Cheboygan County', '119': 'Montmorency County', '037': 'Clinton County', '165': 'Wexford County', '035': 'Clare County', '123': 'Newaygo County', '057': 'Gratiot County', '149': 'St. Joseph County', '029': 'Charlevoix County', '073': 'Isabella County', '137': 'Otsego County', '051': 'Gladwin County', '083': 'Keweenaw County', '159': 'Van Buren County', '019': 'Benzie County', '101': 'Manistee County', '161': 'Washtenaw County', '053': 'Gogebic County', '061': 'Houghton County', '147': 'St. Clair County', '063': 'Huron County', '145': 'Saginaw County', '065': 'Ingham County', '143': 'Roscommon County', '067': 'Ionia County', '141': 'Presque Isle County', '069': 'Iosco County', '081': 'Kent County', '087': 'Lapeer County', '085': 'Lake County', '095': 'Luce County', '025': 'Calhoun County', '121': 'Muskegon County', '027': 'Cass County', '109': 'Menominee County', '007': 'Alpena County', '125': 'Oakland County', '023': 'Branch County', '127': 'Oceana County', '047': 'Emmet County', '103': 'Marquette County', '009': 'Antrim County', '097': 'Mackinac County', '043': 'Dickinson County', '107': 'Mecosta County', '041': 'Delta County', '105': 'Mason County', '133': 'Osceola County', '003': 'Alger County', '129': 'Ogemaw County', '135': 'Oscoda County', '001': 'Alcona County', '131': 'Ontonagon County', '013': 'Baraga County', '099': 'Macomb County', '021': 'Berrien County', '055': 'Grand Traverse County', '115': 'Monroe County', '059': 'Hillsdale County'},
  '27': {'099': 'Mower County', '091': 'Martin County', '093': 'Meeker County', '095': 'Mille Lacs County', '097': 'Morrison County', '133': 'Rock County', '011': 'Big Stone County', '131': 'Rice County', '013': 'Blue Earth County', '137': 'Saint Louis County', '015': 'Brown County', '135': 'Roseau County', '017': 'Carlton County', '019': 'Carver County', '139': 'Scott County', '025': 'Chisago County', '121': 'Pope County', '027': 'Clay County', '123': 'Ramsey County', '021': 'Cass County', '125': 'Red Lake County', '023': 'Chippewa County', '127': 'Redwood County', '129': 'Renville County', '029': 'Clearwater County', '115': 'Pine County', '117': 'Pipestone County', '039': 'Dodge County', '111': 'Otter Tail County', '113': 'Pennington County', '033': 'Cottonwood County', '031': 'Cook County', '119': 'Polk County', '037': 'Dakota County', '035': 'Crow Wing County', '109': 'Olmsted County', '049': 'Goodhue County', '047': 'Freeborn County', '103': 'Nicollet County', '045': 'Fillmore County', '101': 'Murray County', '043': 'Faribault County', '107': 'Norman County', '041': 'Douglas County', '105': 'Nobles County', '059': 'Isanti County', '055': 'Houston County', '057': 'Hubbard County', '173': 'Yellow Medicine County', '051': 'Grant County', '171': 'Wright County', '053': 'Hennepin County', '061': 'Itasca County', '063': 'Jackson County', '065': 'Kanabec County', '067': 'Kandiyohi County', '069': 'Kittson County', '169': 'Winona County', '165': 'Watonwan County', '167': 'Wilkin County', '161': 'Waseca County', '163': 'Washington County', '151': 'Swift County', '077': 'Lake of the Woods County', '153': 'Todd County', '075': 'Lake County', '155': 'Traverse County', '073': 'Lac qui Parle County', '157': 'Wabasha County', '071': 'Koochiching County', '159': 'Wadena County', '079': 'Le Sueur County', '147': 'Steele County', '089': 'Marshall County', '145': 'Stearns County', '143': 'Sibley County', '141': 'Sherburne County', '083': 'Lyon County', '081': 'Lincoln County', '087': 'Mahnomen County', '085': 'McLeod County', '149': 'Stevens County', '003': 'Anoka County', '001': 'Aitkin County', '007': 'Beltrami County', '005': 'Becker County', '009': 'Benton County'},
  '20': {'099': 'Labette County', '091': 'Johnson County', '093': 'Kearny County', '095': 'Kingman County', '097': 'Kiowa County', '133': 'Neosho County', '011': 'Bourbon County', '131': 'Nemaha County', '013': 'Brown County', '137': 'Norton County', '015': 'Butler County', '135': 'Ness County', '017': 'Chase County', '019': 'Chautauqua County', '139': 'Osage County', '025': 'Clark County', '121': 'Miami County', '027': 'Clay County', '123': 'Mitchell County', '021': 'Cherokee County', '125': 'Montgomery County', '023': 'Cheyenne County', '127': 'Morris County', '129': 'Morton County', '029': 'Cloud County', '199': 'Wallace County', '195': 'Trego County', '197': 'Wabaunsee County', '191': 'Sumner County', '203': 'Wichita County', '193': 'Thomas County', '115': 'Marion County', '117': 'Marshall County', '039': 'Decatur County', '111': 'Lyon County', '113': 'McPherson County', '033': 'Comanche County', '031': 'Coffey County', '119': 'Meade County', '037': 'Crawford County', '035': 'Cowley County', '209': 'Wyandotte County', '109': 'Logan County', '049': 'Elk County', '047': 'Edwards County', '103': 'Leavenworth County', '045': 'Douglas County', '101': 'Lane County', '043': 'Doniphan County', '107': 'Linn County', '041': 'Dickinson County', '105': 'Lincoln County', '059': 'Franklin County', '179': 'Sheridan County', '177': 'Shawnee County', '055': 'Finney County', '175': 'Seward County', '057': 'Ford County', '173': 'Sedgwick County', '051': 'Ellis County', '171': 'Scott County', '053': 'Ellsworth County', '183': 'Smith County', '181': 'Sherman County', '187': 'Stanton County', '185': 'Stafford County', '189': 'Stevens County', '061': 'Geary County', '063': 'Gove County', '065': 'Graham County', '067': 'Grant County', '069': 'Gray County', '169': 'Saline County', '165': 'Rush County', '167': 'Russell County', '161': 'Riley County', '163': 'Rooks County', '151': 'Pratt County', '077': 'Harper County', '153': 'Rawlins County', '075': 'Hamilton County', '155': 'Reno County', '073': 'Greenwood County', '157': 'Republic County', '071': 'Greeley County', '159': 'Rice County', '079': 'Harvey County', '201': 'Washington County', '147': 'Phillips County', '089': 'Jewell County', '145': 'Pawnee County', '205': 'Wilson County', '143': 'Ottawa County', '207': 'Woodson County', '141': 'Osborne County', '083': 'Hodgeman County', '081': 'Haskell County', '087': 'Jefferson County', '085': 'Jackson County', '149': 'Pottawatomie County', '003': 'Anderson County', '001': 'Allen County', '007': 'Barber County', '005': 'Atchison County', '009': 'Barton County'},
  '21': {'099': 'Hart County', '215': 'Spencer County', '213': 'Simpson County', '211': 'Shelby County', '091': 'Hancock County', '093': 'Hardin County', '095': 'Harlan County', '097': 'Harrison County', '133': 'Letcher County', '011': 'Bath County', '131': 'Leslie County', '013': 'Bell County', '137': 'Lincoln County', '015': 'Boone County', '135': 'Lewis County', '017': 'Bourbon County', '019': 'Boyd County', '139': 'Livingston County', '025': 'Breathitt County', '121': 'Knox County', '027': 'Breckinridge County', '123': 'LaRue County', '021': 'Boyle County', '125': 'Laurel County', '023': 'Bracken County', '127': 'Lawrence County', '129': 'Lee County', '219': 'Todd County', '029': 'Bullitt County', '199': 'Pulaski County', '195': 'Pike County', '197': 'Powell County', '191': 'Pendleton County', '203': 'Rockcastle County', '193': 'Perry County', '115': 'Johnson County', '117': 'Kenton County', '039': 'Carlisle County', '111': 'Jefferson County', '113': 'Jessamine County', '033': 'Caldwell County', '031': 'Butler County', '119': 'Knott County', '037': 'Campbell County', '035': 'Calloway County', '217': 'Taylor County', '209': 'Scott County', '109': 'Jackson County', '049': 'Clark County', '047': 'Christian County', '103': 'Henry County', '045': 'Casey County', '101': 'Henderson County', '043': 'Carter County', '107': 'Hopkins County', '041': 'Carroll County', '105': 'Hickman County', '059': 'Daviess County', '179': 'Nelson County', '177': 'Muhlenberg County', '055': 'Crittenden County', '175': 'Morgan County', '057': 'Cumberland County', '173': 'Montgomery County', '051': 'Clay County', '171': 'Monroe County', '053': 'Clinton County', '183': 'Ohio County', '181': 'Nicholas County', '187': 'Owen County', '185': 'Oldham County', '189': 'Owsley County', '061': 'Edmonson County', '063': 'Elliott County', '065': 'Estill County', '067': 'Fayette County', '069': 'Fleming County', '169': 'Metcalfe County', '229': 'Washington County', '227': 'Warren County', '165': 'Menifee County', '225': 'Union County', '167': 'Mercer County', '223': 'Trimble County', '161': 'Mason County', '221': 'Trigg County', '163': 'Meade County', '151': 'Madison County', '077': 'Gallatin County', '153': 'Magoffin County', '075': 'Fulton County', '155': 'Marion County', '073': 'Franklin County', '157': 'Marshall County', '071': 'Floyd County', '159': 'Martin County', '079': 'Garrard County', '239': 'Woodford County', '235': 'Whitley County', '237': 'Wolfe County', '231': 'Wayne County', '233': 'Webster County', '201': 'Robertson County', '147': 'McCreary County', '089': 'Greenup County', '145': 'McCracken County', '205': 'Rowan County', '143': 'Lyon County', '207': 'Russell County', '141': 'Logan County', '083': 'Graves County', '081': 'Grant County', '087': 'Green County', '085': 'Grayson County', '149': 'McLean County', '003': 'Allen County', '001': 'Adair County', '007': 'Ballard County', '005': 'Anderson County', '009': 'Barren County'},
  '22': {'077': 'Pointe Coupee Parish', '075': 'Plaquemines Parish', '005': 'Ascension Parish', '071': 'Orleans Parish', '045': 'Iberia Parish', '091': 'St. Helena Parish', '093': 'St. James Parish', '089': 'St. Charles Parish', '079': 'Rapides Parish', '049': 'Jackson Parish', '011': 'Beauregard Parish', '117': 'Washington Parish', '039': 'Evangeline Parish', '111': 'Union Parish', '015': 'Bossier Parish', '113': 'Vermilion Parish', '017': 'Caddo Parish', '033': 'East Baton Rouge Parish', '031': 'DeSoto Parish', '119': 'Webster Parish', '037': 'East Feliciana Parish', '035': 'East Carroll Parish', '123': 'West Carroll Parish', '057': 'Lafourche Parish', '029': 'Concordia Parish', '073': 'Ouachita Parish', '051': 'Jefferson Parish', '083': 'Richland Parish', '019': 'Calcasieu Parish', '101': 'St. Mary Parish', '053': 'Jefferson Davis Parish', '061': 'Lincoln Parish', '063': 'Livingston Parish', '065': 'Madison Parish', '067': 'Morehouse Parish', '069': 'Natchitoches Parish', '081': 'Red River Parish', '087': 'St. Bernard Parish', '085': 'Sabine Parish', '095': 'St. John the Baptist Parish', '025': 'Catahoula Parish', '121': 'West Baton Rouge Parish', '027': 'Claiborne Parish', '109': 'Terrebonne Parish', '007': 'Assumption Parish', '125': 'West Feliciana Parish', '023': 'Cameron Parish', '127': 'Winn Parish', '047': 'Iberville Parish', '103': 'St. Tammany Parish', '009': 'Avoyelles Parish', '097': 'St. Landry Parish', '043': 'Grant Parish', '107': 'Tensas Parish', '041': 'Franklin Parish', '105': 'Tangipahoa Parish', '003': 'Allen Parish', '001': 'Acadia Parish', '013': 'Bienville Parish', '099': 'St. Martin Parish', '021': 'Caldwell Parish', '055': 'Lafayette Parish', '115': 'Vernon Parish', '059': 'LaSalle Parish'},
  '23': {'025': 'Somerset County', '023': 'Sagadahoc County', '027': 'Waldo County', '003': 'Aroostook County', '011': 'Kennebec County', '001': 'Androscoggin County', '013': 'Knox County', '007': 'Franklin County', '015': 'Lincoln County', '005': 'Cumberland County', '017': 'Oxford County', '019': 'Penobscot County', '009': 'Hancock County', '031': 'York County', '029': 'Washington County', '021': 'Piscataquis County'},
  '46': {'077': 'Kingsbury County', '075': 'Jones County', '005': 'Beadle County', '071': 'Jackson County', '091': 'Marshall County', '093': 'Meade County', '089': 'McPherson County', '079': 'Lake County', '049': 'Faulk County', '011': 'Brookings County', '117': 'Stanley County', '039': 'Deuel County', '111': 'Sanborn County', '015': 'Brule County', '135': 'Yankton County', '017': 'Buffalo County', '033': 'Custer County', '031': 'Corson County', '119': 'Sully County', '009': 'Bon Homme County', '035': 'Davison County', '123': 'Tripp County', '057': 'Hamlin County', '099': 'Minnehaha County', '029': 'Codington County', '073': 'Jerauld County', '102': 'Oglala Lakota County', '137': 'Ziebach County', '037': 'Day County', '083': 'Lincoln County', '019': 'Butte County', '101': 'Moody County', '053': 'Gregory County', '061': 'Hanson County', '063': 'Harding County', '065': 'Hughes County', '067': 'Hutchinson County', '069': 'Hyde County', '081': 'Lawrence County', '087': 'McCook County', '085': 'Lyman County', '095': 'Mellette County', '025': 'Clark County', '121': 'Todd County', '027': 'Clay County', '109': 'Roberts County', '007': 'Bennett County', '125': 'Turner County', '023': 'Charles Mix County', '127': 'Union County', '047': 'Fall River County', '103': 'Pennington County', '045': 'Edmunds County', '097': 'Miner County', '043': 'Douglas County', '107': 'Potter County', '041': 'Dewey County', '105': 'Perkins County', '003': 'Aurora County', '129': 'Walworth County', '013': 'Brown County', '051': 'Grant County', '021': 'Campbell County', '055': 'Haakon County', '115': 'Spink County', '059': 'Hand County'},
  '47': {'099': 'Lawrence County', '091': 'Johnson County', '093': 'Knox County', '095': 'Lake County', '097': 'Lauderdale County', '133': 'Overton County', '011': 'Bradley County', '131': 'Obion County', '013': 'Campbell County', '137': 'Pickett County', '015': 'Cannon County', '135': 'Perry County', '017': 'Carroll County', '019': 'Carter County', '139': 'Polk County', '025': 'Claiborne County', '121': 'Meigs County', '027': 'Clay County', '123': 'Monroe County', '021': 'Cheatham County', '125': 'Montgomery County', '023': 'Chester County', '127': 'Moore County', '129': 'Morgan County', '029': 'Cocke County', '115': 'Marion County', '117': 'Marshall County', '039': 'Decatur County', '111': 'Macon County', '113': 'Madison County', '033': 'Crockett County', '031': 'Coffee County', '119': 'Maury County', '037': 'Davidson County', '035': 'Cumberland County', '109': 'McNairy County', '049': 'Fentress County', '047': 'Fayette County', '103': 'Lincoln County', '045': 'Dyer County', '101': 'Lewis County', '043': 'Dickson County', '107': 'McMinn County', '041': 'DeKalb County', '105': 'Loudon County', '059': 'Greene County', '179': 'Washington County', '177': 'Warren County', '055': 'Giles County', '175': 'Van Buren County', '057': 'Grainger County', '173': 'Union County', '051': 'Franklin County', '171': 'Unicoi County', '053': 'Gibson County', '183': 'Weakley County', '181': 'Wayne County', '187': 'Williamson County', '185': 'White County', '189': 'Wilson County', '061': 'Grundy County', '063': 'Hamblen County', '065': 'Hamilton County', '067': 'Hancock County', '069': 'Hardeman County', '169': 'Trousdale County', '165': 'Sumner County', '167': 'Tipton County', '161': 'Stewart County', '163': 'Sullivan County', '151': 'Scott County', '077': 'Henderson County', '153': 'Sequatchie County', '075': 'Haywood County', '155': 'Sevier County', '073': 'Hawkins County', '157': 'Shelby County', '071': 'Hardin County', '159': 'Smith County', '079': 'Henry County', '147': 'Robertson County', '089': 'Jefferson County', '145': 'Roane County', '143': 'Rhea County', '141': 'Putnam County', '083': 'Houston County', '081': 'Hickman County', '087': 'Jackson County', '085': 'Humphreys County', '149': 'Rutherford County', '003': 'Bedford County', '001': 'Anderson County', '007': 'Bledsoe County', '005': 'Benton County', '009': 'Blount County'},
  '44': {'003': 'Kent County', '001': 'Bristol County', '007': 'Providence County', '009': 'Washington County', '005': 'Newport County'},
  '45': {'077': 'Pickens County', '075': 'Orangeburg County', '005': 'Allendale County', '071': 'Newberry County', '045': 'Greenville County', '091': 'York County', '089': 'Williamsburg County', '079': 'Richland County', '049': 'Hampton County', '011': 'Barnwell County', '039': 'Fairfield County', '015': 'Berkeley County', '017': 'Calhoun County', '033': 'Dillon County', '031': 'Darlington County', '037': 'Edgefield County', '035': 'Dorchester County', '057': 'Lancaster County', '029': 'Colleton County', '073': 'Oconee County', '051': 'Horry County', '083': 'Spartanburg County', '019': 'Charleston County', '053': 'Jasper County', '061': 'Lee County', '063': 'Lexington County', '065': 'McCormick County', '067': 'Marion County', '069': 'Marlboro County', '081': 'Saluda County', '087': 'Union County', '085': 'Sumter County', '025': 'Chesterfield County', '027': 'Clarendon County', '007': 'Anderson County', '023': 'Chester County', '047': 'Greenwood County', '009': 'Bamberg County', '043': 'Georgetown County', '041': 'Florence County', '003': 'Aiken County', '001': 'Abbeville County', '013': 'Beaufort County', '021': 'Cherokee County', '055': 'Kershaw County', '059': 'Laurens County'},
  '28': {'151': 'Washington County', '077': 'Lawrence County', '153': 'Wayne County', '075': 'Lauderdale County', '155': 'Webster County', '005': 'Amite County', '157': 'Wilkinson County', '071': 'Lafayette County', '045': 'Hancock County', '091': 'Marion County', '093': 'Marshall County', '163': 'Yazoo County', '089': 'Madison County', '079': 'Leake County', '049': 'Hinds County', '011': 'Bolivar County', '117': 'Prentiss County', '039': 'George County', '111': 'Perry County', '015': 'Carroll County', '113': 'Pike County', '017': 'Chickasaw County', '033': 'DeSoto County', '139': 'Tippah County', '031': 'Covington County', '119': 'Quitman County', '037': 'Franklin County', '035': 'Forrest County', '123': 'Scott County', '057': 'Itawamba County', '149': 'Warren County', '029': 'Copiah County', '073': 'Lamar County', '137': 'Tate County', '051': 'Holmes County', '083': 'Leflore County', '159': 'Winston County', '019': 'Choctaw County', '101': 'Newton County', '161': 'Yalobusha County', '053': 'Humphreys County', '061': 'Jasper County', '147': 'Walthall County', '063': 'Jefferson County', '145': 'Union County', '065': 'Jefferson Davis County', '143': 'Tunica County', '067': 'Jones County', '141': 'Tishomingo County', '069': 'Kemper County', '081': 'Lee County', '087': 'Lowndes County', '085': 'Lincoln County', '095': 'Monroe County', '025': 'Clay County', '121': 'Rankin County', '027': 'Coahoma County', '109': 'Pearl River County', '007': 'Attala County', '125': 'Sharkey County', '023': 'Clarke County', '127': 'Simpson County', '047': 'Harrison County', '103': 'Noxubee County', '009': 'Benton County', '097': 'Montgomery County', '043': 'Grenada County', '107': 'Panola County', '041': 'Greene County', '105': 'Oktibbeha County', '133': 'Sunflower County', '003': 'Alcorn County', '129': 'Smith County', '135': 'Tallahatchie County', '001': 'Adams County', '131': 'Stone County', '013': 'Calhoun County', '099': 'Neshoba County', '021': 'Claiborne County', '055': 'Issaquena County', '115': 'Pontotoc County', '059': 'Jackson County'},
  '29': {'099': 'Jefferson County', '215': 'Texas County', '213': 'Taney County', '211': 'Sullivan County', '091': 'Howell County', '093': 'Iron County', '095': 'Jackson County', '097': 'Jasper County', '133': 'Mississippi County', '011': 'Barton County', '131': 'Miller County', '013': 'Bates County', '137': 'Monroe County', '015': 'Benton County', '135': 'Moniteau County', '017': 'Bollinger County', '019': 'Boone County', '139': 'Montgomery County', '025': 'Caldwell County', '121': 'Macon County', '027': 'Callaway County', '123': 'Madison County', '021': 'Buchanan County', '125': 'Maries County', '023': 'Butler County', '127': 'Marion County', '129': 'Mercer County', '219': 'Warren County', '029': 'Camden County', '199': 'Scotland County', '195': 'Saline County', '197': 'Schuyler County', '203': 'Shannon County', '115': 'Linn County', '117': 'Livingston County', '039': 'Cedar County', '111': 'Lewis County', '113': 'Lincoln County', '033': 'Carroll County', '031': 'Cape Girardeau County', '119': 'McDonald County', '037': 'Cass County', '035': 'Carter County', '217': 'Vernon County', '209': 'Stone County', '109': 'Lawrence County', '049': 'Clinton County', '047': 'Clay County', '103': 'Knox County', '045': 'Clark County', '101': 'Johnson County', '043': 'Christian County', '107': 'Lafayette County', '041': 'Chariton County', '105': 'Laclede County', '510': 'Saint Louis City', '059': 'Dallas County', '179': 'Reynolds County', '177': 'Ray County', '055': 'Crawford County', '175': 'Randolph County', '057': 'Dade County', '173': 'Ralls County', '051': 'Cole County', '171': 'Putnam County', '053': 'Cooper County', '183': 'Saint Charles County', '181': 'Ripley County', '186': 'Ste. Genevieve County', '187': 'Saint Francois County', '185': 'Saint Clair County', '189': 'Saint Louis County', '061': 'Daviess County', '063': 'DeKalb County', '065': 'Dent County', '067': 'Douglas County', '069': 'Dunklin County', '169': 'Pulaski County', '229': 'Wright County', '227': 'Worth County', '165': 'Platte County', '225': 'Webster County', '167': 'Polk County', '223': 'Wayne County', '161': 'Phelps County', '221': 'Washington County', '163': 'Pike County', '151': 'Osage County', '077': 'Greene County', '153': 'Ozark County', '075': 'Gentry County', '155': 'Pemiscot County', '073': 'Gasconade County', '157': 'Perry County', '071': 'Franklin County', '159': 'Pettis County', '079': 'Grundy County', '201': 'Scott County', '147': 'Nodaway County', '089': 'Howard County', '145': 'Newton County', '205': 'Shelby County', '143': 'New Madrid County', '207': 'Stoddard County', '141': 'Morgan County', '083': 'Henry County', '081': 'Harrison County', '087': 'Holt County', '085': 'Hickory County', '149': 'Oregon County', '003': 'Andrew County', '001': 'Adair County', '007': 'Audrain County', '005': 'Atchison County', '009': 'Barry County'},
  '40': {'089': 'McCurtain County', '077': 'Latimer County', '153': 'Woodward County', '075': 'Kiowa County', '005': 'Atoka County', '071': 'Kay County', '045': 'Ellis County', '091': 'McIntosh County', '093': 'Major County', '151': 'Woods County', '095': 'Marshall County', '079': 'Le Flore County', '049': 'Garvin County', '011': 'Blaine County', '117': 'Pawnee County', '039': 'Custer County', '111': 'Okmulgee County', '015': 'Caddo County', '113': 'Osage County', '017': 'Canadian County', '033': 'Cotton County', '139': 'Texas County', '031': 'Comanche County', '119': 'Payne County', '037': 'Creek County', '035': 'Craig County', '123': 'Pontotoc County', '057': 'Harmon County', '029': 'Coal County', '073': 'Kingfisher County', '137': 'Stephens County', '051': 'Grady County', '083': 'Logan County', '019': 'Carter County', '101': 'Muskogee County', '053': 'Grant County', '061': 'Haskell County', '147': 'Washington County', '063': 'Hughes County', '145': 'Wagoner County', '065': 'Jackson County', '143': 'Tulsa County', '067': 'Jefferson County', '141': 'Tillman County', '069': 'Johnston County', '081': 'Lincoln County', '087': 'McClain County', '085': 'Love County', '149': 'Washita County', '025': 'Cimarron County', '121': 'Pittsburg County', '027': 'Cleveland County', '109': 'Oklahoma County', '007': 'Beaver County', '125': 'Pottawatomie County', '023': 'Choctaw County', '127': 'Pushmataha County', '047': 'Garfield County', '103': 'Noble County', '009': 'Beckham County', '097': 'Mayes County', '043': 'Dewey County', '107': 'Okfuskee County', '041': 'Delaware County', '105': 'Nowata County', '133': 'Seminole County', '003': 'Alfalfa County', '129': 'Roger Mills County', '135': 'Sequoyah County', '001': 'Adair County', '131': 'Rogers County', '013': 'Bryan County', '099': 'Murray County', '021': 'Cherokee County', '055': 'Greer County', '115': 'Ottawa County', '059': 'Harper County'},
  '41': {'005': 'Clackamas County', '071': 'Yamhill County', '045': 'Malheur County', '049': 'Morrow County', '011': 'Coos County', '039': 'Lane County', '015': 'Curry County', '017': 'Deschutes County', '033': 'Josephine County', '031': 'Jefferson County', '037': 'Lake County', '035': 'Klamath County', '057': 'Tillamook County', '029': 'Jackson County', '051': 'Multnomah County', '019': 'Douglas County', '053': 'Polk County', '061': 'Union County', '063': 'Wallowa County', '065': 'Wasco County', '067': 'Washington County', '069': 'Wheeler County', '025': 'Harney County', '027': 'Hood River County', '007': 'Clatsop County', '023': 'Grant County', '047': 'Marion County', '009': 'Columbia County', '043': 'Linn County', '041': 'Lincoln County', '003': 'Benton County', '001': 'Baker County', '013': 'Crook County', '021': 'Gilliam County', '055': 'Sherman County', '059': 'Umatilla County'},
   '1': {'077': 'Lauderdale County', '075': 'Lamar County', '005': 'Barbour County', '071': 'Jackson County', '045': 'Dale County', '091': 'Marengo County', '093': 'Marion County', '089': 'Madison County', '079': 'Lawrence County', '049': 'DeKalb County', '011': 'Bullock County', '117': 'Shelby County', '039': 'Covington County', '111': 'Randolph County', '015': 'Calhoun County', '113': 'Russell County', '017': 'Chambers County', '033': 'Colbert County', '031': 'Coffee County', '119': 'Sumter County', '037': 'Coosa County', '035': 'Conecuh County', '123': 'Tallapoosa County', '057': 'Fayette County', '029': 'Cleburne County', '073': 'Jefferson County', '051': 'Elmore County', '083': 'Limestone County', '019': 'Cherokee County', '101': 'Montgomery County', '053': 'Escambia County', '061': 'Geneva County', '063': 'Greene County', '065': 'Hale County', '067': 'Henry County', '069': 'Houston County', '081': 'Lee County', '087': 'Macon County', '085': 'Lowndes County', '095': 'Marshall County', '025': 'Clarke County', '121': 'Talladega County', '027': 'Clay County', '109': 'Pike County', '007': 'Bibb County', '125': 'Tuscaloosa County', '023': 'Choctaw County', '127': 'Walker County', '047': 'Dallas County', '103': 'Morgan County', '009': 'Blount County', '097': 'Mobile County', '043': 'Cullman County', '107': 'Pickens County', '041': 'Crenshaw County', '105': 'Perry County', '133': 'Winston County', '003': 'Baldwin County', '129': 'Washington County', '001': 'Autauga County', '131': 'Wilcox County', '013': 'Butler County', '099': 'Monroe County', '021': 'Chilton County', '055': 'Etowah County', '115': 'St. Clair County', '059': 'Franklin County'},
  '35': {'005': 'Chaves County', '045': 'San Juan County', '049': 'Santa Fe County', '011': 'De Baca County', '039': 'Rio Arriba County', '015': 'Eddy County', '017': 'Grant County', '033': 'Mora County', '031': 'McKinley County', '037': 'Quay County', '035': 'Otero County', '057': 'Torrance County', '043': 'Sandoval County', '051': 'Sierra County', '019': 'Guadalupe County', '053': 'Socorro County', '061': 'Valencia County', '025': 'Lea County', '027': 'Lincoln County', '021': 'Harding County', '006': 'Cibola County', '023': 'Hidalgo County', '047': 'San Miguel County', '009': 'Curry County', '029': 'Luna County', '028': 'Los Alamos County', '041': 'Roosevelt County', '003': 'Catron County', '001': 'Bernalillo County', '013': 'Do\xf1a Ana County', '007': 'Colfax County', '055': 'Taos County', '059': 'Union County'},
  '2': {'201': '', '180': 'Nome Census Area', '240': 'Southeast Fairbanks Census Area', '290': 'Yukon-Koyukuk Census Area', '261': 'Valdez-Cordova Census Area', '050': 'Bethel Census Area', '270': '', '232': '', '280': '', '070': 'Dillingham Census Area', '016': 'Aleutians West Census Area', '275': 'Wrangell', '060': 'Bristol Bay Borough', '220': 'Sitka', '282': 'Yakutat', '150': 'Kodiak Island Borough', '090': 'Fairbanks North Star Borough', '068': 'Denali Borough', '-': 'Unorganized Borough', '130': 'Ketchikan Gateway Borough', '195': 'Petersburg Borough', '122': 'Kenai Peninsula Borough', '013': 'Aleutians East Borough', '020': 'Anchorage', '185': 'North Slope Borough', '164': 'Lake and Peninsula Borough', '100': 'Haines Borough', '170': 'Matanuska-Susitna Borough', '230': 'Skagway', '188': 'Northwest Arctic Borough', '110': 'Juneau'},
  '5': {'077': 'Lee County', '075': 'Lawrence County', '005': 'Baxter County', '071': 'Johnson County', '045': 'Faulkner County', '091': 'Miller County', '093': 'Mississippi County', '089': 'Marion County', '079': 'Lincoln County', '049': 'Fulton County', '011': 'Bradley County', '117': 'Prairie County', '039': 'Dallas County', '111': 'Poinsett County', '015': 'Carroll County', '113': 'Polk County', '017': 'Chicot County', '033': 'Crawford County', '139': 'Union County', '031': 'Craighead County', '119': 'Pulaski County', '037': 'Cross County', '035': 'Crittenden County', '123': 'St. Francis County', '057': 'Hempstead County', '149': 'Yell County', '029': 'Conway County', '073': 'Lafayette County', '137': 'Stone County', '051': 'Garland County', '083': 'Logan County', '019': 'Clark County', '101': 'Newton County', '053': 'Grant County', '061': 'Howard County', '147': 'Woodruff County', '063': 'Independence County', '145': 'White County', '065': 'Izard County', '143': 'Washington County', '067': 'Jackson County', '141': 'Van Buren County', '069': 'Jefferson County', '081': 'Little River County', '087': 'Madison County', '085': 'Lonoke County', '095': 'Monroe County', '025': 'Cleveland County', '121': 'Randolph County', '027': 'Columbia County', '109': 'Pike County', '007': 'Benton County', '125': 'Saline County', '023': 'Cleburne County', '127': 'Scott County', '047': 'Franklin County', '103': 'Ouachita County', '009': 'Boone County', '097': 'Montgomery County', '043': 'Drew County', '107': 'Phillips County', '041': 'Desha County', '105': 'Perry County', '133': 'Sevier County', '003': 'Ashley County', '129': 'Searcy County', '135': 'Sharp County', '001': 'Arkansas County', '131': 'Sebastian County', '013': 'Calhoun County', '099': 'Nevada County', '021': 'Clay County', '055': 'Greene County', '115': 'Pope County', '059': 'Hot Spring County'},
  '4': {'025': 'Yavapai County', '023': 'Santa Cruz County', '027': 'Yuma County', '012': 'La Paz County', '003': 'Cochise County', '011': 'Greenlee County', '001': 'Apache County', '013': 'Maricopa County', '007': 'Gila County', '015': 'Mohave County', '005': 'Coconino County', '017': 'Navajo County', '019': 'Pima County', '009': 'Graham County', '021': 'Pinal County'},
  '6': {'077': 'San Joaquin County', '075': 'San Francisco', '005': 'Amador County', '071': 'San Bernardino County', '045': 'Mendocino County', '091': 'Sierra County', '093': 'Siskiyou County', '089': 'Shasta County', '079': 'San Luis Obispo County', '049': 'Modoc County', '011': 'Colusa County', '039': 'Madera County', '111': 'Ventura County', '015': 'Del Norte County', '113': 'Yolo County', '017': 'El Dorado County', '033': 'Lake County', '031': 'Kings County', '037': 'Los Angeles County', '035': 'Lassen County', '057': 'Nevada County', '029': 'Kern County', '073': 'San Diego County', '051': 'Mono County', '083': 'Santa Barbara County', '019': 'Fresno County', '101': 'Sutter County', '053': 'Monterey County', '061': 'Placer County', '063': 'Plumas County', '065': 'Riverside County', '067': 'Sacramento County', '069': 'San Benito County', '081': 'San Mateo County', '087': 'Santa Cruz County', '085': 'Santa Clara County', '095': 'Solano County', '025': 'Imperial County', '027': 'Inyo County', '109': 'Tuolumne County', '007': 'Butte County', '023': 'Humboldt County', '047': 'Merced County', '103': 'Tehama County', '009': 'Calaveras County', '097': 'Sonoma County', '043': 'Mariposa County', '107': 'Tulare County', '041': 'Marin County', '105': 'Trinity County', '003': 'Alpine County', '001': 'Alameda County', '013': 'Contra Costa County', '099': 'Stanislaus County', '021': 'Glenn County', '055': 'Napa County', '115': 'Yuba County', '059': 'Orange County'},
  '9': {'003': 'Hartford County', '011': 'New London County', '001': 'Fairfield County', '013': 'Tolland County', '007': 'Middlesex County', '015': 'Windham County', '005': 'Litchfield County', '009': 'New Haven County'},
  '8': {'005': 'Campbell County', '045': 'Weston County', '011': 'Crook County', '039': 'Teton County', '015': 'Goshen County', '017': 'Hot Springs County', '033': 'Sheridan County', '031': 'Platte County', '037': 'Sweetwater County', '035': 'Sublette County', '029': 'Park County', '019': 'Johnson County', '025': 'Natrona County', '027': 'Niobrara County', '007': 'Carbon County', '023': 'Lincoln County', '009': 'Converse County', '043': 'Washakie County', '041': 'Uinta County', '003': 'Big Horn County', '001': 'Albany County', '013': 'Fremont County', '021': 'Laramie County'},
  '39': {'099': 'Mahoning County', '091': 'Logan County', '093': 'Lorain County', '095': 'Lucas County', '097': 'Madison County', '133': 'Portage County', '011': 'Auglaize County', '131': 'Pike County', '013': 'Belmont County', '137': 'Putnam County', '015': 'Brown County', '135': 'Preble County', '017': 'Butler County', '019': 'Carroll County', '139': 'Richland County', '025': 'Clermont County', '121': 'Noble County', '027': 'Clinton County', '123': 'Ottawa County', '021': 'Champaign County', '125': 'Paulding County', '023': 'Clark County', '127': 'Perry County', '129': 'Pickaway County', '029': 'Columbiana County', '115': 'Morgan County', '117': 'Morrow County', '039': 'Defiance County', '111': 'Monroe County', '113': 'Montgomery County', '033': 'Crawford County', '031': 'Coshocton County', '119': 'Muskingum County', '037': 'Darke County', '035': 'Cuyahoga County', '109': 'Miami County', '049': 'Franklin County', '047': 'Fayette County', '103': 'Medina County', '045': 'Fairfield County', '101': 'Marion County', '043': 'Erie County', '107': 'Mercer County', '041': 'Delaware County', '105': 'Meigs County', '059': 'Guernsey County', '055': 'Geauga County', '175': 'Wyandot County', '057': 'Greene County', '173': 'Wood County', '051': 'Fulton County', '171': 'Williams County', '053': 'Gallia County', '061': 'Hamilton County', '063': 'Hancock County', '065': 'Hardin County', '067': 'Harrison County', '069': 'Henry County', '169': 'Wayne County', '165': 'Warren County', '167': 'Washington County', '161': 'Van Wert County', '163': 'Vinton County', '151': 'Stark County', '077': 'Huron County', '153': 'Summit County', '075': 'Holmes County', '155': 'Trumbull County', '073': 'Hocking County', '157': 'Tuscarawas County', '071': 'Highland County', '159': 'Union County', '079': 'Jackson County', '147': 'Seneca County', '089': 'Licking County', '145': 'Scioto County', '143': 'Sandusky County', '141': 'Ross County', '083': 'Knox County', '081': 'Jefferson County', '087': 'Lawrence County', '085': 'Lake County', '149': 'Shelby County', '003': 'Allen County', '001': 'Adams County', '007': 'Ashtabula County', '005': 'Ashland County', '009': 'Athens County'},
  '38': {'077': 'Richland County', '075': 'Renville County', '005': 'Benson County', '071': 'Ramsey County', '045': 'LaMoure County', '091': 'Steele County', '093': 'Stutsman County', '089': 'Stark County', '079': 'Rolette County', '049': 'McHenry County', '011': 'Bowman County', '039': 'Griggs County', '015': 'Burleigh County', '017': 'Cass County', '033': 'Golden Valley County', '031': 'Foster County', '037': 'Grant County', '035': 'Grand Forks County', '057': 'Mercer County', '029': 'Emmons County', '073': 'Ransom County', '051': 'McIntosh County', '083': 'Sheridan County', '019': 'Cavalier County', '101': 'Ward County', '053': 'McKenzie County', '061': 'Mountrail County', '063': 'Nelson County', '065': 'Oliver County', '067': 'Pembina County', '069': 'Pierce County', '081': 'Sargent County', '087': 'Slope County', '085': 'Sioux County', '095': 'Towner County', '025': 'Dunn County', '027': 'Eddy County', '007': 'Billings County', '023': 'Divide County', '047': 'Logan County', '103': 'Wells County', '009': 'Bottineau County', '097': 'Traill County', '043': 'Kidder County', '041': 'Hettinger County', '105': 'Williams County', '003': 'Barnes County', '001': 'Adams County', '013': 'Burke County', '099': 'Walsh County', '021': 'Dickey County', '055': 'McLean County', '059': 'Morton County'},
  '10': {'003': 'New Castle County', '001': 'Kent County', '005': 'Sussex County'},
  '13': {'099': 'Early County', '215': 'Muscogee County', '213': 'Murray County', '211': 'Morgan County', '091': 'Dodge County', '093': 'Dooly County', '265': 'Taliaferro County', '095': 'Dougherty County', '097': 'Douglas County', '133': 'Greene County', '011': 'Banks County', '131': 'Grady County', '013': 'Barrow County', '137': 'Habersham County', '015': 'Bartow County', '135': 'Gwinnett County', '017': 'Ben Hill County', '019': 'Berrien County', '139': 'Hall County', '289': 'Twiggs County', '281': 'Towns County', '283': 'Treutlen County', '285': 'Troup County', '287': 'Turner County', '025': 'Brantley County', '121': 'Fulton County', '027': 'Brooks County', '123': 'Gilmer County', '021': 'Bibb County', '125': 'Glascock County', '023': 'Bleckley County', '127': 'Glynn County', '129': 'Gordon County', '269': 'Taylor County', '219': 'Oconee County', '029': 'Bryan County', '299': 'Ware County', '297': 'Walton County', '295': 'Walker County', '293': 'Upson County', '291': 'Union County', '319': 'Wilkinson County', '199': 'Meriwether County', '195': 'Madison County', '197': 'Marion County', '191': 'McIntosh County', '193': 'Macon County', '115': 'Floyd County', '271': 'Telfair County', '117': 'Forsyth County', '039': 'Camden County', '111': 'Fannin County', '275': 'Thomas County', '113': 'Fayette County', '253': 'Seminole County', '033': 'Burke County', '313': 'Whitfield County', '031': 'Bulloch County', '119': 'Franklin County', '037': 'Calhoun County', '035': 'Butts County', '251': 'Screven County', '257': 'Stephens County', '217': 'Newton County', '209': 'Montgomery County', '255': 'Spalding County', '309': 'Wheeler County', '301': 'Warren County', '303': 'Washington County', '305': 'Wayne County', '307': 'Webster County', '245': 'Richmond County', '247': 'Rockdale County', '109': 'Evans County', '241': 'Rabun County', '049': 'Charlton County', '047': 'Catoosa County', '103': 'Effingham County', '045': 'Carroll County', '101': 'Echols County', '043': 'Candler County', '107': 'Emanuel County', '105': 'Elbert County', '243': 'Randolph County', '259': 'Stewart County', '059': 'Clarke County', '179': 'Liberty County', '177': 'Lee County', '055': 'Chattooga County', '175': 'Laurens County', '057': 'Cherokee County', '173': 'Lanier County', '051': 'Chatham County', '171': 'Lamar County', '053': 'Chattahoochee County', '249': 'Schley County', '183': 'Long County', '181': 'Lincoln County', '187': 'Lumpkin County', '185': 'Lowndes County', '189': 'McDuffie County', '311': 'White County', '061': 'Clay County', '063': 'Clayton County', '065': 'Clinch County', '067': 'Cobb County', '069': 'Coffee County', '317': 'Wilkes County', '315': 'Wilcox County', '169': 'Jones County', '229': 'Pierce County', '227': 'Pickens County', '165': 'Jenkins County', '225': 'Peach County', '167': 'Johnson County', '223': 'Paulding County', '161': 'Jeff Davis County', '221': 'Oglethorpe County', '163': 'Jefferson County', '273': 'Terrell County', '151': 'Henry County', '077': 'Coweta County', '153': 'Houston County', '075': 'Cook County', '155': 'Irwin County', '073': 'Columbia County', '157': 'Jackson County', '071': 'Colquitt County', '159': 'Jasper County', '277': 'Tift County', '079': 'Crawford County', '239': 'Quitman County', '279': 'Toombs County', '235': 'Pulaski County', '237': 'Putnam County', '231': 'Pike County', '233': 'Polk County', '321': 'Worth County', '201': 'Miller County', '147': 'Hart County', '089': 'DeKalb County', '145': 'Harris County', '205': 'Mitchell County', '143': 'Haralson County', '207': 'Monroe County', '141': 'Hancock County', '083': 'Dade County', '081': 'Crisp County', '087': 'Decatur County', '085': 'Dawson County', '149': 'Heard County', '003': 'Atkinson County', '001': 'Appling County', '007': 'Baker County', '005': 'Bacon County', '009': 'Baldwin County', '263': 'Talbot County', '261': 'Sumter County', '267': 'Tattnall County'},
  '12': {'077': 'Liberty County', '075': 'Levy County', '005': 'Bay County', '071': 'Lee County', '091': 'Okaloosa County', '093': 'Okeechobee County', '089': 'Nassau County', '079': 'Madison County', '049': 'Hardee County', '011': 'Broward County', '117': 'Seminole County', '039': 'Gadsden County', '111': 'St. Lucie County', '015': 'Charlotte County', '113': 'Santa Rosa County', '017': 'Citrus County', '033': 'Escambia County', '031': 'Duval County', '119': 'Sumter County', '009': 'Brevard County', '035': 'Flagler County', '123': 'Taylor County', '057': 'Hillsborough County', '099': 'Palm Beach County', '029': 'Dixie County', '073': 'Leon County', '037': 'Franklin County', '083': 'Marion County', '019': 'Clay County', '101': 'Pasco County', '053': 'Hernando County', '061': 'Indian River County', '063': 'Jackson County', '065': 'Jefferson County', '067': 'Lafayette County', '069': 'Lake County', '081': 'Manatee County', '087': 'Monroe County', '086': 'Miami-Dade County', '085': 'Martin County', '095': 'Orange County', '003': 'Baker County', '121': 'Suwannee County', '027': 'DeSoto County', '109': 'St. Johns County', '007': 'Bradford County', '125': 'Union County', '023': 'Columbia County', '127': 'Volusia County', '047': 'Hamilton County', '103': 'Pinellas County', '045': 'Gulf County', '097': 'Osceola County', '043': 'Glades County', '107': 'Putnam County', '041': 'Gilchrist County', '105': 'Polk County', '133': 'Washington County', '115': 'Sarasota County', '129': 'Wakulla County', '001': 'Alachua County', '131': 'Walton County', '013': 'Calhoun County', '051': 'Hendry County', '021': 'Collier County', '055': 'Highlands County', '059': 'Holmes County'},
  '15': {'003': 'City and County of Honolulu', '001': 'Hawaii County', '007': 'Kaua\u02bbi County', '009': 'Maui County', '005': 'Kalawao County'},
  '48': {'099': 'Coryell County', '215': 'Hidalgo County', '213': 'Henderson County', '211': 'Hemphill County', '091': 'Comal County', '093': 'Comanche County', '265': 'Kerr County', '095': 'Concho County', '097': 'Cooke County', '133': 'Eastland County', '011': 'Armstrong County', '131': 'Duval County', '013': 'Atascosa County', '137': 'Edwards County', '015': 'Austin County', '135': 'Ector County', '017': 'Bailey County', '019': 'Bandera County', '139': 'Ellis County', '497': 'Wise County', '491': 'Williamson County', '493': 'Wilson County', '429': 'Stephens County', '399': 'Runnels County', '289': 'Leon County', '345': 'Motley County', '405': 'San Augustine County', '347': 'Nacogdoches County', '403': 'Sabine County', '341': 'Moore County', '401': 'Rusk County', '343': 'Morris County', '281': 'Lampasas County', '499': 'Wood County', '283': 'La Salle County', '285': 'Lavaca County', '349': 'Navarro County', '287': 'Lee County', '025': 'Bee County', '121': 'Denton County', '027': 'Bell County', '123': 'DeWitt County', '021': 'Bastrop County', '125': 'Dickens County', '023': 'Baylor County', '127': 'Dimmit County', '129': 'Donley County', '269': 'King County', '219': 'Hockley County', '029': 'Bexar County', '365': 'Panola County', '485': 'Wichita County', '379': 'Rains County', '415': 'Scurry County', '417': 'Shackelford County', '411': 'San Saba County', '299': 'Llano County', '371': 'Pecos County', '297': 'Live Oak County', '373': 'Polk County', '295': 'Lipscomb County', '375': 'Potter County', '293': 'Limestone County', '377': 'Presidio County', '291': 'Liberty County', '319': 'Mason County', '199': 'Hardin County', '195': 'Hansford County', '197': 'Hardeman County', '191': 'Hall County', '203': 'Harrison County', '193': 'Hamilton County', '115': 'Dawson County', '271': 'Kinney County', '117': 'Deaf Smith County', '039': 'Brazoria County', '111': 'Dallam County', '275': 'Knox County', '113': 'Dallas County', '253': 'Jones County', '033': 'Borden County', '313': 'Madison County', '031': 'Blanco County', '119': 'Delta County', '037': 'Bowie County', '035': 'Bosque County', '251': 'Johnson County', '257': 'Kaufman County', '217': 'Hill County', '209': 'Hays County', '369': 'Parmer County', '421': 'Sherman County', '367': 'Parker County', '423': 'Smith County', '255': 'Karnes County', '425': 'Somervell County', '363': 'Palo Pinto County', '427': 'Starr County', '361': 'Orange County', '309': 'McLennan County', '449': 'Titus County', '443': 'Terrell County', '301': 'Loving County', '441': 'Taylor County', '303': 'Lubbock County', '447': 'Throckmorton County', '305': 'Lynn County', '445': 'Terry County', '307': 'McCulloch County', '245': 'Jefferson County', '381': 'Randall County', '247': 'Jim Hogg County', '109': 'Culberson County', '241': 'Jasper County', '385': 'Real County', '049': 'Brown County', '387': 'Red River County', '047': 'Brooks County', '103': 'Crane County', '045': 'Briscoe County', '101': 'Cottle County', '043': 'Brewster County', '107': 'Crosby County', '041': 'Brazos County', '105': 'Crockett County', '469': 'Victoria County', '419': 'Shelby County', '383': 'Reagan County', '439': 'Tarrant County', '437': 'Swisher County', '435': 'Sutton County', '433': 'Stonewall County', '431': 'Sterling County', '459': 'Upshur County', '339': 'Montgomery County', '243': 'Jeff Davis County', '335': 'Mitchell County', '451': 'Tom Green County', '337': 'Montague County', '453': 'Travis County', '331': 'Milam County', '455': 'Trinity County', '333': 'Mills County', '457': 'Tyler County', '259': 'Kendall County', '059': 'Callahan County', '179': 'Gray County', '389': 'Reeves County', '177': 'Gonzales County', '055': 'Caldwell County', '175': 'Goliad County', '057': 'Calhoun County', '173': 'Glasscock County', '051': 'Burleson County', '171': 'Gillespie County', '053': 'Burnet County', '407': 'San Jacinto County', '249': 'Jim Wells County', '183': 'Gregg County', '181': 'Grayson County', '187': 'Guadalupe County', '185': 'Grimes County', '507': 'Zavala County', '189': 'Hale County', '311': 'McMullen County', '501': 'Yoakum County', '061': 'Cameron County', '063': 'Camp County', '065': 'Carson County', '067': 'Cass County', '069': 'Castro County', '317': 'Martin County', '467': 'Van Zandt County', '461': 'Upton County', '495': 'Winkler County', '315': 'Marion County', '169': 'Garza County', '229': 'Hudspeth County', '227': 'Howard County', '165': 'Gaines County', '225': 'Houston County', '167': 'Galveston County', '223': 'Hopkins County', '161': 'Freestone County', '221': 'Hood County', '163': 'Frio County', '465': 'Val Verde County', '393': 'Roberts County', '505': 'Zapata County', '391': 'Refugio County', '503': 'Young County', '273': 'Kleberg County', '409': 'San Patricio County', '397': 'Rockwall County', '151': 'Fisher County', '077': 'Clay County', '153': 'Floyd County', '075': 'Childress County', '155': 'Foard County', '073': 'Cherokee County', '157': 'Fort Bend County', '071': 'Chambers County', '159': 'Franklin County', '277': 'Lamar County', '079': 'Cochran County', '239': 'Jackson County', '279': 'Lamb County', '489': 'Willacy County', '235': 'Irion County', '237': 'Jack County', '231': 'Hunt County', '233': 'Hutchinson County', '473': 'Waller County', '395': 'Robertson County', '323': 'Maverick County', '321': 'Matagorda County', '327': 'Menard County', '325': 'Medina County', '329': 'Midland County', '201': 'Harris County', '147': 'Fannin County', '089': 'Colorado County', '145': 'Falls County', '205': 'Hartley County', '143': 'Erath County', '207': 'Haskell County', '141': 'El Paso County', '083': 'Coleman County', '081': 'Coke County', '087': 'Collingsworth County', '085': 'Collin County', '149': 'Fayette County', '003': 'Andrews County', '001': 'Anderson County', '007': 'Aransas County', '463': 'Uvalde County', '005': 'Angelina County', '487': 'Wilbarger County', '009': 'Archer County', '483': 'Wheeler County', '481': 'Wharton County', '263': 'Kent County', '261': 'Kenedy County', '357': 'Ochiltree County', '413': 'Schleicher County', '355': 'Nueces County', '471': 'Walker County', '353': 'Nolan County', '477': 'Washington County', '351': 'Newton County', '475': 'Ward County', '267': 'Kimble County', '479': 'Webb County', '359': 'Oldham County'},
  '17': {'099': 'LaSalle County', '091': 'Kankakee County', '093': 'Kendall County', '095': 'Knox County', '097': 'Lake County', '133': 'Monroe County', '011': 'Bureau County', '131': 'Mercer County', '013': 'Calhoun County', '137': 'Morgan County', '015': 'Carroll County', '135': 'Montgomery County', '017': 'Cass County', '019': 'Champaign County', '139': 'Moultrie County', '025': 'Clay County', '121': 'Marion County', '027': 'Clinton County', '123': 'Marshall County', '021': 'Christian County', '125': 'Mason County', '023': 'Clark County', '127': 'Massac County', '129': 'Menard County', '029': 'Coles County', '199': 'Williamson County', '195': 'Whiteside County', '197': 'Will County', '191': 'Wayne County', '203': 'Woodford County', '193': 'White County', '115': 'Macon County', '117': 'Macoupin County', '039': 'DeWitt County', '111': 'McHenry County', '113': 'McLean County', '033': 'Crawford County', '031': 'Cook County', '119': 'Madison County', '037': 'DeKalb County', '035': 'Cumberland County', '109': 'McDonough County', '049': 'Effingham County', '047': 'Edwards County', '103': 'Lee County', '045': 'Edgar County', '101': 'Lawrence County', '043': 'DuPage County', '107': 'Logan County', '041': 'Douglas County', '105': 'Livingston County', '059': 'Gallatin County', '179': 'Tazewell County', '177': 'Stephenson County', '055': 'Franklin County', '175': 'Stark County', '057': 'Fulton County', '173': 'Shelby County', '051': 'Fayette County', '171': 'Scott County', '053': 'Ford County', '183': 'Vermilion County', '181': 'Union County', '187': 'Warren County', '185': 'Wabash County', '189': 'Washington County', '061': 'Greene County', '063': 'Grundy County', '065': 'Hamilton County', '067': 'Hancock County', '069': 'Hardin County', '169': 'Schuyler County', '165': 'Saline County', '167': 'Sangamon County', '161': 'Rock Island County', '163': 'St. Clair County', '151': 'Pope County', '077': 'Jackson County', '153': 'Pulaski County', '075': 'Iroquois County', '155': 'Putnam County', '073': 'Henry County', '157': 'Randolph County', '071': 'Henderson County', '159': 'Richland County', '079': 'Jasper County', '201': 'Winnebago County', '147': 'Piatt County', '089': 'Kane County', '145': 'Perry County', '143': 'Peoria County', '141': 'Ogle County', '083': 'Jersey County', '081': 'Jefferson County', '087': 'Johnson County', '085': 'Jo Daviess County', '149': 'Pike County', '003': 'Alexander County', '001': 'Adams County', '007': 'Boone County', '005': 'Bond County', '009': 'Brown County'},
  '16': {'077': 'Power County', '075': 'Payette County', '005': 'Bannock County', '071': 'Oneida County', '045': 'Gem County', '079': 'Shoshone County', '049': 'Idaho County', '011': 'Bingham County', '039': 'Elmore County', '015': 'Boise County', '017': 'Bonner County', '033': 'Clark County', '031': 'Cassia County', '037': 'Custer County', '035': 'Clearwater County', '057': 'Latah County', '029': 'Caribou County', '073': 'Owyhee County', '051': 'Jefferson County', '083': 'Twin Falls County', '019': 'Bonneville County', '053': 'Jerome County', '061': 'Lewis County', '063': 'Lincoln County', '065': 'Madison County', '067': 'Minidoka County', '069': 'Nez Perce County', '081': 'Teton County', '087': 'Washington County', '085': 'Valley County', '025': 'Camas County', '027': 'Canyon County', '007': 'Bear Lake County', '023': 'Butte County', '047': 'Gooding County', '009': 'Benewah County', '043': 'Fremont County', '041': 'Franklin County', '003': 'Adams County', '001': 'Ada County', '013': 'Blaine County', '021': 'Boundary County', '055': 'Kootenai County', '059': 'Lemhi County'},
  '19': {'099': 'Jasper County', '091': 'Humboldt County', '093': 'Ida County', '095': 'Iowa County', '097': 'Jackson County', '133': 'Monona County', '011': 'Benton County', '131': 'Mitchell County', '013': 'Black Hawk County', '137': 'Montgomery County', '015': 'Boone County', '135': 'Monroe County', '017': 'Bremer County', '019': 'Buchanan County', '139': 'Muscatine County', '025': 'Calhoun County', '121': 'Madison County', '027': 'Carroll County', '123': 'Mahaska County', '021': 'Buena Vista County', '125': 'Marion County', '023': 'Butler County', '127': 'Marshall County', '129': 'Mills County', '029': 'Cass County', '195': 'Worth County', '197': 'Wright County', '191': 'Winneshiek County', '193': 'Woodbury County', '115': 'Louisa County', '117': 'Lucas County', '039': 'Clarke County', '111': 'Lee County', '113': 'Linn County', '033': 'Cerro Gordo County', '031': 'Cedar County', '119': 'Lyon County', '037': 'Chickasaw County', '035': 'Cherokee County', '109': 'Kossuth County', '049': 'Dallas County', '047': 'Crawford County', '103': 'Johnson County', '045': 'Clinton County', '101': 'Jefferson County', '043': 'Clayton County', '107': 'Keokuk County', '041': 'Clay County', '105': 'Jones County', '059': 'Dickinson County', '179': 'Wapello County', '177': 'Van Buren County', '055': 'Delaware County', '175': 'Union County', '057': 'Des Moines County', '173': 'Taylor County', '051': 'Davis County', '171': 'Tama County', '053': 'Decatur County', '183': 'Washington County', '181': 'Warren County', '187': 'Webster County', '185': 'Wayne County', '189': 'Winnebago County', '061': 'Dubuque County', '063': 'Emmet County', '065': 'Fayette County', '067': 'Floyd County', '069': 'Franklin County', '169': 'Story County', '165': 'Shelby County', '167': 'Sioux County', '161': 'Sac County', '163': 'Scott County', '151': 'Pocahontas County', '077': 'Guthrie County', '153': 'Polk County', '075': 'Grundy County', '155': 'Pottawattamie County', '073': 'Greene County', '157': 'Poweshiek County', '071': 'Fremont County', '159': 'Ringgold County', '079': 'Hamilton County', '147': 'Palo Alto County', '089': 'Howard County', '145': 'Page County', '143': 'Osceola County', '141': "O'Brien County", '083': 'Hardin County', '081': 'Hancock County', '087': 'Henry County', '085': 'Harrison County', '149': 'Plymouth County', '003': 'Adams County', '001': 'Adair County', '007': 'Appanoose County', '005': 'Allamakee County', '009': 'Audubon County'},
  '54': {'077': 'Preston County', '075': 'Pocahontas County', '005': 'Boone County', '071': 'Pendleton County', '045': 'Logan County', '091': 'Taylor County', '093': 'Tucker County', '089': 'Summers County', '079': 'Putnam County', '049': 'Marion County', '011': 'Cabell County', '039': 'Kanawha County', '015': 'Clay County', '017': 'Doddridge County', '033': 'Harrison County', '031': 'Hardy County', '037': 'Jefferson County', '035': 'Jackson County', '057': 'Mineral County', '029': 'Hancock County', '073': 'Pleasants County', '051': 'Marshall County', '083': 'Randolph County', '019': 'Fayette County', '101': 'Webster County', '053': 'Mason County', '061': 'Monongalia County', '063': 'Monroe County', '065': 'Morgan County', '067': 'Nicholas County', '069': 'Ohio County', '081': 'Raleigh County', '087': 'Roane County', '085': 'Ritchie County', '095': 'Tyler County', '025': 'Greenbrier County', '027': 'Hampshire County', '109': 'Wyoming County', '007': 'Braxton County', '023': 'Grant County', '047': 'McDowell County', '103': 'Wetzel County', '009': 'Brooke County', '097': 'Upshur County', '043': 'Lincoln County', '107': 'Wood County', '041': 'Lewis County', '105': 'Wirt County', '003': 'Berkeley County', '001': 'Barbour County', '013': 'Calhoun County', '099': 'Wayne County', '021': 'Gilmer County', '055': 'Mercer County', '059': 'Mingo County'},
  '31': {'099': 'Kearney County', '091': 'Hooker County', '093': 'Howard County', '095': 'Jefferson County', '097': 'Johnson County', '133': 'Pawnee County', '011': 'Boone County', '131': 'Otoe County', '013': 'Box Butte County', '137': 'Phelps County', '015': 'Boyd County', '135': 'Perkins County', '017': 'Brown County', '019': 'Buffalo County', '139': 'Pierce County', '025': 'Cass County', '121': 'Merrick County', '027': 'Cedar County', '123': 'Morrill County', '021': 'Burt County', '125': 'Nance County', '023': 'Butler County', '127': 'Nemaha County', '129': 'Nuckolls County', '029': 'Chase County', '115': 'Loup County', '117': 'McPherson County', '039': 'Cuming County', '111': 'Lincoln County', '113': 'Logan County', '033': 'Cheyenne County', '031': 'Cherry County', '119': 'Madison County', '037': 'Colfax County', '035': 'Clay County', '109': 'Lancaster County', '049': 'Deuel County', '047': 'Dawson County', '103': 'Keya Paha County', '045': 'Dawes County', '101': 'Keith County', '043': 'Dakota County', '107': 'Knox County', '041': 'Custer County', '105': 'Kimball County', '059': 'Fillmore County', '179': 'Wayne County', '177': 'Washington County', '055': 'Douglas County', '175': 'Valley County', '057': 'Dundy County', '173': 'Thurston County', '051': 'Dixon County', '171': 'Thomas County', '053': 'Dodge County', '183': 'Wheeler County', '181': 'Webster County', '185': 'York County', '061': 'Franklin County', '063': 'Frontier County', '065': 'Furnas County', '067': 'Gage County', '069': 'Garden County', '169': 'Thayer County', '165': 'Sioux County', '167': 'Stanton County', '161': 'Sheridan County', '163': 'Sherman County', '151': 'Saline County', '077': 'Greeley County', '153': 'Sarpy County', '075': 'Grant County', '155': 'Saunders County', '073': 'Gosper County', '157': 'Scotts Bluff County', '071': 'Garfield County', '159': 'Seward County', '079': 'Hall County', '147': 'Richardson County', '089': 'Holt County', '145': 'Red Willow County', '143': 'Polk County', '141': 'Platte County', '083': 'Harlan County', '081': 'Hamilton County', '087': 'Hitchcock County', '085': 'Hayes County', '149': 'Rock County', '003': 'Antelope County', '001': 'Adams County', '007': 'Banner County', '005': 'Arthur County', '009': 'Blaine County'},
  '56': {'077': 'Mesa County', '075': 'Logan County', '005': 'Arapahoe County', '071': 'Las Animas County', '045': 'Garfield County', '091': 'Ouray County', '093': 'Park County', '089': 'Otero County', '079': 'Mineral County', '049': 'Grand County', '011': 'Bent County', '117': 'Summit County', '039': 'Elbert County', '014': 'City and County of Broomfield', '015': 'Chaffee County', '113': 'San Miguel County', '017': 'Cheyenne County', '019': 'Clear Creek County', '111': 'San Juan County', '031': 'City and County of Denver', '119': 'Teller County', '037': 'Eagle County', '035': 'Douglas County', '123': 'Weld County', '057': 'Jackson County', '043': 'Fremont County', '073': 'Lincoln County', '051': 'Gunnison County', '083': 'Montezuma County', '101': 'Pueblo County', '053': 'Hinsdale County', '061': 'Kiowa County', '063': 'Kit Carson County', '065': 'Lake County', '067': 'La Plata County', '069': 'Larimer County', '087': 'Morgan County', '081': 'Moffat County', '047': 'Gilpin County', '085': 'Montrose County', '095': 'Phillips County', '025': 'Crowley County', '121': 'Washington County', '027': 'Custer County', '109': 'Saguache County', '007': 'Archuleta County', '125': 'Yuma County', '023': 'Costilla County', '033': 'Dolores County', '103': 'Rio Blanco County', '009': 'Baca County', '097': 'Pitkin County', '029': 'Delta County', '107': 'Routt County', '041': 'El Paso County', '105': 'Rio Grande County', '003': 'Alamosa County', '001': 'Adams County', '013': 'Boulder County', '099': 'Prowers County', '021': 'Conejos County', '055': 'Huerfano County', '115': 'Sedgwick County', '059': 'Jefferson County'},
  '51': {'099': 'King George County', '091': 'Highland County', '093': 'Isle of Wight County', '095': 'James City County', '097': 'King and Queen County', '133': 'Northumberland County', '011': 'Appomattox County', '131': 'Northampton County', '013': 'Arlington County', '137': 'Orange County', '015': 'Augusta County', '135': 'Nottoway County', '017': 'Bath County', '019': 'Bedford County', '139': 'Page County', '025': 'Brunswick County', '121': 'Montgomery County', '027': 'Buchanan County', '021': 'Bland County', '125': 'Nelson County', '023': 'Botetourt County', '127': 'New Kent County', '029': 'Buckingham County', '199': 'York County', '195': 'Wise County', '197': 'Wythe County', '191': 'Washington County', '193': 'Westmoreland County', '115': 'Mathews County', '117': 'Mecklenburg County', '111': 'Lunenburg County', '113': 'Madison County', '033': 'Caroline County', '031': 'Campbell County', '036': 'Charles City County', '037': 'Charlotte County', '035': 'Carroll County', '109': 'Louisa County', '049': 'Cumberland County', '047': 'Culpeper County', '103': 'Lancaster County', '045': 'Craig County', '101': 'King William County', '043': 'Clarke County', '107': 'Loudoun County', '041': 'Chesterfield County', '105': 'Lee County', '059': 'Fairfax County', '179': 'Stafford County', '177': 'Spotsylvania County', '175': 'Southampton County', '057': 'Essex County', '173': 'Smyth County', '051': 'Dickenson County', '171': 'Shenandoah County', '053': 'Dinwiddie County', '183': 'Sussex County', '181': 'Surry County', '187': 'Warren County', '185': 'Tazewell County', '061': 'Fauquier County', '063': 'Floyd County', '065': 'Fluvanna County', '067': 'Franklin County', '069': 'Frederick County', '169': 'Scott County', '165': 'Rockingham County', '167': 'Russell County', '161': 'Roanoke County', '163': 'Rockbridge County', '077': 'Grayson County', '153': 'Prince William County', '075': 'Goochland County', '155': 'Pulaski County', '073': 'Gloucester County', '157': 'Rappahannock County', '071': 'Giles County', '159': 'Richmond County', '079': 'Greene County', '119': 'Middlesex County', '147': 'Prince Edward County', '089': 'Henry County', '145': 'Powhatan County', '143': 'Pittsylvania County', '141': 'Patrick County', '083': 'Halifax County', '081': 'Greensville County', '087': 'Henrico County', '085': 'Hanover County', '149': 'Prince George County', '003': 'Albemarle County', '001': 'Accomack County', '007': 'Amelia County', '005': 'Alleghany County', '009': 'Amherst County'},
  '50': {'025': 'Windham County', '023': 'Washington County', '027': 'Windsor County', '003': 'Bennington County', '011': 'Franklin County', '001': 'Addison County', '013': 'Grand Isle County', '007': 'Chittenden County', '015': 'Lamoille County', '005': 'Caledonia County', '017': 'Orange County', '019': 'Orleans County', '009': 'Essex County', '021': 'Rutland County'},
  '53': {'077': 'Yakima County', '075': 'Whitman County', '005': 'Benton County', '071': 'Walla Walla County', '045': 'Mason County', '049': 'Pacific County', '011': 'Clark County', '039': 'Klickitat County', '015': 'Cowlitz County', '017': 'Douglas County', '033': 'King County', '031': 'Jefferson County', '037': 'Kittitas County', '035': 'Kitsap County', '057': 'Skagit County', '029': 'Island County', '073': 'Whatcom County', '051': 'Pend Oreille County', '019': 'Ferry County', '053': 'Pierce County', '061': 'Snohomish County', '063': 'Spokane County', '065': 'Stevens County', '067': 'Thurston County', '069': 'Wahkiakum County', '025': 'Grant County', '027': 'Grays Harbor County', '007': 'Chelan County', '023': 'Garfield County', '047': 'Okanogan County', '009': 'Clallam County', '043': 'Lincoln County', '041': 'Lewis County', '003': 'Asotin County', '001': 'Adams County', '013': 'Columbia County', '021': 'Franklin County', '055': 'San Juan County', '059': 'Skamania County'},
  '34': {'025': 'Monmouth County', '039': 'Union County', '023': 'Middlesex County', '035': 'Somerset County', '027': 'Morris County', '003': 'Bergen County', '011': 'Cumberland County', '001': 'Atlantic County', '013': 'Essex County', '007': 'Camden County', '015': 'Gloucester County', '005': 'Burlington County', '017': 'Hudson County', '033': 'Salem County', '019': 'Hunterdon County', '009': 'Cape May County', '031': 'Passaic County', '029': 'Ocean County', '037': 'Sussex County', '041': 'Warren County', '021': 'Mercer County'},
  '55': {'077': 'Marquette County', '075': 'Marinette County', '005': 'Barron County', '071': 'Manitowoc County', '045': 'Green County', '091': 'Pepin County', '093': 'Pierce County', '089': 'Ozaukee County', '078': 'Menominee County', '079': 'Milwaukee County', '049': 'Iowa County', '011': 'Buffalo County', '117': 'Sheboygan County', '039': 'Fond du Lac County', '111': 'Sauk County', '015': 'Calumet County', '113': 'Sawyer County', '017': 'Chippewa County', '033': 'Dunn County', '139': 'Winnebago County', '031': 'Douglas County', '119': 'Taylor County', '037': 'Florence County', '035': 'Eau Claire County', '123': 'Vernon County', '057': 'Juneau County', '029': 'Door County', '073': 'Marathon County', '137': 'Waushara County', '051': 'Iron County', '083': 'Oconto County', '019': 'Clark County', '101': 'Racine County', '053': 'Jackson County', '061': 'Kewaunee County', '063': 'La Crosse County', '065': 'Lafayette County', '067': 'Langlade County', '141': 'Wood County', '069': 'Lincoln County', '081': 'Monroe County', '087': 'Outagamie County', '085': 'Oneida County', '095': 'Polk County', '025': 'Dane County', '121': 'Trempealeau County', '027': 'Dodge County', '109': 'St. Croix County', '007': 'Bayfield County', '125': 'Vilas County', '023': 'Crawford County', '127': 'Walworth County', '047': 'Green Lake County', '103': 'Richland County', '009': 'Brown County', '097': 'Portage County', '043': 'Grant County', '107': 'Rusk County', '041': 'Forest County', '105': 'Rock County', '133': 'Waukesha County', '003': 'Ashland County', '129': 'Washburn County', '135': 'Waupaca County', '001': 'Adams County', '131': 'Washington County', '013': 'Burnett County', '099': 'Price County', '021': 'Columbia County', '055': 'Jefferson County', '115': 'Shawano County', '059': 'Kenosha County'},
  '37': {'099': 'Jackson County', '091': 'Hertford County', '093': 'Hoke County', '095': 'Hyde County', '097': 'Iredell County', '133': 'Onslow County', '011': 'Avery County', '131': 'Northampton County', '013': 'Beaufort County', '137': 'Pamlico County', '015': 'Bertie County', '135': 'Orange County', '017': 'Bladen County', '019': 'Brunswick County', '139': 'Pasquotank County', '025': 'Cabarrus County', '121': 'Mitchell County', '027': 'Caldwell County', '123': 'Montgomery County', '021': 'Buncombe County', '125': 'Moore County', '023': 'Burke County', '127': 'Nash County', '129': 'New Hanover County', '029': 'Camden County', '199': 'Yancey County', '195': 'Wilson County', '197': 'Yadkin County', '191': 'Wayne County', '193': 'Wilkes County', '115': 'Madison County', '117': 'Martin County', '039': 'Cherokee County', '111': 'McDowell County', '113': 'Macon County', '033': 'Caswell County', '031': 'Carteret County', '119': 'Mecklenburg County', '037': 'Chatham County', '035': 'Catawba County', '109': 'Lincoln County', '049': 'Craven County', '047': 'Columbus County', '103': 'Jones County', '045': 'Cleveland County', '101': 'Johnston County', '043': 'Clay County', '107': 'Lenoir County', '041': 'Chowan County', '105': 'Lee County', '059': 'Davie County', '179': 'Union County', '177': 'Tyrrell County', '055': 'Dare County', '175': 'Transylvania County', '057': 'Davidson County', '173': 'Swain County', '051': 'Cumberland County', '171': 'Surry County', '053': 'Currituck County', '183': 'Wake County', '181': 'Vance County', '187': 'Washington County', '185': 'Warren County', '189': 'Watauga County', '061': 'Duplin County', '063': 'Durham County', '065': 'Edgecombe County', '067': 'Forsyth County', '069': 'Franklin County', '169': 'Stokes County', '165': 'Scotland County', '167': 'Stanly County', '161': 'Rutherford County', '163': 'Sampson County', '151': 'Randolph County', '077': 'Granville County', '153': 'Richmond County', '075': 'Graham County', '155': 'Robeson County', '073': 'Gates County', '157': 'Rockingham County', '071': 'Gaston County', '159': 'Rowan County', '079': 'Greene County', '147': 'Pitt County', '089': 'Henderson County', '145': 'Person County', '143': 'Perquimans County', '141': 'Pender County', '083': 'Halifax County', '081': 'Guilford County', '087': 'Haywood County', '085': 'Harnett County', '149': 'Polk County', '003': 'Alexander County', '001': 'Alamance County', '007': 'Anson County', '005': 'Alleghany County', '009': 'Ashe County'},
  '18': {'099': 'Marshall County', '091': 'LaPorte County', '093': 'Lawrence County', '095': 'Madison County', '097': 'Marion County', '133': 'Putnam County', '011': 'Boone County', '131': 'Pulaski County', '013': 'Brown County', '137': 'Ripley County', '015': 'Carroll County', '135': 'Randolph County', '017': 'Cass County', '019': 'Clark County', '139': 'Rush County', '025': 'Crawford County', '121': 'Parke County', '027': 'Daviess County', '123': 'Perry County', '021': 'Clay County', '125': 'Pike County', '023': 'Clinton County', '127': 'Porter County', '129': 'Posey County', '029': 'Dearborn County', '115': 'Ohio County', '117': 'Orange County', '039': 'Elkhart County', '111': 'Newton County', '113': 'Noble County', '033': 'DeKalb County', '031': 'Decatur County', '119': 'Owen County', '037': 'Dubois County', '035': 'Delaware County', '109': 'Morgan County', '049': 'Fulton County', '047': 'Franklin County', '103': 'Miami County', '045': 'Fountain County', '101': 'Martin County', '043': 'Floyd County', '107': 'Montgomery County', '041': 'Fayette County', '105': 'Monroe County', '059': 'Hancock County', '179': 'Wells County', '177': 'Wayne County', '055': 'Greene County', '175': 'Washington County', '057': 'Hamilton County', '173': 'Warrick County', '051': 'Gibson County', '171': 'Warren County', '053': 'Grant County', '183': 'Whitley County', '181': 'White County', '061': 'Harrison County', '063': 'Hendricks County', '065': 'Henry County', '067': 'Howard County', '069': 'Huntington County', '169': 'Wabash County', '165': 'Vermillion County', '167': 'Vigo County', '161': 'Union County', '163': 'Vanderburgh County', '151': 'Steuben County', '077': 'Jefferson County', '153': 'Sullivan County', '075': 'Jay County', '155': 'Switzerland County', '073': 'Jasper County', '157': 'Tippecanoe County', '071': 'Jackson County', '159': 'Tipton County', '079': 'Jennings County', '147': 'Spencer County', '089': 'Lake County', '145': 'Shelby County', '143': 'Scott County', '141': 'St. Joseph County', '083': 'Knox County', '081': 'Johnson County', '087': 'LaGrange County', '085': 'Kosciusko County', '149': 'Starke County', '003': 'Allen County', '001': 'Adams County', '007': 'Benton County', '005': 'Bartholomew County', '009': 'Blackford County'},
  '33': {'003': 'Carroll County', '011': 'Hillsborough County', '001': 'Belknap County', '013': 'Merrimack County', '007': 'Coos County', '015': 'Rockingham County', '005': 'Cheshire County', '017': 'Strafford County', '019': 'Sullivan County', '009': 'Grafton County'},
  '11': {'001': 'Washington DC'}
}

$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
});


var window_width = document.getElementById('united-states').offsetWidth,
  window_height = document.getElementById('united-states').offsetHeight;

var projection = d3.geo.mercator();

var path = d3.geo.path()
  .projection(projection);



var svg = d3.select(document.getElementById('united-states')).append("svg")
    .attr("width", window_width)
    .attr("height", (window_height))
  .append("g");

var g = svg.append("g")


queue()
    .defer(d3.json, "/static/js/us.json")
    .defer(d3.json, "/static/js/us-congress-113.json")
    .await(ready);

function ready(error, us, congress) {
  if (error) throw error;

  var states = topojson.feature(us, us.objects.states),
      state = states.features.filter(function(d) { return d.id === Number(page_state_number) }),
      state_thing = state[0];

  projection
      .scale(1)
      .translate([0, 0]);

  var b = path.bounds(state_thing),
      s = .95 / Math.max((b[1][0] - b[0][0]) / window_width, (b[1][1] - b[0][1]) / window_height),
      t = [(window_width - s * (b[1][0] + b[0][0])) / 2, (window_height - s * (b[1][1] + b[0][1])) / 2];

  projection
      .scale(s)
      .translate(t);


  var us_counties = topojson.feature(us, us.objects.counties),
      state_counties = us_counties.features.filter(function(d) {
        if (d.id.toString().substr(0,page_state_number_length) === page_state_number){
          return d.id
        }
      });

  var us_congression_districts = topojson.feature(congress, congress.objects.districts),
      state_congressional_districts = us_congression_districts.features.filter(function(d) {
        if (d.id.toString().substr(0,page_state_number_length) === page_state_number){
          return d.id
        }
      });

  svg.append("defs").append("path")
      .attr("id", "land")
      .datum(topojson.feature(us, us.objects.land))
      .attr("d", path);


  svg.append("clipPath")
      .attr("id", "clip-land")
    .append("use")
      .attr("xlink:href", "#land");

  g.append("g")
    .attr("id", "states")
    .selectAll("path")
      .data(state)
    .enter().append("path")
      .attr("d", path)
      .attr("class", "state");

  g.append("g")
      .attr("id", "districts")
      .attr("clip-path", "url(#clip-land)")
    .selectAll("path")
      .data(state_congressional_districts)
    .enter().append("path")
      .attr("d", path)
      .attr("id", (function(d) { return d.id; }))
      .on("mouseenter", state_enter)
      .on("mouseleave", state_leave)
    .append("title")
      .text(function(d) {
        var congressional_district_id = d.id.toString();
        if (congressional_district_id.length === 4) {
          if (d.id.toString().substr(2,1) === "0"){
            var congressional_district_number = (state_name_page_path + " Congressional District #" + d.id.toString().substr(3,4));
          } else {
            var congressional_district_number = (state_name_page_path + " Congressional District #" + d.id.toString().substr(2,4));
          }
        }
        if (congressional_district_id.length === 3) {
          if (d.id.toString().substr(1,1) === "0"){
            var congressional_district_number = (state_name_page_path + " Congressional District #" + d.id.toString().substr(2, 3));
          } else {
            var congressional_district_number = (state_name_page_path + " Congressional District #" + d.id.toString().substr(1, 3));
          }
        }
        return congressional_district_number;
      });


  g.append("g")
      .attr("id", "counties")
    .selectAll("path")
      .data(state_counties)
    .enter().append("path")
      .attr("d", path)
      .attr("id", (function(d) { return d.id; }))
      .on("mouseenter", state_enter)
      .on("mouseleave", state_leave)
    .append("title")
      .text(function(d) {
        var county_id = d.id.toString();
        if (county_id.length === 5) {
          var county_number = (counties_dict[county_id.substr(0, 2)][county_id.substr(2, 3)] );
        }
        if (county_id.length === 4) {
          var county_number = (counties_dict[county_id.substr(0, 1)][county_id.substr(1, 3)] );
        }
        return county_number;
      });


  // g.append("path")
  //   .datum(topojson.mesh(us, us.objects.states, function(a, b) {
  //     return a !== b;
  //   }))
  //   .attr("id", "state-borders")
  //   .attr("d", path);


  g.append("g")
    .attr("id", "district_boundries")
  .append("path")
      // .datum(topojson.mesh(congress, congress.objects.districts, function(a, b) { return a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0); }))
      .attr("d", path(topojson.mesh(congress, congress.objects.districts, function(a, b) {
        if (a !== b){
          // if ((a.id / 1000 | 0) === (b.id / 1000 | 0)){
            if (a.id.toString().substr(0,page_state_number_length) == page_state_number) {
              // console.log('district a is washington');
              return (a.id / 1000 | 0) === (b.id / 1000 | 0);
            };
            if (b.id.toString().substr(0,page_state_number_length) == page_state_number){
              // console.log('district b is washington');
              return (a.id / 1000 | 0) === (b.id / 1000 | 0);
            };
          // };
        };

      })));

  // g.append("path")
  //     .attr("id", "county-borders")
  //     .attr("d", path(state_counties));

  g.append("g")
      .attr("id", "county-borders")
    .append("path")
      .attr("d", path(topojson.mesh(us, us.objects.counties, function(a, b) {
        if (a !== b) {
          // console.log('a is not equal to b', a, b);
          if (a.id.toString().substr(0,page_state_number_length) === page_state_number){
            // console.log('a is washington');
            return a;
          };
          if (b.id.toString().substr(0,page_state_number_length) === page_state_number){
            // console.log('b is washington');
            return b;
          };
          // console.log(a, b);
          // return a !== b;
        };

      })));




  // document.getElementById('districts').classList.toggle("map_mode_not_active");
  // document.getElementById('district_boundries').classList.toggle("map_mode_not_active");

  document.getElementById('states').classList.toggle("map_mode_not_active");
  document.getElementById('counties').classList.toggle("map_mode_not_active");
  document.getElementById('county-borders').classList.toggle("map_mode_not_active");
}



function state_county_id_to_name(d) {
  var congressional_district_id = d.id.toString();
  if (congressional_district_id.length === 4) {
    if (d.id.toString().substr(2,1) === "0"){
      console.log(d.id.toString(), d.id.toString().substr(3,4));
      var congressional_district_number = (state_dict[congressional_district_id.substr(0, 2)] + " Congressional District #" + d.id.toString().substr(3,4));
    } else {
      console.log(d.id.toString(), d.id.toString().substr(2,4));
      var congressional_district_number = (state_dict[congressional_district_id.substr(0, 2)] + " Congressional District #" + d.id.toString().substr(2,4));
    }
  }
  if (congressional_district_id.length === 3) {
    if (d.id.toString().substr(1,1) === "0"){
      console.log(d.id.toString(), d.id.toString().substr(2, 3));
      var congressional_district_number = (state_dict[congressional_district_id.substr(0, 1)] + " Congressional District #" + d.id.toString().substr(2, 3));
    } else {
      console.log(d.id.toString(), d.id.toString().substr(1, 3));
      var congressional_district_number = (state_dict[congressional_district_id.substr(0, 1)] + " Congressional District #" + d.id.toString().substr(1, 3));
    }
  }
  return congressional_district_number;
}

function state_enter(d) {
  $(this).css("fill", "#49c5b6")
};

function state_leave(d) {
  $(this).css("fill", "#aaa")
};

// State page Top Navigation 

document.getElementById('l_d').onclick = function(e) {
  s = document.querySelectorAll("#state_page_nav .slide-nav__link");
  [].forEach.call(s, function(d) {
    if (d.classList.contains("active")){
      if (d.dataset.border !== "none") {
        document.getElementById(d.dataset.border).classList.toggle("map_mode_not_active")
      }
      if (d.dataset.nav !== "legislative_districts" && d.dataset.nav !== "senate" && d.dataset.nav !== "house"){

        document.getElementById(d.dataset.nav).classList.toggle("map_mode_not_active")

      } else {
        document.getElementById('states').classList.toggle("map_mode_not_active")
      }

    }
    d.classList.remove("active")
  });
  e.currentTarget.firstElementChild.classList.add("active");
  document.getElementById('states').classList.toggle("map_mode_not_active");
};

document.getElementById('counties_state').onclick = function(e) {
  var previous = 0;
  var new_click = document.getElementById(e.currentTarget.firstElementChild.dataset.nav);
  var is_border = document.getElementById(e.currentTarget.firstElementChild.dataset.border);
  s = document.querySelectorAll("#state_page_nav .slide-nav__link");
  [].forEach.call(s, function(d) {
    if (d.classList.contains("active")){
      if (d.dataset.border !== "none") {
        document.getElementById(d.dataset.border).classList.toggle("map_mode_not_active")
      }
      if (d.dataset.nav !== "legislative_districts" && d.dataset.nav !== "senate" && d.dataset.nav !== "house"){

        document.getElementById(d.dataset.nav).classList.toggle("map_mode_not_active")

      } else {
        document.getElementById('states').classList.toggle("map_mode_not_active")
      };

    }
    d.classList.remove("active")
  });
  e.currentTarget.firstElementChild.classList.add("active");
  if (is_border != ""){
    is_border.classList.toggle("map_mode_not_active")
  };

  new_click.classList.toggle("map_mode_not_active");

};


document.getElementById('c_d').onclick = function(e) {
  var previous = 0;
  var new_click = document.getElementById(e.currentTarget.firstElementChild.dataset.nav);
  var is_border = document.getElementById(e.currentTarget.firstElementChild.dataset.border);
  s = document.querySelectorAll("#state_page_nav .slide-nav__link");
  [].forEach.call(s, function(d) {
    if (d.classList.contains("active")){
      if (d.dataset.border !== "none") {
        document.getElementById(d.dataset.border).classList.toggle("map_mode_not_active")
      }
      if (d.dataset.nav !== "legislative_districts" && d.dataset.nav !== "senate" && d.dataset.nav !== "house"){

        document.getElementById(d.dataset.nav).classList.toggle("map_mode_not_active")

      } else {
        document.getElementById('states').classList.toggle("map_mode_not_active")
      }
    }
    d.classList.remove("active")
  });
  e.currentTarget.firstElementChild.classList.add("active");
  if (is_border != ""){
    is_border.classList.toggle("map_mode_not_active")
  };
  new_click.classList.toggle("map_mode_not_active");
};

document.getElementById('senate_state').onclick = function(e) {
  s = document.querySelectorAll("#state_page_nav .slide-nav__link");
  [].forEach.call(s, function(d) {
    if (d.classList.contains("active")){
      if (d.dataset.border !== "none") {
        document.getElementById(d.dataset.border).classList.toggle("map_mode_not_active")
      }
      if (d.dataset.nav !== "legislative_districts" && d.dataset.nav !== "senate" && d.dataset.nav !== "house"){

        document.getElementById(d.dataset.nav).classList.toggle("map_mode_not_active")

      } else {
        document.getElementById('states').classList.toggle("map_mode_not_active")
      }

    }
    d.classList.remove("active")
  });
  e.currentTarget.firstElementChild.classList.add("active");
  document.getElementById('states').classList.toggle("map_mode_not_active");
};

document.getElementById('house_state').onclick = function(e) {
  s = document.querySelectorAll("#state_page_nav .slide-nav__link");
  [].forEach.call(s, function(d) {
    if (d.classList.contains("active")){
      if (d.dataset.border !== "none") {
        document.getElementById(d.dataset.border).classList.toggle("map_mode_not_active")
      }
      if (d.dataset.nav !== "legislative_districts" && d.dataset.nav !== "senate" && d.dataset.nav !== "house"){

        document.getElementById(d.dataset.nav).classList.toggle("map_mode_not_active")

      } else {
        document.getElementById('states').classList.toggle("map_mode_not_active")
      }

    }
    d.classList.remove("active")
  });
  e.currentTarget.firstElementChild.classList.add("active");
  document.getElementById('states').classList.toggle("map_mode_not_active");
};
