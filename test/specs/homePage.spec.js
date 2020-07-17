import HomePage from '../pages/HomePage';

describe('', function() {
  
  it('should open url', function() {
    HomePage.openUrl()
  });

  it('flight is active ', function() {
    expect(HomePage.fligthTab.getAttribute('class')).contains('is-active')
  });

  it('from input containse From ', function() {
    expect(HomePage.fromInput.getAttribute('placeholder')).eq('From')
  });

  it('input to contense TO ', function() {
    expect(HomePage.toInput.getAttribute('placeholder')).eq('To')
  });

  it('placeholder = Depert', function() {
    expect(HomePage.departDate.getAttribute('placeholder')).eq('Depart')
  });

  it('placeholder = Return', function() {
    expect(HomePage.returnDate.getAttribute('placeholder')).eq('Return')
  });

  it('1 passenger', function() {
    expect(HomePage.passengerField.getText()).eq('1 passenger')
  });

  it('ticket = economy', function() {
    expect(HomePage.ticketClass.getText()).eq('economy')
  });

  let test = it('search btn is clikable', function() {
    expect(HomePage.searchFligtsBtn.isClickable()).true
  })
});

describe('home pages hotel', function() {
  // it('should open url', function() {
  //   HomePage.openUrl()
  // });

  it('should ', function() {
    HomePage.hotelTab.click()
    expect(HomePage.hotelTab.getAttribute('class')).contains('is-active')
  });
});