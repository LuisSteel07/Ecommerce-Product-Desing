import QuantitySelector from "./quantity-selector";
import PositionPage from "./position-page";
import Selectors from "./selectors";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-8 lg:w-full">
      <QuantitySelector />
      <PositionPage />
      <Selectors />
    </div>
  );
}
