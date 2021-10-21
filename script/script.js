const linksSocialMedia = {
    github : "otavioaugusto1",
    instagram : "otavio.gon",
    facebook : "otavio.nogueira.752",
    twitter : "OtvioAugustoGo9"
    }

    function changeSocialMediaLinks(){
      for(let li of socialLinks.childre){
        const social = li.getAttribute('class')
        li.children[0].href  = `https://www.${social}.com/${linksSocialMedia[social]}`

      }
    }
    changeSocialMediaLinks()
    
  