const linksSocialMedia = {
    github : "Abaine-desing",
    instagram : "frab_abaine",
    facebook : "Francisco Gomes",
    twitter : "Francisco Gomes"
    }

    function changeSocialMediaLinks(){
      for(let li of socialLinks.childre){
        const social = li.getAttribute('class')
        li.children[0].href  = `https://www.${social}.com/${linksSocialMedia[social]}`

      }
    }
    changeSocialMediaLinks()
    
  