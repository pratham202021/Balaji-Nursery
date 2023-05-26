var productObject = {
    "Tomato": {
      "TO-6242": [],
      "Atharva": [],
      "Aryaman": [],
      "Meghdoot(TO-2048)": [],
      "Virang": [],
      "TO-1057": []    
    },
    "Chilli": {
        "Pride": [],
        "Armour": [],
        "Teja 4": [],
        "Jewelry": [],
        "SVHA 786": [],
        "OMEGA": [],
        "Balaram 5907": [],
        "Super Mahajwala": []    
      },
      "Capsicum": {
        "Paladin": [],
        "Indus 11(POPTI)": [],
        "ASHA F1": [],
        "Intruder": [],
        "Abraham": [],
        "Rehena": []    
      },
      "Cabbage": {
        "Saint": [],
        "VEER-333": [],
        "F1 EURO 2": [],
        "Royal Star(BC-86)": []    
      },
      "Cauliflower": {
        "Lucky": [],
        "F1 WS 764": [],
        "Celeb F1": [],
        "CFL-1522": []    
      },
      "Watermelon": {
        "Sugar Queen": [],
        "MaxX": [],
        "BAHUBALI": [],
        "KSP 1358 Melody": []    
      },
      "Muskmelon": {
        "Kundan": []    
      },
      "Brinjal": {
        "ENZ-Bartok": [],
        "Super Gaurav": [],
        "Galine F1": [],
        "Meghna 264": []    
      },
      "Bottle Guard": {
        "NBBH-48(Vikram)": [],
        "WARAD": [],
        "Samrat (7759)": []    
      },
      "Ridge Guard": {
        "NAGA F1": [],
        "Dhruv Super": [],
        "US 6001": [],
        "NAAVI F1": []    
      },
      "Sponge Guard": {
        "Vanita": [],
        "EZSG-33": []    
      },
      "Bitter Guard": {
        "Rushaan": [],
        "Pragati 065 F1": [],
        "Aryan": [],
        "Little Champ": []    
      },
      "Papaya": {
        "Redlady": []    
      },
      "Pumpkin": {
        "Pumpkin": []    
      },
      "Marigold": {
        "Ashtgandha": [],
        "Pitambari": []    
      },
      "Cucumber": {
        "Shiny": [],
        "Akamsha-F1": [],
        "Fadia F1": []    
      },
  }
  window.onload = function() {
    var productSel = document.getElementById("product");
    var verietySel = document.getElementById("veriety");
    for (var x in productObject) {
        productSel.options[productSel.options.length] = new Option(x, x);
    }
    productSel.onchange = function() {
      //empty Veriety dropdowns
      verietySel.length = 1;
      //display correct values
      for (var y in productObject[this.value]) {
        verietySel.options[verietySel.options.length] = new Option(y, y);
      }
    }
  }