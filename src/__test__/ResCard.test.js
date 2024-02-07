import RestaurantCard from "../components/RestaurantCard"
import MOCK_DATA from '../mocks/resCardMocks.json'
import {render, screen} from '@testing-library/react'
import {WithPromotedCard} from '../components/RestaurantCard'



const DummyRestaurantCard = () => <div>Restaurant Card</div>;

test("should it rendered with Props Data",()=>{

    render(<RestaurantCard resData={MOCK_DATA}/>)


    const name = screen.getByText('Hotel Inayat Cafe')

    expect(name).toBeInTheDocument()

})


test('renders paragraph with "Veg" label', () => {
    // Render the component wrapped with the HOC
    const PromotedRestaurantCard = WithPromotedCard(DummyRestaurantCard);
    const { getByText } = render(<PromotedRestaurantCard />);
    
    // Check if the paragraph with "Veg" label is rendered
    const vegParagraph = getByText('Veg');
    expect(vegParagraph).toBeInTheDocument();
  });