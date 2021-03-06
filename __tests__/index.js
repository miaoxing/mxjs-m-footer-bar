import FooterBar from '..';
import {render} from '@testing-library/react';
import {reset} from 'use-uid';

describe('FooterBar', () => {
  beforeEach(() => {
    reset();
  });

  test('basic', () => {
    const {container} = render(<FooterBar>test</FooterBar>);
    expect(container).toMatchSnapshot();
  });

  test('FooterBar.Icon', () => {
    const {container} = render(<FooterBar>
      <FooterBar.Icon>
        test
      </FooterBar.Icon>
    </FooterBar>);
    expect(container).toMatchSnapshot();
  });

  test('FooterBar.Button', () => {
    const {container} = render(<FooterBar>
      <FooterBar.Button>
        test
      </FooterBar.Button>
    </FooterBar>);
    expect(container).toMatchSnapshot();
  });
});
