import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the entrie App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // Find the 'fetchComemnts' button on click it
  wrapped.find('.fetch-comments').simulate('click');

  // introduce a TINY pause
  moxios.wait(() => {
    wrapped.update();
    // Expect to find a list of comments! 500 LI's
    expect(wrapped.find('li').length).toEqual(2);
    done(); // done tells the testing package to wait till done is called to complete it function
    wrapped.unmount();
  });

});
