/**
 * @jest-environment jsdom
 */

import commentCounter from './commentCounter';

describe('commentCounter', () => {
  test('Count how many "li" elements have been created in a specific "lu" with the class="ulComments" ', () => {
    document.body.innerHTML = `
    <ul class="ulComments">
      <li>coment n° 1</li>
      <li>coment n° 2</li>
      <li>coment n° 3</li>
      <li>coment n° 4</li>
    </ul>
    `;
    expect(commentCounter()).toBe(4);
  });

  test('Count is not going to count because the "ul" class is diferent ', () => {
    document.body.innerHTML = `
    <ul class="otherClass">
      <li>coment n° 1</li>
      <li>coment n° 2</li>
    </ul>
    `;

    expect(commentCounter()).toBe(0);
  });

  test('Count how many "li" elements have been created in a specific "lu" with the class="ulComments" ', () => {
    document.body.innerHTML = `
    <ul class="ulComments">
    </ul>
    `;

    expect(commentCounter()).toBe(0);
  });
});
