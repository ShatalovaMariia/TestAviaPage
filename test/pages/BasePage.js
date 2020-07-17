export default class BasePage {
  get homePageLink(){return $('.navbar__logo')}

  openUrl(){
    browser.url('https://www.aviasales.com/')
  } 
}