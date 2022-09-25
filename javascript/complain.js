var State = ['Andaman_Nicobar', 'Andhra_Pradesh', 'Arunachal_Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra_and_Nagar_Haveli_and_Daman_and_Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal_Pradesh', 'Jammu_Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya_Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil_Nadu', 'Telangana', 'Tripura', 'Uttar_Pradesh', 'Uttarakhand', 'West_Bengal'];
var Andaman_Nicobar = ['Nicobar', 'North_Middle_Andaman', 'South_Andaman'];
var Andhra_Pradesh = ['Anantapur', 'Chittoor', 'East_Godavari', 'Alluri_Sitarama_Raju', 'Anakapalli', 'Annamaya', 'Bapatla', 'Eluru', 'Guntur', 'Kadapa', 'Kakinada ', 'Konaseema', 'Krishna', 'Kurnool', 'Manyam', 'N_T_Rama_Rao', 'Nandyal', 'Nellore', 'Palnadu', 'Prakasam', 'Sri_Balaji', 'Sri_Satya_Sai', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari'];
var Arunachal_Pradesh = ['Anjaw', 'Central_Siang', 'Changlang', 'Dibang_Valley', 'East_Kameng', 'East_Siang', 'Kamle', 'Kra_Daadi', 'Kurung_Kumey', 'Lepa_Rada', 'Lohit', 'Longding', 'Lower_Dibang_Valley', 'Lower_Siang', 'Lower_Subansiri', 'Namsai', 'Pakke_Kessang', 'Papum_Pare', 'Shi_Yomi', 'Tawang', 'Tirap', 'Upper_Siang', 'Upper_Subansiri', 'West_Kameng', 'West_Siang'];
var Assam = ['Bajali', 'Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima_Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup_Metropolitan', 'Karbi_Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara_Mankachar', 'Tamulpur', 'Tinsukia', 'Udalguri', 'West_Karbi_Anglong'];
var Bihar = ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East_Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West_Champaran'];
var Chandigarh = ['Chandigarh'];
var Chhattisgarh = ['Balod', 'Baloda_Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela_Pendra_Marwahi', 'Janjgir_Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Khairagarh', 'Kondagaon', 'Korba', 'Koriya', 'Mahasamund', 'Manendragarh', 'Mohla_Manpur', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sakti', 'Sarangarh_Bilaigarh', 'Sukma', 'Surajpur', 'Surguja'];
var Dadra_and_Nagar_Haveli_and_Daman_and_Diu = ['Dadra_and_Nagar Haveli', 'Daman', 'Diu'];
var Delhi = ['Central_Delhi', 'East_Delhi', 'New_Delhi', 'North_Delhi', 'North_East_Delhi', 'North_West_Delhi', 'Shahdara', 'South_Delhi', 'South_East_Delhi', 'South_West_Delhi', 'West_Delhi'];
var Goa = ['North_Goa', 'South_Goa'];
var Gujarat = ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota_Udaipur', 'Dahod', 'Dang', 'Devbhoomi_Dwarka', 'Gandhinagar', 'Gir_Somnath', 'Jamnagar', 'Junagadh', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'];
var Haryana = ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'];
var Himachal_Pradesh = ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'];
var Jammu_Kashmir = ['Anantnag', 'Bandipora', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Poonch', 'Pulwama', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Srinagar', 'Udhampur'];
var Jharkhand = ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahebganj', 'Seraikela_Kharsawan', 'Simdega', 'West_Singhbhum'];
var Karnataka = ['Bagalkot', 'Bangalore_Rural', 'Bangalore_Urban', 'Belgaum', 'Bellary', 'Bidar', 'Chamarajanagar', 'Chikkaballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina_Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Gulbarga', 'Hassan', 'Haveri', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysore', 'Raichur', 'Ramanagara', 'Shimoga', 'Tumkur', 'Udupi', 'Uttara_Kannada', 'Vijayanagara', 'Vijayapura ', 'Yadgir'];
var Kerala = ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'];
var Ladakh = ['Kargil', 'Leh'];
var Lakshadweep = ['Lakshadweep'];
var Madhya_Pradesh = ['Agar_Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chachaura', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Maihar', 'Mandla', 'Mandsaur', 'Morena', 'Nagda', 'Narsinghpur', 'Neemuch', 'Niwari', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'];
var Maharashtra = ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'];
var Manipur = ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal_East', 'Imphal_West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'];
var Meghalaya = ['East_Garo_Hills', 'East_Jaintia_Hills', 'East_Khasi_Hills', 'Mairang', 'North_Garo_Hills', 'Ri_Bhoi', 'South_Garo_Hills', 'South_West_Garo_Hills', 'South_West_Khasi_Hills', 'West_Garo_Hills', 'West_Jaintia_Hills', 'West_Khasi_Hills'];
var Mizoram = ['Aizawl', 'Champhai', 'Hnahthial', 'Kolasib', 'Khawzawl', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip', 'Saitual'];
var Nagaland = ['Chumukedima', 'Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Niuland', 'Noklak', 'Peren', 'Phek', 'Shamator', 'Tseminyu', 'Tuensang', 'Wokha', 'Zunheboto'];
var Odisha = ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Debagarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundergarh'];
var Puducherry = ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'];
var Punjab = ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh_Sahib', 'Fazilka', 'Firozpur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Mohali', 'Muktsar', 'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'Shaheed_Bhagat_Singh_Nagar', 'Tarn_Taran'];
var Rajasthan = ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai_Madhopur', 'Sikar', 'Sirohi', 'Sri_Ganganagar', 'Tonk', 'Udaipur'];
var Sikkim = ['East_Sikkim', 'North_Sikkim', 'Pakyong', 'Soreng', 'South_Sikkim', 'West_Sikkim'];
var Tamil_Nadu = ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai ', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupattur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'];
var Telangana = ['Adilabad', 'Bhadradri_Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar', 'Jogulamba', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram_Bheem', 'Mahabubabad', 'Mahbubnagar', 'Mancherial', 'Medak', 'Medchal', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna_Sircilla', 'Ranga_Reddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal', 'Hanamkonda', 'Yadadri_Bhuvanagiri']
var Tripura = ['Dhalai', 'Gomati', 'Khowai', 'North_Tripura', 'Sepahijala', 'South_Tripura', 'Unakoti', 'West Tripura'];
var Uttar_Pradesh = ['Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam_Buddha_Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kheri', 'Kushinagar', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Prayagraj', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant_Kabir_6Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'];
var Uttarakhand = ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri', 'Pithoragarh', 'Rudraprayag', 'Tehri', 'Udham Singh Nagar', 'Uttarkashi'];
var West_Bengal = ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin_Dinajpur', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North_24_Parganas', 'Paschim_Bardhaman', 'Paschim_Medinipur', 'Purba_Bardhaman', 'Purba_Medinipur', 'Purulia', 'South_24_Parganas', 'Uttar_Dinajpur'];

var dis = document.getElementById("usrdis");

var st = document.getElementById("usrstate");

var ans = document.querySelector(".usrstate1");

var dis2 = document.getElementById("usrdis2");

var st2 = document.getElementById("usrstate2");

var ans2 = document.querySelector(".usrstate2");

var dis3 = document.getElementById("usrdis3");

var st3 = document.getElementById("usrstate3");

var ans3 = document.querySelector(".usrstate3");

ans3.addEventListener("change", function () {
    if (dis3.childElementCount > 1) {
        while (dis3.firstChild) {
            dis3.removeChild(dis3.firstChild);
        }
    }
    set_option2(ans3.value);
});

ans2.addEventListener("change", function () {
    if (dis2.childElementCount > 1) {
        while (dis2.firstChild) {
            dis2.removeChild(dis2.firstChild);
        }
    }
    set_option1(ans2.value);
});

ans.addEventListener("change", function () {
    if (dis.childElementCount > 1) {
        while (dis.firstChild) {
            dis.removeChild(dis.firstChild);
        }
    }
    set_option(ans.value);
});

function set_option(input) {
    switch (input) {
        case "Andaman_Nicobar":
            render(Andaman_Nicobar);
            break;
        case "Andhra_Pradesh":
            render(Andhra_Pradesh);
            break;
        case "Arunachal_Pradesh":
            render(Arunachal_Pradesh);
            break;
        case "Assam":
            render(Assam);
            break;
        case "Bihar":
            render(Bihar);
            break;
        case "Chandigarh":
            render(Chandigarh);
            break;
        case "Chhattisgarh":
            render(Chhattisgarh);
            break;
        case "Dadra_and_Nagar_Haveli_and_Daman_and_Diu":
            render(Dadra_and_Nagar_Haveli_and_Daman_and_Diu);
            break;
        case "Delhi":
            render(Delhi);
            break;
        case "Goa":
            render(Goa);
            break;
        case "Gujarat":
            render(Gujarat);
            break;
        case "Haryana":
            render(Haryana);
            break;
        case "Himachal_Pradesh":
            render(Himachal_Pradesh);
            break;
        case "Jammu_Kashmir":
            render(Jammu_Kashmir);
            break;
        case "Jharkhand":
            render(Jharkhand);
            break;
        case "Karnataka":
            render(Karnataka);
            break;
        case "Kerala":
            render(Kerala);
            break;
        case "Ladakh":
            render(Ladakh);
            break;
        case "Lakshadweep":
            render(Lakshadweep);
            break;
        case "Madhya_Pradesh":
            render(Madhya_Pradesh);
            break;
        case "Maharashtra":
            render(Maharashtra);
            break;
        case "Manipur":
            render(Manipur);
            break;
        case "Meghalaya":
            render(Meghalaya);
            break;
        case "Mizoram":
            render(Mizoram);
            break;
        case "Nagaland":
            render(Nagaland);
            break;
        case "Odisha":
            render(Odisha);
            break;
        case "Puducherry":
            render(Puducherry);
            break;
        case "Punjab":
            render(Punjab);
            break;
        case "Rajasthan":
            render(Rajasthan);
            break;
        case "Sikkim":
            render(Sikkim);
            break;
        case "Tamil_Nadu":
            render(Tamil_Nadu);
            break;
        case "Telangana":
            render(Telangana);
            break;
        case "Tripura":
            render(Tripura);
            break;
        case "Uttar_Pradesh":
            render(Uttar_Pradesh);
            break;
        case "Uttarakhand":
            render(Uttarakhand);
            break;
        case "West_Bengal":
            render(West_Bengal);
            break;
        default:
            break;
    }
};
function render(state_dis) {
    var num = 0;
    var dummy = document.createElement('option');
    dummy.value = "<--------SELECT DISTRICT-------->";
    dummy.innerHTML = "<--------SELECT DISTRICT-------->";
    dis.appendChild(dummy);
    state_dis.forEach(element => {
        var option = document.createElement('option');
        option.value = state_dis[num];
        option.innerHTML = state_dis[num];
        num++;
        dis.appendChild(option)
    });
}

function set_option1(input) {
    switch (input) {
        case "Andaman_Nicobar":
            render1(Andaman_Nicobar);
            break;
        case "Andhra_Pradesh":
            render1(Andhra_Pradesh);
            break;
        case "Arunachal_Pradesh":
            render1(Arunachal_Pradesh);
            break;
        case "Assam":
            render1(Assam);
            break;
        case "Bihar":
            render1(Bihar);
            break;
        case "Chandigarh":
            render1(Chandigarh);
            break;
        case "Chhattisgarh":
            render1(Chhattisgarh);
            break;
        case "Dadra_and_Nagar_Haveli_and_Daman_and_Diu":
            render(Dadra_and_Nagar_Haveli_and_Daman_and_Diu);
            break;
        case "Delhi":
            render1(Delhi);
            break;
        case "Goa":
            render1(Goa);
            break;
        case "Gujarat":
            render1(Gujarat);
            break;
        case "Haryana":
            render1(Haryana);
            break;
        case "Himachal_Pradesh":
            render1(Himachal_Pradesh);
            break;
        case "Jammu_Kashmir":
            render(Jammu_Kashmir);
            break;
        case "Jharkhand":
            render(Jharkhand);
            break;
        case "Karnataka":
            render1(Karnataka);
            break;
        case "Kerala":
            render1(Kerala);
            break;
        case "Ladakh":
            render1(Ladakh);
            break;
        case "Lakshadweep":
            render1(Lakshadweep);
            break;
        case "Madhya_Pradesh":
            render1(Madhya_Pradesh);
            break;
        case "Maharashtra":
            render1(Maharashtra);
            break;
        case "Manipur":
            render1(Manipur);
            break;
        case "Meghalaya":
            render1(Meghalaya);
            break;
        case "Mizoram":
            render1(Mizoram);
            break;
        case "Nagaland":
            render1(Nagaland);
            break;
        case "Odisha":
            render1(Odisha);
            break;
        case "Puducherry":
            render1(Puducherry);
            break;
        case "Punjab":
            render1(Punjab);
            break;
        case "Rajasthan":
            render1(Rajasthan);
            break;
        case "Sikkim":
            render1(Sikkim);
            break;
        case "Tamil_Nadu":
            render1(Tamil_Nadu);
            break;
        case "Telangana":
            render1(Telangana);
            break;
        case "Tripura":
            render1(Tripura);
            break;
        case "Uttar_Pradesh":
            render1(Uttar_Pradesh);
            break;
        case "Uttarakhand":
            render1(Uttarakhand);
            break;
        case "West_Bengal":
            render1(West_Bengal);
            break;
        default:
            break;
    }
};


function render1(state_dis) {
    var num = 0;
    var dummy = document.createElement('option');
    dummy.value = "<--------SELECT DISTRICT-------->";
    dummy.innerHTML = "<--------SELECT DISTRICT-------->";
    dis2.appendChild(dummy);
    state_dis.forEach(element => {
        var option = document.createElement('option');
        option.value = state_dis[num];
        option.innerHTML = state_dis[num];
        num++;
        dis2.appendChild(option)
    });
}

function set_option2(input) {
    switch (input) {
        case "Andaman_Nicobar":
            render2(Andaman_Nicobar);
            break;
        case "Andhra_Pradesh":
            render2(Andhra_Pradesh);
            break;
        case "Arunachal_Pradesh":
            render2(Arunachal_Pradesh);
            break;
        case "Assam":
            render2(Assam);
            break;
        case "Bihar":
            render2(Bihar);
            break;
        case "Chandigarh":
            render2(Chandigarh);
            break;
        case "Chhattisgarh":
            render2(Chhattisgarh);
            break;
        case "Dadra_and_Nagar_Haveli_and_Daman_and_Diu":
            render2(Dadra_and_Nagar_Haveli_and_Daman_and_Diu);
            break;
        case "Delhi":
            render2(Delhi);
            break;
        case "Goa":
            render2(Goa);
            break;
        case "Gujarat":
            render2(Gujarat);
            break;
        case "Haryana":
            render2(Haryana);
            break;
        case "Himachal_Pradesh":
            render2(Himachal_Pradesh);
            break;
        case "Jammu_Kashmir":
            render2(Jammu_Kashmir);
            break;
        case "Jharkhand":
            render2(Jharkhand);
            break;
        case "Karnataka":
            render2(Karnataka);
            break;
        case "Kerala":
            render2(Kerala);
            break;
        case "Ladakh":
            render2(Ladakh);
            break;
        case "Lakshadweep":
            render2(Lakshadweep);
            break;
        case "Madhya_Pradesh":
            render2(Madhya_Pradesh);
            break;
        case "Maharashtra":
            render2(Maharashtra);
            break;
        case "Manipur":
            render2(Manipur);
            break;
        case "Meghalaya":
            render2(Meghalaya);
            break;
        case "Mizoram":
            render2(Mizoram);
            break;
        case "Nagaland":
            render2(Nagaland);
            break;
        case "Odisha":
            render2(Odisha);
            break;
        case "Puducherry":
            render2(Puducherry);
            break;
        case "Punjab":
            render2(Punjab);
            break;
        case "Rajasthan":
            render2(Rajasthan);
            break;
        case "Sikkim":
            render2(Sikkim);
            break;
        case "Tamil_Nadu":
            render2(Tamil_Nadu);
            break;
        case "Telangana":
            render2(Telangana);
            break;
        case "Tripura":
            render2(Tripura);
            break;
        case "Uttar_Pradesh":
            render2(Uttar_Pradesh);
            break;
        case "Uttarakhand":
            render2(Uttarakhand);
            break;
        case "West_Bengal":
            render2(West_Bengal);
            break;
        default:
            break;
    }
};

function render2(state_dis) {
    var num = 0;
    var dummy = document.createElement('option');
    dummy.value = "<--------SELECT DISTRICT-------->";
    dummy.innerHTML = "<--------SELECT DISTRICT-------->";
    dis3.appendChild(dummy);
    state_dis.forEach(element => {
        var option = document.createElement('option');
        option.value = state_dis[num];
        option.innerHTML = state_dis[num];
        num++;
        dis3.appendChild(option)
    });
}