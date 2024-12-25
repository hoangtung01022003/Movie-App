import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Movie = () => {
  return (
    <div>
      <img
        src="https://static.phimmoi2z.com/hub/image/images/image-1734720862480299_OhrGD4bRp4_2024122018.webp"
        className="aspect-video brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="font-bold sm:text-[2vw]">Inside Out 2</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">2024-12-21</p>
        </div>
        <div>
          <div className="hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">OverView</p>
            <p>
              Thành Long, ngôi sao Kung Fu huyền thoại, được mời nhận nuôi một
              chú gấu trúc con đáng yêu tên là Huhu. Nổi tiếng với nét quyến rũ
              độc đáo và đôi mắt lệch nhau đặc biệt, Huhu thu hút sự chú ý của
              một tập đoàn tội phạm quốc tế khét tiếng. Quyết tâm bắt được con
              gấu trúc, họ treo một khoản tiền thưởng khổng lồ cho ai lấy được
              đầu Huhu. Đối mặt với cuộc khủng hoảng bất ngờ này, Jackie hợp tác
              với người đại diện hiểu biết của mình, David, và người chăm sóc
              gấu trúc tận tâm, Xiaozhu. Cùng nhau, bộ ba năng động này sử dụng
              các kỹ năng và chiến thuật thông minh của mình để đánh bại những
              kẻ phản diện và giữ cho Huhu được an toàn. Hãy sẵn sàng cho một
              cuộc phiêu lưu khó quên với những khúc mắc bất ngờ, nhiều tiếng
              cười và trận chiến cuối cùng để giành lấy kho báu dễ thương nhất
              trong sở thú!
            </p>
          </div>
          <div className="mt-4">
            <button className="text-10 mr-1 rounded bg-white px-4 py-2 text-black lg:text-lg">
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <button className="text-10 rounded bg-slate-300/35 px-4 py-2 lg:text-lg">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
