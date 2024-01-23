import '@testing-library/jest-dom';
import { render, screen } from '@/test/utils';
import { describe, expect, it } from 'vitest';

import UserItem from './UserItem';

const mockedProps = {
  data: {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
};

describe('<UserItem />', () => {
  it('should render the correct user name', () => {
    render(<UserItem {...mockedProps} />);
    const name = screen.getByText(mockedProps.data.name);

    expect(name).toBeInTheDocument();
  });

  it('should render the correct user details', () => {
    render(<UserItem {...mockedProps} />);

    const address = screen.getByText(/Kulas Light, Apt. 556, Gwenborough, 92998-3874/);
    const phone = screen.getByText(/1-770-736-8031 x56442/);
    const email = screen.getByText(/Sincere@april.biz/);
    const website = screen.getByText(/hildegard.org/);

    expect(address).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(website).toBeInTheDocument();
  });

  it('should render the correct company information', () => {
    render(<UserItem {...mockedProps} />);

    const company = screen.getByText(/Romaguera-Crona/);
    const usernameBadge = screen.getByText(/Bret/);

    expect(company).toBeInTheDocument();
    expect(usernameBadge).toBeInTheDocument();
  });

  it('should render the correct username', () => {
    render(<UserItem {...mockedProps} />);
    const username = screen.getByText(/Bret/);

    expect(username).toBeInTheDocument();
  });

  it('should render the correct website', () => {
    render(<UserItem {...mockedProps} />);
    const website = screen.getByText(/hildegard.org/);

    expect(website).toBeInTheDocument();
  });

  it('should render the correct phone number', () => {
    render(<UserItem {...mockedProps} />);
    const phone = screen.getByText(/1-770-736-8031 x56442/);

    expect(phone).toBeInTheDocument();
  });
});