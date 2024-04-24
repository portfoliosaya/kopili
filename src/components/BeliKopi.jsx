import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy, decrement, increment, selectMenu } from "../Features/counterSlice";
import Swal from "sweetalert2";

const BeliKopi = ({ menu }) => {
  const dispatch = useDispatch();
  const { value, test, showCounter, selectedMenu } = useSelector((state) => state.counter);

  const handleBuy = () => {
    if (value[menu] === 0) {
      Swal.fire({
        title: "Gagal",
        text: `Anda Belum Membeli Apapun`,
        icon: "warning",
      });
    } else {
      dispatch(buy({ menu }));
      dispatch(selectMenu({ menu, selectedMenu: menu })); // Menetapkan jenis kopi saat tombol "Beli" diklik
      Swal.fire({
        title: "Selamat",
        text: `Anda Berhasil Membeli ${menu} Sebanyak ${value[menu]}`,
        icon: "success",
      });
    }
  };

  return (
    <div>
      {showCounter[menu] && (
        <div className="d-flex flex-column justify-content-center align-items-center border border-3 border-warning col-12 p-2" style={{ width: "250px" }}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>{value[menu]}</h1>
            <div className="d-flex flex-row gap-3">
              <button onClick={() => dispatch(increment({ menu }))} className="btn btn-warning btn-sm">
                +
              </button>
              <button onClick={() => dispatch(decrement({ menu }))} className="btn btn-secondary btn-sm">
                -
              </button>
            </div>
            <div>
              <button onClick={handleBuy} className="btn btn-warning btn-sm mt-2">
                Beli
              </button>
            </div>
          </div>
          {test[menu] && !showCounter[menu] && <div className="mt-2">{`Anda Berhasil Membeli ${selectedMenu[menu]} Sebanyak ${value[menu]}`}</div>}
        </div>
      )}
    </div>
  );
};

export default BeliKopi;
