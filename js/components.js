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
                                <li id="redirect-toNPT">Nhà Phân Tích</li>
                                <li id="redirect-toNNG">Nhà Ngoại Giao</li>
                                <li id="redirect-toS">Sentinels</li>
                                <li id="redirect-toNTH">Người Thám Hiểm</li>
                            </ul>
                        </nav>
                    </li>
                    <li class="cursor-pointer">Báo và khảo sát</li>

                </ul>
            </nav>
            <div class="right-section">
                <div class="cursor-pointer2" id="logout">LogOut</div>
            </div>
        </div>
        <div class="main-container">
            <div class="main-wrapper">
                <div class="main-text">Bạn đã hiểu rõ tính cách của mình ?</div>
                <button class="explore" id="redirect-to-test" >Explore</button>
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
                            <li id="redirect-toNPT">Nhà Phân Tích</li>
                            <li id="redirect-toNNG">Nhà Ngoại Giao</li>
                            <li id="redirect-toS">Sentinels</li>
                            <li id="redirect-toNTH">Người Thám Hiểm</li>
                            </ul>
                        </nav>
                    </li>
                    <li class="cursor-pointer">Báo và khảo sát</li>

                </ul>
            </nav>
            <div class="right-section">
                <div class="cursor-pointer2" id="logout">LogOut</div>
            </div>
        </div>
        <div class="mbti-wrapper">
            <div class="mbti-wrapper-content">
                <h1 class="header">MBTI</h1>
                
                <p>Được nghiên cứu từ 1917, MBTI có thể coi là phương pháp phân tích đánh giá tính cách phổ biến nhất hiện nay. MBTI là gì? MBTI sẽ giúp gì cho các nhà quản lý doanh nghiệp? Bài viết dưới đây sẽ giúp độc giả giải đáp 2 câu hỏi lớn đó.</p>
                <p>Base Resources - MBTI chắc hẳn là một từ khóa không hề lạ khi không chỉ những nhà tuyển dụng, nhà quản lý cần nắm rõ về MBTI mà cả những bạn trẻ cũng muốn hiểu rõ bản thân mình hơn thông qua công cụ này. MBTI là gì? Xác định tính cách
                    qua MBTI có khó không? Ứng dụng MBTI trong công việc quản trị nhân sự và đánh giá ứng viên như thế nào? Tất cả sẽ được trả lời trong bài viết dưới đây.</p>
                <h2>MBTI là gì?</h2>
                <p>MBTI là viết tắt của Myers–Briggs Type Indicator - một phương pháp khám phá tính cách qua bộ câu hỏi trắc nghiệm 16 nhóm tính cách của 2 nhà khoa học Isabel Myers và Kathryn Briggs.</p>
                <img id="image-mbti" src="../images/16types.jpg" alt="16 nhóm tính cách trong phương pháp khám phá tính cách MBTI">
                <p>Trắc nghiệm tính cách MBTI dựa trên câu trả lời của mỗi người cho các câu hỏi để suy ra những cá tính, tính cách riêng biệt của họ. MBTI dựa trên sự phát triển nền tảng của ngành tâm lý học có độ chính xác rất cao. MBTI đang trở nên phổ
                    biến gần đây với nhiều người tham gia bài Test này và xuất hiện những khóa học chuyên sâu về nó.</p>
                <h2>Các tiêu chí đánh giá trong MBTI</h2>
                <p>MBTI dựa trên 4 tiêu chí chính là 4 cặp phạm trù xoay quanh thế giới quan của con người, dùng để đánh giá và phân tích tính cách con người.</p>
                <h3>#Xu hướng tự nhiên:</h3>
                <p>Hướng ngoại (Extraversion) Hướng nội (Introversion) </p>
                <p>Hướng nội là hướng vào nội tâm,\n bao gồm ý nghĩ, tư tưởng, trí tưởng tượng. Người hướng nội thường tập trung suy nghĩ, không thể hiện ra ngoài nhiều.</p>
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
components.testScreen = `<div class="test-container">
<div class="header-wrapper">
    <a href="" class="name-app">In To Out</a>
    <nav class="middel-section">
        <ul>
            <li class="cursor-pointer" id="redirect-to-mbti">MBTI
            </li>
            <li class="cursor-pointer">Các loại tính cách
                <nav class="menu-personalities">
                    <ul>
                    <li id="redirect-toNPT">Nhà Phân Tích</li>
                    <li id="redirect-toNNG">Nhà Ngoại Giao</li>
                    <li id="redirect-toS">Sentinels</li>
                    <li id="redirect-toNTH">Người Thám Hiểm</li>
                    </ul>
                </nav>
            </li>
            <li class="cursor-pointer">Báo và khảo sát</li>

        </ul>
    </nav>
    <div class="right-section">
    <div class="cursor-pointer2" id="logout">LogOut</div>

    </div>
</div>
<form class="test-wrapper" id="form-test">
    <div id="question"></div>
    <input type="range" min="1" max="5" value="50" class="slider" id="myRange">
    <button type="submit" id="submit">NEXT</button>
</form>
</div>`
components.NPTScreen = `
<div class="NPT-container">
        <div class="header-wrapper">
            <a href="" class="name-app">In To Out</a>
            <nav class="middel-section">
                <ul>
                    <li class="cursor-pointer" id="redirect-to-mbti">MBTI
                    </li>
                    <li class="cursor-pointer">Các loại tính cách
                        <nav class="menu-personalities">
                            <ul>
                                <li id="redirect-toNPT">Nhà Phân Tích</li>
                                <li id="redirect-toNNG">Nhà Ngoại Giao</li>
                                <li id="redirect-toS">Sentinels</li>
                                <li id="redirect-toNTH">Người Thám Hiểm</li>
                            </ul>
                        </nav>
                    </li>
                    <li class="cursor-pointer">Báo và khảo sát</li>

                </ul>
            </nav>
            <div class="right-section">
                <div class="cursor-pointer2" id="logout">LogOut</div>
            </div>
        </div>
        <div class="NPT-wrapper">
            <div class="cursor-pointer1" id="redirect-to-NKH">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTJ_elon_musk.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NHÀ KHOA HỌC (INTJ-A/INTJ-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NTD">
                <div id="nhalogic-image"><img src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_albert_einstein.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NHÀ TƯ DUY (INTP-A/INTP-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NQL">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/analysts_ENTJ_franklin_d_roosevelt.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI QUẢN LÝ (ENTJ-A/ENTJ-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NNX">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/analysts_ENTP_sarah_silverman.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI NHÌN XA (ENTP-A/ENTP-T)</div>
            </div>
        </div>
    </div>
`
components.NNGScreen = `
<div class="NNG-container">
        <div class="header-wrapper">
            <a href="" class="name-app">In To Out</a>
            <nav class="middel-section">
                <ul>
                    <li class="cursor-pointer" id="redirect-to-mbti">MBTI
                    </li>
                    <li class="cursor-pointer">Các loại tính cách
                        <nav class="menu-personalities">
                            <ul>
                                <li id="redirect-toNPT">Nhà Phân Tích</li>
                                <li id="redirect-toNNG">Nhà Ngoại Giao</li>
                                <li id="redirect-toS">Sentinels</li>
                                <li id="redirect-toNTH">Người Thám Hiểm</li>
                            </ul>
                        </nav>
                    </li>
                    <li class="cursor-pointer">Báo và khảo sát</li>

                </ul>
            </nav>
            <div class="right-section">
            <div class="cursor-pointer2" id="logout">LogOut</div>

            </div>
        </div>
        <div class="NNG-wrapper">
            <div class="cursor-pointer1" id="redirect-to-NCC">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/diplomats_INFJ_nelson_mandela.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI CHE CHỞ (INFJ-A/INFJ-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NLTH">
                <div id="nhalogic-image"><img  alt="" src="https://static.neris-assets.com/images/personality-types/famous/diplomats_INFP_j_r_r_tolkien.svg?v=3"></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI LÝ TƯỞNG HOÁ (INFP-A/INFP-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NCD">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/diplomats_ENFJ_john_cusack.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI CHO ĐI (ENFJ-A/ENFJ-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NTCH">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/diplomats_ENFP_robin_williams.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI TRUYỀN CẢM HỨNG (ENFP-A/ENFP-T)</div>
            </div>
        </div>
    </div>
    `
components.SScreen = `
<div class="S-container">
        <div class="header-wrapper">
            <a href="" class="name-app">In To Out</a>
            <nav class="middel-section">
                <ul>
                    <li class="cursor-pointer" id="redirect-to-mbti">MBTI
                    </li>
                    <li class="cursor-pointer">Các loại tính cách
                        <nav class="menu-personalities">
                            <ul>
                                <li id="redirect-toNPT">Nhà Phân Tích</li>
                                <li id="redirect-toNNG">Nhà Ngoại Giao</li>
                                <li id="redirect-toS">Sentinels</li>
                                <li id="redirect-toNTH">Người Thám Hiểm</li>
                            </ul>
                        </nav>
                    </li>
                    <li class="cursor-pointer">Báo và khảo sát</li>

                </ul>
            </nav>
            <div class="right-section">
            <div class="cursor-pointer2" id="logout">LogOut</div>

            </div>
        </div>
        <div class="S-wrapper">
            <div class="cursor-pointer1" id="redirect-to-NDNNV">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/sentinels_ISTJ_natalie_portman.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI ĐẢM NHẬN NHIỆM VỤ (ISTJ-A/ISTJ-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NND">
                <div id="nhalogic-image"><img src="https://static.neris-assets.com/images/personality-types/famous/sentinels_ISFJ_queen_elizabeth_II.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI NUÔI DƯỠNG (ISFJ-A/ISFJ-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NBH">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/sentinels_ESTJ_judge_judy.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI BẢO HỘ (ESTJ-A/ESTJ-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NQT">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/sentinels_ESFJ_steve_harvey.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI QUAN TÂM (ESFJ-A/ESFJ-T)</div>
            </div>
        </div>
    </div>
    `

components.NTHScreen = `
<div class="NTH-container">
        <div class="header-wrapper">
            <a href="" class="name-app">In To Out</a>
            <nav class="middel-section">
                <ul>
                    <li class="cursor-pointer" id="redirect-to-mbti">MBTI
                    </li>
                    <li class="cursor-pointer">Các loại tính cách
                        <nav class="menu-personalities">
                            <ul>
                                <li id="redirect-toNPT">Nhà Phân Tích</li>
                                <li id="redirect-toNNG">Nhà Ngoại Giao</li>
                                <li id="redirect-toS">Sentinels</li>
                                <li id="redirect-toNTH">Người Thám Hiểm</li>
                            </ul>
                        </nav>
                    </li>
                    <li class="cursor-pointer">Báo và khảo sát</li>

                </ul>
            </nav>
            <div class="right-section">
            <div class="cursor-pointer2" id="logout">LogOut</div>

            </div>
        </div>
        <div class="NTH-wrapper">
            <div class="cursor-pointer1" id="redirect-to-NCH">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/explorers_ISTP_bear_grylls.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NHÀ CƠ HỌC (ISTP-A/ISTP-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NNS">
                <div id="nhalogic-image"><img src="https://static.neris-assets.com/images/personality-types/famous/explorers_ISFP_avril_lavigne.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI NGHỆ SĨ  (ISFP-A/ISFP-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NTT">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/explorers_ESTP_jack_nicholson.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NGƯỜI THỰC THI (ESTP-A/ESTP-T)</div>
            </div>
            <div class="cursor-pointer1" id="redirect-to-NTD">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/explorers_ESFP_marilyn_monroe.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NHÀ TRÌNH DIỄN (ESFP-A/ESFP-T)</div>
            </div>
        </div>
    </div>
    `
components.personalities =``
components.loginScreen = `
<div class="login-container">
        <div class="aside-right">
            <div class="header">
                <h3>IN TO OUT</h3>
            </div>
            <form id="login-form">
                <div class="input-wrapper">
                    <input type="text" placeholder="Email" name="email">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="password">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="form-action">
                    <span class="cursor-pointer2" id="redirect-to-register">
                Don't have an account? Register
              </span>
                    <button class="btn" type="submit">
                Login
              </button>
                </div>
            </form>
        </div>
    </div>
`
components.registerScreen = ` 
<div class="register-container">
        <div class="aside-right">
            <div class="header">
                <h3>IN TO OUT</h3>
            </div>
            <form id="register-form">
                <div class="input-name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" name="firstName" placeholder="First name">
                        <div class="error" id="first-name-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="lastName" placeholder="Last name">
                        <div class="error" id="last-name-error"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Email" name="email">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="password">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Confirm password" name="confirmPassword">
                    <div class="error" id="confirm-password-error"></div>
                </div>
                <div class="form-action">
                    <span class="cursor-pointer2" id="redirect-to-login">
                Already have an account? Login
              </span>
                    <button class="btn" type="submit">
                Register
              </button>
                </div>
            </form>
        </div>
    </div>
`
