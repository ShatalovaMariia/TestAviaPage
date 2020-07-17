import BasePage from './BasePage';


class HomePage extends BasePage{

  get fromInput(){ return $('#origin')} 
  get toInput(){ return $('#destination')} 
  get departDate(){ return $$('input.trip-duration__date-input')[0]} 
  get returnDate(){ return $$('input.trip-duration__date-input')[1]}
  get fligthTab() { return $('li.--avia')}
  get passengerField() { return $('.additional-fields__label')}
  get ticketClass() { return $('.additional-fields__label.--is-gray')}
  get searchFligtsBtn() { return $('//div[@class="avia-form__submit"]//span[@class="_button_text_3oKFG"]')}
  get hotelTab(){ return $$('[class="form-tabs__link is-active"]')[1] }

  openUrl() {
    super.openUrl('/');
  }
}
export default new HomePage();