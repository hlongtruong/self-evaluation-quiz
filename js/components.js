const components = {};
components.welcomeScreen = `
<div class="welcome-container">
        <div class="header-wrapper">
            <a href="" class="name-app">In To Out</a>
            <nav class="middel-section">
                <ul>
                    <li class="cursor-pointer" id="redirect-to-mbti">MBTI
                    </li>
                    <li class="cursor-pointer">Các loại tính cách
                        <nav class="menu-personalities">
                            <ul>
                                <li>Xu hướng tâm lý</li>
                                <li>Nhận thức thế giới</li>
                                <li>Cách thức ra quyết định</li>
                                <li>Nguyên tắc hành động</li>
                            </ul>
                        </nav>
                    </li>
                    <li class="cursor-pointer">Báo và khảo sát</li>

                </ul>
            </nav>
            <div class="right-section">
                <div>LogIn</div>
                <div>SignIn</div>
            </div>
        </div>
        <div class="main-container">
            <div class="main-wrapper">
                <div class="main-text">Bạn đã hiểu rõ tính cách của mình ?</div>
                <button class="explore">Explore</button>
            </div>
        </div>
    </div>
`
components.mbtiScreen = `
<div class="mbti-container">
        <div class="header-wrapper">
            <a href="" class="name-app">In To Out</a>
            <nav class="middel-section">
                <ul>
                    <li class="cursor-pointer" id="redirect-to-mbti">MBTI
                    </li>
                    <li class="cursor-pointer">Các loại tính cách
                        <nav class="menu-personalities">
                            <ul>
                                <li>Xu hướng tâm lý</li>
                                <li>Nhận thức thế giới</li>
                                <li>Cách thức ra quyết định</li>
                                <li>Nguyên tắc hành động</li>
                            </ul>
                        </nav>
                    </li>
                    <li class="cursor-pointer">Báo và khảo sát</li>

                </ul>
            </nav>
            <div class="right-section">
                <div>LogIn</div>
                <div>SignIn</div>
            </div>
        </div>
        <div class="mbti-wrapper">
            <div class="mbti-wrapper-content">
                <h1 class="header"></h1>
                <h1>MBTI</h1>
                <p>Được nghiên cứu từ 1917, MBTI có thể coi là phương pháp phân tích đánh giá tính cách phổ biến nhất hiện nay. MBTI là gì? MBTI sẽ giúp gì cho các nhà quản lý doanh nghiệp? Bài viết dưới đây sẽ giúp độc giả giải đáp 2 câu hỏi lớn đó.</p>
                <p>Base Resources - MBTI chắc hẳn là một từ khóa không hề lạ khi không chỉ những nhà tuyển dụng, nhà quản lý cần nắm rõ về MBTI mà cả những bạn trẻ cũng muốn hiểu rõ bản thân mình hơn thông qua công cụ này. MBTI là gì? Xác định tính cách
                    qua MBTI có khó không? Ứng dụng MBTI trong công việc quản trị nhân sự và đánh giá ứng viên như thế nào? Tất cả sẽ được trả lời trong bài viết dưới đây.</p>
                <h2>MBTI là gì?</h2>
                <p>MBTI là viết tắt của Myers–Briggs Type Indicator - một phương pháp khám phá tính cách qua bộ câu hỏi trắc nghiệm 16 nhóm tính cách của 2 nhà khoa học Isabel Myers và Kathryn Briggs.</p>
                <img src="../images/16types.jpg" alt="16 nhóm tính cách trong phương pháp khám phá tính cách MBTI">
                <p>Trắc nghiệm tính cách MBTI dựa trên câu trả lời của mỗi người cho các câu hỏi để suy ra những cá tính, tính cách riêng biệt của họ. MBTI dựa trên sự phát triển nền tảng của ngành tâm lý học có độ chính xác rất cao. MBTI đang trở nên phổ
                    biến gần đây với nhiều người tham gia bài Test này và xuất hiện những khóa học chuyên sâu về nó.</p>
                <h2>Các tiêu chí đánh giá trong MBTI</h2>
                <p>MBTI dựa trên 4 tiêu chí chính là 4 cặp phạm trù xoay quanh thế giới quan của con người, dùng để đánh giá và phân tích tính cách con người.</p>
                <h3>#Xu hướng tự nhiên:</h3>
                <p>Hướng ngoại (Extraversion) Hướng nội (Introversion) </p>
                <p>Hướng nội là hướng vào nội tâm, bao gồm ý nghĩ, tư tưởng, trí tưởng tượng. Người hướng nội thường tập trung suy nghĩ, không thể hiện ra ngoài nhiều.</p>
                <p>Hướng ngoại là hướng về thế giới bên ngoài gồm những hoạt động, con người, đồ vật. Người hướng ngoại thường cởi mở, hay nói cười nhưng suy nghĩ nhiều khi còn nôn nóng, chưa cặn kẽ.</p>
                <h3>#Nhận thức về thế giới:</h3>
                <p>Giác quan (Sensing) Trực giác (iNtuition)</p>
                <p>Những người thuộc nhóm S nhận thức thế giới qua các giác quan cụ thể như mắt thấy, mũi ngửi, tai nghe những màu sắc, hình ảnh, mùi vị, âm thanh. Họ sắc bén với thực tế, tin vào thế giới dưới cái cách họ đang tiếp nhận qua 5 giác quan.</p>
                <p>Ngược lại, thế giới của những người thiên về trực giác sẽ gồm các mô hình, tưởng tượng mà họ suy luận, sắp xếp từ dữ liệu họ thu thập được.</p>
                <h3>#Quyết định và lựa chọn: </h3>
                <p>Lý trí (Thinking) Cảm xúc (Feeling)</p>
                <p>Người lý trí sẽ ra quyết định dựa trên việc xác định các thông tin liên quan, các tiêu chí đúng sai trái phải. Họ luôn suy luận logic đưa ra đáp án cụ thể nhất, có căn cứ khoa học nhất.</p>
                <p>Thay vào đó, người cảm xúc sẽ lựa chọn dựa vào cảm tính, ví dụ như yêu, ghét, thương, thù,...</p>
                <h3>#Cách thức hành động:</h3>
                <p>Nguyên tắc (Judging) Linh hoạt (Percieving) </p>
                <p>Ngược lại, nhóm người linh hoạt đôi lúc chấp nhận những thay đổi bất chấp kế hoạch ban đầu để điều chỉnh phù hợp với hoàn cảnh nhất, đem lại kết quả tối ưu nhất tại một thời điểm xác định.</p>
                <p>Từ 4 tiêu chí trên, chúng ta kết hợp tạo thành 16 nhóm tính cách khác nhau tượng trung cho 16 kiểu người trong MBTI.</p>
            </div>
        </div>
    </div>
`