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
                            <li id="redirect-toS">Nhà Quản Lý</li>
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
components.resultScreen = `<div class="result-container">
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
                    <li id="redirect-toS">Nhà Quản Lý</li>
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
<div class="result-wrapper">
        <div class="result-text">Kết Quả</div>
        <div id="e-score"></div>
        <div id="a-score"></div>
        <div id="c-score"></div>
        <div id="n-score"></div>
        <div id="i-score"></div>
        <div id="l-score"></div>
</div>
</div>`
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
                            <li id="redirect-toS">Nhà Quản Lý</li>
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
                <p>Trắc nghiệm tính cách MBTI dựa trên câu trả lời của mỗi người cho các câu hỏi để suy ra những cá tính, tính cách riêng biệt của họ. MBTI dựa trên sự phát triển nền tảng của ngành tâm lý học có độ chính xác rất cao. MBTI đang trở nên phổ
                    biến gần đây với nhiều người tham gia bài Test này và xuất hiện những khóa học chuyên sâu về nó.</p>
                <h2>Các tiêu chí đánh giá trong MBTI</h2>
                <p>MBTI dựa trên 4 tiêu chí chính là 4 cặp phạm trù xoay quanh thế giới quan của con người, dùng để đánh giá và phân tích tính cách con người.</p>
                <h3>Xu hướng tự nhiên:</h3>
                <p>Hướng ngoại (Extraversion) Hướng nội (Introversion) </p>
                <p>Hướng nội là hướng vào nội tâm,\n bao gồm ý nghĩ, tư tưởng, trí tưởng tượng. Người hướng nội thường tập trung suy nghĩ, không thể hiện ra ngoài nhiều.</p>
                <p>Hướng ngoại là hướng về thế giới bên ngoài gồm những hoạt động, con người, đồ vật. Người hướng ngoại thường cởi mở, hay nói cười nhưng suy nghĩ nhiều khi còn nôn nóng, chưa cặn kẽ.</p>
                <h3>Nhận thức về thế giới:</h3>
                <p>Giác quan (Sensing) Trực giác (iNtuition)</p>
                <p>Những người thuộc nhóm S nhận thức thế giới qua các giác quan cụ thể như mắt thấy, mũi ngửi, tai nghe những màu sắc, hình ảnh, mùi vị, âm thanh. Họ sắc bén với thực tế, tin vào thế giới dưới cái cách họ đang tiếp nhận qua 5 giác quan.</p>
                <p>Ngược lại, thế giới của những người thiên về trực giác sẽ gồm các mô hình, tưởng tượng mà họ suy luận, sắp xếp từ dữ liệu họ thu thập được.</p>
                <h3>Quyết định và lựa chọn: </h3>
                <p>Lý trí (Thinking) Cảm xúc (Feeling)</p>
                <p>Người lý trí sẽ ra quyết định dựa trên việc xác định các thông tin liên quan, các tiêu chí đúng sai trái phải. Họ luôn suy luận logic đưa ra đáp án cụ thể nhất, có căn cứ khoa học nhất.</p>
                <p>Thay vào đó, người cảm xúc sẽ lựa chọn dựa vào cảm tính, ví dụ như yêu, ghét, thương, thù,...</p>
                <h3>Cách thức hành động:</h3>
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
                    <li id="redirect-toS">Nhà Quản Lý</li>
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
                            <li id="redirect-toS">Nhà Quản Lý</li>
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
            <div class="cursor-pointer1" id="redirect-to-NĐH">
                <div id="kientrucsu-image"><img src="https://static.neris-assets.com/images/personality-types/famous/analysts_ENTJ_franklin_d_roosevelt.svg?v=3" alt=""></div>
                <div style="margin-top:4px; text-align:center;">NHÀ ĐIỀU HÀNH (ENTJ-A/ENTJ-T)</div>
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
                            <li id="redirect-toS">Nhà Quản Lý</li>
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
                            <li id="redirect-toS">Nhà Quản Lý</li>
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
                    <li class="cursor-pointer">Phân loại
                        <nav class="menu-personalities">
                            <ul>
                            <li id="redirect-toNPT">Nhà Phân Tích</li>
                            <li id="redirect-toNNG">Nhà Ngoại Giao</li>
                            <li id="redirect-toS">Nhà Quản Lý</li>
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
components.NKHScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>
                <p>INTJ là một trong những loại tính cách hiếm nhất và thú vị nhất - chỉ chiếm khoảng 2% dân số Hoa Kỳ (INTJ nữ là đặc biệt hiếm - chỉ 0,8%), Các INTJ thường được xem là rất thông minh và bí ẩn một cách khó hiểu. Những người mang tính cách
                    INTJ thường tỏa ra sự tự tin, dựa trên kho lưu trữ khổng lồ của họ về kiến thức bao trùm nhiều lĩnh vực và phạm vi khác nhau. Các INTJ thường bắt đầu phát triển những kiến ​​thức trong thời thơ ấu (những "con mọt sách" là biệt danh
                    khá nổi tiếng của INTJ) và tiếp tục làm điều đó sau này trong cuộc sống.</p>
                <p>Khi một người mang tính cách INTJ nắm vững kiến thức ở lĩnh vực mà họ đã chọn (INTJ có thể tìm thấy thế mạnh của họ trong một số lĩnh vực), họ có thể nói một cách thẳng thắn và trung thực rằng họ có biết hay không câu trả lời cho một câu
                    hỏi cụ thể nào đó. Các INTJ biết những gì họ biết và quan trọng hơn - họ rất tự tin vào kiến thức đó. Không ngạc nhiên, loại tính cách này có thể được "dán nhãn" là độc lập nhất trong tất cả các loại tính cách.</p>
                <p>Các INTJ rất quyết đoán, độc đáo và sâu sắc - những đặc điểm này khiến người khác chấp nhận ý tưởng của INTJ chỉ đơn giản vì lý do sức mạnh ý chí tuyệt đối và sự tự tin của họ. Tuy nhiên, các INTJ không tìm kiếm cũng không thích sự chú
                    ý và họ thường giữ ý kiến ​​của mình trong lòng nếu chủ đề của cuộc thảo luận không làm họ quan tâm nhiều.</p>
                <p>Tính cách của các INTJ là rất cầu toàn và họ rất thích cải tiến ý tưởng và các hệ thống mà họ tiếp xúc. Bản tính của các INTJ là tò mò tự nhiên, điều này có xu hướng xảy ra khá thường xuyên. Tuy nhiên họ luôn cố gắng đễ giữ mọi thứ trong
                    tầm kiểm soát, mục tiêu cuối cùng là mỗi ý tưởng được tạo ra bởi tâm trí của INTJ hoặc đến từ bên ngoài cần phải vượt qua các "bộ lọc máu lạnh" được gọi là "Đây có phải việc nên làm?". Đây là cơ chế ứng phó của INTJ và họ đang nổi
                    tiếng trong việc áp dụng nó mọi lúc, đặt câu hỏi tất cả mọi thứ và tất cả mọi người.</p>
                <p>Tính cách INTJ cũng có một sự kết hợp khác thường giữa sự quyết đoán và trí tưởng tượng sống động. Điều này có nghĩa là trong thực tế họ có thể thiết kế một kết hoạch tuyệt vời và thực hiện nó. Hãy tưởng tượng một bàn cờ khổng lồ nơi các
                    đối tượng thường xuyên di chuyển, cố gắng đưa ra những chiến thuật mới, luôn luôn được chỉ dẫn của một bàn tay vô hình - trí tưởng tượng của INTJ là như thế. INTJ sẽ đánh giá tất cả các tình huống có thể, tính toán di chuyển chiến
                    lược và chiến thuật, và thường thì họ sẽ phát triển một kế hoạch dự phòng hoặc hai kế hoạch song song. Nếu một người nào đó mang loại tính cách INTJ bắt đầu làm việc với một hệ thống mới, họ sẽ coi công việc như là một nghĩa vụ đạo
                    đức, sáp nhập sự cầu toàn của họ và biến nó thành một sức mạnh to lớn. Bất cứ ai không có đủ tài năng hay chỉ đơn giản là không nhìn thấy điểm nổi trội, bao gồm cả các cấp bậc cao hơn của quản lý, thì ngay lập tức và có thể vĩnh viễn
                    mất sự tôn trọng của họ.

                </p>
                <p>Các INTJ cũng thường gánh vác trách nhiệm đưa ra quyết định quan trọng mà không tham khảo ý kiến ​​đồng nghiệp của họ. Họ là những nhà lãnh đạo tự nhiên và các chiến lược gia xuất sắc, nhưng sẵn sàng nhường đường cho những người khác đang
                    cạnh tranh vào một vị trí lãnh đạo, thường là những người mang tính cách hướng ngoại (đặc điểm E ). Tuy nhiên, hành động đó có thể là lừa dối và thậm chí có thể tính toán. Một INTJ sẽ rút lui vào bóng tối, duy trì sự đeo bám của họ
                    trên các quyết định quan trọng nhất - nhưng ngay sau khi các nhà lãnh đạo không thành công và có nhu cầu cần những "tay lái", các INTJ sẽ không ngần ngại hành động, thậm chí ngay khi đang ở phía sau. Tính cách INTJ là "Người đứng sau
                    bức màn" cuối cùng.</p>
                <p>Các INTJ không thích các quy tắc và hạn chế nhân tạo - tất cả mọi thứ nên được nghi vấn và cho đánh giá lại. Họ có thể là lý tưởng hóa (không có gì là không thể) và hoài nghi (tất cả mọi người đều dối) cùng một lúc. Trong mọi trường hợp,
                    bạn luôn có thể dựa vào các INTJ để "lấp đầy" những khoảng trống ý tưởng - họ có nhiều khả năng đưa ra các giải pháp bất ngờ.</p>
                <p>Nói chung, các INTJ thường thích làm việc trong các lĩnh vực mà họ biết rất rõ. Sự nghiệp điển hình của họ là liên quan đến khoa học hay kỹ thuật, nhưng chúng có thể được tìm thấy ở bất cứ đâu, nơi có một nhu cầu của trí thông minh, tâm
                    trí không ngừng nghỉ và cái nhìn sâu sắc (pháp luật, điều tra, một số lĩnh vực chuyên ngành). Các INTJ hiếm khi tìm kiếm vị trí quản lý - nếu họ làm quản lý, bởi vì họ cần thêm sức mạnh và tự do hành động, không phải vì họ thích quản
                    lý con người.</p>
                <p>Tất cả các nhóm tính cách có nhiều điểm yếu và INTJ không phải là một ngoại lệ. Có một lĩnh vực mà "tư duy như thánh" của họ thường trở nên hoàn toàn vô ích và thậm chí có thể cản trở nỗ lực của họ - các INTJ cảm thấy rất khó khăn để xử
                    lý các mối quan hệ lãng mạn, đặc biệt là vào giai đoạn đầu tiên của họ, nhưng họ lại khá giỏi trong việc thu hút đối tác. Những người thuộc loại tính cách này rất yêu thương và giỏi chăm sóc những người có quan hệ gần gũi với họ.

                </p>
                <p>Lý do chính đằng sau điều đó là tính cách INTJ có cả riêng tư và vô cùng lý trí - họ nhận thấy rất khó khăn để hiểu các nghi thức xã hội phức tạp, điều đó được coi là một phần của trò chơi hẹn hò, đặc biệt là trong xã hội phương Tây. Những
                    thứ như tán tỉnh hoặc nói chuyện nhỏ là không tự nhiên đối với họ, hơn nữa, các INTJ (đặc biệt là nữ) có xu hướng nhìn thấy chiến thuật thu hút điển hình (ví dụ như giả vờ không quan tâm) là vô cùng ngu ngốc và không hợp lý.</p>
                <p>Trớ trêu thay, các INTJ có nhiều khả năng thu hút một đối tác khi họ ngừng tìm kiếm họ - đây là khi sự tự tin của họ bắt đầu tỏa sáng một lần nữa. Có một số thứ còn hấp dẫn hơn cả sự tự tin tột cùng của INTJ.</p>
                <h3>Những người nổi tiếng mang tính cách INTJ:</h3>
                <p>- Vladimir Putin, Tổng thống Nga - Augustus Caesar, Hoàng đế La Mã - Bill Gates – Chủ tịch, đồng sáng lập tập đoàn Microsoft - Paul Krugman, nhà kinh tế nổi tiếng người Hoa Kỳ - Rudy Giuliani, cựu thị trưởng New York - Donald Rumsfeld,
                    Bộ trưởng Quốc phòng - Colin Powell, Ngoại trưởng Hoa Kỳ - Richard Gere, diễn viên nổi tiếng - Mark Zuckerberg, CEO of Facebook - Hannibal, lãnh đạo quân sự của Carthage - Arnold Schwarzenegger, diễn viên và thống đốc California -
                    John F. Kennedy, cựu Tổng thống Hoa Kỳ - Woodrow Wilson, cựu Tổng thống Hoa Kỳ - Gandalf the Grey, tác giả "The Lord of the Rings"</p>
                <h2>MỐI QUAN HỆ</h2>
                <p>Không dễ dàng để trở thành bạn của INTJ. Họ đánh giá lý trí và sự thông minh cao hơn bất cứ điều gì khác, và có xu hướng tự cho rằng hầu hết mọi người họ tiếp xúc có thể kém thông minh hơn họ. Phần lớn có lẽ sẽ gọi đó là kiêu ngạo; các
                    INTJ sẽ hợp lý hóa điều này như một cơ chế lọc tự nhiên và và tranh cãi làm cho người ta rất dễ chán nản họ. Do đó, các INTJ thường có rất ít bạn bè tốt - nhưng họ cũng không thực sự thấy cần thiết phải có một danh sách bạn bè đông
                    đảo.
                </p>
                <p>Tính cách INTJ rất độc lập và tự lập. Họ nhìn nhận bạn bè của họ như là để trao đổi về trí tuệ và kiến thức hơn là một cầu nối để liên kết với xã hội bên ngoài. Các INTJ thấy hạnh phúc khi đưa ra những cách thức mới để cải thiện và làm
                    sâu sắc thêm mối quan hệ, nhưng họ sẽ không phụ thuộc vào tình cảm bạn bè của họ. Hơn nữa, các INTJ sẽ không thích những biểu lộ thể chất của cảm xúc (ôm ấp vuốt ve, chạm,...), ngay cả với bạn bè thân thiết.</p>
                <p>Những người bạn INTJ cũng thấy rằng những người có loại cá tính này rất khó để "đọc" (khó đoán). Các INTJ không chỉ là điềm nhiên, không xúc động, mà họ cũng có khả năng để cố gắng ngăn chặn những cảm xúc thông qua các bộ lọc tinh thần
                    của họ - do đó cảm xúc chính là điểm yếu của họ, họ làm hết sức mình để chúng không thể hiện ra bên ngoài, vì lo sợ điều này sẽ vi phạm những chuẩn mực của lý trí và tư duy logic mà họ đã đặt ra. Và ngược lại, các INTJ không nhạy cảm
                    khi nói đến cảm xúc của những người khác - và có một điều chắc chắn rằng, các INTJ gặp khó khăn khi thể hiện điều gì đó bằng cảm xúc.</p>
                <p>Các INTJ rất biết tìm cách thư giãn và họ thích thú khi ở giữa những người bạn thân. Nổi tiếng với những lời mỉa mai và sự hài hước ẩn ý làm cho INTJ trở thành người kể chuyện tuyệt vời, miễn là người nghe có thể hiểu (và chịu đựng) việc
                    đùa của họ. Đây là một trong những lý do tại sao các INTJ thường rất thích nhóm NT hoặc NF - 2 nhóm này có thể hiểu được những câu nói lưng chừng, nửa vời hay nói lóng và làm theo suy nghĩ của INTJ. Ngược lại, những người mang đặc
                    điểm S ( nhạy cảm ) có khả năng cảm thấy khá bực bội với các INTJ này.</p>
                <p>Những người mang loại tính cách INTJ thường là những cá nhân có năng khiếu và tỏa sáng, họ luôn tìm kiếm sự tăng trưởng và phát triển cá nhân, và cũng khuyến khích bạn bè của họ đi theo con đường tương tự. Nếu INTJ có thể kết nối với người
                    khác ở mức độ này, tình bạn của họ có khả năng sẽ mạnh mẽ và lâu dài. Nói chung các INTJ thường là những người bạn "ít cần quan tâm", những người không đòi hỏi nhiều sự chú ý hoặc liên lạc thường xuyên - họ hiểu được giá trị của sự
                    riêng tư và độc lập, và cũng sẽ thực sự giúp bạn bè của họ để trở nên độc lập hơn.</p>
                <p>Tóm lại, các INTJ tin vào sự phát triển bền vững trong các mối quan hệ, họ nỗ lực vì sự tự do cho bản thân và bạn bè của họ. Các INTJ liên tục bắt tay vào các dự án "cải tiến" nâng cao chất lượng tổng thể cuộc sống và các mối quan hệ của
                    họ. INTJ rất nghiêm túc với những cam kết của họ, nhưng lại vui vẻ chấp nhận để xác định lại sự cam kết đó nếu họ cảm thấy việc gì đó có thể chứng minh là tiến bộ hơn so với hiểu biết hiện tại của họ. Họ không dễ dàng "cởi mở" và quá
                    thân mật với bạn bè hoặc con cái, và đôi khi có vẻ như vô tâm với nhu cầu tình cảm của họ. Tuy nhiên, INTJ là những người rất có năng khiếu và thông minh, họ luôn phấn đấu để làm được điều tốt nhất, và luôn phát triển theo hướng tích
                    cực. Nếu họ áp dụng các mục tiêu cơ bản này vào mối quan hệ cá nhân, có khả năng INTJ sẽ tận hưởng những mối quan hệ tốt đẹp và hạnh phúc với gia đình và bạn bè.</p>
                <h3>Các ưu điểm của INTJ:</h3>
                <p>- Tự tin vào bản thân.</p>
                <p>- Không bị đe dọa bởi xung đột và chỉ trích.</p>
                <p>- Nhìn chung rất thông minh và có năng khiếu.</p>
                <p>- Nghiêm túc trong các mối quan hệ và cam kết.</p>
                <p>- Quan tâm đến việc "tối ưu hóa" các mối quan hệ của họ.</p>
                <p>- Có thể kết thúc một mối quan hệ khi biết mối quan hệ này nên dừng lại, mặc dù điều này có thể còn hiện diện trong đầu họ một thời gian sau đó.</p>
                <p>- Là người lắng nghe giỏi.</p>
                <h3>Các nhược điểm của INTJ:</h3>
                <p>- Thường có xu hướng đáp lại các cuộc xung đột bằng logic và lý luận, hơn là mong đợi sự hỗ trợ về mặt tình cảm.</p>
                <p>- Không tự nhiên đồng điệu với cảm xúc của người khác, đôi khi có thể vô tâm.</p>
                <p>- Có xu hướng tin rằng họ luôn đúng.</p>
                <p>- Không tự nhiên khi thể hiện cảm xúc và tạo cảm giác yêu mến.</p>
                <p>- Việc họ liên tục cải thiện tất cả mọi thứ có thể gây ảnh hưởng đến các mối quan hệ.</p>
                <p>- Có xu hướng không sẵn lòng hoặc không chấp nhận sự khiển trách.</p>
                <p>- Có xu hướng giữ kín một phần nào đó về chính bản thân họ.</p>
                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của INTJ trong công việc:

                </h3>
                <p>- Rất tự tin. Các INTJ hiếm khi nghi ngờ bản thân hay bận tâm nhiều đến vai trò nhận thức xã hội và sự dự tính của họ,... Do đó họ không ngại khi nói lên quan điểm của mình. Điều này toát ra sự tự tin và củng cố thêm lòng tự trọng của
                    họ.
                </p>
                <p>- Đầu óc nhanh nhạy và linh hoạt. Các INTJ rất giỏi nâng cao kiến ​​thức của họ (thường đa dạng) về các chủ đề và lĩnh vực mà họ quan tâm. Những người có tính cách này rất hài lòng trong việc giải quyết những thách thức trí tuệ và sự tò
                    mò tự nhiên của họ cũng đẩy họ tiến lên.</p>
                <p>- Trở thành chuyên gia của lĩnh vực nếu muốn. Trí nhớ là sức mạnh quan trọng nhất của các INTJ. Các loại tính cách khác thường có điểm mạnh về nghệ thuật, trực quan, sức thuyết phục,... Nhưng với các INTJ điểm nổi trội nhất là khả năng
                    phân tích tất cả mọi thứ trong cuộc sống, khám phá những phương pháp cơ bản và sau đó áp dụng nó trong thực tế. Do đó, các INTJ thường có khả năng trở thành những gì mà họ muốn - có thể là một chuyên gia về máy tính hay một chính trị
                    gia cấp cao.</p>
                <p>- Độc lập và quyết đoán. Những người có các loại tính cách INTJ rất lý trí khi nói đến việc phân tích tính hữu ích của phương pháp hay ý tưởng. Họ sẽ không thèm quan tâm nếu ý tưởng đó là bình thường hoặc được hỗ trợ bởi một nhân vật quyền
                    lực - nếu INTJ tin rằng nó không có ý nghĩa thì chỉ còn cách lập luận lý trí áp đảo họ thì mới có thể thuyết phục được. Sức mạnh này khiến cho họ có tài năng và sự khách quan khi đưa ra quyết định, đặc điểm này đã bộc lộ ngay khi họ
                    còn trẻ. INTJ cũng hoàn toàn có khả năng chịu được những cuộc xung đột, thường giữ bình tĩnh và lý trí trong những tính huống cao trào cảm xúc.</p>
                <p>- Làm việc chăm chỉ và quyết tâm. Các INTJ có thể rất kiên nhẫn và quyết tâm nếu một cái gì đó kích thích hoặc gây tò mò cho họ. Họ sẽ làm việc chăm chỉ để đạt được mục tiêu của họ, thường bỏ qua mọi thứ khác. Các INTJ cũng có thể trở
                    nên lười biếng trong những tình huống mà không yêu cầu họ thể hiện sức mạnh tinh thần của họ - ví dụ, họ có thể chấp nhận rủi ro và không học chăm chỉ ở trường, nếu biết rằng trong tất cả các khả năng, họ vẫn có thể để giải quyết kiểm
                    tra như thường</p>
                <p>- Giàu trí tưởng tượng và chiến lược. Các INTJ là những nhà tư tưởng chiến lược rất tốt, thường sử dụng sức mạnh này để đưa ra nhiều kế hoạch dự phòng trong cả hai tình huống chuyên nghiệp và cá nhân. Họ thích lên kế hoạch trước và được
                    chuẩn bị, tưởng tượng tất cả các kịch bản tiềm năng và hậu quả.</p>
                <p>- Trung thực và thẳng thắn. Những người có loại tính cách này ghét hùa theo tập thể và ghét đặt sự an ủi hoặc mong đợi của tập thể lên trên sự trung thực và thực tế. Các INTJ có xu hướng nhìn thấy các hoạt động này là vô nghĩa và bất hợp
                    lý, thích sự thật(dù bất tiện) hơn một lời nói dối an ủi.</p>
                <p>- Tư tưởng thông thoáng. Các INTJ không phiền khi bị chứng minh là sai và thích được tiếp xúc với một cái gì đó họ không quen thuộc. Họ sẽ nắm lấy một lý thuyết cạnh tranh nếu nó có ý nghĩa hơn, không phụ thuộc vào truyền thống hoặc kỳ
                    vọng hiện tại. Không ngạc nhiên, khi các INTJ cũng có xu hướng khá tự do không quan tâm đến các quy tắc xã hội, họ tin rằng nhiều chuẩn mực xã hội là lỗi thời và không cần thiết hạn chế.</p>
                <h3>Điểm yếu của INTJ trong công việc:</h3>
                <p>- Kiêu ngạo. Có một ranh giới giữa tự tin và kiêu ngạo. Một số INTJ chưa trưởng thành có thể đánh giá quá cao tầm quan trọng của kiến thức hoặc kỹ năng phân tích, thấy hầu hết mọi người đều không hợp lý hay lý trí kém hơn họ - và thường
                    làm cho quan điểm của họ được mọi người biết đến.</p>
                <p>- Cầu toàn. Tính cách INTJ là không ưa kém hiệu quả và không hoàn hảo, họ rất cố gắng để tìm ra tất cả các sai sót và phân tích tất cả các khả năng - nếu không được kiểm soát, đặc điểm này có thể dễ dàng trở thành một điểm yếu, làm chậm
                    tiến độ công việc của họ và làm mọi người xung quanh bực bội với INTJ.</p>
                <p>- Phân tích quá mức mọi thứ. Các INTJ có xu hướng tin rằng tất cả mọi thứ có thể được phân tích, ngay cả những điều mà không nhất thiết phải lý trí - ví dụ như mối quan hệ của con người. Họ có thể tìm kiếm lời giải thích hợp lý và các
                    giải pháp trong mọi tình huống, từ chối dựa vào sự ứng biến(linh hoạt) hay những cảm xúc riêng của họ.</p>
                <p>- Phán xét. Các INTJ đi đến kết luận rất nhanh chóng và bám dính vào chúng. Mặc dù những người với loại cá tính này có xu hướng cởi mở, nhưng họ lại có ít kiên nhẫn cho những thứ mà họ cho là không hợp lý - ví dụ như các quyết định dựa
                    trên tình cảm, sự ngoan cố phi lý, sự bùng nổ cảm xúc,... INTJ có thể tin rằng những người cư xử theo cách này, hoặc là rất non hay chưa hợp lý - do đó, họ sẽ có ít sự tôn trọng đối với những người này.</p>
                <p>- Thiếu đồng cảm. Các INTJ thường tự hào về sự trung thực và hợp lý của họ. Tuy nhiên, trong khi tuyên bố của họ có thể là hợp lý và hoàn toàn chính xác, họ có thể không xem xét trạng thái cảm xúc, kinh nghiệm, hoàn cảnh cá nhân,... của
                    người khác. Vì vậy, sự thẳng thắn và trung thực của INTJ có thể dễ dàng làm tổn thương người khác, nó đã trở thành một điểm yếu lớn trong các tình huống xã hội.</p>
                <p>- Thường thiếu khả năng cần thiết khi nói đến mối quan hệ lãng mạn. Nhiều INTJ có thể gặp khó khăn khi đối phó với những thứ mà không đòi hỏi suy luận logic và điểm yếu này đặc biệt có thể nhìn thấy trong mối quan hệ giữa các cá nhân.
                    Họ có thể phân tích quá mức tất cả mọi thứ và thất vọng khi cố gắng "đọc" cách nghĩ của người khác, cố gắng sử dụng một phương pháp tiếp cận khoa học để hẹn hò gần hoặc từ bỏ hoàn toàn</p>
                <p>- Không ưa môi trường cấu trúc cao. Các INTJ không tôn trọng quy tắc hay quy định đã lập sẵn, họ cần tin chắc rằng những hạn chế đó có ý nghĩa. Do đó, các INTJ rất không thích môi trường được xây dựng trên sự vâng lời mù quáng, truyền
                    thống hay tôn trọng quyền hạn - họ có khả năng thách thức hiện trạng và xung đột với những người thích sự ổn định và an toàn.</p>
                <h3>Các nguyên tắc thành công</h3>
                <p>- Trau dồi ưu điểm: Tìm kiếm những lĩnh vực cho phép trực giác và khả năng suy luận logic được phát huy. Khám phá thế giới khoa học đầy hấp dẫn, toán học, luật và y học. Cho não bộ của bạn được giải phóng những khả năng phân tích và quan
                    sát vượt trội.</p>
                <p>- Khắc phục khuyết điểm: Hãy chấp nhận những điểm yếu và tìm cách vượt qua chúng. Đặc biệt, nỗ lực sử dụng khả năng phán xét của mình dựa vào những ý tưởng nội tại và trực giác hơn là dùng nó để bỏ qua những ý kiến của người khác.</p>
                <p>- Thấu hiểu quan điểm của mọi người: Đừng vội bác bỏ ý kiến của người khác chỉ vì bạn không tôn trọng họ, hoặc do bạn nghĩ bạn đã biết tường tận về vấn đề đó rồi. Mỗi người đều có những ý kiến riêng, và không phải ai cũng biết hết mọi
                    thứ. Như Steven Covey đã nói, "Phải thấu hiểu người khác để người khác có thể hiểu mình".</p>
                <p>- Cân nhắc hết sức cẩn thận: Bạn cần hiểu rõ trực giác của mình để biến mọi việc trở nên khả thi. Hãy dành thời gian để làm việc này, và tận dụng cơ hội để thảo luận các ý tưởng với mọi người xung quanh. Bạn sẽ nhận ra rằng việc trao đổi
                    quan điểm với người khác là một bài tập hết sức giá trị. Nếu bạn không có một ai đó để thảo luận quan điểm thì hãy cố diễn đạt ý tưởng đó rõ ràng bằng văn bản.</p>
                <p>- Tìm kiếm những người có cùng quan điểm: Đừng mong mình trở thành một người đa cảm hoặc quá mức nồng nhiệt. Hãy hiểu rằng những mối quan hệ vững chắc nhất của bạn với mọi người sẽ bắt nguồn từ lý trí, chứ không phải từ tình cảm. Hãy quan
                    tâm đến nhu cầu tình cảm của người khác, hãy thể hiện tình cảm và sự tôn trọng chân thành đối với họ bằng chính con người thật của bạn. Hãy luôn là chính mình, bạn nhé</p>
                <p>- Nếu bạn mất bình tĩnh thì bạn sẽ thất bại: Niềm đam mê và sức mạnh là tài sản quý giá của bạn nhưng sẽ gây hại nếu bạn để mình rơi vào cái "Bẫy Giận Dữ". Hãy nhớ rằng Cơn Giận phá hủy những mối quan hệ cá nhân của bạn. Xem xét kỹ cơn
                    giận trước khi bạn trút nó lên người khác, nếu có thể hãy kìm nén chúng, nếu không bạn sẽ thấy mình cô đơn. Sự bất đồng và thất vọng chỉ có thể được kiểm soát bằng một thái độ khách quan và bình tĩnh.</p>
                <p>- Chịu trách nhiệm với chính bản thân: Đừng đổ lỗi cho người khác. Hãy suy nghĩ về cách giải quyết. Không ai có khả năng điều khiển cuộc sống của bạn hơn là chính bạn. Khi bạn đổ lỗi cho người khác nghĩa là bạn đã mất quyền chủ động.</p>
                <p>- Hãy luôn nghĩ đến những điều tốt đẹp nhất. Đừng tự làm nản lòng mình bằng ý nghĩ mình thật tồi tệ. Nhớ rằng một thái độ tích cực sẽ mang đến cho bạn những hoàn cảnh tích cực.</p>
                <p>- Hãy khiêm tốn: Đánh giá bản thân mình nghiêm khắc như cách bạn đánh giá mọi người.</p>
                <p>- Đừng tự cô lập mình: Bạn cần nhìn ra giá trị mà thế giới bên ngoài mang đến cho bạn, hãy tương tác với thế giới bên ngoài một cách tự nhiên. Tham gia vào các câu lạc bộ và diễn đàn, nơi mà ở đó có những cuộc thảo luận sâu sắc về chủ
                    đề mà bạn đang quan tâm. Tìm và nuôi dưỡng tình bạn với những người có khả năng và năng lực giống bạn để có thể thấu hiểu nhau. Hãy hướng ngoại theo cách riêng của bạn.</p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>
                <p>Các INTJ được biết đến với khả năng hấp thụ các lý thuyết khó và phức tạp có liên quan đến nghề nghiệp của họ, và sau đó chuyển hóa chúng thành các ý tưởng rõ ràng và hành động. Các INTJ là những nhà chiến lược xuất sắc, họ sở hữu trực
                    giác và sự tự tin cho phép họ xây dựng và lên kế hoạch thực hiện thử thách trong dài hạn mà không có nhiều khó khăn. Những kỹ năng này có thể rất có giá trị trong con đường sự nghiệp đúng đắn - những người có loại tính cách này rất
                    tuyệt vời khi làm những công việc có liên quan đến quy hoạch, chiến lược và áp dụng các nguyên tắc lý thuyết phức tạp. Ví dụ, bạn có thể tìm thấy nhiều INTJ trong quản lý dự án, kỹ sư hệ thống hoặc chiến lược tiếp thị. Đây thường là
                    lựa chọn nghề nghiệp tốt nhất của họ.</p>
                <p>Sự nghiệp điển hình của INTJ cũng có xu hướng đặt rất nhiều tầm quan trọng vào tư duy độc lập. Các INTJ thích những thách thức khó khăn và cực kỳ ghét công việc thường nhật, họ làm mọi thứ để tránh nó hoặc tìm cách tự động hóa nó. Họ nổi
                    trội là "con sói cô độc" và sự nghiệp INTJ tốt nhất xoay quanh đặc điểm này, hãy cho INTJ đủ không gian linh hoạt để sự sáng tạo và cống hiến của họ không bị gián đoạn bởi các thành viên khác trong nhóm.</p>
                <p>Những người có loại tính cách này đặt hiệu quả và năng lực lên trên mọi thứ khác. Do đó, các INTJ phù hợp nhất với các nghề nghiệp đòi họi sự sáng tạo và quyết đoán. Các INTJ cho rằng tất cả mọi người nên làm hết sức mình để hoàn thành
                    nhiệm vụ với tiêu chuẩn cao nhất có thể và họ không thích những người tận dụng các mối quan hệ để thăng tiến trong sự nghiệp. Cách tốt nhất để mất đi sự tôn trọng của một INTJ với bạn là cho rằng kỹ năng xã hội và các mối quan hệ quan
                    trọng hơn năng lực chuyên môn. Các INTJ có tiêu chuẩn rất cao, đặc biệt là khi nói đến việc riêng của họ và nỗ lực hết mình để hoàn thành nó. Do đó, những nghề nghiệp tiêu biểu của INTJ là có liên quan đến sự sáng tạo, cống hiến và
                    đầy nhận thức(có cái nhìn sâu sắc trọn vẹn về điều gì đó).</p>
                <p>Các INTJ hướng nội rất mạnh với các kỹ năng phân tích và sáng tạo tuyệt vời, họ rất không thích làm các công việc phải đối mặt với khách hàng hay phải làm việc nhóm đã được định hướng - những công việc như vậy không phù hợp với INTJ. Như
                    đã đề cập, các INTJ là những chiến lược gia và lập kế hoạch xuất sắc, nhưng họ làm tốt nhất khi một mình hoặc theo nhóm nhỏ. Họ sẵn sáng phục vụ người khác nếu thấy người đó có năng lực hơn họ. Những INTJ mang đặc điểm này thường trở
                    thành những kỹ sư xuất sắc, các nhà chiến lược quân sự, lập trình, phân tích hệ thống, luật sư hoặc chuyên gia tư vấn tự do. Đây là những con đường sự nghiệp điển hình của INTJ và hiệu suất của họ trong các lĩnh vực này thường là rất
                    ấn tượng.

                </p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.</p>
                <h3>Các INTJ thường mang những đặc điểm:</h3>
                <p>- Hiểu biết sâu rộng và trực giác tốt, và họ rất tin tưởng điều này</p>
                <p>- Có xu hướng tạo ra trật tự và cấu trúc từ các lý thuyết trừu tượng.</p>
                <p>- Có khả năng tiếp thu các kiến thức và lý thuyết phức tạp.</p>
                <p>- Là nhà chiến lược tối cao.</p>
                <p>- Đánh giá cao kiến thức và sự hiệu quả.</p>
                <p>- Có cái nhìn toàn cục, tổng thể.</p>
                <p>- Có cái nhìn về tương lai.</p>
                <p>- Đánh giá cao ý kiến của mình hơn của người khác.</p>
                <p>- Có tiêu chuẩn rất cao về hiệu suất làm việc, và họ áp dụng cho chính mình mạnh mẽ nhất.</p>
                <p>- Không kiên nhẫn với sự kém hiệu quả và mơ hồ.</p>
                <p>- Kín đáo và tách biệt với người khác.</p>
                <p>- Cực kì logic và hợp lý.</p>
                <p>- Bình tĩnh, thu thập và phân tích.</p>
                <p>- Ý tưởng độc đáo và độc lập.</p>
                <p>- Sáng tạo, khéo léo, cách tân, và tháo vát.</p>
                <p>- Có khả năng lãnh đạo bẩm sinh, nhưng sẽ đi theo những người mà họ có thể hỗ trợ hoàn toàn.</p>
                <p>- Làm việc một mình tốt nhất, và thích làm việc một mình.</p>
                <p>- Cảm thấy chán khi giải quyết các công việc thường ngày.</p>
                <p>Dưới đây là các công việc phù hợp với INTJ, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với INTJ nhưng không phải chắc chắn) :</p>
                <p>- Nhà hoạch định chiến lược và xây dựng tổ chức công ty</p>
                <p>- Lãnh đạo quân đội</p>
                <p>- Nhà khoa học</p>
                <p>- Bác sĩ y khoa/ nha sĩ</p>
                <p>- Kỹ sư</p>
                <p>- Quản trị kinh doanh / nhà quản lý</p>
                <p>- Thẩm phán</p>
                <p>- Luật sư</p>
                <p>- Lập trình viên máy tính, nhà phân tích hệ thống và chuyên gia máy tính</p>
                <p>- Giáo sư và giáo viên</p>
            </div>
        </div>
    </div>
`
components.NTDScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>
                <p>"Triết gia", "kiến trúc sư", "giáo sư trừu tượng",... là những từ ngữ thường được dùng để mô tả loại tính cách INTP. Có khoảng 3% dân số mang tính cách INTP. Các INTP yêu thích lý thuyết và tin rằng tất cả mọi thứ đều có thể phân tích
                    và cải tiến. Họ không quan tâm đến thế giới thực và những thứ thực dụng khác - theo quan điểm của INTP thì nó kém sôi động hơn so với những ý tưởng hay theo đuổi tri thức. Những người có loại tính cách này không có khó khăn để nhận
                    thấy các mô hình mà người khác không thể thấy - điều này làm cho họ trở thành nhà lý thuyết và nhà phân tích xuất sắc.</p>
                <p>Kiến thức được tích lũy là tài sản có giá trị nhất của bất kỳ INTP. Hãy tưởng tượng một bộ máy phức tạp không ngừng hấp thụ, xử lý và tạo ra tất cả các loại lý thuyết - đây là cách mà tâm trí INTP hoạt động. Những người mang tính cách
                    này có tư duy logic chính xác nhất trong tất cả các nhóm tính cách - họ dễ dàng nhận thấy ngay cả những điểm khác biệt nhỏ nhất giữa hai báo cáo hay phát biểu(tuyên bố), cho dù thời gian xảy ra giữa hai lần báo cáo đó là khá lâu. Thật
                    tồi tệ khi nói dối với một INTP, họ sẽ nhận ra ngay. Đôi khi họ có thể mơ mộng, nhưng điều này không phải là vì tâm trí của họ được nghỉ ngơi mà hoàn toàn ngược lại.</p>
                <p>Các INTP rất nhiệt tình và vô tư khi nói đến việc giải quyết các vấn đề - họ khai thác qua các chi tiết và sau đó phát triển một cách tiếp cận độc đáo và cuối cùng là một giải pháp khả thi. Các INTP thường là những người rất thông minh
                    và đầy nhận thức, họ vẫn có thể thiên vị trong một vài tình huống. Họ hoàn toàn thích những ý tưởng và lý thuyết mới và sẽ không bao giờ bỏ lỡ một cơ hội để thảo luận nó với người khác - tuy nhiên, quá trình tư duy không ngừng này
                    cũng làm cho họ trông khá trầm ngâm và tách biệt, cũng như việc tưởng tượng ra một cuộc tranh luận ngay trong tâm trí họ.</p>
                <p>Đôi khi các INTP cũng gặp khó khăn khi diễn giải suy nghĩ của họ với mọi người. Các INTP cũng có thể chuyển sang chủ đề khác trước khi đồng nghiệp hoặc đối tác của họ đã tìm ra những gì các INTP muốn nói.</p>
                <p>Các INTP không thể chịu được công việc thường ngày - họ thà đâm đầu vào các vấn đề lý thuyết khó khăn. Các INTP thực sự không bị giới hạn khi nói đến các lý thuyết bí ẩn - nếu nó chưa có giải pháp và chủ đề là rất thú vị, một INTP có thể
                    dành nhiều năm để cố gắng tìm ra giải pháp.</p>
                <p>Các INTP thường rất nhút nhát và miễn cưỡng khi nói đến gặp gỡ những người lạ. Tuy nhiên, INTP cũng có thể rất thân thiện và tự tin khi họ tương tác với những người mà họ biết rõ hoặc nói về những điều mà họ quan tâm. Các INTP linh hoạt
                    và thoải mái trong gần như tất cả các tình huống, trừ khi niềm tin hay suy luận logic của họ đang bị chỉ trích. Trong những trường hợp đó, các INTP có thể trở nên rất bảo thủ và tranh luận không mệt mỏi.</p>
                <p>Có nhiều điểm chung với các nhóm mang có đặc tính T (Thinking), các INTP không thực sự hiểu hay đánh giá cao các quyết định dựa trên cảm xúc hay ý kiến chủ quan. Theo quan điểm của họ, giải pháp tốt là phải dựa trên suy luận logic. Tuy
                    nhiên, điều này cũng gây khó khăn cho INTP trong việc hiểu được cảm xúc của người khác hoặc đáp ứng nhu cầu tình cảm của họ.</p>
                <p>Những người mang tính cách INTP rất thông minh và thậm chí lập dị. Những đặc điểm này, kết hợp với năng lực sáng tạo và suy nghĩ độc đáo, tạo nên một hỗn hợp rất mạnh mẽ. Không ngạc nhiên khi các INTP có nhiều phát minh trong khoa học.
                    INTP không quan tâm nhiều về những dự tính của xã hội và những mục tiêu "bình thường" khác như công việc an toàn - tuy nhiên, họ sẽ làm hết sức mình để tìm một môi trường mà tài năng sáng tạo và tiềm năng của họ có thể được thể hiện.</p>
                <p>Một trong số điểm yếu của INTP là luôn luôn lo sự thất bại, không có loại tính cách nào lo xa đến như vậy. Không tự tin như những người anh em INTJ hay ENTJ, các INTP luôn nghi ngờ về hành động của họ. Ngay cả khi INTP đang tranh luận
                    với ai đó, nhiều khả năng họ cũng đang tranh luận với chính bản thân mình.</p>
                <h3>Những người nổi tiếng mang tính cách INTJ:</h3>
                <p>- Socrates, Nhà triết học - Rene Descartes, Nhà triết học - Blaise Pascal, Nhà toán học, Nhà triết học - Isaac Newton, Nhà vật lý - Carl Jung, Nhà tâm lý học - Albert Einstein, Nhà vật lý - James Madison, cựu Tổng thống Mỹ - Dwight D.
                    Eisenhower, cựu Tổng thống Mỹ - Gerald Ford, cựu Tổng thống Mỹ - Tiger Woods, tay golf chuyên nghiệp</p>
                <h2>MỐI QUAN HỆ</h2>
                <p>Các INTP rất am hiểu, thông minh, nhưng rất khó để hiểu họ, và rất ít người có sự kiên nhẫn và quyết tâm để vượt qua lá chắn của INTP. Tâm trí của INTP không ngừng suy nghĩ với những ý tưởng, câu đố và các giải pháp - Ngược lại, giao tiếp
                    với người lạ thực sự là phiền toái đối với INTP. Do đó, INTP có xu hướng rất kén chọn bạn bè - nếu người khác có những sở thích khác nhau đáng kể với INTP hoặc chỉ đơn giản là không thể đương đầu với dòng bất ý tưởng tận của họ, thì
                    chắc rằng không thể trở thành bạn thân với INTP.
                </p>
                <p>Các INTP có một "vòng tròn" nhỏ những người bạn tốt. Nhiều loại tính cách tìm kiếm bạn bè để trò chuyện, hỗ trợ tinh thần, sự công nhận của xã hội,... Các INTP có xu hướng bỏ qua những điều tầm thường đó và điều này cũng tự nhiên hạn chế
                    một nhóm bạn bè tiềm năng khác. Những người mang tính cách INTP thường bị thu hút bởi các nhóm NT khác, những người cùng họ chia sẻ niềm đam mê thảo luận lý thuyết và các câu đố trí tuệ. Điều đáng nói là các INTP sẽ đánh giá cao và
                    tôn trọng bạn bè của họ rất nhiều, và làm việc chăm chỉ để giữ cho các mối quan hệ bền vững hơn.</p>
                <p>Các INTP thường không "ấm áp" hoặc giúp đỡ mọi người về mặt tình cảm. Nếu bạn gặp khó khăn, các INTP sẽ đưa ra các giải pháp hợp lý để giúp bạn, nhưng đừng mong đợi họ sẽ thấu hiểu cảm xúc của bạn hoặc biết cách để giải thích một điều
                    gì đó bằng cảm xúc chứ không phải lý trí. Điều này không có nghĩa là INTP không có cảm xúc và chỉ nên được xem họ như đi bộ bách khoa toàn thư - hoàn toàn ngược lại, các INTP có thể có những tình cảm rất mạnh, nhưng chúng có thể bị
                    kìm nén, ẩn giấu sâu bên trong, mọi người khó nhận biết được.</p>
                <p>Tình bạn của các INTP là rất rõ ràng, mạnh mẽ và chân thành, cả hai đều ko cố gắng kiểm soát lẫn nhau và ít khi có cảm xúc thái quá. Các INTP tán dương lòng trung thành và sự hiểu biết về những ý tưởng kích thích suy nghĩ, lời khuyên hợp
                    lý và đáng tin cậy của bạn bè - không dễ để trở thành bạn thân của một INTP, nhưng nếu bạn có xu hướng cố gắng, bạn sẽ thấy rằng một mối quan hệ như vậy là đáng nỗ lực.</p>
                <p>Tóm lại, các INTP sống một cuộc sống bên trong tâm trí của họ, nơi tràn ngập sự tưởng tượng và náo động. Vì vậy làm cho thế giới bên ngoài dường như lu mờ với họ. Điều này khiến cho họ thiếu động cơ để hình thành và duy trì những mối quan
                    hệ. Trong cuộc sống của mình, các INTP thường không mở rộng các mối quan hệ. Họ chỉ cần vài mối quan hệ thật thân thiết, những mối quan hệ mà họ thật sự quý trọng và nó có nhiều ảnh hưởng đến họ. Bởi trọng tâm sự chú ý của INTP chủ
                    yếu là hướng nội, với mục đích là tìm kiếm sự rõ ràng trong từng ý tưởng trừu tượng, nên họ thường không thể đồng điệu với những cảm xúc và nhu cầu của người khác. INTP thường thấy khó khăn để hiểu rõ về người khác, và thường thu mình
                    cho tới khi đối phương chứng tỏ rằng họ đáng được lắng nghe những suy nghĩ của INTP. Luôn đặt việc làm chủ kiến thức và sức mạnh của não bộ lên trên hết, họ sẽ chọn làm việc với những người mà họ cho là thông minh. Một khi INTP chịu
                    bắt đầu một mối quan hệ nào đó, họ rất thành thật và chung thủy, từ đó hình thành nên sự gắn bó về mặt tình cảm thuần khiết và minh bạch rõ ràng. Các INTP thường không hứng thú hoặc không hiểu biết nhiều về những trò tán tỉnh liên
                    quan tới những mối quan hệ. Tuy nghiên, nếu có vấn đề xảy ra mà INTP cho là không thể hòa giải được, họ sẽ từ bỏ mối quan hệ và không bao giờ quay lại nữa.</p>
                <h3>Các ưu điểm của INTP trong các mối quan hệ:</h3>
                <p>- Giàu trí tưởng tượng và sáng tạo.</p>
                <p>- Họ rất yêu quý những người xung quanh.</p>
                <p>- Hăng say làm những công việc họ có hứng thú.</p>
                <p>- Thường thoải mái và dễ dãi, luôn chiều theo ý mọi người.</p>
                <p>- Thường không quá đòi hỏi trước những nhu cầu cá nhân căn bản hàng ngày.</p>
                <p>- Thường không lo sợ trước những xung đột hoặc những lời chỉ trích.

                </p>

                <h3>Các nhược điểm của INTP trong các mối quan hệ:</h3>
                <p>- Không giỏi bày tỏ cảm xúc tự nhiên.</p>
                <p>- Không đồng cảm được với người khác một cách tự nhiên; phản ứng chậm trước những nhu cầu cảm xúc.</p>
                <p>- Không thành thạo những công việc thực tế, ví dụ như quản lí tiền bạc, trừ khi họ làm việc ở những mảng này.</p>
                <p>- Hay có xu hướng hoài nghi và không tin tưởng người khác.</p>
                <p>- Có xu hướng bỏ qua những tình huống xung đột bằng cách lờ chúng đi, hoặc sẽ nổi nóng với chúng trong cơn giận dữ.</p>
                <p>- Gặp khó khăn trong việc rời bỏ những mối quan hệ không tốt đẹp.</p>
                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của INTP trong công việc:

                </h3>
                <p>- Nhà tư tưởng trừu tượng và là nhà phân tích suất sắc. Các INTP rất giỏi trong việc tưởng tượng các mô hình và nhìn thấy những bức tranh lớn. Họ cũng có một khả năng ấn tượng đó là ngay lập tức nảy ra ý tưởng khác, liên kết chúng theo
                    những cách mà thường làm bối rối hầu hết những người mang loại tính cách khác.
                </p>
                <p>- Trung thực và thẳng thắn. Các INTP không hùa theo tập thể và không ẩn dụ hay vòng vo trong lời nói của họ. INTP sẽ nêu rõ quan điểm của họ và mong muốn những người khác cũng vậy.</p>
                <p>- Khách quan. Những người có tính cách INTP là những cá nhân rất lý trí và hợp lý, họ không bị cảm xúc chi phối trong quá trình ra quyết định. Do đó, họ rất tự hào về sự công bằng và vô tư của mình trong công việc.</p>
                <p>- Độc lập và quyết đoán. Những người có các loại tính cách INTJ rất lý trí khi nói đến việc phân tích tính hữu ích của phương pháp hay ý tưởng. Họ sẽ không thèm quan tâm nếu ý tưởng đó là bình thường hoặc được hỗ trợ bởi một nhân vật quyền
                    lực - nếu INTJ tin rằng nó không có ý nghĩa thì chỉ còn cách lập luận lý trí áp đảo họ thì mới có thể thuyết phục được. Sức mạnh này khiến cho họ có tài năng và sự khách quan khi đưa ra quyết định, đặc điểm này đã bộc lộ ngay khi họ
                    còn trẻ. INTJ cũng hoàn toàn có khả năng chịu được những cuộc xung đột, thường giữ bình tĩnh và lý trí trong những tính huống cao trào cảm xúc.</p>
                <p>- Giàu trí tưởng tượng và độc đáo. Tâm trí của một INTP luôn luôn suy nghĩ, luôn sản xuất những ý tưởng bất kể là ngày hay đêm. Không ngạc nhiên, khi các INTP không gặp khó khăn với các công việc đòi hỏi tính sáng tạo, giải pháp độc đáo.</p>
                <p>- Tư tưởng thông thoáng. Các INTP có tư tưởng thông thoáng và sẵn sàng chấp nhận những ý tưởng khác với họ, miễn là nó được tạo ra từ các sự kiện và logic. Hơn nữa, các INTP thường khá phóng khoáng khi nói đến chuẩn mực và truyền thống
                    xã hội, phán xét người khác chỉ dựa trên ý tưởng của họ.</p>
                <p>- Nhiệt tình. Các INTP có thể bỏ ra rất nhiều thời gian để cố gắng tìm ra một cái gì đó mà họ đang rất quan tâm Họ cũng sẽ có rất nhiệt tình khi thảo luận về chủ đề đó với người khác.</p>
                <h3>Điểm yếu của INTP trong công việc:</h3>
                <p>- Đãng trí. Các INTP có thể tập trung tất cả nỗ lực của họ vào việc phân tích một ý tưởng cụ thể, nhưng điều này thường làm cho họ bỏ qua mọi thứ khác. Họ có thể quên hoặc chỉ đơn giản là bỏ lỡ những thứ không có liên quan đến các đối
                    tượng quan tâm của họ.</p>
                <p>- Nghi ngờ bản thân. Các INTP có thể phân tích tuyệt vời, nhưng họ thường thiếu tính quyết đoán như các loại J . Một INTP có thể cảm thấy khá khó khăn để quyết định ý tưởng nào là tốt nhất, luôn luôn tìm kiếm thêm thông tin và nghi ngờ
                    kết luận của riêng mình.</p>
                <p>- Không nhạy cảm. Các INTP gặp khó khăn để "nhúng" cảm xúc vào trong quá trình ra quyết định của họ, họ tập trung tất cả nỗ lực vào việc cơ sở phải hợp lý. Do đó, họ thường có thể không nhạy cảm hoặc là bối rối khi nói đến đối phó với
                    một tình huống cần cảm xúc.</p>
                <p>- Rất riêng tư và khép kín. Các INTP thường không muốn để cho bất kỳ ai hiểu rõ tâm trí của họ, họ thích một mình. Họ thường nhút nhát trong môi trường tập thể (hay xã hội) và ngay cả bạn bè của INTP cũng rất khó khăn để tìm hiểu họ.</p>
                <p>- Có thể hay "lên lớp" người khác. Các INTP thường tự hào về kiến thức và khả năng lý luận sâu rộng của họ, nhưng họ có thể dễ dàng thất vọng khi cố gắng để mô tả suy nghĩ của mình cho người khác. Các INTP rất thích trình bày ý tưởng của
                    mình cho mọi người, nhưng giải thích như thế nào người khác hiểu được từ A đến Z là một vấn đề khác.</p>
                <p>- Không đưa quy định và các hướng dẫn. Các INTP cần rất nhiều sự tự do và rất ít tôn trọng các nguyên tắc và truyền thống, nó đặt ra giới hạn với trí tưởng tượng của họ. Những người có loại tính cách này chấp nhận ít an toàn nhưng bù lại
                    được tự chủ hơn.</p>
                <h3>Các nguyên tắc thành công</h3>
                <p>- Trau dồi ưu điểm: Hãy nhớ rằng điểm mạnh của bạn là sự thành thạo trong việc phân tích các vấn đề và tình huống một cách logic. Vì vậy, hãy luôn cho mình cơ hội để rèn luyện tài năng này. Bạn sẽ cảm thấy hạnh phúc thông qua những trải
                    nghiệm đó.</p>
                <p>- Khắc phục khuyết điểm: Không ai là hoàn hảo cả và bạn cũng vậy. Hãy chấp nhận điểm yếu (mà không tự trách cứ bản thân) sẽ tạo cho bạn sức mạnh để thay đổi cuộc sống theo hướng tốt đẹp hơn.
                </p>
                <p>- Biểu lộ những suy nghĩ của bạn: Thảo luận những ý tưởng và nhận thức của bạn với mọi người sẽ giúp bạn phát triển được trực giác hướng ngoại của mình, và cả sự nhận thức về thế giới. Việc bạn sử dụng những tính cách bổ trợ tốt đến đâu
                    rất quan trọng đối với sức khỏe và hạnh phúc toàn diện của bạn.</p>
                <p>- Thấu hiểu mọi người: Hãy nhớ rằng mỗi người đều có cuộc sống và quan điểm riêng. Họ có quyền được bày tỏ quan điểm. Hãy tìm hiểu xem họ thuộc nhóm người nào.</p>
                <p>- Lắng nghe mọi thứ: Đừng vội gạt bỏ mọi thứ ngay lập tức. Cứ để nó ngấm từ từ vào bạn, rồi từ đó bắt đầu phán xét. Cố gắng đừng loại bỏ những thứ ngoài tầm hiểu biết – chúng không phải là những thứ phi logic.</p>
                <p>- Hiểu rõ và thể hiện cảm xúc của mình: Có thể bạn sẽ gặp khó khăn trong việc hiểu cảm giác của bạn về một người khác. Việc thấu hiểu cảm giác đó rất quan trọng. Đừng lừa dối người khác với sự mâu thuẫn đó của bạn. Nếu chắc rằng bạn quý
                    trọng một người, hãy nói cho họ biết mỗi lần bạn nghĩ đến điều này. Đây là cách tốt nhất để họ cảm thấy an toàn khi ở trong phạm vi tác động của bạn, và cũng là một cơ hội để phát triển một mối quan hệ bền vững.</p>
                <p>- Hãy rời khỏi vùng an toàn: Hãy hiểu rằng cách duy nhất để vươn lên là thoát ra khỏi vùng an toàn của mình. Nếu cảm thấy không thoải mái với một ý tưởng hay một trường hợp nào đó vì bạn không chắc chắn làm thế nào để phản ứng, đó là điều
                    tốt! Đó là một cơ hội cho phép bản thân bạn trưởng thành hơn.</p>
                <p>- Hãy tôn trọng các nguyên tắc xã hội: Bạn nên chấp nhận rằng xã hội được bao hàm bởi những nguyên tắc cơ bản, và nó sẽ không thể phát triển nếu những nguyên tắc đó không được thừa nhận và ủng hộ. Trong nền dân chủ, người ta phải bỏ phiếu.
                    Gặp đèn đỏ, người ta phải ngừng xe. Nếu họ không bỏ phiếu chỉ vì đối với họ điều đó không quan trọng, vậy ai sẽ là người nắm quyền? Nếu họ không dừng xe lại khi gặp đèn đỏ bởi điều đó không nằm trong kế hoạch của họ, vậy thì làm sao
                    chúng ta có thể lái xe an toàn? Những ưu tiên và kế hoạch của bạn rất quan trọng, nhưng bạn phải thừa nhận rằng những vấn đề của thế giới bên ngoài cũng quan trọng không kém. Đừng gạt bỏ tầm quan trọng của những nguyên tắc, dù cho
                    chúng không có ảnh hưởng trực tiếp đến cuộc sống của bạn.</p>
                <p>- Hãy luôn nghĩ đến những điều tốt đẹp nhất: Đừng tự làm nản lòng mình bằng ý nghĩ mình thật tồi tệ. Nhớ rằng một thái độ tích cực sẽ mang đến cho bạn những hoàn cảnh tích cực.</p>
                <p>- Chịu trách nhiệm với chính bản thân: Đừng đổ lỗi cho người khác. Hãy suy nghĩ về cách giải quyết. Không ai có khả năng điều khiển cuộc sống của bạn hơn là chính bạn. Khi bạn đổ lỗi cho người khác nghĩa là bạn đã mất quyền chủ động.</p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>
                <p>Các INTP rất yêu thích các phương pháp lý thuyết và ý tưởng. Sự nghiệp tốt nhất của INTP xoay quanh đặc điểm độc đáo này tạo ra một lợi thế rất lớn, vì có rất ít loại tính cách khác yêu thích lý thuyết nhiều như INTP. Vì lý do đặc biệt
                    này, các INTP rất xuất sắc trong lĩnh vực nghiên cứu khoa học (đặc biệt là trong các lĩnh vực lý thuyết cao như vật lý hay hóa học), nhà toán học, thư ký kỹ thuật hoặc các nhà phân tích hệ thống..</p>
                <p>Các INTP rất thích tìm kiếm và phân tích các nguyên tắc và ý tưởng cơ bản. Có nhiều con đường sự nghiệp điển hình cho phép INTP sử dụng đặc điểm này, thậm chí điều này thường đi kèm với ứng dụng thực tế mà thực sự không thu hút INTP. Ví
                    dụ, các INTP có thể trở thành nhà chiến lược tuyệt vời của công ty, các nhà phân tích kinh doanh, nhà thiết kế video game, lập trình viên hoặc kỹ sư (nghề này đặc biệt thích hợp cho INTP do tình yêu của họ cho lý thuyết).</p>
                <p>Các INTP có xu hướng rất độc lập (thậm chí có phần lập dị), luôn đặt tiêu chuẩn rất cao cho bản thân và không thích quản lý người khác hoặc bị quản lý, đặc biệt là trong sự nghiệp của họ. Đặc điểm này không hấp dẫn trong thế giới doanh
                    nghiệp hiện đại và các INTP nên tránh đề cập đến chúng trong một cuộc phỏng vấn việc làm - tuy nhiên, nếu quản lý của họ tỏ ra là người sáng suốt và tư tưởng thông thoáng, thì INTP sẽ là một "máy phát" không biết mệt mỏi của những
                    ý tưởng tuyệt vời và độc đáo. Một số ngành nghề tốt nhất cho INTP tận dụng tốt những đặc điểm này có thể là tập trung vào pháp lý, tư vấn tự do hay con đường nghiên cứu pháp y hoặc thí nghiệm.</p>
                <p>Các INTP là "con sói cô độc" điển hình và sự nghiệp đặc trưng của INTP cũng xoay quanh đặc điểm này. Họ sống trong tâm trí của mình, yêu sự cô đơn và có xu hướng xem thường cuộc nói chuyện nhỏ và các nhu cầu thiết yếu xã hội khác. Các
                    INTP không thực sự hiểu hoặc thích thú với việc giao lưu tình cảm và ít khi dành nhiều thời gian để chuyện trò với đồng nghiệp hoặc khách hàng của họ. Vì những lý do đó, các nghề nghiệp đối mặt với khách hàng được xem là rất không
                    phù hợp với INTP - họ sẽ làm tốt hơn nhiều trong vị trí tập trung vào dữ liệu và lý thuyết chứ không phải là người. Ví dụ, các INTP có thể là luật sư xuất sắc, các nhà phân tích dữ liệu hoặc thậm chí là nhà báo, miễn là họ tìm thấy
                    thú vị trong lĩnh vực đó - đây là một số những sự lựa chọn nghề nghiệp tốt nhất cho những người có loại tính cách này.
                </p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.</p>
                <h3>Các INTP thường mang những đặc điểm:</h3>
                <p>- Yêu thích lý thuyết và những ý tưởng trừu tượng.</p>
                <p>- Coi trọng kiến thức và năng lực hơn những thứ còn lại.</p>
                <p>- Người tìm kiếm sự thật – Họ luôn muốn hiểu rõ vấn đề bằng cách phân tích những nguyên tắc và cấu trúc tiềm ẩn bên trong..</p>
                <p>- Độc lập và lập dị, có thể gọi là khác người.</p>
                <p>- Có tiêu chuẩn rất cao về hiệu suất làm việc – điều mà họ luôn áp dụng cho chính mình.</p>
                <p>- Không thích những chi tiết nhàm chán.</p>
                <p>- Hiệu quả tốt nhất khi làm việc một mình, và rất coi trọng sự tự do.</p>
                <p>- Sáng tạo và sâu sắc.</p>
                <p>- Không có mong muốn lãnh đạo hoặc đi theo người khác.</p>
                <p>- Thường thông minh và mưu trí.</p>
                <p>- Đặc biệt không quan tâm đến những ứng dụng thực tế của những sáng tạo của họ.</p>
                <p>- Sống chủ yếu bên trong tâm trí mình, dường như tách biệt và không muốn liên can tới những người xung quanh.</p>
                <p>- Luôn hướng tới tương lai.</p>
                <p>- Tin tưởng vào sự sáng suốt và ý kiến của chính mình trên hết.</p>

                <p>Dưới đây là các công việc phù hợp với INTP, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với INTP nhưng không phải chắc chắn) :</p>
                <p>- Nhà khoa học – đặc biệt trong nghiên cứu Vật Lí, Hóa Học.</p>
                <p>- Chiến lược gia.</p>
                <p>- Giáo sư đại học.</p>
                <p>- Nhà Toán học.</p>
                <p>- Nhiếp ảnh gia.</p>
                <p>- Chuyên viên thiết lập kỹ thuật.</p>
                <p>- Lập trình viên, nhà phân tích cấu trúc dữ liệu, người vẽ hoạt hình máy tính và chuyên gia máy tính.</p>
                <p>- Thẩm phán.</p>
                <p>- Luật sư</p>
                <p>- Kỹ sư.</p>
                <p>- Người bảo vệ pháp lý và viên kiểm lâm.</p>
                <p>Chuyên viên khám nghiệm hiện trường.</p>
            </div>
        </div>
    </div>
`
components.NĐHScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>
                <p>Có khoảng 3% dân số mang tính cách này, ENTJ có cá tính rất lôi cuốn, lý trí và nhạy bén. Họ rất giỏi lãnh đạo và truyền cảm hứng cho người khác. ENTJ là loại tính cách có khả năng lãnh đạo tốt nhất trong các loại tính cách. Theo ENTJ
                    thì "Không có gì là không thể nếu bạn quyết tâm". Đương nhiên, các ENTJ hiếm khi gặp khó khăn khi thuyết phục người khác rằng mục tiêu lựa chọn bởi ENTJ cũng nên trở thành một trong những mục tiêu cá nhân của họ.</p>
                <p>- Các ENTJ là những người lãnh đạo bẩm sinh. Thế giới của họ luôn tràn ngập những tiềm năng, nó bày ra trước mắt họ đủ loại thử thách để chinh phục, họ rất muốn trở thành người chinh phục các thử thách đó. Họ có xu hướng làm nhà lãnh đạo,
                    vì họ nắm bắt rất nhanh các vấn đề phức tạp, có khả năng tiếp thu một lượng lớn những thông tin khách quan, và cuối cùng là sự nhạy bén và tính quyết đoán khi đưa ra quyết định. ENTJ là những người luôn "chịu trách nhiệm".</p>
                <p>- Các ENTJ có rất nhiều tài năng vì vậy quyền lực cá nhân của họ rất lớn. ENTJ là những nhà tư duy sáng tạo, quyết đoán và có tầm nhìn xa với một khả năng tuyệt vời trong việc biến những lý thuyết và tiềm năng trở thành những kế hoạch
                    hành động cụ thể và rõ ràng. Họ có cá tính nổi trội mạnh mẽ, và có đủ mọi công cụ để đạt được bất cứ mục tiêu nào mà họ đặt ra.</p>
                <p>- Các ENTJ có sức mạnh cá nhân lớn và phong thái để giúp họ đạt được mục tiêu đề ra. Tuy nhiên điều này cũng có thể là tác nhân của sự tự cô lập và tự đề cao bản thân, các ENTJ sẽ phải cố tránh điều này.</p>
                <p>- Trong thế giới của ENTJ không có chỗ cho sai lầm. Họ không thích nhìn thấy những sai sót, đặc biệt là những sai sót bị lập lại, và họ không thể chịu đựng nổi sự kém cỏi, thiếu khả năng. ENTJ có thể trở nên rất cáu gắt khi lòng kiên nhẫn
                    của họ bị thử thách trong những trường hợp trên, vì họ vốn dĩ khó cảm thông với cảm xúc của người khác, và hơn thế nữa họ tin rằng họ chẳng việc gì phải thay đổi các phán xét của mình để thích ứng với cảm xúc của người khác. Các ENTJ,
                    cũng giống như các kiểu tính cách khác, gặp khó khăn khi nhìn nhận sự việc dưới những quan điểm khác với của mình. Tuy nhiên, các ENTJ không giống như những kiểu tính cách khác là họ không có đủ kiên nhẫn cho những người không cùng
                    quan điểm với họ.</p>
                <p>- Các ENTJ cần phải học cách lắng nghe và thừa nhận ý kiến của mọi người, cũng như giá trị của việc thấu hiểu cảm giác của họ. Một khi vẫn chưa nhận thức được các vấn đề này, các ENTJ có thể trở nên độc đoán, đáng sợ và hống hách. Đây
                    là một vấn đề lớn đối với các ENTJ mỗi khi họ cảm thấy thiếu thốn những thông tin quan trọng và sự hợp tác từ người khác. Trong cuộc sống riêng tư của ENTJ, điều này có thể khiến cho họ trở nên độc đoán trong vai trò vợ/chồng hoặc
                    cha/mẹ.
                </p>
                <p>- Các ENTJ rất coi trọng sự nghiệp, việc họ thích hợp với thế giới công sở là điều tất yếu. Họ luôn quan sát môi trường xung quanh để tìm ra các vấn đề tiềm năng mà họ có thể biến nó trở thành những giải pháp. ENTJ có tầm nhìn xa trông
                    rộng, và thường rất thành công trong việc đưa ra các giải pháp để thay đổi tình thế – đặc biệt là những vấn đề mang tính tập thể. Họ thường rất thành công trong môi trường kinh doanh, vì luôn nỗ lực hết mình trong vai trò lãnh đạo.
                    Các ENTJ nỗ lực không ngừng trong công việc, và luôn cảm thấy hứng thú trong việc vạch ra hướng đi cho tổ chức của mình. Với các đặc điểm nổi trội đó, các ENTJ đã trở thành những nhà lãnh đạo bẩm sinh trong tập thể.</p>
                <p>- Các ENTJ rất thích tương tác với con người. Họ là những người hướng ngoại, rất năng động và chủ yếu bị kích thích bởi các tác nhân bên ngoài. Không có gì làm cho họ thích thú và thỏa mãn bằng một cuộc tranh luận sôi nổi và đầy thử thách.
                    Các ENTJ đặc biệt tôn trọng những người dám đấu tranh và bảo vệ quan điểm của mình. Tuy nhiên, rất ít người dám làm như vậy vì các ENTJ là những người có sức thuyết phục và phong thái mạnh mẽ, họ cực kỳ tự tin vào bản thân mình cũng
                    như tin mình có một khả năng giao tiếp xuất sắc. Thậm chí những người cực kỳ tự tin vào khả năng của mình đôi khi cũng phải nghi ngờ quan điểm của họ khi tranh luận với các ENTJ.</p>
                <p>- Các ENTJ rất mạnh mẽ và quyết đoán. Họ ra quyết định rất nhanh, và cũng rất giỏi trong việc diễn đạt ý kiến và quyết định của mình với mọi người. Khi các ENTJ chưa phát triển đủ khả năng trực giác, họ thường có những quyết định vội vàng
                    mà chưa tìm hiểu mọi mặt của vấn đề và các hướng giải quyết khả thi khác. Mặt khác, một ENTJ chưa phát triển đầy đủ về mặt tư duy thì sẽ gặp khó khăn trong việc dùng lập luận logic để suy luận, thấu hiểu vấn đề, và họ thường đưa ra
                    những quyết định thiếu chính xác. Trong những trường hợp đó, ENTJ có thể có những ý tưởng sáng tạo và sự sáng suốt về tình huống hiện tại, nhưng lại không đủ khả năng quyết định nên hành động như thế nào, hoặc hành động của họ có thể
                    rất mâu thuẫn. Các ENTJ khi chưa phát triển hoàn thiện thường trở nên độc tài, thô lỗ - tự ý đưa ra quyết định hay mệnh lệnh mà không cần có lý do chính đáng, và không quan tâm đến ý kiến của những người có liên quan.</p>
                <p>- Mặc dù các ENTJ khó đồng cảm với mọi người nhưng đôi khi họ bị cảm xúc chi phối mạnh mẽ. Sự đa cảm này nó có tác động khá lớn tới các ENTJ, cho dù họ luôn tìm cách che giấu vì các ENTJ biết rằng đó chính là điểm yếu của họ. Do họ không
                    giỏi làm việc dựa trên yếu tố cảm xúc, nên đôi khi họ đưa ra những phán xét chủ quan và tin vào những cảm xúc không căn cứ, không phù hợp, những điều đó sẽ khiến các ENTJ gặp rắc rối - đôi khi là những vấn đề nghiêm trọng.</p>
                <p> Các ENTJ muốn ngôi nhà mình ở phải khang trang, được trang bị đầy đủ tiện nghi và phải hoạt động tốt. ENTJ rất coi trọng việc giáo dục con cái và định hướng tương lai rõ ràng cho con, họ mong muốn có một mối quan hệ thân thiết và khắng
                    khít với người bạn đời của mình. Trong gia đình, ENTJ cũng muốn nắm quyền lãnh đạo giống như khi họ ở công ty. Các ENTJ cặp đôi tốt nhất với những người có nhận thức về bản thân rõ ràng, và là kiểu người thiên về lý trí. Các ENTJ luôn
                    đặt công việc lên trên hết nên việc họ thường xuyên vắng nhà là một điều không thể tránh khỏi.</p>
                <h3>Những người nổi tiếng mang tính cách ENTJ:</h3>
                <p>- Napoleon Bonaparte – Hoàng đế Pháp.</p>
                <p>- Julius Caesar – Đại tướng và cha nuôi của Augustus.</p>
                <p>- Margaret Thatcher – Thủ tướng anh - "Người đàn bà thép".</p>
                <p>- Garry Kimovich Kasparov – Đại kiện tướng cờ vua người Nga.</p>
                <p>- Alexander Hamilton – Nhà khai quốc, chính trị gia, luật sư, chuyên gia tài chính người Mỹ.</p>
                <p>- Carl Sagan - Nhà vật lý thiên văn người Mỹ.</p>
                <h2>MỐI QUAN HỆ</h2>
                <p>Các ENTJ tìm kiếm hai điều chính trong tình bạn, đó là sự truyền cảm hứng và phát triển cá nhân. Không giống như nhiều nhóm tính cách khác, họ không thực sự cần hỗ trợ nhiều về tinh thần hay sự trấn an. Tuy nhiên, ENTJ thích thú các ý
                    tưởng hấp dẫn bí ẩn, các cuộc thảo luận có ý nghĩa với những người bạn thân. Những người có loại tính cách này rất giỏi nhận ra các cơ hội học tập và phát triển - và họ luôn luôn cố gắng khuyến khích bạn bè của họ cùng tham gia.
                </p>
                <p>Nhìn chung, ENTJ dành khá nhiều thời gian để chú ý đến tình bạn. Không dễ để trở thành bạn thân của ENTJ, họ là những con người có ý chí mạnh mẽ, rất thông minh, giỏi tranh luận và chỉ trích. Không phải ai cũng có thể chịu đựng được một
                    cuộc tranh luận với họ - và điều này là lý do chính tại sao ENTJ tôn trọng và đánh giá cao những người có khả năng bảo vệ quan điểm của mình. Điều đáng nói, ENTJ không hiểu và cũng không tôn trọng các lý do và hay thỉnh cầu mang tính
                    tình cảm. Họ là những con người rất lý trí, chỉ có thể chấp nhận một quan điểm khác nếu nó được chứng minh bởi sự logic và hợp lý.</p>
                <p>Đương nhiên, ENTJ cũng gặp khó khăn khi hỗ trợ người khác về mặt tình cảm. Đối phó với cảm xúc chắc chắn không phải là điểm mạnh của họ, và họ làm mọi cách để tránh các tình huống cảm xúc. ENTJ thích thách thức bạn bè của họ, và chất vấn
                    các kết luận của họ. Đây là loại tính cách đặc biệt dễ bị chỉ trích và có xu hướng rất cá nhân.</p>
                <p>ENTJ có xu hướng đặt sự trau dồi và phát triển bản thân lên trên mọi thứ khác khi nói đến tìm kiếm và xây dựng mối quan hệ cá nhân, thật đáng nghi ngờ khi họ sẽ theo đuổi các mối quan hệ mà không cung cấp những cơ hội như vậy. ENTJ bị
                    lôi cuốn bởi các nhóm trực giác khác ( những nhóm có đặc điểm I ) vì những người này sẽ tạo cho họ cơ hội để động não và đưa ra giả thuyết về những điều mà họ cho là quan trọng.</p>
                <p>Tóm lại, các ENTJ luôn nhiệt tình và nỗ lực hết mình trong các mối quan hệ của mình. Phương châm của ENTJ là "Học, học nữa, học mãi" nên họ sẽ cố gắng tiếp thu và biến mọi thứ thành bài học kinh nghiệm của mình. Đối với các mối quan hệ,
                    các ENTJ sẽ không ngừng học hỏi và xem lại các nguyên tắc và tính chất của các mối quan hệ đó. Họ vô cùng trân trọng các mối quan hệ, nhất là các mối quan hệ mang lại cho họ nhiều thử thách mới và kích thích tinh thần học hỏi. Trong
                    quá trình tiếp thu kiến thức đó, nó đã góp phần nâng cao tình cảm đích thực và sự hài lòng cho các ENTJ. Họ không thích các mối quan hệ chẳng mang lại cho họ cơ hội để học hỏi và phát triển. Trong cuộc sống, các ENTJ muốn được là người
                    nhận trách nhiệm trong các mối quan hệ. Trong giao tiếp hàng ngày ENTJ thường thẳng thắn nên dễ gây xung đột, đôi khi họ còn chỉ trích thậm tệ và gây khó khăn cho người khác. Người có mối quan hệ mật thiết với các ENTJ cần phải thật
                    mạnh mẽ, đối với những người như vậy, ENTJ sẽ mang lại cho họ nhiều điều thú vị.</p>
                <h3>Các ưu điểm của ENTJ trong các mối quan hệ:</h3>
                <p>- Ham học hỏi và không ngừng trau dồi kiến thức và phát triển bản thân trong mọi khía cạnh cuộc sống</p>
                <p>- Cực kỳ thẳng thắn và minh bạch</p>
                <p>- Rất nghiêm túc với những lời cam kết của mình</p>
                <p>- Có khả năng chấp nhận những phê bình mang tính xây dựng</p>
                <p>- Biết quản lý tiền bạc</p>
                <p>- Khả năng diễn thuyết trôi chảy

                </p>
                <p>- Nhiệt huyết và mạnh mẽ</p>
                <p>- Thường có cảm xúc rất mãnh liệt và cũng có những lúc hay đa cảm</p>
                <p>- Rất quan tâm tới những ý tưởng và suy nghĩ của người khác một cách chân thành</p>
                <p>- Tư tưởng công tâm và luôn quan tâm đến việc làm những điều đúng đắn</p>
                <p>- Có thể cắt đứt một mối quan hệ mà không nuối tiếc</p>
                <p>- Có thể chuyển hóa một tình huống xung đột thành một bài học tích cực</p>
                <p>- Có khả năng đưa ra những hình thức kỷ luật</p>
                <p>- Luôn đặt ra một chuẩn mực và kỳ vọng cao (vừa là điểm mạnh và cũng là điểm yếu của các ENTJ)</p>

                <h3>Các nhược điểm của ENTJ trong các mối quan hệ:</h3>
                <p>- Rất nghiêm khắc và nóng nảy với sự cẩu thả và bất tài</p>
                <p>- Nếu đang không vui, họ có thể trở nên vô cảm, độc đoán và thô lỗ</p>
                <p>- Luôn đặt ra một chuẩn mực và kỳ vọng cao (vừa là điểm mạnh và cũng là điểm yếu của các ENTJ)</p>
                <p>- Dễ rơi vào những cuộc tranh luận "thắng-thua"</p>
                <p>- Niềm đam mê những cuộc tranh luận đôi khi khiến họ trở nên thái quá</p>
                <p>- Có xu hướng gây khó dễ và thích đối đầu với người khác</p>
                <p>- Có thể trở nên áp đảo và gây sợ hãi cho người khác</p>
                <p>- Gặp khó khăn trong việc lắng nghe người khác</p>
                <p>- Hay chê bai những ý kiến và thái độ của người khác nếu điều đó không đúng với suy nghĩ của họ</p>
                <p>- Không dễ đồng điệu với cảm xúc và phản ứng của người khác</p>
                <p>- Không nhạy trong việc tán thưởng hoặc nhận ra nhu cầu muốn được tán thưởng của người khá</p>
                <p>- Gặp khó khăn trong việc bày tỏ tình cảm và sự yêu mến, đôi khi điều này gây bất tiện và không thích hợp</p>
                <p>- Luôn muốn nhận lãnh trách nhiệm hơn là chia sẻ trách nhiệm với người khác</p>
                <p>- Có xu hướng kiểm soát mọi thứ</p>
                <p>- Họ sẽ bùng nổ với một cơn giận dữ khủng khiếp nếu đang bị stress nặng</p>
                <p>- Dễ đưa ra những quyết định hấp tấp</p>
                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của ENTJ trong công việc:

                </h3>
                <p>- Rất tự tin. Các ENTJ rất tin tưởng vào khả năng của mình và không ngần ngại bày tỏ ý kiến ​​của mình. Họ muốn trở thành trung tâm của sự chú ý.
                </p>
                <p>- Nhà tư tưởng chiến lược. ENTJ không có khó khăn để lập kế hoạch dài hạn và tiếp cận vấn đề từ nhiều góc độ khác nhau.</p>
                <p>- Đầy nghị lực. Những người có tính cách này rất thích lãnh đạo mọi người và lên kế hoạch hành động. Điều này tiếp thêm sinh lực và thúc đẩy họ.</p>
                <p>- Lôi cuốn và đầy cảm hứng. ENTJ rất giỏi thuyết phục và truyền cảm hứng cho những người khác, nhờ vào sự tự tin và mạnh mẽ quan điểm của mình.</p>
                <p>- Rất hiệu quả. ENTJ rất ghét không hiệu quả, không hợp lý và sự lười biếng, họ tìm kiếm và "nhổ tận gốc" những hành vi như vậy ở bất cứ nơi nào họ đến.</p>
                <p>- Ý chí mạnh mẽ. ENTJ là những cá nhân rất quyết tâm, họ hiếm khi bỏ cuộc và từ bỏ tầm nhìn của họ, bất kể mọi sự chống đối.</p>
                <h3>Điểm yếu của ENTJ trong công việc:</h3>
                <p>- Bướng bỉnh và ngỗ ngược. ENTJ có thể khá cứng nhắc và tìm cách giành chiến thắng trong tất cả các cuộc bàn thảo và tranh luận, họ làm hết sức mình để quảng bá tầm nhìn và ý tưởng của họ.</p>
                <p>- Kiêu ngạo. Những người có loại tính cách này thường tích lũy rất nhiều kiến thức và đưa ra quyết định với đầy đủ thông tin - tuy nhiên, họ cũng có thể coi thường những người kém trình độ hoặc không muốn tranh luận điểm của họ.</p>
                <p>- Có thể lạnh lùng và tàn nhẫn. ENTJ bị ám ảnh với hiệu quả và hợp lý khi nói đến công việc và mục tiêu nghề nghiệp. Họ thường sẽ bỏ qua hoàn cảnh cá nhân và bỏ qua sự nhạy cảm và cảm xúc là điều không liên quan..</p>
                <p>- Xử lý cảm xúc kém. ENTJ rất lý trí - không đáng ngạc nhiên, họ có thể sẽ gặp khó khăn để hiểu và thể hiện cảm xúc của họ. Họ cũng có thể vô tình làm tổn thương đối tác và bạn bè của họ trong các tình huống cần tình cảm.</p>
                <p>- Thiếu kiên nhẫn. ENTJ có khả năng đưa ra quyết định nhanh và có thể mất kiên nhẫn rất nhanh chóng khi làm việc với những người cần nhiều thời gian để đưa ra quyết định.</p>
                <p>- Không khoan dung. Những người có loại tính cách này không đánh giá cao những ý tưởng được dựa trên lập luận cảm xúc hay các vấn đề diễn thuyết mà họ cho là không quan trọng - ENTJ sẽ không ngần ngại thể hiện điều đó với mọi người xung
                    quanh.
                </p>
                <h3>Các nguyên tắc thành công</h3>
                <p>- Trau dồi ưu điểm của mình: Tận dụng cơ hội để cho người khác thấy được khả năng đánh giá tình huống và cách mà bạn hoàn thành công việc một cách tốt đẹp. Hãy tận dụng khả năng lãnh đạo một cách hiệu quả .</p>
                <p>- Khắc phục khuyết điểm: Nên nhớ rằng không ai hoàn hảo và bạn cũng vậy, bạn cũng có những khuyết điểm của mình. Quan điểm của bạn không phải là tất cả. Mọi việc diễn ra như thế nào có thể không ảnh hưởng tới bạn, nhưng nó có thể tác động
                    tới người khác. Hãy thử cho phép mọi việc diễn ra một cách tự nhiên và rút ra bài học cho mình .</p>
                <p>- Coi trọng nhu cầu tìm kiếm những người có cùng quan điểm: Đừng mong mình sẽ trở thành người đa cảm hay rất nồng nhiệt. Các mối quan hệ vững chắc nhất của bạn với người khác nó bắt nguồn từ lý trí, chứ không phải từ tình cảm hay cảm xúc.
                    Bạn nên chú ý đến nhu cầu tình cảm của người khác, hãy thể hiện tình cảm và sự tôn trọng chân thành đối với họ bằng chính con người thật của bạn. Hãy luôn là chính mình! Khi đó bạn sẽ tìm được bạn đồng hành trên con đường chinh phục
                    thử thách .</p>
                <p>- Dành thời gian để tìm hiểu suy nghĩ của mọi người: Bạn cần bày tỏ quan điểm của mình với mọi người và quan tâm hơn những suy nghĩ của họ về tình huống đó. Khi đó bạn có thể sẽ xem xét lại các nhu cầu của họ một cách khách quan, và nếu
                    như họ cũng đồng quan điểm với bạn thì nó sẽ mang lại một sự hòa hợp tốt trong công việc cũng như trong các mối quan hệ .</p>
                <p>- Bạn phải tự chịu trách nhiệm với chính bản thân mình: Đừng bao giờ đổ lỗi những rắc rối của bạn lên đầu người khác. Hãy cố gắng tự tìm kiếm giải pháp. Không một ai có khả năng hiểu bạn và kiểm soát cuộc sống của bạn tốt hơn bản thân
                    bạn.
                </p>
                <p>- Dành nhiều thời gian để phân tích mọi mặt của vấn đề: Bạn đừng bỏ qua các đánh giá mang tính trừu tượng, có vẻ khó hiểu hay những đánh giá thẩm mỹ, tình cảm phức tạp từ người khác hay từ chính bản thân bạn. Bạn nên cố gắng tìm hiểu về
                    các vấn đề đó vì nó có ảnh hưởng đến công việc của bạn. Nếu bạn thấy căng thẳng thì nên tạm gác công việc qua một bên, thôi suy nghĩ và lo lắng, hãy để cho tinh thần bạn thư thái khi đó các ý tưởng ấy sẽ tự đến với bạn, đôi khi các
                    ý tưởng hay giải pháp tốt nó đến lúc bạn đang đi bộ thư giãn, hay đang tắm...</p>
                <p>- Khi mất bình tĩnh, bạn sẽ thất bại: Năng lực tiềm tàng và những hiểu biết sáng suốt của bạn chính là một thế mạnh, nhưng nó sẽ trở nên nguy hiểm nếu sử dụng không đúng và bạn có thể bị rơi vào trạng thái cảm xúc mà bạn không thể kiểm
                    soát được. Nên nhớ rằng không phải ai cũng có cách nhìn sự việc giống như bạn và có năng lực cá nhân mạnh như bạn, một khi nỗ lực giúp đỡ họ của bạn bị thất bại, điều đó sẽ khiến cho bạn tức giận và bỏ rơi. Bạn không nên xử sự như
                    vậy. Hãy điều chỉnh suy nghĩ của mình, và cho phép người khác quyền riêng tư và khi đó bạn sẽ trưởng thành hơn.</p>
                <p>- Nhìn nhận các điểm khác biệt của người khác một cách tích cực: Đừng quá soi mói những mặt hạn chế của người khác, bạn sẽ làm họ khó chịu đấy. Họ đang cần sự giúp đỡ của bạn và bạn cần họ để thấu hiểu vấn đề. Bạn có thể giỏi hơn họ trong
                    một số lĩnh vực, và ngược lại, họ cũng có thể giỏi hơn bạn ở một vài lĩnh vực khác. Bạn hãy biến những cảm xúc của người khác thành sức mạnh chứ đừng nên xem nó là một trở ngại đối với bạn.</p>
                <p>- Hãy luôn khiêm tốn: Bạn nên đánh giá bản thân mình nghiêm khắc như cách bạn đánh giá mọi người.</p>
                <p>- Đừng để bị ám ảnh, hãy suy nghĩ tích cực và luôn lạc quan: Nhận ra những giá trị mà cuộc sống đã dành riêng cho bạn, bạn bè và gia đình bạn. Tự hào vì mình là một người tốt và không cho phép những tác nhân bên ngoài kiểm soát bạn. Cố
                    gắng thư giãn và tận hưởng từng khoảng khắc hạnh phúc bên mọi người. Không có gì quan trọng hơn hạnh phúc do chính bạn tạo ra.</p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>
                <p>Sự nghiệp điển hình của ENTJ được xác định bởi vài đặc điểm mà hầu hết mọi người tiếp xúc với ENTJ đều có thể nhận ra đó là: nghị lực, quyết tâm và lãnh đạo. Những đặc điểm này có xu hướng đẩy ENTJ hướng tới một vài nghề nghiệp nhất định
                    và cũng hạn chế phần nào sự lựa chọn của họ, tuy nhiên, những người có loại tính cách này không hề luyến tiếc về điều đó.</p>
                <p>ENTJ rất thích việc chuyển các ý tưởng thành kế hoạch hành động, đây là một trong những ưu điểm của họ cũng là những nghề nghiệp điển hình mà họ chú tâm tới. Họ hướng đến tương lai và có một mức độ tự tin hiếm thấy so với các nhóm tính
                    cách khác. Những đặc điểm này khiến cho ENTJ xuất sắc trong các vị trí: giám đốc điều hành, doanh nhân, chiến lược gia của công ty - họ sẽ có đủ nghị lực và quyết tâm để triển khai một ý tưởng ngay cả khi có nhiều trở ngại trong con
                    đường của mình.</p>
                <p>Những người có loại tính cách này thường có kỹ năng lãnh đạo tuyệt vời và cực kỳ ham hiểu biết. Họ không ưa thiếu năng lực, sự lười biếng và kém hiệu quả. Điều này làm cho ENTJ rất nghiêm khắc và đòi hỏi khắt khe, nhưng cũng là nhà quản
                    lý cực kỳ hiệu quả và khách quan. Do đó ENTJ có xu hướng trở thành: luật sư, thẩm phán, quản trị kinh doanh hoặc giáo sư đại học.</p>
                <p>ENTJ là một người giao tiếp xuất sắc (đặc biệt là bằng lời nói), họ thích cấu trúc và trật tự, nhưng rất ghét nhiệm vụ thường nhật. Điều này có nghĩa là ENTJ có tầm nhìn xa trông rộng, họ phù hợp với vị trí lãnh đạo chứ không phải là vị
                    trí quản lý hay quản trị công việc ngày qua ngày. Sự nghiệp điển hình của ENTJ phải có liên quan đến lãnh đạo. Có một điều chắc chắn rằng, ENTJ không bao giờ chấp nhận một ví trí nhân viên cấp thấp trong một thời gian dài.</p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.</p>
                <h3>Các ENTJ thường mang những đặc điểm:</h3>
                <p>- Nhà lãnh đạo bẩm sinh</p>
                <p>- Muốn mọi thứ phải luôn có tổ chức, ngăn nắp và kỷ luật</p>
                <p>- Luôn muốn biến lý thuyết thành thực tiễn</p>
                <p>- Tự tin vào bản thân</p>
                <p>- Có kiến thức sâu rộng</p>
                <p>- Khả năng giao tiếp xuất sắc</p>
                <p>- Không thích sự kém hiệu quả và bất tài</p>
                <p>- Định hướng tương lai rõ ràng</p>
                <p>- Rất quyết đoán</p>
                <p>- Không thích những công việc thường nhật hoặc quá chi tiết

                </p>
                <p>Các ENTJ rất phù hợp với vai trò tổ chức và lãnh đạo. Họ có khả năng nhận biết, phân tích rắc rối, cũng như đưa ra các giải pháp sáng tạo cho sự tồn tại và phát triển của tổ chức trong ngắn hạn hay dài hạn. Các ENTJ rất muốn trở thành
                    người dẫn đầu vì vậy họ cảm thấy bị gò bó khi phải là người phục tùng người khác. Họ thích lãnh đạo, chỉ huy và cần phải đặt họ ở vị trí lãnh đạo mới phát huy hết được các khả năng đặc biệt của họ.</p>


                <p>Dưới đây là các công việc phù hợp với ENTJ, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ENTJ nhưng không phải chắc chắn) :</p>
                <p>- Doanh nhân..</p>
                <p>- Xây dựng tổ chức/doanh nghiệp/công ty.</p>
                <p>- Giám đốc điều hành.</p>
                <p>- Quản trị doanh nghiệp.</p>
                <p>- Cố vấn về máy tính.</p>
                <p>- Quan tòa, luật sư.</p>
                <p>- Giảng viên</p>
            </div>
        </div>
    </div>
`
components.NNXScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>
                <p>Có khoảng 3% dân số mang loại tính cách này, các ENTP rất thích tranh luận, họ không quan tâm đang tranh luận về cái gì, miễn là nó thú vị. Họ có thể không thực sự ủng hộ ý tưởng họ đang tranh cãi, nhưng có thể quyết định đi ngược lại
                    quan điểm hiện hành, họ xem điều này như là một bài tập tinh thần. Các ENTP rất nhanh trí và độc đáo, mang đến cho họ một lợi thế lớn trong cuộc tranh luận, học thuật và chính trị - tuy nhiên, họ cũng có xu hướng làm rất tốt trong
                    nhiều lĩnh vực khác đòi hỏi phải sẵn sàng để thách thức những ý tưởng hiện có và sắp xếp nhiều luận cứ</p>
                <p>Một trong những lý do tại sao các ENTP có thể giữ lý lẽ của họ trong gần như mọi cuộc tranh luận là kiến ​​thức và khả năng nhanh chóng nghĩ ra ý tưởng khác của họ, tạo các kết nối độc đáo trong tranh luận. Họ làm điều này với tốc độ rất
                    nhanh và không cần nhiều sức lực - Sự tấn công của lập luận đến từ các ENTP dễ gây bối rối cho đối thủ của họ. Điều này có thể là tốt hoặc xấu, tùy thuộc vào ENTP đang tranh cãi với ai - họ có thể dễ dàng xóa sạch lý lẽ của đối thủ
                    trong một cuộc tranh luận về chính trị, nhưng gây ra căng thẳng to lớn trong một mối quan hệ tình cảm nếu họ cố gắng làm điều đó với đối tác của họ .</p>
                <p>Các ENTP cần phải cẩn thận để giữ cho sở thích tranh luận nằm trong vòng kiểm soát, như sự tiến triển thực tế thường quan trọng hơn sự thật. Những người có loại tính cách này biết rất rõ điều này, nhưng họ cũng cần phải hiểu rằng những
                    gì họ xem như thú vui có thể gây tổn thương cho người khác..</p>
                <p>Các ENTP có xu hướng sử dụng sự thông minh của mình một cách rất cụ thể và điều này đặc biệt đáng chú ý trong môi trường chuyên nghiệp - họ thích động não và phác thảo tất cả các lựa chọn, nhưng họ cố tránh tham gia vào việc triển khai
                    thực tế. Một lần nữa, một đặc điểm như vậy có thể rất có giá trị trong các tình huống nhất định, nhưng gây ra căng thẳng tại nơi làm việc, ENTP có thể được xem là người có nhiều ý tưởng, nhưng không sẵn sàng làm việc chăm chỉ để thực
                    hiện ý tưởng của họ. ENTP cũng có xu hướng không tuân thủ, thích thách thức quy định hiện hành và các thủ tục, những điều này không thể thay đổi họ, họ muốn xóa bỏ mô hình hiện tại và lên mô hình mới</p>
                <p>Các ENTP thường thích làm việc với những ý tưởng phức tạp và các thử thách khó khăn. Họ thích những suy nghĩ lớn và làm tốt nó - để có được cá tính này có thể mất một thời gian dài cho một ENTP, khi đó tính cách mạnh mẽ này sẽ được phát
                    huy và một khi họ làm, những dòng ý tưởng sẽ không ngừng tuôn ra. Tuy nhiên, ENTP vẫn sẽ cần phải dựa vào người khác để sắp xếp, triển khai.</p>
                <p>Các ENTP rất thẳng thắn và trung thực. Họ không quan tâm về việc được xem là nhạy cảm hay từ bi, vì vậy sự thẳng thắn, có gì nói đó của họ đôi khi khá nhẫn tâm. Họ nói những gì họ nghĩ mà không vòng vo - "Nói toạc móng heo", họ không thích
                    những người nói vòng vo, gián tiếp, đặc biệt là khi yêu cầu ENTP làm việc gì đó. Do đó, các ENTP thường được tôn trọng, nhưng không nhất thiết phải thích - nhiều người có thể chịu được sự nói dối, họ thực sự hy vọng và cần phải nghe
                    một lời nói dối trong tình huống nhất định. Xã hội có xu hướng đặt cảm xúc, nhạy cảm và thoải mái trên sự thật khó chịu - điều này có thể làm nhiều ENTP gặp khó khăn, thất bại.
                </p>
                <p>Nói chung, những người mang tính cách ENTP là rất có lý trí và họ không cảm nhận được nhiều giá trị trong cảm xúc hay lý lẽ tình cảm. Do đó, họ thật tuyệt vời khi nói đến tư duy logic, nhưng có khả năng gặp khó khăn trong việc thấu hiểu
                    cảm xúc - sự tự tin và hài hước của ENTP thường rất hấp dẫn, nhưng họ có thể dễ dàng (và thường vô tình) làm tổn thương một cá nhân thuộc về một loại tính cách khác nhau. Loại F là đặc biệt dễ bị tổn thương trong tình huống như vậy
                    khi họ không thích chỉ trích và tranh cãi, trong khi ENTP phát triển mạnh về điều này.</p>

                <h3>Những người nổi tiếng mang tính cách ENTP:</h3>
                <p>- Alexander Đại đế.</p>
                <p>- Theodore Roosevelt, Tổng thống Hoa Kỳ.</p>
                <p>- Benjamin Franklin, Nhà phát minh và chính trị gia.</p>
                <p>- Richard Feynman, Nhà vật lý.</p>
                <p>- Voltaire, Nhà triết học, cố vấn của Frederick Đại đế.</p>
                <p>- Catherine the Great, Hoàng hậu của Nga.</p>
                <p>- Niccolo Machiavelli, Nhà triết học và sử học, tác giả của 'The Prince'.</p>
                <p>- Steve Wozniak, Đồng sáng lập Apple cùng với Steve Jobs.</p>
                <p>- Karl Popper, Nhà triết học.</p>
                <p>- Thomas Edison – Nhà phát minh thiên tài</p>
                <h2>MỐI QUAN HỆ</h2>
                <p>Không có người bạn nào có thể nhanh trí và lý luận như những ENTP. Các ENTP thực sự rất thích tranh luận và họ có thể bỏ cả buổi tối để bảo vệ một quan điểm, cho dù họ cũng không tin quan điểm đó là đúng. Nếu bạn bè của ENTP có thể giữ
                    quan điểm của họ và đưa ra các giá trị, lập luận hợp lý, sau đó các ENTP sẽ cân nhắc, điều này là hình tượng tiêu biểu của một tình bạn.
                </p>
                <p>Các bạn bè của ENTP không thể thấy được sự nhạy cảm và tình cảm của ENTP, cho dù họ rất trực quan. Những người có cá tính ENTP thường biết đến như những kẻ lý trí và vô cảm - họ có thể khá vui tính và nhiệt tình, nhưng không phải là chỗ
                    dựa tinh thần cho những người đang buồn. Họ chắc chắn sẽ đưa ra những giải pháp hoàn toàn logic và hợp lý, nhưng cảm xúc và tình cảm là điều mà ENTP muốn bác bỏ.</p>
                <p>Nhìn chung, các ENTP không gặp khó khăn khi giao tiếp với bạn bè và những người thuộc nhóm tính cách khác, đặc biệt là nếu họ không ngại đề nghị và thảo luận các ý tưởng và điều hấp dẫn mới (các ENTP nên chắc chắn rằng điều này không trở
                    thành một cuộc cạnh tranh, cãi vã). Tuy nhiên, khi không cùng quan điểm với người tranh luận các ENTP ít khi danh nhiều thời gian để đặt mình vào vị trí của người đó.

                </p>
                <p>Tóm lại, ENTP là loại người tự nhiên, thoải mái và lạc quan, họ có thể làm mọi người xung quanh vui vẻ. ENTP nhận được rất nhiều niềm vui và sự hài lòng từ việc gây ảnh hưởng với những người khác, đặc biệt trong việc tranh luận về những
                    giả thuyết và ý niệm gây cho họ sự hứng thú. Các ENTP cũng có xu hướng khởi xướng cuộc tranh luận bởi họ rất thích tranh cãi. Họ thường vui vẻ và thích giao du, cũng như rất quyến rũ. Họ gặp vấn đề mất tập trung trong công việc và
                    đôi khi còn lơ là các mối quan hệ thân thiết khi phải tham gia vào một dự án hoặc một ý tưởng mới.

                </p>

                <h3>Các ưu điểm của ENTP trong các mối quan hệ:</h3>
                <p>- Là người của ý tưởng, luôn làm việc với một kế hoạch hoặc ý tưởng tổng quát.</p>
                <p>- Nhiệt tình, lạc quan, được nhiều người biết đến.</p>
                <p>- Luôn nghiêm túc trong những mối quan hệ.</p>
                <p>- Có sức thuyết phục cao.</p>
                <p>- Thoải mái, linh hoạt và dễ dàng hòa nhập.</p>
                <p>- Có khả năng giao tiếp tuyệt vời.

                </p>
                <p>- Rất thích phát triển và nâng cao những mối quan hệ của họ.</p>
                <p>- Có thể tiếp tục bước tiếp sau khi rời bỏ một mối quan hệ. - Giỏi kiếm tiền nhưng không giỏi quản lí chúng.</p>


                <h3>Các nhược điểm của ENTP trong các mối quan hệ:</h3>
                <p>- Có khuynh hướng đi lệch với kế hoạch và ý tưởng ban đầu.</p>
                <p>- Luôn bị thu hút bởi cái mới và họ hay thay đổi người yêu thường xuyên.</p>
                <p>- Kiếm bao nhiêu tiêu bấy nhiêu, thường không kiểm soát được túi tiền của mình.</p>
                <p>- Tính thích tranh luận là nguyên nhân gây ra tranh cãi.</p>
                <p>- Dù nghiêm túc nhưng họ sẽ từ bỏ những mối quan hệ mà sẽ không có cơ hội phát triển lâu dài.</p>

                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của ENTP trong công việc:

                </h3>
                <p>- Suy nghĩ nhanh nhạy: Các ENTP nhanh chóng đưa ra các lập luận và phản biện trong bất kỳ một cuộc thảo luận, họ nảy ra ý tưởng mới mà không cần nỗ lực nhiều.</p>
                <p>- Rất thông thái: Các ENTP rất thích học hỏi những điều mới và tích lũy kiến thức. Họ có xu hướng rất thành công trong môi trường học tập, đặc biệt là nơi có nhu cầu cho các giải pháp mới và táo bạo .</p>
                <p>- Xuất sắc trong việc tìm kiếm giải pháp: Các ENTP dễ dàng nhìn thấy được 2 mặt của đồng xu, họ không bị cảm xúc xen lẫn vào quan điểm hay ý tưởng. Với họ chỉ đơn giản là tận hưởng quá trình tìm kiếm các giải pháp khả thi.</p>
                <p>- Khởi xướng: Các ENTP không ngại thử nghiệm và đề xuất các ý tưởng rất độc đáo, thậm chi quyết liệt.</p>
                <p>- Lôi cuốn: Nhanh nhạy và tự tin - các ENTP cũng được đánh giá là quyến rũ, hấp dẫn, nối tiếng và thu hút được mọi người xung quanh.</p>
                <p>- Tràn đầy năng lượng: Các ENTP có thể rất nhiệt tình và tràn đầy năng lượng nếu công việc kích thích họ. Họ có thể dành nhiều thời tìm để kiếm một giải pháp cho các vấn đề thú vị.</p>
                <h3>Điểm yếu của ENTP trong công việc:</h3>
                <p>- Thích tranh luận: Các ENTP thích thú với các cuộc tranh luận, họ xem đó như một bài tập tinh thần. Điều này có thể làm khó chịu với những người nhạy cảm, hay người có xu hướng thích ổn định.</p>
                <p>- Không nhạy cảm: Các ENTP là người rất có lý trí, điều này gây khó khăn cho họ trong việc thấu hiểu cảm xúc của người khác cũng như sự bộc lộ cảm xúc riêng của họ.</p>

                <p>- Không thích việc triển khai thực hiện: Các ENTP thích thú đưa ra các ý tưởng, giải pháp hơn việc thực thiện chúng.Họ có thể không gặp khó khăn khi lên một kế hoạch hoàn hảo nhưng lại ít quan tâm đến việc đặt nó vào vị trí và kiểm tra
                    tất cả các chi tiết.
                </p>
                <p>- Thiếu sự khoan dung: Các ENTP khi có thể không khoan dung và xem thường, đặc biệt là khi họ phải đối phó với những người cố gắng tránh các cuộc tranh luận hoặc không thể bảo vệ ý tưởng của họ.</p>
                <p>- Nhanh chóng chán nản: Các ENTP cần cảm giác phấn khích - các công việc thông thường, quen thuộc làm cho họ chán nản và dễ gặp thất bại. Khi đó, họ thậm chí có thể gặp phải các vấn đề tưởng tượng, lơ đãng hoặc bắt đầu đề xuất các cải
                    tiến không cần thiết, chỉ để giữ cho tâm trí của họ luôn bận rộn.</p>

                <h3>Các nguyên tắc thành công</h3>
                <p>- Trau dồi ưu điểm: Năng khiếu nhìn thấu sự việc sẽ đem lại cho bạn khả năng làm hài lòng chính mình và người khác qua sự thông minh của bạn. Hãy đảm bảo rằng bạn tham gia những hoạt động và những việc giúp bạn thể hiện được tiềm năng
                    này ở cấp độ có giá trị nhất.</p>
                <p>- Khắc phục khuyết điểm: Ai cũng có điểm yếu và các ENTP cũng vậy. Bằng cách đối mặt với những điểm yếu, bạn sẽ vượt qua chúng và chúng sẽ ít có khả năng ảnh hưởng đến bạn.</p>
                <p>- Nói rõ quan điểm của mình: Trao đổi với người khác về những thứ giúp họ hiểu rõ về bạn, và cho bạn cơ hội để khám phá ra những phương hướng mà sự giúp đỡ của họ có thể cân bằng những ý tưởng của bạn.</p>
                <p>- Thư giãn và tận hưởng cuộc sống: Hãy dành thời gian để nhìn nhận lại những gì bạn có – những món quà mà cuộc sống đã mang đến cho bạn. Hãy cố gắng khám phá ra những giá trị và tầm quan trọng của những công việc hàng ngày, những công
                    việc luôn hỗ trợ và nuôi dưỡng tâm hồn bạn.</p>
                <p>- Hãy cố gắng tìm hiểu cảm xúc người khác: Bạn nên hiểu rằng mọi người đều có cuộc sống và quan điểm của riêng họ. Mọi người đều có quyền đề nghị. Hãy cố gắng xác định tính cách của những người xung quanh mình.
                </p>
                <p>- Nhận ra những nguyên tắc và những kết cấu là điều cần thiết: Bạn nên nhớ rằng nếu không có sự hỗ trợ và lòng trung thành từ những người xung quanh thì bạn khó có thể thành công. Con đường của bạn đã được sắp đặt, và mỗi hòn đá lót đường
                    tạo nên một sự khác biệt trong nhu cầu con người về lòng trung thành và sự bảo đảm. Nếu không bổ sung được kết cấu ấy, bạn sẽ không thể tiến xa.</p>
                <p>- Mạnh dạn bước ra khỏi vùng an toàn: Bạn nên biết rằng cách duy nhất để hoàn thiện mình chính là thoát ra khỏi vùng an toàn của bạn. Nếu cảm thấy không thoải mái vì bị bế tắc, rất tốt vì đó là một cơ hội tốt cho bạn trưởng thành.</p>
                <p>- Lắng nghe và bộc lộ cảm xúc của mình: Bạn có thể gặp khó khăn trong việc nhận ra những cảm xúc của mình, tất nhiên việc này rất quan trọng. Đừng làm tổn thương người khác. Nếu xác định là mình đánh giá cao một ai đó, hãy nói với họ mỗi
                    khi bạn nghĩ đến nó. Đây là cách tốt nhất để họ cảm thấy an toàn trong tình thương của bạn, cũng như là cơ hội tốt để phát triển một mối quan hệ lâu dài.</p>
                <p>- Chịu trách nhiệm với chính bản thân mình: Nên nhớ rằng khi bạn đỗ lỗi cho người khác là bạn đã giao quyền quyết định cho họ. Hãy nhớ rằng không ai có thể điều khiển cuộc sống của bạn ngoài chính bạn. Đừng biến mình trở thành nạn nhân
                    của những lời biện hộ.</p>
                <p>- Hãy tin tưởng vào những điều tốt đẹp nhất, nhưng nên thận trọng: Thái độ lạc quan thường tạo ra những tình huống lạc quan. Nên nhớ: để giữ chúng tồn tại và có giá trị, bạn phải cẩn thận lên kế hoạch xây dựng chúng trên những nền móng
                    vững chắc.</p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>
                <p>ENTP là loại tính cách linh hoạt nhất, danh sách ngành nghề của họ rất phong phú. Các ENTP có kỹ năng xoay chuyển tình thế nhanh và mạnh mẽ, mang đến cho họ một lợi thế khác biệt trên các nấc thang sự nghiệp - miễn là họ hiểu điểm mạnh
                    và điểm yếu của họ. Bài viết này sẽ thảo luận về những công việc tốt nhất cho ENTP - Ý kiến, góp ý hay chỉ trích của bạn luôn được chào đón.</p>
                <p>Các ENTP thực sự rất yêu thích sự sáng tạo ra ý tưởng mới và đề ra các dự án mới. Đây là một trong những tính cách sáng tạo và linh hoạt nhất và những đặc điểm như vậy luôn được nhìn thấy rõ ràng, bất kể con đường sự nghiệp nào mà ENTP
                    lựa chọn. Trí thông minh của họ thậm chí có thể hơi đáng sợ, các ENTP có một sự kết hợp bùng nổ của hướng ngoại ( E ), khuynh hướng cho các mục đích hữu trí tuệ ( NT ) và tự phát ( P ). Những đặc điểm đó đã đẩy ENTP hướng đến những
                    lĩnh vực cho phép họ sử dụng những luồn ý tưởng một cách hiệu quả - ví dụ, ENTP có xu hướng trở doanh nhân xuất sắc, diễn viên hay kỹ sư.</p>
                <p>Các ENTP có kỹ năng giao tiếp rất tốt (cả nói và viết) và cũng có một số thứ khiến họ thích thú hơn việc tranh luận với ý tưởng của người khác. Điều thú vị và các ENTP cũng có khả năng lãnh đạo tốt, nhưng họ không thích quản lý người khác
                    hay bị người khác quản lý. Mặt khác, những người có loại cá tính này có thể dễ dàng động viên và truyền cảm hứng cho những người khác, mặc dù nguồn cảm hứng đó đến từ lý trí và trí tuệ chứ không phải là cảm xúc. Một số ngành nghề điển
                    hình mà ENTP có thể tận dụng tốt những đặc điểm bí ẩn:luật sư, nhà tâm lý học, các nhà khoa học hay thậm chí đại diện bán hàng, miễn là họ có đủ tự do.</p>
                <p>Trong công việc ENTP cũng có xu hướng khen thưởng năng lực trí tuệ và sự tò mò - các ENTP thường đánh giá rất cao kiến thức, sự thông thái và suy nghĩ lý trí. Họ không ấn tượng hoặc bị ảnh hưởng bởi những cảm xúc. Hơn nữa, ENTP cần rất
                    nhiều tự do - họ không thích thói quen, cơ cấu và các quy tắc hình thức, coi đó là một trở ngại đối với những người tự do theo đuổi sáng tạo. Do đó, ENTP có xu hướng tỏa sáng trong sự nghiệp xoay quanh những đặc điểm như vậy - ví dụ
                    nhiếp ảnh, phân tích hệ thống, lập trình hoặc tư vấn tự do.</p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.</p>
                <h3>Các ENTP thường mang những đặc điểm:</h3>
                <p>- Thích tranh luận với người khác.</p>
                <p>- Sáng tạo và khéo léo.</p>
                <p>- Linh hoạt và đa dạng.</p>
                <p>- Thích đưa ra dự án.</p>
                <p>- Thích đưa ra ý tưởng và giả thuyết.</p>
                <p>- Logic, là người suy nghĩ có lý lẽ.</p>
                <p>- Lanh lợi và có năng lực.</p>
                <p>- Thích giải quyết những vấn đề khó khăn.</p>
                <p>- Có khả năng giao tiếp tuyệt vời.</p>
                <p>- Đề cao kiến thức và năng lực.

                </p>
                <p>- Kĩ năng đối nhân xử thế tuyệt vời.</p>
                <p>- Vui vẻ và đầy nhiệt huyết, có thể thúc đẩy những người khác.</p>
                <p>- Không thích bị người khác lãnh đạo.</p>
                <p>- Có khả năng lãnh đạo bẩm sinh, nhưng không thích lãnh đạo.</p>
                <p>- Dễ dàng hiểu được những khái niệm và những luận thuyết khó.</p>
                <p>- Không thích những việc thường ngày và những việc lặt vặt.</p>
                <p>- Không thích những kế hoạch làm việc cũng như môi trường làm việc bị hạn chế.</p>


                <p>Dưới đây là các công việc phù hợp với ENTP, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ENTP nhưng không phải chắc chắn) :</p>
                <p>- Nhà tâm lý học.</p>
                <p>- Luật sư.</p>
                <p>- Cố vấn.</p>
                <p>- Doanh nhân.</p>
                <p>- Nhà khoa học.</p>
                <p>- Kỹ sư.</p>
                <p>- Thợ chụp ảnh.</p>
                <p>- Nhân viên đại diện bán hàng.</p>
                <p>- Diễn viên.</p>
                <p>- Tiếp thị cá nhân.</p>
                <p>- Lập trình viên, chuyên gia máy tính, nhà phân tích cấu trúc dữ liệu.</p>
                <h3>Tính cách ENTP ở nơi làm việc</h3>
                <p>Các ENTP rất nhanh trí và thông thái - hai đặc điểm đó đã làm cho họ trên nên được nhiều người ngưỡng mộ và có sức ảnh hưởng ở nới làm việc. Tuy nhiên họ cũng gặp rắc rối do hay cãi nhau, hoặc do mất tập trung vào một dự án cụ thể.</p>
                <h3>Các đồng nghiệp ENTP:</h3>
                <p>- Rất hay tranh cãi.</p>
                <p>- Xuất sắc trong việc tìm kiếm giải pháp.</p>
                <p>- Có khiếu hài hước.</p>
                <p>- Thu hút bạn mới khá dễ dàng.</p>
                <p>- Trung thực, thẳng thắn và khách quan.</p>
                <p>- Thường rất am hiểu nhiều thứ.</p>
                <p>- Có thể không nhạy cảm và không nhường nhịn.</p>
                <h3>Các quản lý ENTP:</h3>
                <p>- Có thể đánh giá chính xác và khách quan các lập luận mâu thuẫn.</p>
                <p>- Rất giỏi bảo vệ lý lẽ trong cuộc tranh luận lý trí, điều này thường làm cho các chủ trương của họ trở nên đáng sợ đối với các thành viên khác.</p>
                <p>- Thích thú đưa ra các ý tưởng sáng tạo để đối phó với những thử thách, nhưng không thích quản lý khi triển khai các ý tưởng đó trong thực tế.</p>
                <p>- Họ không quan tâm nhiều đến việc được khen tặng - họ thích được tôn trọng hơn, điều này được xem như một sự thông minh.</p>
                <p>- Cởi mở và linh hoạt.</p>
                <p>- Có thể chuyển đổi qua nhiều dự án khác để tìm kiếm những thách thức và hứng thú mới.</p>
                <h3>ENTP ở vị trí cấp dưới:

                </h3>
                <p>- Thoải mái thách thức những ý tưởng của người quản lý họ.</p>
                <p>- Tò mò và có thể tìm hiểu các phương pháp mới rất nhanh chóng.</p>
                <p>- Rất không thích các quy định chặt chẽ, gò bó và nguyên tắc.</p>
                <p>- Thích giải quyết những thách thức phức tạp hơn đối phó với công việc thường ngày đơn giản.</p>
                <p>- Không phiền khi bị chỉ trích, miễn là tất cả các lập luận là hợp lý.</p>
                <p>- Có thể gặp khó khăn với nhiệm vụ thực tế hoặc đơn điệu.

                </p>
            </div>
        </div>
    </div>
`
components.NCCScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>
                <p>Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ,
                    đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.</p>
                <p>Tính cách của INFJ là hướng đến việc giúp đỡ những người đang cần - họ có thể vội vàng đến nơi một thảm họa lớn, tham gia vào nỗ lực cứu hộ, làm công việc từ thiện, ... Các INFJ coi đây là nhiệm vụ và mục đích của họ trong cuộc sống -
                    những người có loại cá tính này vững tin rằng cách tốt nhất để giúp thế giới là loại bỏ tất cả các kẻ bạo ngược. Nghiệp chướng và các khái niệm tương tự là rất hấp dẫn đối với INFJ.</p>
                <p>Những xu hướng đó cũng được củng cố bởi thực tế rằng tính cách của INFJ có một sự kết hợp độc đáo của chủ nghĩa lý tưởng và quyết đoán - điều này có nghĩa rằng sự sáng tạo và trí tưởng tượng của họ có thể được dẫn thẳng tới một mục tiêu
                    cụ thể. Vài loại tính cách khác cũng có đặc điểm này và đây là một trong những lý do quan trọng nhất lý giải tại sao nhiều INFJ thực hiện ước mơ của họ và thực hiện một cách cương quyết lâu dài.</p>
                <p>Các INFJ là bậc thầy về giao tiếp bằng văn bản, với một ngôn ngữ đặc sắc mượt mà và ấm áp. Ngoài ra, sự nhạy cảm của INFJ cho phép họ kết nối với những người khác khá dễ dàng. Giao tiếp dễ dàng và sự dễ chịu của họ thường có thể gây hiểu
                    lầm cho những người xung quanh, những người đó có thể nghĩ rằng INFJ thực sự là hướng ngoại.

                </p>
                <p>Các INFJ nên cẩn thận để tránh "quá nhiệt" như nhiệt huyết và quyết tâm của họ đôi khi có thể vượt quá tầm kiểm soát. Mang đặc điểm hướng nội, thỉnh thoảng các INFJ cần phải có khoảng "thời gian một mình" để tĩnh dưỡng nếu không năng lượng
                    tích trữ trong họ sẽ cạn kiệt rất nhanh. Nếu điều này xảy ra, các INFJ có thể làm mọi người ngạc nhiên bằng cách rút khỏi tất cả các hoạt động của họ trong một thời gian - và kể từ đó mọi người thường thấy các INFJ dường như hướng
                    ngoại, điều này có thể làm cả hai ngạc nhiên và lo âu.</p>
                <p>Các INFJ hết sức quan tâm đến cảm xúc của người khác và mong đợi họ trả ơn. Đương nhiên những người có loại tính cách này rất nhạy cảm và dễ bị tổn thương vì những xung đột - thậm chí các INFJ có lý trí nhất cũng gặp khó khăn để tránh
                    bị chỉ trích cá nhân. Đây là điểm yếu của INFJ - nếu một người nào đó mang tính cách INFJ không thể thoát khỏi cuộc xung đột, họ sẽ làm hết sức mình để đối phó với nó, nhưng điều này sẽ gây ra nhiều căng thẳng và cũng có thể có thể
                    dẫn đến vấn đề sức khỏe hoặc hành vi rất phi lý.
                </p>
                này.</p>

                <h3>Những người nổi tiếng mang tính cách INFJ:</h3>
                <p>- Jimmy Carter, Cựu Tổng thống Hoa Kỳ.</p>
                <p>- Thomas Jefferson, Cựu Tổng thống và tác giả của Tuyên ngôn Độc lập Mỹ.</p>
                <p>- Calvin Coolidge, Cựu tổng thống Hoa Kỳ.</p>
                <p>- Goethe, Nhà văn nổi tiếng.</p>
                <p>- Niels Bohr, Nhà vật lý, cố vấn của Heisenberg.</p>
                <p>- Mary Wollstonecraft, Nhà triết học.</p>
                <p>- Mel Gibson, Nhà sản xuất, biên kịch, đạo diễn nổi tiếng người Mỹ.</p>
                <p>- Mother Teresa.</p>
                <p>- Martin Luther King.</p>
                <p>- Nicole Kidman.</p>
                <p>- James Wilson from House M.D.</p>
                <p>- Adolf Hitler.</p>
                <p>- Osama bin Laden.</p>
                <h2>MỐI QUAN HỆ</h2>
                <p>Những người bạn INFJ rất sâu sắc, ấm áp và chu đáo. Không dễ để tìm hiểu về INFJ vì họ thường che giấu cảm xúc sâu bên trong tâm trí họ. Loại tính cách INFJ này rất bí ẩn và khó để giải mã nhưng họ lại có thể nhìn thấu mặt nạ của người
                    khác rất dễ dàng. Tính trung thực và chân thành là rất quan trọng nếu bạn muốn trở thành bạn bè với một INFJ.</p>
                <p>Các INFJ không thực sự quan tâm đến "hữu nghị" mà chủ yếu là xoay quanh thực tế, các vấn đề hàng ngày hoặc các hoạt động thể chất. Họ khá im lặng nhưng lại là nhà duy tâm cương quyết, đầy ắp những mong muốn làm cho thế giới tốt đẹp hơn.
                    Do đó, những người mang tính cách INFJ mong muốn tìm kiếm những người bạn sẵn sàng mang chủ nghĩa lý tưởng vào cuộc sống của họ và tham gia vào sâu các cuộc thảo luận có ý nghĩa về những điều vượt ra ngoài thói quen hàng ngày.

                </p>
                <p>Những người bạn INFJ có xu hướng tương đối lý tưởng hóa - mong muốn mọi thứ thật hoàn hảo, điều này có hai mặt, có thể rất tích cực hoặc cũng có thể tiêu cực khi nói đến các mối quan hệ. Một mặt, các INFJ sẽ tìm cách nuôi dưỡng và phát
                    triển cùng với những người bạn thân của họ, tìm kiếm kinh nghiệm sống phong phú. Mặt khác, xu hướng này luôn luôn tiếp cận với lý tưởng có thể làm suy kiệt những người có loại tính cách khác nhau, vì họ có thể không có khả năng chịu
                    đựng và quyết tâm mà INFJ sở hữu. Do đó, INFJ có thể tiếp tục chuyển sang một người bạn khác, hy vọng rằng một trong những người tiếp theo sẽ có nhiều điểm chung với họ hơn.
                </p>
                <p>Các INFJ nên nhớ rằng, INFJ là loại tính cách rất hiếm và không được nản lòng nếu bạn bè không chia sẻ 100% các nguyên tắc hay mục tiêu với INFJ. Những người mang tính cách INFJ muốn tìm kiếm bạn bè mà họ có thể tin tưởng, cả hai đều sẵn
                    sàng và có thể hiểu được niềm đam mê và ý tưởng của họ. Không nhiều người có thể đương đầu với chiều sâu và sự phong phú của trí tưởng tượng của INFJ, và thậm chí ít có khả năng hỗ trợ các INFJ theo cách mà họ cần. Các INFJ có xu hướng
                    là những người bạn rất trung thành và hay giúp đỡ, và họ cũng được các nhóm tính cách khác tìm kiếm, kết bạn vì sự khôn ngoan của họ, nhưng INFJ cần phải học cách để gặp gỡ bạn bè mới đầy tiềm năng giữa đường.
                </p>
                <p>Các INFJ thường có tài hùng biện và sức thuyết phục, họ có xu hướng khá được nhiều người ngưỡng mộ và có ảnh hưởng. Chính các INFJ cũng khá sửng sốt bởi điều này, vì họ là những cá nhân rất riêng tư, họ không thực sự cần và cũng không
                    thích bị chú ý. Có khả năng là các INFJ sẽ chỉ có một vài người bạn thật sự, nhưng những người bạn sẽ đánh giá rất cao sự đồng hành của INFJ.</p>
                <p>Tóm lại, INFJ là những người ấm áp và đáng tin cậy, họ cũng rất sâu sắc và khá bí ẩn. Họ thích tìm kiếm và phát triển các mối quan hệ lâu dài và có ý nghĩa. INFJ là người cầu toàn, luôn nỗ lực cho mối quan hệ tối ưu. Trong đa số trường
                    hợp, đây là một điều tích cực, nhưng đôi khi lại có hại cho họ nếu họ biến việc rời bỏ mối quan hệ cũ để tìm kiếm các mối quan hệ mới trở thành thói quen, để luôn tìm kiếm những người bạn mới hoàn thiện hơn. Nói chung, họ là những
                    người nồng ấm và biết quan tâm sâu sắc, INFJ đầu tư vào mối quan hệ gần gũi, và nỗ lực nhiều để làm chúng trở nên tích cực. Các INFJ được đánh giá cao bởi những người thân cận vì năng lực đặc biệt này. Họ tìm kiếm những mối quan hệ
                    bền vững, lâu dài mặc dù không phải lúc nào họ cũng tìm thấy nó.</p>
                <h3>Ưu điểm của INFJ trong các mối quan hệ:</h3>
                <p>- Nỗ lực để đạt được mối quan hệ tốt nhất.</p>
                <p>- Ấm áp và đáng tin cậy một cách tự nhiên.</p>
                <p>- Thường có kỹ năng giao tiếp tốt, đặc biệt là kỹ năng viết.</p>
                <p>- Nhạy cảm và quan tâm đến cảm giác của người khác.</p>
                <p>- Luôn đặt ra những chuẩn mực và kì vọng cao cho bản thân và người khác (vừa là ưu điểm và là khuyết điểm).</p>
                <p>- Rất nghiêm túc với những cam kết của mình, và luôn tìm kiếm các mối quan hệ lâu dài.

                </p>
                <p>- Lắng nghe tốt.</p>
                <p>- Có khả năng tiếp tục tìm kiếm các mối quan hệ khác sau khi kết thúc một mối quan hệ (Một khi đã chắc chắn là mối quan hệ kia đã kết thúc).</p>

                <h3>Nhược điểm của INFJ trong các mối quan hệ:</h3>
                <p>- Cực kì ghét tranh cãi và chỉ trích.</p>
                <p>- Không giỏi sử dụng tiền bạc hay những vật dụng thường ngày.</p>
                <p>- Gặp khó khăn khi rời bỏ một mối quan hệ có chiều hướng xấu đi.</p>
                <p>- Có xu hướng sống khép kín.</p>
                <p>- Luôn đặt ra những chuẩn mực và kì vọng cao cho bản thân và người khác (vừa là ưu điểm và là khuyết điểm).</p>

                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của INFJ trong công việc:

                </h3>
                <p>- Quyết tâm và đam mê. Các INFJ làm việc rất chăm chỉ cho những gì họ tin tưởng. Niềm đam mê này có thể dễ dàng làm ngạc nhiên những người chưa từng nhìn thấy điểm này của INFJ, nhưng nó là một phần không thể tách rời khỏi tính cách của
                    họ.
                </p>
                <p>- Lòng vị tha. Rất hiếm khi thấy một INFJ làm điều gì đó chỉ vì lợi ích cá nhân của họ. Những người có loại tính cách này có xu hướng rất ấm áp và vị tha, mặc dù những đặc điểm này có thể không bộc lộ được rõ ràng.</p>
                <p>- Quyết đoán. Đây là một trong những thế mạnh quan trọng nhất của bất kỳ INFJ. Trí tưởng tượng của họ, kết hợp với sự quyết đoán, thường là cho phép các INFJ đạt được những điều đáng kinh ngạc - họ không chỉ có thể nghĩ ra những ý tưởng
                    thú vị và khác thường, mà họ cũng có sức mạnh ý chí và kỹ năng lập kế hoạch cần thiết để thực hiện những ý tưởng đó.</p>
                <p>- Sáng tạo. Các INFJ sở hữu một trí tưởng tượng sống động và hiếm khi gặp khó khăn để thể hiện nó bằng cách này hay khác. Hầu hết các giải pháp của họ xoay quanh con người hay lý tưởng, trái ngược với chiến lược kỹ thuật - sức mạnh này
                    làm cho họ trở thành những nhân viên tư vấn hay các cố vấn tuyệt vời.</p>
                <p>- Truyền cảm hứng và thuyết phục. Những người có các loại tính cách INFJ biết cách sử dụng ngôn từ của họ và được biết đến với khả năng ăn nói lưu loát, linh hoạt, và họ cũng có phong cách viết rất truyền cảm. Các INFJ cũng có thể là diễn
                    giả có sức thuyết phục, đặc biệt là nếu họ đang nói về một cái gì đó họ rất tự hào hoặc đam mê.</p>
                <p>- Rất sâu sắc. Các INFJ rất dễ dàng để giải mã động cơ của người khác và hiếm khi bị ảnh hưởng bởi thao tác hoặc mánh lới bán hàng. Họ có khả năng biết ngay lập tức cho dù người đó được xem là trung thực. Sức mạnh này lá chắn cho sự nhạy
                    cảm bên trong họ, nó bảo vệ INFJ tránh được thất vọng.</p>
                <h3>Điểm yếu của INFJ trong công việc:

                </h3>
                <p>- Rất riêng. Các INFJ có vẻ biểu cảm và đam mê, nhưng họ thực sự là những người rất riêng tư. Những người có loại tính cách này thường cảm thấy khá khó khăn để tin tưởng một người bạn mới hay phải cởi mở với mọi người, ngay cả với những
                    người gần gũi nhất với họ.</p>
                <p>- Có thể "đốt cháy" dễ dàng. Sức mạnh và niềm đam mê mà INFJ được biết đến là có thể "xả" một cách nhanh chóng nếu họ không biết kìm chế. Các INFJ cũng có xu hướng hướng nội hầu hết cảm xúc của mình - đặc điểm này không nhất thiết là một
                    điểm yếu, nhưng nó tước đi cái "van xả" của họ.</p>
                <p>- Rất nhạy cảm. Các INFJ rất dễ bị tổn thương với các tình huống phê bình và xung đột. Những người có loại tính cách này cũng có khả năng phản ứng mạnh mẽ đến bất cứ điều gì thách thức các nguyên tắc và các giá trị bên trong của họ.


                </p>
                <p>- Lý tưởng hóa. Các INFJ vốn đã duy tâm và làm hết sức mình để đạt được lý tưởng của họ. Đây là một đặc điểm rất lớn, nhưng nó có thể nhanh chóng trở thành một điểm yếu nếu cách tiếp cận này được áp dụng trong mọi lĩnh vực của cuộc sống.
                    Ví dụ, các INFJ có thể cảm thấy khó khăn để giải quyết xuống trong một mối quan hệ lãng mạn, họ luôn luôn tìm kiếm một đối tác lý tưởng.

                </p>
                <p>- Luôn luôn cần phải có một nguyên nhân. Các INFJ có thể cảm thấy khó khăn để tập trung và bị ép buộc phải hoàn thành nhiệm vụ mà không gắn với một trong những mục tiêu của mình, ví dụ như phải thực hiện một số công việc hành chính thông
                    thường. Những người có loại cá tính này luôn luôn muốn biết rằng họ đang di chuyển hướng tới một mục tiêu xứng đáng, và có thể cảm thấy thất vọng và bồn chồn nếu đây không phải là mục tiêu của họ.

                </p>

                <h3>Các nguyên tắc thành công</h3>
                <p>- Trau dồi ưu điểm: Làm những việc cho phép khả năng trực giác và sự nhiệt tình giúp đỡ mọi người của bạn được phát huy.

                </p>
                <p>- Suy nghĩ thật kỹ càng: Bạn cần phải sàng lọc nguồn thông tin đa dạng của mình để biến mọi việc trở nên khả thi. Hãy dành một thời gian thích hợp để làm việc này, và tận dụng cơ hội trao đổi ý tưởng với người khác. Bạn sẽ nhận ra việc
                    bộc lộ trực giác nội tâm c là bài học quý giá.

                </p>
                <p>- Khắc phục khuyết điểm: Chấp nhận những điểm yếu của mình và tìm cách vượt qua chúng. Đặc biệt, hãy cố gắng sử dụng khả năng suy luận logic nhiều hơn, kết hợp với ý tưởng và trực giác của bạn, đừng vội bác bỏ ý tưởng của những người khác.

                </p>
                <p>- Thấu hiểu quan điểm của mọi người: Đừng vội bác bỏ ý kiến của người khác chỉ vì bạn không tôn trọng họ, hoặc do bạn nghĩ bạn đã biết tường tận về vấn đề đó rồi. Mỗi người đều có những ý kiến riêng, và không phải ai cũng biết hết mọi
                    thứ. Như Steven Covey đã nói, "Phải thấu hiểu người khác để người khác có thể hiểu mình".


                </p>
                <p>- Giữ cái nhìn toàn cảnh: Hãy coi chừng xu hướng trở thành một người quá chi tiết. Nếu bạn cảm thấy mình quá chú ý đến các chi tiết nhỏ nhặt, hãy nhanh chóng quay lại và đảm bảo là bạn đang nhìn thấy được mục tiêu của mình. Bạn sẽ không
                    thể đạt mục tiêu của mình nếu cứ quá chìm đắm vào các chi tiết nhỏ nhặt.</p>
                <p>- Nếu bạn mất bình tĩnh thì bạn sẽ thất bại: Năng lực tiềm tàng và những hiểu biết sáng suốt của bạn chính là một thế mạnh, nhưng đôi khi chúng trở nên nguy hiểm nếu sử dụng không đúng và bạn có thể bị rơi vào những trạng thái cảm xúc
                    mà bạn không thể kiểm soát được. Hãy nhớ rằng không phải ai cũng có cách nhìn sự việc như bạn, và một khi nỗ lực giúp đỡ họ của bạn thất bại, điều đó sẽ khiến bạn phải chịu cảm giác bị oán giận và bỏ rơi. Bạn không nên xử sự như vậy.
                    Hãy điều chỉnh suy nghĩ của mình, cho phép người khác quyền riêng tư và lúc đó bạn sẽ trưởng thành hơn.

                </p>
                <p>- Hãy khiêm tốn: Đánh giá bản thân mình nghiêm khắc như cách bạn đánh giá mọi người.

                </p>
                <p>- Chịu trách nhiệm với chính bản thân: Đừng đổ lỗi cho người khác. Hãy suy nghĩ về cách giải quyết. Không ai có khả năng điều khiển cuộc sống của bạn hơn là chính bạn. Khi bạn đổ lỗi cho người khác nghĩa là bạn đã mất quyền chủ động.

                </p>
                <p>- Hãy luôn nghĩ đến những điều tốt đẹp nhất. Đừng tự làm nản lòng mình bằng ý nghĩ mình thật tồi tệ. Nhớ rằng một thái độ tích cực sẽ mang đến cho bạn những hoàn cảnh tích cực.

                </p>
                <p>- Thư giãn: Hãy dành thời gian để thư giãn. Tập thể dục và nghỉ ngơi một cách thoải mái, đi du lịch và tham gia vào các hoạt động thư giãn khác. Chăm sóc cho bản thân và những người yêu thương bằng cách cho phép bản thân để sự đam mê và
                    cường độ công việc sang một bên để có thời gian nghỉ ngơi.

                </p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>
                <p>Những nghề nghiệp tốt nhất cho các INFJ là có sử dụng kỹ năng trực giác. INFJ có một trực giác rất mạnh mẽ, cho phép họ đánh giá chính xác các sự kiện, tình huống và con người. Hơn nữa, những người có loại tính cách này là nhà duy tâm,
                    và không có gì quan trọng hơn những giá trị và nguyên tắc của họ. Vì những lý do đó, nghề nghiệp điển hình của INFJ thường bao gồm giảng dạy, tư vấn, tâm lý học hoặc nhà soạn thảo sáng tạo (nhà văn).

                </p>
                <p>Các INFJ là nhà lãnh đạo bẩm sinh, ngay cả khi họ không tìm kiếm và cũng không tôn thờ các vị trí quyền lực, họ không giống như một số loại tính cách khác. Họ tiếp cận vai trò lãnh đạo từ quan điểm nhận thức và hiểu biết chứ không phải
                    là quyền lực và sức mạnh. Do đó, các INFJ có xu hướng làm tốt nhất trong ngành nghề có liên quan đến một mức độ nhất định về sự nhận thức và tiếp xúc cá nhân - ví dụ, một trong những con đường sự nghiệp điển hình của INFJ là có thể
                    lãnh đạo một tổ chức tôn giáo. Các INFJ cũng có xu hướng xuất sắc trong việc quản trị nhân sự , bác sĩ tâm thần hoặc bác sĩ.

                </p>
                <p>Các INFJ không thích công việc thường ngày, công việc hoàn toàn không liên quan đến con người hay phân tích chi tiết nhỏ. Họ cũng rất dễ bị xung đột và chỉ trích. Những đặc điểm này có nghĩa là các INFJ nên tránh những nghề nghiệp mà chỉ
                    tập trung vào dữ liệu chứ không phải là con người hay những công việc dễ bị áp lực và xung đột, ví dụ như tài chính, kiểm toán, lập trình, phân tích dữ liệu,... Mặt khác, những người có loại cá tính này là rất có nhận thức và sáng
                    tạo - họ có xu hướng xuất sắc ở các lĩnh vực như: kiến trúc sư, nhạc sĩ, nghệ sĩ, nhiếp ảnh gia, con đường sự nghiệp thiết kế,... Ngành nghề tốt nhất cho INFJ nên xoay quanh những đặc điểm này .

                </p>
                <p>Bất kể con đường sự nghiệp nào, các INFJ luôn luôn cần phải cảm thấy rằng sự đóng góp của họ là có ý nghĩa. Họ cần một điều gì đó nhiều hơn chứ không phải chỉ là tiền hoặc sự công nhận. Những người có loại cá tính này cảm thấy hạnh phúc
                    nhất khi họ tin rằng sự nghiệp của họ là rất phù hợp với các giá trị và nguyên tắc cá nhân của họ. Để đạt được điều đó, các INFJ thường sẽ cần phải có ở vị trí lãnh đạo, nhưng họ cũng có thể thực hiện rất tốt trong vai trò không phải
                    là quản lý trong suốt sự nghiệp của họ, miễn là các giá trị đó phù hợp với quan điểm của họ.

                </p>
                <p>Các INFJ cũng cần phải nhận thức xu hướng của họ để chọn mục tiêu nghề nghiệp, đôi khi nghề nghiệp họ đang làm là cách quá khiêm tốn. Những người có loại cá tính này có xu hướng làm rất tốt trong vai trò hỗ trợ, nhưng họ nên tìm một vị
                    trí khác tốt hơn - các INFJ có xu hướng tránh những con đường sự nghiệp đòi hỏi sự độc lập cao, nhưng điều này thường là cách duy nhất để tiến xa trong mục tiêu chuyên nghiệp. Sự phối hợp tốt nhất trong sự nghiệp của INFJ là cần thiết
                    phải nhận thức sâu sắc trọn vẹn với một mức độ độc lập tương đối cao - điều này buộc các INFJ phải cải thiện bản thân và do đó làm tăng sự đóng góp của họ cho hạnh phúc của nhân loại. Cuối cùng, điều này làm cho họ hạnh phúc hơn nhiều.

                </p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

                </p>
                <h3>Các INFJ thường mang những đặc điểm:</h3>
                <p>- Khả năng lãnh đạo tự nhiên.
                </p>
                <p>- Rất nguyên tắc.
                </p>
                <p>- Hiểu được con người và hoàn cảnh bằng trực giác.
                </p>
                <p>- Phức tạp và sâu sắc.
                </p>
                <p>- Duy tâm.
                </p>
                <p>- Hướng về tương lai.
                </p>
                <p>- Nhạy cảm và có lòng trắc ẩn với con người.
                </p>
                <p>- Tránh thể hiện bản thân mình.
                </p>
                <p>- Sẵn lòng giúp đỡ người khác.
                </p>
                <p>- Đề cao kiến thức và năng lực.

                </p>
                <p>- Đánh giá cao những mối quan hệ sâu sắc và đích thực.
                </p>
                <p>- Sáng tạo và nhìn xa trông rộng.
                </p>
                <p>- Không thích các công việc chi tiết nếu họ không phát triển kỹ năng này.
                </p>
                <p>- Luôn tìm kiếm ý nghĩa và mục đích của mọi thứ.
                </p>
                <p>- Có thể làm việc logic và lí trí – Sử dụng trực giác để nhận ra mục tiêu và nỗ lực tiến về mục tiêu đó.
                </p>
                <p>- Dễ cảm động và dễ bị tổn thương.

                </p>
                <p>Các INFJ là những con người rất đặc biệt, họ cần một sự nghiệp hơn là một công việc. INFJ cần được cảm thấy như thể mọi thứ họ làm trong cuộc sống phải hoà hợp với hệ thống giá trị mạnh mẽ của họ – với những gì họ cho là đúng. Theo đó,
                    INFJ nên chọn một nghề nghiệp mà họ có thể sống mỗi ngày với những giá trị của bản thân, và có thể hỗ trợ họ trong sứ mệnh làm nên một điều gì đó ý nghĩa. Bởi vì INFJ có một hệ thống giá trị mạnh mẽ và trực giác dẫn đường nên họ thể
                    hiện tốt nhất trong vai trò lãnh đạo, hơn là một người trợ giúp. Mặc dù họ có thể hạnh phúc khi đi theo những người lãnh đạo mà họ có thể hỗ trợ hoàn toàn, họ sẽ không thỏa mái khi phải theo sau trong những trường hợp khác.

                </p>

                <p>Dưới đây là các công việc phù hợp với ENTP, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với INFJ nhưng không phải chắc chắn) :</p>
                <p>- Giám mục / Các công việc liên quan đến tôn giáo
                </p>
                <p>- Bác sĩ / Nha sĩ
                </p>
                <p>- Nhà tâm lý học
                </p>
                <p>- Bác sĩ tâm thần
                </p>
                <p>- Giáo viên
                </p>
                <p>- Nhiếp ảnh
                </p>
                <p>- Nhạc sĩ / Hoạ sĩ
                </p>
                <p>- Kiến trúc, thiết kế
                </p>
                <p>- Các lĩnh vực liên quan đến chăm sóc sức khoẻ
                </p>
                <p>- Những người làm công tác xã hội
                </p>
                <p>- Chăm sóc trẻ em / Phát triển trẻ em

                </p>
                
                
            </div>
        </div>
    </div>
`
components.NLTHScreen = `
<div class="NKH-container">
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
                        <li id="redirect-toS">Nhà Quản Lý</li>
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
<div class="NKH-wrapper">
    <div class="NKH-wrapper-content">
        <h2>TỔNG QUAN</h2>
        <p>Có khoảng 4,5% dân số mang tính cách này, các INFP thường được coi là điềm tĩnh, kín đáo hoặc thậm chí nhút nhát. Tuy nhiên, đừng để vẻ bề ngoài đánh lừa. Dù các INFP có thể hơi thận trọng, nhưng không thể xem thường ngọn lửa và sự đam
            mê bên trong họ. Những người có loại tính cách này là thực sự rất trìu mến, một đặc điểm không thường thấy ở các loại tính cách khác. Lòng trắc ẩn của họ thực sự nồng nhiệt và lâu dài - nhưng các INFP sẽ sử dụng nó khá dè dặt, họ hướng
            nguồn năng lượng này đến với một vài người được chọn hoặc một nguyên nhân xứng đáng. Chủ nghĩa lý tưởng là ngọn cờ của những người mang tính cách INFP - và họ rất tự hào về nó. Thật không may, nó cũng khiến cho các INFP thường có thể
            cảm thấy bị hiểu lầm và bị cô lập, vì rất ít người mang chủ nghĩ lý tưởng như họ.

        </p>
        <p>Những người mang loại tính cách INFP có một ý thức rõ ràng về danh dự, chúng truyền cảm hứng và thúc đẩy họ. Nếu ai đó muốn tìm hiểu một INFP, thì nó là rất quan trọng để biết những gì đã thúc đẩy họ và hiểu được nguyên nhân lựa chọn của
            họ.

        </p>
        <p>Các INFP tìm kiếm sự hài hòa trong cuộc sống của họ và môi trường xung quanh, thường cảm thấy thất vọng vì tất cả những điều xấu xảy ra trên thế giới và cố gắng để tạo ra một cái gì đó tích cực. Những người có loại tính cách này có xu
            hướng nhìn sự vật và hành động từ quan điểm duy tâm, chứ không phải là từ tư duy logic. Họ đáp ứng với vẻ đẹp, đạo đức, đức hạnh chứ không phải là tiện ích, hiệu quả hoặc giá trị.

        </p>
        <p>Các INFP thường nói những câu ẩn dụ và ngụ ngôn. Họ cũng có khả năng tuyệt vời trong việc sáng tạo ra các biểu tượng hay giải thích cách biểu tượng. Vì lý do này, các INFP có khả năng viết bẩm sinh và thích thơ. Loại tính cách này không
            sùng bái tư duy logic, không giống như các loại NT - theo quan điểm của họ, logic không phải là luôn luôn cần thiết. Các INFP sẽ thích thú thảo luận với giả thuyết hay triết học nhiều hơn bất kỳ loại nào khác.

        </p>
        <p>Các INFP cũng thường rút lui vào trạng thái "ẩn tu" của họ (loại tính cách này có thể dễ dàng chuyển đổi giữa hai trạng thái), rút lui khỏi thế giới và bị lạc trong suy nghĩ sâu sắc của họ - sau đó đối tác của họ có thể cần phải chi tiêu
            khá nhiều công sức để tiếp sinh lực và "đánh thức" các INFP.

        </p>
        <p>Các INFP có đặc điểm chung với các loại NF - họ năng khiếu về ngoại ngữ là rất đặc biệt. Các INFP cũng thường trở thành nhà văn lớn hay các diễn viên giỏi, vì họ có thể dễ dàng phản ánh và truyền tải ý tưởng của mình bằng cách sử dụng
            nhân vật hư cấu. Nói chung, những người có loại tính cách này là cực kỳ sáng tạo, đổi mới và định hướng được mục tiêu - họ có thể là những người ủng hộ tuyệt vời cho những nguyên nhân họ thực sự tin tưởng.

        </p>
        <p>Cuối cùng, hầu hết các INFP có khả năng nhận thấy những gợi ý tốt (dù là rất nhỏ) ở những người khác. Trong mắt của INFP, ngay cả những người ghê tởm nhất cũng sẽ có một cái gì đó xứng đáng với sự tôn trọng hoặc, ít nhất là sự cảm thông.

        </p>
        <h3>Những người nổi tiếng mang tính cách INFP:

        </h3>
        <p>- Thánh John, Tổng đồ được chúa Jesus yêu mến nhất
        </p>
        <p>- William Shakespeare, Nhà soạn kịch lỗi lạc người Anh
        </p>
        <p>- Jean-Jacques Rousseau, Nhà Triết học và văn học.
        </p>
        <p>- Julia Roberts, Diễn viên nổi tiếng
        </p>
        <p>- C.S. Lewis, Tác giả của 'The Chronicles of Narnia'
        </p>
        <p>- J.K. Rowling, Tác giả của 'Harry Potter'
        </p>
        <p>- Antoine de Saint-Exupery, Tác giả 'The Little Prince'
        </p>
        <p>- A. A. Milne, Tác giả của 'Winnie The Pooh'
        </p>

        <h2>MỐI QUAN HỆ</h2>
        <p>Các INFP rất khó hiểu. Ngay cả người bạn thân nhất của họ thấy khó khăn để thuyết phục các INFP cởi mở và tiết lộ cảm xúc của mình - những người quen biết bình thường càng không thể hiểu chút gì về nội tâm của INFP. Những người có loại
            tính cách này không quan tâm nhiều về số lượng bạn bè mà họ có, họ quan tâm đến chất lượng của tình bạn hơn.

        </p>
        <p>Những người bạn INFP đặc biệt trung thành và hay giúp đỡ. Họ cũng nhận biết được trạng thái tình cảm và cảm xúc của người khác, và đặc điểm này đã làm cho các INFP trở nên rất nhạy cảm và sâu sắc. Những người có loại tính cách này rất
            riêng tư khi nói đến cảm xúc của mình - một lần nữa, các INFP không cảm thấy thoải mái để lộ cảm xúc của họ với những người mà họ không biết rõ.

        </p>
        <p>Những người bạn INFP là những người mạnh mẽ, đam mê và mang tính duy tâm - bên ngoài yên tĩnh và thoải mái của một INFP có thể bị đánh lừa. Mặt khác, hầu hết các INFP cần rất nhiều "thời gian một mình" và đặc điểm bí ẩn này đôi khi có
            thể gây nhầm lẫn, ngay cả người bạn thân nhất của mình.

        </p>
        <p>Các INFP thường rất giỏi trong việc thấu hiểu những động cơ của người khác và không có khó khăn lọc ra những người đáng ngờ. Tuy nhiên, nếu các INFP quyết định cởi mở và bắt đầu tin tưởng người khác, họ sẽ hình thành một mối quan hệ rất
            mạnh mẽ và ổn định. Cũng cần lưu ý rằng các INFP cảm thấy rất tôn trọng những người có nguyên tắc và các giá trị giống như vậy - những quan niệm này rất thân thiết với những người có loại tính cách này.

        </p>
        <p>Các INFP sẽ cảm thấy thỏa mái nhất khi kết bạn với những người mang đặc tính Feeling ( F ) - Tình cảm. Tính hợp lý và nhận thức "lạnh lùng" của đặc điểm Thinking ( T ) - Lý trí có thể được đe dọa họ, trong khi đặc điểm Judging ( J ) -
            Nguyên tắc có thể xuất hiện quá quyết đoán và cứng nhắc. Điều này không có nghĩa là INFP không thể giao tiếp với những người mang đặc điểm trên, chỉ có điều là họ khó có khả năng trở thành những người bạn thân.

        </p>
        <p>Tóm lại, các INFP thể hiện một phong thái rất bình tĩnh, hiền hòa đối với cuộc sống. INFP xuất hiện để mang lại sự yên tĩnh và thanh bình cho mọi người, với những ước vọng đơn giản. Trên thực tế, các INFP cảm nhận cuộc sống của mình một
            cách mạnh mẽ. Trong quan hệ, điều này đã khiến cho họ có đầy cảm xúc sâu lắng cho yêu thương và sự quan tâm, điều này không thường thấy ở các nhóm tính cách khác. Các INFP không dành trọn tất cả tình cảm mãnh liệt của họ cho riêng
            một ai và khá dè dặt trong việc bộc lộ cảm xúc sâu lắng của mình. INFP dành tình cảm và sự quan tâm sâu sắc nhất cho một vài người thân hay những người mà tin tưởng nhất. Họ nhìn chung thoải mái, thích giúp đỡ và nuôi dưỡng các mối
            quan hệ gần gũi. Với cảm xúc nội tâm làm chủ tính cách, các INFP rất nhạy cảm và dễ đồng cảm với cảm giác của mọi người, và cảm thấy thật sự quan tâm và lo lắng cho người khác. Không dễ tin tưởng người khác và thận trọng trong khi
            khởi đầu một mối quan hệ, nhưng INFP sẽ hết mực trung thành một khi họ đặt ra một lời cam kết. Với những giá trị cốt lõi mạnh mẽ, INFP là những cá nhân đánh giá cao chiều sâu và sự chân thật trong các mối quan hệ và coi trọng những
            người bạn có thể hiểu và chấp nhận quan điểm của INFP. Họ thường dễ hòa nhập và thông cảm, trừ khi một trong những nguyên tắc sống của họ bị xâm phạm thì khi đó họ không tiếp tục hòa nhập và trở nên bảo thủ cho những nguyên tắc của
            họ. Các INFP sẽ trở nên khắc nghiệt và cứng nhắc trong tình huống như vậy.

        </p>
        <h3>Ưu điểm của INFP trong các mối quan hệ:</h3>
        <p>- Quan tâm và lo lắng cho người khác.
        </p>
        <p>- Trung thành và cam kết – họ muốn có mối quan hệ bền lâu.
        </p>
        <p>- Nhạy cảm và mẫn cảm về những gì người khác cảm thấy.
        </p>
        <p>- Có xu hướng đáp ứng nhu cầu của người khác.
        </p>
        <p>- Dồi dào tình cảm yêu thương và quan tâm.
        </p>
        <p>- Nuôi dưỡng, ủng hộ và khuyến khích mối quan hệ.
        </p>
        <p>- Luôn phấn đấu để đôi bên cùng có lợi.
        </p>
        <p>- Có thể bày tỏ cảm xúc tốt.
        </p>
        <p>- Thường dễ nhận biết và thông cảm nhu cầu cần không gian riêng của người khác.
        </p>
        <p>- Linh hoạt và đa dạng.

        </p>
        <h3>Nhược điểm của INFP trong các mối quan hệ:</h3>
        <p>- Có thể phản ứng rất mãnh liệt trong những tình huống căng thẳng.
        </p>
        <p>- Không muốn người khác khám phá "thế giới riêng" của họ.
        </p>
        <p>- Có thể có xu hướng nhút nhát và kín đáo.
        </p>
        <p>- Cực kỳ không thích sự chỉ trích.
        </p>
        <p>- Cực kỳ không thích xung đột.
        </p>
        <p>- Cảm thấy khó khăn khi khiển trách hay trừng phạt người khác.
        </p>
        <p>- Rất cần có sự khen ngợi và khẳng định tích cực.
        </p>
        <p>- Xu hướng cầu toàn có thể khiến họ không tự khen ngợi bản thân.
        </p>
        <p>- Cảm thấy khó khăn từ bỏ một mối quan hệ xấu.
        </p>
        <p>- Có xu hướng dè dặt trong biểu lộ cảm xúc của họ.
        </p>
        <p>- Có xu hướng tự khiển trách mình về những việc xảy ra và nhận lãnh hoàn toàn trách nhiệm về mình.

        </p>
        <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
        <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
        <h3>Điểm mạnh của INFP trong công việc:

        </h3>
        <p>- Đam mê và tràn đầy năng lượng. Các INFP có xu hướng rất mạnh mẽ khi nói đến nguyên nhân mà họ tin tưởng và sẵn sàng chiến đấu cho điều đó. Trông họ có vẻ yên tĩnh và thậm chí nhút nhát trước công chúng, nhưng đừng đánh giá thấp niềm
            đam mê của họ.
        </p>
        <p>- Rất sáng tạo. Các INFP dễ dàng thấu hiểu và giải thích các dấu hiệu và ý nghĩa ẩn dụ bên trong - Hơn nữa, sự phát triển về mạnh trực đã giúp họ sâu chuỗi các sự kiện và nảy ra những điều thú vị hay những ý tưởng khác thường.
        </p>
        <p>- Tư tưởng thoáng và linh hoạt. Các INFP không thích bị hạn chế bởi quy tắc và họ không thích bị áp đặt. Họ có xu hướng khá tự do, tinh thần phóng thoáng cởi mở, miễn là các nguyên tắc và ý tưởng của họ không bị xâm phạm.
        </p>
        <p>- Đầy lý tưởng. Các INFP có lẽ là duy tâm nhất trong tất cả các loại cá tính, tin rằng mọi người vốn tốt và tất cả mọi người nên làm hết sức mình để chống lại cái ác và bất công trên thế giới.
        </p>
        <p>- Tìm kiếm và giá trị cao sự hài hòa. Các INFP không muốn thống trị và họ làm việc hết sức để đảm bảo rằng ý kiến ​​của tất cả mọi người có đều giá trị và được lắng nghe.
        </p>
        <p>- Rất tận tâm và cần cù. Như đã đề cập ở trên, các INFP đều rất đam mê và đầy lý tưởng. Không mấy ngạc nhiên khi họ thậm chí còn có thể cống hiến một cách đáng kinh ngạc cho mục tiêu mà họ đã lựa chọn hoặc một tổ chức nào đó. Họ không
            dễ bỏ cuộc chỉ vì mọi người không tán thành với nguyên nhân của họ hay vì nó quá khó khăn để thực hiện.

        </p>
        <h3>Điểm yếu của INFP trong công việc:

        </h3>
        <p>- Quá vị tha. Các INFP có thể được quá tập trung vào làm những việc tốt và giúp đỡ những người khác mà họ có thể bỏ qua nhu cầu của họ. Ngoài ra, họ có thể chiến đấu cho sự nghiệp của họ lựa chọn bỏ qua tất cả mọi thứ khác trong cuộc sống.
        </p>
        <p>- Không thích làm việc với dữ liệu. Các INFP rất giỏi bắt nhịp với những cảm xúc và đạo đức, nhưng họ có thể gặp khó khăn khi đối phó với các sự kiện và dữ liệu, ví dụ như phân tích các kết nối hoặc tìm kiếm sự khác biệt.
        </p>
        <p>- Khó hiểu. Những người có các loại tính cách INFP có xu hướng riêng tư, kín đáo. Họ cũng khá e dè, ngượng ngùng.
        </p>
        <p>- Tư tưởng cá nhân cao. Các INFP rất trân trọng lý tưởng của họ và cảm thấy rất khó khăn để chấp nhận những lời chỉ trích, tiếp nhận lời bình một cách cá nhân. Họ cũng có xu hướng tránh những tình huống xung đột, luôn luôn tìm kiếm một
            giải pháp thỏa mãn tất cả mọi người.
        </p>
        <p>- Có thể là quá lý tưởng. Các INFP dễ bị quá mơ mộng và lý tưởng, đặc biệt là khi nói đến mối quan hệ lãng mạn. Họ có thể lý tưởng hóa - hoặc thậm chí thần tượng - đối tác của họ, mà quên rằng không ai là hoàn hảo.
        </p>
        <p>- Không thực tế. Các INFP không thực sự cảm thấy những điều thực tế là quan trọng. Họ thậm chí có thể quên ăn uống nếu họ đang làm điều gì đó phấn khích và thúc đẩy họ.

        </p>
        <h3>Các nguyên tắc thành công</h3>
        <p>- Trau dồi ưu điểm: Phát triển khả năng nghệ thuật và sáng tạo của bạn. Nuôi dưỡng đời sống tinh thần của bạn. Dành thời gian để giúp đỡ những người nghèo khó hoặc không may.
        </p>
        <p>- Khắc phục khuyết điểm: Hãy hiểu và chấp nhận rằng bạn cũng có nhiều điểm mạnh và điểm yếu. Đối mặt và giải quyết những yếu điểm của mình không có nghĩa là bạn phải thay đổi bản thân, mà đó có nghĩa là bạn muốn trở thành con người tốt
            nhất mà bạn có thể. Bằng cách đối mặt với khuyết điểm, bạn đang thể hiện sự kính trọng đối với bản thân chứ không phải là đang tự trách chính mình.
        </p>
        <p>- Bộc lộ cảm xúc của mình: Đừng đừng kìm nén cảm xúc đang dâng trào trong bạn. Nếu bạn có những cảm xúc mạnh mẽ, hãy thể hiện nó ra ngoài. Đừng để cảm xúc dâng trào bên trong bạn đến một lúc nào đó bạn sẽ không thể kiểm soát được nó.
        </p>
        <p>- Bình tĩnh trước những lời chỉ trích: Nên hiểu rằng mọi người không phải lúc nào cũng đồng ý hoặc hiểu bạn, ngay cả khi họ đánh giá rất cao về bạn. Hãy cố gắng tìm hiểu những bất đồng và lời phê bình là cơ hội để hoàn thiện bản thân.
            Trong thực tế, đó mới chính là ý nghĩa của sự phê bình.
        </p>
        <p>- Luôn luôn lắng nghe mọi thứ: Đừng vội gạt bỏ bất cứ điều gì ngay lập tức. Hãy để mọi thứ lắng xuống một lúc rồi mới đưa ra phán xét.
        </p>
        <p>- Hãy cố gắng hiểu người khác: Nên nhớ rằng có đến mười lăm nhóm tính cách khác, những người có cái nhìn khác so với bạn. Hãy cố gắng tìm hiểu họ thuộc nhóm người nào và hãy cố hiểu quan điểm của họ.
        </p>
        <p>- Hãy biết chấp nhận. Bạn sẽ bị thất vọng với người khác nếu bạn kỳ vọng quá nhiều từ họ. Tỏ vẻ thất vọng với mọi người cũng là cách nhanh nhất làm cho họ tránh xa bạn. Hãy đối xử với mọi người hòa nhã như là cách mà bạn muốn họ đối xử
            với bạn.
        </p>
        <p>- Chịu trách nhiệm với chính bản thân mình: Nên nhớ rằng BẠN là người kiểm soát cuộc sống của bạn tốt hơn bất kỳ ai khác. Khi bạn đổ lỗi cho người khác nghĩa là bạn đã giao quyền chủ động cho họ.
        </p>
        <p>- Nếu chưa chắc chắn hay nghi ngờ, hãy hỏi lại ngay: Đừng tự đánh đồng việc thiếu những thông tin phản hồi là một với việc nhận được những thông tin phản hồi tiêu cực. Nếu bạn cần phản hồi nhưng chưa nhận được, hãy mạnh dạn hỏi ngay!.
        </p>
        <p>- Hãy luôn nghĩ đến những điều tốt đẹp nhất: Đừng tự gây phiền muộn cho bạn bằng cách giả sử điều tồi tệ nhất. Hãy nhớ rằng thái độ tích cực thường mang lại hoàn cảnh tích cực.

        </p>
        <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
        </h2>
        <p>Hầu hết các INFP có các nguyên tắc mạnh mẽ và các giá trị bên trong họ. Những người có loại tính cách này không ngừng nghỉ trong việc bảo vệ những ý tưởng mà họ tôn trọng và họ rất tận tâm với cả các cá nhân và nguyên nhân. Đặc điểm này
            là trọng tâm cốt lõi trong một số nghề nghiệp tốt nhất với INFP - ví dụ, các INFP có xu hướng trở thành nhà văn xuất sắc và khả năng thuyết phục của họ rất tốt khi viết về một nguyên nhân mà họ cho là quan trọng. Có rất nhiều nhà văn
            vĩ đại mang tính cách INFP - loại tính cách này có kỹ năng viết tốt nhất trong rất cả các nhóm tính cách. Nếu bạn là một INFP và chẳng hạn có một nghề nghiệp thu hút bạn, bằng mọi cách hãy thử nó, đặc biệt là kể từ khi internet cung
            cấp cho bạn một nền tảng tuyệt vời. Bạn có thể sẽ ngạc nhiên về công việc này.

        </p>
        <p>Loại tính cách INFP là một trong số rất ít các nhóm tính cách có danh sách sự nghiệp lý tưởng bao gồm cả vị trí hướng đến phục vụ. Các INFP chân thành quan tâm đến người khác, cho dù người đó tốt hơn hay kém hơn họ, có xu hướng đặt mong
            muốn của người khác lên trên của mình. Kết hợp với sự sáng tạo, cá tính này làm cho các INFP trở thành nhà tư vấn khéo léo, nhân viên xã hội hoặc nhà tâm lý học. Một số ngành nghề điển hình khác có thể áp dụng những đặc điểm tính cách
            như vậy là rất tốt - nhiều INFP có thể được tìm thấy trong các học viện hoặc các ngành nghề khác có liên quan.

        </p>
        <p>Các INFP có định hướng phát triển rõ ràng, nhưng họ cũng rất nhạy cảm và rất dễ bị chỉ trích. Điều này càng phức tạp hơn bởi họ có xu hướng làm việc một mình - các INFP không thấy thỏa mái đối với các nghề nghiệp có môi trường làm việc
            căng thẳng hoặc làm việc nhóm đã định hướng. Một số nghề nghiệp tốt nhất giúp INFP biến yếu điểm này thành một lợi thế lớn - ví dụ, các INFP thật sự cảm hứng khi trở thành một tín đồ tôn giáo, nhạc sĩ hoặc huấn luyện viên cá nhân.
            Những nghề nghiệp có xu hướng rất cá nhân và đòi hỏi rất nhiều nỗ lực cá nhân - điều này sẽ làm cho hầu hết các INFP rất hạnh phúc.

        </p>
        <p>Nhìn chung, những người mang loại tính cách INFP là rất hiếm, phức tạp và bí ẩn - các INFP tìm kiếm nghề nghiệp mà nó không chỉ là việc làm, những người có loại tính cách này cần phải biết rằng những gì họ làm phải tạo ra tiếng vang lớn
            bằng các nguyên tắc cốt lõi và các giá trị bên trong họ. Như đã đề cập, có một vài sự nghiệp rất thích hợp cho INFP - họ chỉ đơn giản là cần phải tìm một nguyên nhân xứng đáng để tiến hành công việc đó.

        </p>
        <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
            bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
            nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

        </p>

        <h3>Các INFP thường mang những đặc điểm:</h3>
        <p>- Thiên hướng phục vụ, đặt nhu cầu của người khác lên trên nhu cầu của mình.
        </p>
        <p>- Có hệ thống giá trị sống mạnh mẽ.
        </p>
        <p>- Trung thành và công hiến cho con người và chính nghĩa.
        </p>
        <p>- Quan tâm đến mọi người.
        </p>
        <p>- Dễ chịu và thoải mái, trừ phi có một nguyên tắc sống bị xâm phạm.
        </p>
        <p>- Hướng về tương lai.
        </p>
        <p>- Sáng tạo và gây cảm hứng cho người khác.
        </p>
        <p>- Luôn muốn được phát triển theo hướng tích cực.
        </p>
        <p>- Không thích làm việc chi tiết và theo thủ tục.
        </p>
        <p>- Nhạy cảm và phức tạp.
        </p>
        <p>- Xuất sắc trong giao tiếp bằng văn bản.
        </p>
        <p>- Lập dị và cá nhân – "tách rời khỏi đám đông".
        </p>
        <p>- Đánh giá cao các mối quan hệ sâu sắc và đích thực.
        </p>
        <p>- Thích làm việc một mình và có thể gặp khó khăn khi làm việc trong nhóm.
        </p>
        <p>- Muốn được công nhận và đánh giá cao cho việc họ là ai.

        </p>



        <p>Các INFP là những con người đặc biệt, họ nhạy cảm và cần một sự nghiệp hơn là chỉ đơn giản một việc làm. Họ cần cảm thấy mọi thứ họ làm trong cuộc sống là theo đúng với hệ thống giá trị cảm tính mạnh mẽ trong họ và các việc đó cũng mang
            lại cho họ hay những người khác phát triển theo hướng tích cực hơn. Các INFP cảm thấy hài lòng nhất trong các lĩnh vực cho phép họ sống một cuộc sống hằng ngày theo đúng các giá trị của họ cũng như trong các ngành nghề mang lại nhiều
            điều tốt đẹp cho nhân loại. Có một điều rất đáng nói đó là hầu hết các nhà văn vĩ đại trên thế giới mang tính cách INFP.


        </p>

        <p>Dưới đây là các công việc phù hợp với INFP, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với INFP nhưng không phải chắc chắn) :

        </p>
        <p>- Nhà văn.
        </p>
        </p>
        <p>- Nhà tâm lý học.
        </p>
        <p>- Giáo viên / Giáo sư.
        </p>
        <p>- Cố vấn / Nhân Viên Xã Hội.
        </p>
        <p>- Nhạc sĩ.
        </p>
        <p>- Nhà tâm thần học.
        </p>


        <p>- Tăng lữ / Người hoạt động tôn giáo.

        </p>


    </div>
</div>
</div>
`
components.NCCScreen = `
<div class="NKH-container">
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
                        <li id="redirect-toS">Nhà Quản Lý</li>
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
<div class="NKH-wrapper">
    <div class="NKH-wrapper-content">
        <h2>TỔNG QUAN</h2>
        <p>Có khoảng 2% dân số mang loại tính cách này, ENFJ là loại tính cách có sức ảnh hưởng rất lớn. Các ENFJ thường rất lôi cuốn và có tài hùng biện, họ dễ dàng truyền đạt ý tưởng, quan điểm của họ với mọi người. ENFJ quan tâm đến mọi người
            một cách chân thành, những người xung quanh ENFJ thường thấy chúng rất truyền cảm và dễ thương.

        </p>
        <p>- Các ENFJ là những người có sự quan tâm đặc biệt đến người khác. Họ hiểu được những khả năng của mọi người. Và hơn tất cả các nhóm khác, họ là những người có kĩ năng "đối nhân xử thế" rất xuất sắc. Họ hiểu và quan tâm đến mọi người xung
            quanh, và có khả năng đặc biệt là mang lại điều tốt đẹp nhất cho người khác. Trao yêu thương, hỗ trợ và dành thời gian cho người họ thích là niềm hứng thú chính của các ENFJ. Họ biết cách lắng nghe, thấu hiểu, giúp đỡ cũng như động
            viên người khác. ENFJ cảm thấy thích thú và mãn nguyện nhất khi mang lại những giá trị thiết thực cho người khác.

        </p>
        <p>- Các ENFJ có khả năng đối nhân xử thế phi thường và luôn diễn đạt trôi chảy và rõ ràng những gì họ muốn nên các ENFJ có khả năng khiến người khác làm chính xác những gì họ muốn. Họ "đi guốc trong bụng" người khác và luôn nhận được cách
            phản ứng mà họ mong muốn. Những động cơ của các ENFJ thường không xuất phát từ sự ích kỉ, nhưng cũng có một số ENFJ chưa phát triển hoàn thiện - được biết đến như là những người đã sử dụng sức mạnh của mình để thao túng người khác.

        </p>
        <p>- Các ENFJ là những người hướng ngoại, nên dành thời gian để ở một mình sẽ cực kỳ quan trọng đối với họ. Điều đó cũng có thể là vấn đề đối với ENFJ, vì họ có xu hướng tự làm khó mình và trở nên bế tắc khi ở một mình. Vì vậy, ENFJ cần phải
            tránh tách biệt bản thân và nên hòa nhập với người khác trong các hoạt động thường ngày hơn. Các ENFJ thường định hướng cuộc sống và các ưu tiên của họ theo nhu cầu của người khác mà không nhận ra được những gì họ mong muốn. Việc đặt
            lợi ích của người khác lên trên lợi ích bản thân là điều tự nhiên với tính cách của ENFJ, nhưng họ cần phải dành thời gian để suy nghĩ và hiểu rõ nhu cầu của mình để chăm lo cho bản thân nhiều hơn.

        </p>
        <p>- Các ENFJ thường dè dặt hơn về việc biểu lộ bản thân so với những loại tính cách hướng ngoại khác. Mặc dù có những niềm tin rất mạnh mẽ nhưng họ thường tự kiềm chế việc bộc lộ những niềm tin đó nếu chúng cản trở họ trong việc đem lại
            điều tốt đẹp nhất cho người khác. Bởi vì sự quan tâm lớn nhất của ENFJ là trở thành một người trung gian giúp thay đổi người khác, nên họ thường thay đổi để tương tác cho phù hợp với mỗi người. Giống như thích nghi của tắc kè, họ thay
            đổi để phù hợp với hoàn cảnh, hơn là cho cá nhân họ.

        </p>
        <p>- Điều đó không có nghĩa là các ENFJ không nói ý kiến riêng của họ. Họ có khả năng trình bày một cách rõ ràng và súc tích các nguyên tắc của bản thân cũng như ý kiến riêng của mình, nếu những điều này không quá riêng tư thì các ENFJ có
            thể bộc lộ ra ngoài. Họ có thể giao tiếp với người khác một cách cởi mở và tình cảm, họ thích thông cảm và giúp người khác hơn. Khi phải đối mặt với việc lựa chọn giữa những giá trị bản thân và sự đáp ứng những nhu cầu của người khác,
            họ thường chọn làm điều thứ hai.

        </p>
        <p>- Đôi khi các ENFJ cảm thấy hơi lạc lõng ngay cả khi đang ở trong một đám đông. Cảm giác cô đơn, lạc lõng đó có thể tăng lên nữa vì ENFJ có xu hướng không muốn thể hiện con người thật của mình.

        </p>
        <p>- Mọi người yêu mến ENFJ vì họ luôn vui vẻ, thấu hiểu, yêu quý và giúp đỡ mọi người. ENFJ là mẫu hình của người trung thực và thẳng thắng. Thường thì ENFJ thể hiện sự tự tin rất mạnh mẽ và có khả năng làm được rất nhiều việc khác nhau.
            Họ thường là những con người thông minh, có khả năng tiềm tàng, đầy nghị lực và nhanh nhẹn. Họ thường làm tốt những việc mà họ cảm thấy hứng thú.

        </p>
        <p>- Ở nơi làm việc, ENFJ thường làm tốt ở những vị trí cần tiếp xúc với nhiều người. Bản chất của họ thích hợp làm những việc liên quan đến quan hệ cộng đồng. Khả năng xuất chúng về thấu hiểu cảm xúc người khác và nói những gì cần thiết
            để khiến mọi người hạnh phúc đã vô tình biến họ trở thành nhà tư vấn tâm lý. Ngoài ra, họ còn rất thích trở thành trung tâm của sự chú ý, và họ làm rất tốt công việc đòi hỏi việc truyền cảm hứng cũng như dẫn dắt người khác, ví dụ như
            tư vấn, giáo dục - đào tạo.

        </p>
        <p>- Các ENFJ muốn mọi thứ phải được sắp xếp ngăn nắp, họ sẵn sàng làm việc chăm chỉ để giữ tiến độ công việc cũng như giải quyết các vấn đề mập mờ. ENFJ thường có xu hướng chăm chút, đặc biệt là với ngôi nhà của họ.

        </p>
        <p>- Các ENFJ thường không thích giải quyết những việc không liên quan đến con người. Họ thường không hiểu hoặc không đánh giá cao những việc đó, và ENFJ thường không vui khi phải cố gắng giải quyết những vấn đề logic mà không có bất kì sự
            liên quan gì với con người. Thế giới quan của họ là coi trọng khả năng của con người, vì vậy việc ENFJ xem trọng việc lên kế hoạch hơn những kết quả từ những kế hoạch đó. Các ENFJ rất háo hức với các kết quả có thể xảy ra trong tương
            lai, nhưng họ cũng rất dễ nản lòng và hay mất bình tĩnh với hiện tại.

        </p>
        <p>- ENFJ có khả năng đặc biệt trong việc đối nhân xử thế, và họ hạnh phúc khi có thể sử dụng khả năng này để giúp đỡ mọi người. ENFJ lấy việc giúp đỡ người khác làm thú vui cho bản thân. Sự quan tâm của ENFJ về nhân loại và trực giác đặc
            biệt của họ về con người đã cho họ khả năng thấu hiểu được cả những người sống khép kín nhất.

        </p>
        <p>- ENFJ đều thực sự cần có những mối quan hệ thân thiết và gắn bó với mọi người, các ENFJ luôn nỗ lực để tạo ra và duy trì các mối quan hệ của mình. Hầu hết các ENFJ đều rất trung thành và đáng tin cậy trong các mối quan hệ.

        </p>
        <p>- Khi ENFJ chưa phát triển về mặt cảm xúc sẽ gặp khó khăn trong việc đưa ra các quyết định chính xác và có thể phụ thuộc nhiều vào người khác trong quá trình đưa ra quyết định. Nếu ENFJ chưa phát triển về trực giác, họ sẽ không thể đoán
            trước được những trường hợp có thể xảy ra, và sẽ đánh giá các vấn đề vội vàng dựa trên những hệ thống các nguyên tắc có sẵn hay những quy luật xã hội mà chưa thực sự hiểu hoàn cảnh hiện tại. Một ENFJ chưa khẳng định được bản thân mình
            thường rất nhạy cảm trước những lời phê bình, và thường có xu hướng lo lắng thái quá hay cảm thấy tội lỗi. Các ENFJ cũng có xu hướng trở nên kiểm soát và thao túng người khác.

        </p>
        <p>- Tóm lại, Các ENFJ là những người quyến rũ, nhiệt tình, sáng tạo, hòa nhã và đa dạng với sự hiểu biết sâu sắc trong việc thấu hiểu suy nghĩ và cách hành xử của mọi người. Các ENFJ thường rất được yêu quý bởi vì họ có khả năng đặc biệt
            trong việc nhìn thấy tiềm năng phát triển của người khác, cùng với sự nỗ lực hết mình trong việc giúp đỡ người khác. Cũng như khi quan tâm chăm sóc người khác, các ENFJ cần phải trân trọng những nhu cầu của cá nhân mình như cách mà
            ENFJ đối xử với người khác.

        </p>
        <h3>Những người nổi tiếng mang tính cách ENFJ:

        </h3>
        <p>- Martin Luther King, Jr. - người Mỹ - Nhà hoạt động nhân quyền
        </p>
        <p>- Abraham Lincoln - Tổng thống Hoa Kỳ - Nelson Mandela - Tổng thống Nam Phi, nhà hoạt động nhân quyền
        </p>
        <p>- John Paul II - Đức Giáo Hoàng
        </p>
        <p>- Sheryl Sandberg - Điều hành tại Facebook, tác giả cuốn "Lean In"
        </p>
        <p>- Cicero - Chính trị gia La Mã
        </p>
        <p>- Tony Blair - Thủ tướng Anh

        </p>

        <h2>MỐI QUAN HỆ</h2>
        <p>ENFJ được bạn bè đánh giá là ấm áp và tốt bụng. Những người mang tính cách ENFJ rất thích làm quen và kết bạn với mọi người. ENFJ dễ dàng giao tiếp với mọi người, kể cả với những người kín đáo. Điều đáng nói là các ENFJ khá chọn lọc khi
            nói đến việc tìm những người bạn thân thiết nhất - họ đánh giá cao tính trung thực và sự chân thành, và họ không cởi mở với tất cả những người mà họ quen biết.

        </p>
        <p>Mặt dù thuộc nhóm Tình cảm ( F ), nhưng các ENFJ cũng đưa ra những lời chỉ trích khi cần thiết. ENFJ không thích điều này, nhưng họ cũng khá kiên quyết và chỉ trích nếu tình hình đòi hỏi. Nói chung, mặc dù, ENFJ có xu hướng rất khéo xử
            và tốt bụng, thậm chí đến mức quá ngọt ngào. Thật khó mà cưỡng lại việc kết bạn với ENFJ - đôi khi họ có thể là hơi cứng nhắc, nhưng nghị lực và sự chân thành của họ sẽ xoa dịu mọi thứ.

        </p>
        <p>Các ENFJ khá lý tưởng hóa khi tìm kiếm bạn thân, họ muốn tìm được những người bạn tốt nhất như họ tưởng tượng. Một cách tiếp cận như vậy chắc chắn là đáng khen ngợi, nhưng những người mang loại tính cách ENFJ cần phải chắc chắn rằng sự
            nhiệt tình của họ không làm "ngột ngạt" người khác. ENFJ là những người bạn luôn ủng hộ, vui vẻ và nồng nhiệt.

        </p>
        <p>Các ENFJ đều có khả năng và sẵn sàng làm việc vì tình bạn của họ, và đặt chúng rất cao trong danh sách công việc ưu tiên của họ. ENFJ rất vui trong việc giúp đỡ mọi người khám phá điểm mạnh và niềm đam mê của họ, và sau đó hỗ trợ mọi người
            để phát triển tiềm năng đó. Đây không phải là hoàn toàn vị tha bởi vì ENFJ cũng mong muốn bạn bè cũng trả ơn xứng đáng với những gì đã được ENFJ giúp đỡ - tuy nhiên, ENFJ chắc chắn sẽ được đánh giá cao và rất được tôn trọng.

        </p>
        <p>Tóm lại, các ENFJ luôn nhiệt tình và nỗ lực trong việc tìm kiếm và duy trì các mối quan hệ. Ở mức độ nào đó, ENFJ định nghĩa bản thân họ bằng sự gần gũi và trung thực trong các mối quan hệ cá nhân của mình, do đó họ đầu tư nhiều vào các
            mối quan hệ như thể đó là công việc của họ. ENFJ có khả năng ứng xử tốt, có sự nhiệt tình cũng như chu đáo với mọi người. Họ chấp nhận và quan tâm ân cần. Họ vượt trội trong khả năng mang đến những điều tốt đẹp cho người khác và giúp
            đỡ người khác một cách nồng nhiệt. Các ENFJ muốn sự xác nhận của đối phương dù gặp không ít khó khăn khi hỏi về điều đó. Khi một tình huống diễn ra, họ trở nên nhạy bén và sắc sảo. Sau khi đưa ra quan điểm của mình, họ trở về với bản
            chất ấm áp của mình. Họ có thể có xu hướng "yêu thương quá mức" với những người mà họ yêu quý, nhưng nhìn chung thì các ENFJ được đánh giá cao bởi sự chân thành và sự quan tâm tự nhiên của họ.

        </p>
        <p>Các ưu, nhược điểm của ENFJ sẽ được thể hiện thông qua những vấn đề liên quan tới đối nhân xử thế.

        </p>

        <h3>Ưu điểm của ENFJ trong các mối quan hệ:</h3>
        <p>- Truyền cảm hứng, động lực, đem lại những điều tốt đẹp nhất cho người khác
        </p>
        <p>- Rất nhạy đối với những suy nghĩ và động cơ của người khác
        </p>
        <p>- Khả năng giao tiếp tốt
        </p>
        <p>- Trung thành và tận tâm – họ muốn có những mối quan hệ bền vững
        </p>
        <p>- Lúc nào cũng thể hiện và khẳng định tình cảm của mình
        </p>
        <p>- Khả năng quản lý tài chính tốt
        </p>
        <p>- Vui vẻ, hài hước, gây ấn tượng sâu sắc, có nghị lực và lạc quan
        </p>
        <p>- Có thể vượt qua những mối quan hệ tình cảm thất bại (dù họ thường đổ lỗi cho chính mình)
        </p>
        <p>- Cố gắng đáp ứng những nhu cầu của người khác
        </p>
        <p>- Cố gắng để hai bên cùng thắng

        </p>
        <h3>Nhược điểm của ENFJ trong các mối quan hệ:</h3>
        <p>- Đặc biệt nhạy cảm với các mâu thuẫn, có xu hướng gạt bỏ và quên hết mọi chuyện như là một cách để tự trốn tránh
        </p>
        <p>- Có xu hướng hay điều khiển hoặc/và chi phối người khác
        </p>
        <p>- Có xu hướng yêu thương và bảo vệ thái quá
        </p>
        <p>- Xu hướng đưa ra lời phê bình với những ý kiến hay thái độ không đúng ý họ
        </p>
        <p>- Không thực sự chú tâm vào nhu cầu của bản thân
        </p>
        <p>- Đôi khi không nhận thức được về các chuẩn mực xã hội hay nghi thức giao tiếp xã hội
        </p>
        <p>- Những hệ thống giá trị được xác định rõ ràng của họ đôi khi quá cứng nhắc trong một số trường hợp
        </p>
        <p>- Có xu hướng tự đổ lỗi cho bản thân khi mọi việc không như ý muốn, và không tự cho bản thân mình sự khen thưởng khi mọi việc như ý
        </p>
        <p>- Họ có thể hòa hợp với những thứ mà mọi người thường chấp nhận hoặc mong đợi vì thế họ không thể tự quyết định một việc là "đúng" hay "sai" nếu trái với khuôn mẫu mà môi trường sống của họ định sẵn

        </p>
        <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
        <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
        <h3>Điểm mạnh của ENFJ trong công việc:

        </h3>
        <p>- Rất lôi cuốn. Tính cách ENFJ rất quyến rũ và được nhiều người ngưỡng mộ - họ có bản năng biết làm thế nào để thu hút và giữ sự chú ý của mọi người, cũng như giao tiếp với họ một cách hiệu quả.
        </p>
        <p>- Vị tha. ENFJ rất ấm áp và vị tha, luôn luôn sẵn sàng giúp đỡ người khác. Họ khá duy tâm, bị thúc đẩy bởi ý tưởng làm một cái gì đó tốt cho thế giới.
        </p>
        <p>- Giỏi đồng cảm. ENFJ rất dễ dàng để cảm nhận được những gì đang chi phối, thúc đẩy và cả những lo lắng của người khác, và theo bản năng có thể điều chỉnh cách cư xử và lập luận của mình cho phù hợp.
        </p>
        <p>- Khả năng lãnh đạo bẩm sinh. Các ENFJ không tìm kiếm sự thống trị hoặc cai quản, nhưng mọi người bị thu hút bởi sức quyến rũ và tài hùng biện của họ.</p>
        <p>- Khoan dung. Những người có loại tính cách này có xu hướng mang tư tưởng thông thoáng và dễ chấp nhận, sẵn sàng xem xét những ý tưởng cạnh tranh miễn là chúng không mâu thuẫn với nguyên tắc bên trong của họ. ENFJ có thể dễ dàng hòa thuận
            với hầu hết các nhóm tính cách khác.</p>
        <p>- Đáng tin cậy. ENFJ làm việc chăm chỉ với những thứ họ cho là quan trọng - nếu vai trò của họ kích thích và thúc đẩy họ, một ENFJ sẽ trở nên rất kiên nhẫn và đáng tin cậy.

        </p>
        <h3>Điểm yếu của ENFJ trong công việc:

        </h3>
        <p>- Đôi khi quá vị tha. Các ENFJ thường nhận quá nhiều công việc hoặc tham gia sâu vào các vấn đề của người khác, cố gắng quá mức để không xúc phạm hay làm thất vọng bất cứ ai.
        </p>
        <p>- Rất duy tâm. Những người có loại tính cách này thường quá duy tâm hoặc thậm chí ngây thơ, tin rằng tất cả mọi người đều tốt bụng và quan tâm đến nguyên tắc đạo đức.
        </p>
        <p>- Thường quá nhạy cảm. ENFJ là những người rất tình cảm và nhạy cảm, họ rất dễ bị tổn thương và thất vọng. Họ cũng có thể lo lắng quá nhiều về cảm xúc và hạnh phúc của người khác.
        </p>
        <p>- Dễ bị tổn thương khi bị chỉ trích. ENFJ có những nguyên tắc và giá trị cốt lõi bên trong họ. Họ dễ bị tổn thương nếu ai đó chỉ trích. ENFJ cũng không giữ được bình tĩnh trước những chỉ trích hay phản đối tiêu cực.
        </p>
        <p>- Có thể thấy khó khăn để đưa ra quyết định thô bạo. Do lòng vị tha và sự nhạy cảm của họ, ENFJ có khả năng tự đấu tranh với các quyết định liên quan đến các lựa chọn khó khăn - họ có thể dao động giữa các biện pháp khác nhau, và không
            thể ngừng suy nghĩ về tất cả những hậu quả có thể xảy ra.
        </p>
        <p>- Lòng tự trọng bị dao động cao. Lòng tự trọng của ENFJ phụ thuộc vào việc họ có thể sống theo lý tưởng và thực hiện được các mục tiêu của họ, trong khi đồng thời đảm bảo rằng tất cả mọi người xung quanh họ là hạnh phúc. Nếu ý tưởng của
            ENFJ liên tục bị chỉ trích hoặc họ không thể kéo mọi người gần gũi với họ, thì sự tự tin của họ cũng có thể sẽ giảm mạnh.

        </p>
        <h3>Các nguyên tắc thành công</h3>
        <p>- Trau dồi ưu điểm của mình: Hãy luôn tạo cho mình cơ hội hòa nhập với mọi người mà ở đó những đóng góp của bạn được trân trọng.

        </p>
        <p>- Khắc phục khuyết điểm: Hãy chấp nhận những ưu điểm cũng như nhược điểm của mình. Bằng cách đối mặt với những điểm yếu và tìm cách khắc phục, bạn sẽ vượt qua chúng và chúng sẽ ít có khả năng ảnh hưởng đến bạn hơn.

        </p>
        <p>- Bộc lộ cảm xúc của mình: Bạn cần hiểu rằng cảm xúc của bạn cũng quan trọng như cảm xúc của những người khác trong mọi tình huống. Kết quả tốt nhất chỉ được thể hiện nếu bạn biết cách trân trọng những cảm xúc và những giá trị của bản
            thân, vì thế hãy trân trọng những cảm xúc của mình như cách bạn trân trọng cảm xúc của những người khác.

        </p>
        <p>- Hãy quyết đoán: Đừng ngại khi đưa ra một quan điểm hoặc ý kiến. Bạn cần biết cách thể hiện cho mọi người thấy được tiềm năng và giá trị của việc đó để thuyết phục họ rằng điều đó đáng để thực hiện.

        </p>
        <p>- Hãy cố gắng hiểu người khác: Hãy nhớ rằng còn mười lăm nhóm tính cách khác, những người có cái nhìn khác với bạn. Thường thì mọi việc sẽ giải quyết dễ dàng hơn nếu bạn hiểu được quan điểm của họ.

        </p>
        <p>- Bình tĩnh với những lời chỉ trích: Bạn nên tìm hiểu nguyên nhân tại sao lại xảy ra bất đồng và xích mích, nó sẽ chỉ ra được sự khác nhau giữa bạn với người khác, khi đó đôi bên sẽ hiểu nhau hơn và tránh được xung đột, chúng như một cơ
            hội để bạn để phát triển bản thân. Đừng tự khiến bản thân cảm thấy mình phải có trách nhiệm đối với sự chỉ trích của người khác, mà hãy lắng nghe và thấu hiểu những cảm xúc và ý niệm mà nó mang lại cho bạn. Có thể sau đó bạn sẽ tìm
            ra giải pháp không những có thể giải quyết được vấn đề mà còn đem lại một kết quả toàn tốt hơn.

        </p>
        <p>- Hãy biết chấp nhận: Bạn rất dễ nhận ra giá trị của người khác, nhưng họ sẽ có thể bỏ đi nếu bạn làm cho họ căng thẳng. Hãy cho họ thấy rằng bạn cảm thông với những nỗi sợ và giới hạn của họ, rồi dẫn họ một cách nhẹ nhàng theo cách mà
            bạn cảm nhận: dẫn dắt họ nhẹ nhàng đến với tình thương và sự thấu hiểu.

        </p>
        <p>- Thấu hiểu chính bản thân mình: Đừng hạn chế những nhu cầu bản thân cho lợi ích của người khác quá nhiều. Bạn phải nhận ra bạn là một người quan trọng. Nếu bạn không đáp ứng chính những nhu cầu của bản thân thì làm sao bạn có thể tiếp
            tục gây ảnh hưởng và làm người khác hiểu rằng bạn sống đúng với những niềm tin của mình.

        </p>
        <p>- Hãy tin tưởng vào những điều tốt đẹp nhất: Đừng tự dằn vặt bản thân bằng việc cảm thấy giá trị bản thân bạn bị đánh mất bởi những người khác – rõ ràng là không đúng. Hãy để điều đó cứ diễn ra và hãy tin rằng yêu thương luôn là câu trả
            lời cuối cùng.

        </p>
        <p>- Nếu bạn chưa chắc chắn hay nghi ngờ, hãy hỏi lại ngay: Bạn đừng đánh đồng việc thiếu thông tin phản hồi là một với việc nhận được những phản hồi tiêu cực. Nếu bạn cần phản hồi từ người khác, đừng chần chừ, hãy hỏi ngay!

        </p>
        <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
        </h2>

        <p>Hầu hết sự nghiệp điển hình của ENFJ đều có chung một đặc điểm quan trọng đó là tập trung vào việc làm cho người khác hạnh phúc. Các ENFJ thường rất ấm áp, gần gũi và vị tha, họ có nhiều sự lựa chọn khả thi khi nói đến việc chọn một nghề
            nghiệp tốt nhất cho họ.

        </p>
        <p>Chúng ta hãy bắt đầu khỏa sát sự lựa chọn nghề nghiệp của ENFJ bằng cách chỉ rõ một thực tế là ENFJ chân thành quan tâm đến người khác và cố gắng làm hết sức mình để giúp đỡ mọi người. Trên hết, những người mang loại tính cách ENFJ có
            xu hướng có kỹ năng xã hội và giao tiếp phi thường - ENFJ được gọi là "Người thấu hiểu mọi người". ENFJ tỏa sáng trong các lĩnh vực cần sự tiếp xúc với khách hàng - họ có thể trở thành đại diện bán hàng suất sắc, chuyên gia tư vấn
            quảng cáo hoặc quản trị nhân sự.

        </p>
        <p>ENFJ thường khá nhạy cảm và thậm chí có phần duy tâm. Đây là một con dao hai lưỡi, bởi vì sự nhạy cảm hướng ENFJ đến với lĩnh vực cần trí tuệ cảm xúc cao, mặt khác ENFJ rất dễ bị chỉ trích và nên tránh xa các công việc căng thẳng. Một
            số ngành nghề mà ENFJ nên tránh: tài chính (đặc biệt là kinh doanh chứng khoán), cảnh sát, quản lý của công ty, nhân viên cấp cứu, y học hay quân sự.

        </p>
        <p>Những người có loại cá tính này cũng thực sự sáng tạo, có tổ chức và trung thực - điều này làm cho họ xuất sắc trong các lĩnh vực tâm lý học, điều phối viên sự kiện hay các chính trị gia (có một vài chính trị gia trung thực trên thế giới!).
            Ngoài ra, họ cũng có thể xuất sắc trong lĩnh vực báo chí.

        </p>
        <p>ENFJ yêu những thách thức mới và cảm giác xúc động mà họ nhận được từ việc giúp đỡ người khác. Do đó, nhiều ENFJ phù hợp với nghề nghiệp "vị tha", ví dụ như công tác xã hội hay tôn giáo, giảng dạy hoặc tư vấn. Tuy nhiên, cũng cần lưu ý
            rằng ENFJ cần sự chấp thuận tuyệt đối từ những người khác để cảm thấy hài lòng và vui vẻ - nếu điều này là không sớm xảy ra. ENFJ sẽ nhanh chóng mất nhiệt huyết và tìm kiếm lĩnh vực hoặc dự án khác.

        </p>
        <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
            bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
            nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

        </p>

        <h3>Các ENFJ thường mang những đặc điểm:</h3>

        <p>- Đặc biệt giỏi trong việc đối nhân xử thế
        </p>
        <p>- Coi trọng cảm xúc của mọi người
        </p>
        <p>- Chân thành và nhiệt tình quan tâm đến mọi người
        </p>
        <p>- Trung thành và trung thực
        </p>
        <p>- Lấy việc giúp đỡ người khác làm niềm vui cho bản thân mình
        </p>
        <p>- Đánh giá cao cấu trúc và tổ chức
        </p>
        <p>- Coi trọng sự hài hòa, và rất giỏi trong việc tạo ra sự hài hòa đó
        </p>
        <p>- Không thích các vấn đề mang tính logic hay cần đến phân tích
        </p>
        <p>- Khả năng tổ chức và sắp xếp tốt
        </p>
        <p>- Thích sự đa dạng và những thử thách
        </p>
        <p>- Sáng tạo và giàu trí tưởng tượng
        </p>
        <p>- Cần sự tán thành/ủng hộ của người khác để cảm thấy hài lòng với bản thân
        </p>
        <p>- Cực kì nhạy cảm với những lời phê bình và xích mích

        </p>
        <p>Sự linh hoạt trong tính cách đã khiến cho ENFJ tốn khá nhiều thời gian trong việc chọn nghề nghiệp. Một khi ENFJ làm việc trong môi trường có nhiều sự hỗ trợ và động viên thì họ sẽ làm rất tốt, nhất là trong các công việc phải giao tiếp
            với con người và đối mặt với nhiều thử thách kích thích sự sáng tạo của họ.

        </p>
        <p>Dưới đây là các công việc phù hợp với ENFJ, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ENFJ nhưng không phải chắc chắn) :

        </p>
        <p>- Chính trị gia / Nhà ngoại giao.
        </p>
        <p>- Nhà tâm lý học.
        </p>
        <p>- Công tác xã hội / Cố vấn.
        </p>
        <p>- Nhà giáo.
        </p>
        <p>- Nhà tư vấn.
        </p>
        <p>- Quản lý nhân sự.
        </p>
        <p>- Đại diện bán hàng.
        </p>
        <p>- Tổ chức sự kiện.
        </p>
        <p>- Nhà văn.

        </p>

    </div>
</div>
</div>
`
components.NTCHScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>


                <p>Có khoảng 7% dân số mang loại tính cách này. Những người mang tính cách ENFP thường rất tò mò, hiếu kỳ, duy tâm và khá bí ẩn. Họ tìm kiếm ý nghĩa và rất quan tâm đến động cơ của người khác, họ thấy cuộc sống thật rộng lớn, nhiều câu đố
                    phức tạp ở những nơi mà mọi thứ được kết nối. Các ENFP có xu hướng nhận thức cá nhân và khả năng thấu hiểu cảm xúc người khác cao - Điều này, cộng với sự đam mê và kỹ năng xã hội của họ, thường làm cho họ rất được nhiều người ngưỡng
                    mộ và có sức ảnh hưởng cao.

                </p>
                <p>Mặt khác, điều này cũng có thể là một bất lợi cho các ENFP, nó làm cho họ lo lắng về những việc ít khả năng xảy ra hoặc tự phát xảy ra. Nếu họ không cẩn thận, đặc điểm tính cách này có thể làm giảm sự tự tin của họ.

                </p>
                <p>Tính cách đặc trưng của các ENFP là sự nhiệt tình, đặc biệt là khi nói đến những điều mà châm ngòi cho trí tưởng tượng của họ - trong trường hợp này, các ENFP có thể rất năng động và có sức thuyết phục, có thể dễ dàng thuyết phục người
                    khác gia nhập với họ. Trớ trêu thay, đặc điểm này cũng có thể quay lưng lại với các ENFP, khi họ đột nhiên thấy mình ở trung tâm của sân khấu, được coi là nhà lãnh đạo truyền cảm hứng và những bậc thầy của người khác, các ENFP phấn
                    đấu để được độc lập, vì vậy không ngạc nhiên, không phải lúc nào họ cũng mong muốn trở thành tâm điểm của sự chú ý.

                </p>
                <p>Các ENFP rất tình cảm và nhạy cảm, họ xem cảm xúc như một cái gì đó mà tất cả mọi người nên dành thời gian để hiểu và thể hiện. Tuy nhiên, đặc điểm này cũng có thể gây ra rất nhiều căng thẳng cho họ, như ENFP thường có thể tập trung quá
                    nhiều vào động cơ của người khác và ý nghĩa của hành động đó. Quan sát và trực quan là 2 cá tính nổi trội của họ, nhưng họ có thể có những sai sót nghiêm trọng khi cố gắng sử dụng những suy luận từ cảm xúc của người khác làm cơ sở
                    cho quyết định của mình.

                </p>
                <p>Các ENFP cũng gặp khó khăn khi đối phó với thói quen, các vấn đề hành chính thông thường. Họ thích sự tự do, an toàn và ổn định, quan điểm này thường bộc lộ rõ ràng.

                </p>
                <p>Những người có các loại tính cách ENFP biết làm thế nào để thư giãn, dựa trên kỹ năng tưởng tượng, nhiệt tình và kỹ năng sống của họ - Ví dụ, họ có thể rất nghiêm túc và đam mê công việc trong ngày và sau đó cho xả hơi trong một bữa tiệc
                    hoang dã trong một hộp đêm. Sự chuyển đổi giữa hai trạng thái đó có thể tức thời, thường ngạc nhiên ngay cả với người bạn thân nhất.

                </p>
                <p>Tóm lại, các ENFP không phải là người tuân thủ, phục tùng, họ đi theo con đường riêng của mình và tin vào trực giác của họ. Họ có nhiều tài năng, nhưng họ chỉ thể hiện khi có đủ tự do. Những người mang tính cách này có thể trở nên thiếu
                    kiên nhẫn và thất vọng nếu họ bị đặt vào vị trí nhàm chán, không thể tự do thể hiện bản thân - nhưng khi ENFP tìm thấy vị trí, công việc mà họ mong muốn thì trí tưởng tượng, sự đồng cảm và lòng can đảm của họ có thể tạo ra kết quả
                    đáng kinh ngạc.

                </p>
                <h3>Những người nổi tiếng mang tính cách ENFP:

                </h3>
                <p>- Hunter S. Thompson , Nhà báo, tác giả của 'Fear and Loathing in Las Vegas'.
                </p>
                <p>- Mark Twain, Nhà báo, nhà văn nổi tiếng.
                </p>
                <p>- Bill Cosby – Diễn viên, nhà văn, nhạc công nổi tiếng
                </p>
                <p>- Oscar Wilde, Nhà viết kịch
                </p>
                <p>- Aldous Huxley, tác giả của 'Brave New World'
                </p>
                <p>- Julian Assange, Người sáng lập WikiLeaks
                </p>
                <p>- Samuel Clemens – Nhà văn nổi tiếng người Hoa Kỳ
                </p>
                <p>- Walt Disney – Người sáng lập The Walt Disney Company

                </p>
                <h2>MỐI QUAN HỆ</h2>
                <p>Các ENFP luôn là những người bạn vui vẻ, chân thành và cởi mở. Họ hiếm khi gặp khó khăn để hiểu loại tính cách khác và tương tác với chúng trong "ngôn ngữ" của họ. Đây là một đặc điểm rất hiếm và có giá trị - mặc dù một số bạn bè của ENFP
                    có thể không thể đáp lại, họ chắc chắn sẽ nhận ra và đánh giá cao những nỗ lực của ENFP. Những người có loại cá tính này thường có khả năng thu hút ngay cả những người bạn có nhiều lớp vỏ bọc tính cách.

                </p>
                <p>Vì các ENFP rất trực quan, họ ít khi gặp khó khăn để tìm ra những gì thúc đẩy và truyền cảm hứng cho bạn bè của họ. Nhiệt tình và ấm áp các ENFP rất dễ lan truyền, vì chúng xuất phát từ chủ nghĩa lý tưởng tinh khiết. Tuy nhiên, các ENFP
                    nên chắc chắn rằng sự theo dõi của mọi người là không nhàm chán - không phải tất cả mọi người đều có thể tiếp thu hết những luồng ý tưởng và chủ đề mà tâm trí của một ENFP có thể tạo ra.

                </p>
                <p>Những người bạn ENFP có xu hướng rất quan tâm và ủng hộ, nhưng họ cũng cần phải đảm bảo rằng nhu cầu của họ được đáp ứng. Những người có loại cá tính này thường liên quan nhiều và can thiệp sâu đến cuộc sống của bạn bè, thậm chí quên chăm
                    sóc cho bản thân. Hơn nữa, các ENFP cũng có xu hướng nuôi dưỡng những kỳ vọng không thực tế khi nói đến tình bạn. Điều này có khả năng có thể dẫn đến căng thẳng và thất vọng khi nhận ra rằng bạn bè của họ không phải là hoàn mỹ hay
                    tậm tâm như họ muốn.

                </p>
                <p>Nói chung, ENFP có thể sẽ là khá duy tâm và nhạy cảm. Cái gì cũng có mặt trái của nó và sự nhạy cảm của ENFP không phải là một ngoại lệ - nó cho phép họ kết nối với bạn bè và người quen rất dễ dàng, nhưng cũng làm cho ENFP rất dễ bị chỉ
                    trích. Đây là lý do tại sao các ENFP có xu hướng tránh những người có cá tính mạnh T và J - những loại cá tính đó có thể có ý kiến ​​mạnh mẽ về một loạt các chủ đề và các ENFP có thể sẽ cảm thấy khá khó chịu tranh luận với họ.

                </p>
                <p>Các ENFP bị mê hoặc bởi những bí ẩn và sẽ làm hết sức mình để hiểu được người khác nếu họ cảm thấy rằng có điều gì đó ẩn chứa bên trong. Đây là một trong những lý do tại sao ENFP có xu hướng hình thành tình bạn vô cùng mạnh mẽ với các
                    loại NF và NT khác.

                </p>
                <p>Tóm lại, các ENFP rất nghiêm túc trong các mối quan hệ, tuy nhiên lại tiếp cận nó với sự nhiệt tình và nỗ lực một cách hồn nhiên. ENFP đòi hỏi và yêu cầu sự chân thành, sâu sắc từ các mối quan hệ, các ENFP sẽ cố gắng hết sức để khiến mọi
                    việc như ý muốn. ENFP rất nhiệt tình, đáng tin cậy, chu đáo và luôn cố gắng nuôi dưỡng các mối quan hệ của mình. Họ có khả năng giao tiếp rất tốt, và có khả năng truyền cảm hứng, giúp cho người khác bộc lộ hết năng lực mà họ có thể.
                    Năng động và sôi nổi, ENFP rất hay đắm mình trong lửa đam mê cuồng nhiệt, và thường được đánh giá cao bởi sự nồng hậu chân thành và lý tưởng cao đẹp.

                </p>
                <p>Các ưu điểm hay nhược điểm của ENFP sẽ được thể hiện ra thông qua các vấn đề liên quan tới đối nhân xử thế.

                </p>

                <h3>Các ưu điểm của ENFP trong các mối quan hệ:

                </h3>
                <p>- Rất trung thành và luôn muốn cống hiến.
                </p>
                <p>- Thấu hiểu suy nghĩ và động cơ của người khác.
                </p>
                <p>- Kĩ năng giao tiếp tốt.
                </p>
                <p>- Vui tính, năng động và lạc quan.
                </p>
                <p>- Dùng nhiệt huyết và cảm hứng của mình giúp người khác đạt được kết quả tốt nhất.
                </p>
                <p>- Luôn cố gắng đáp ứng nhu cầu của người khác.
                </p>
                <p>- Rất thân thiện và đáng tin cậy.
                </p>
                <p>- Luôn có tư duy "cùng thắng".

                </p>
                <h3>Các nhược điểm của ENFP trong các mối quan hệ:

                </h3>
                <p>- Rất dễ chán.
                </p>
                <p>- Có xu hướng chìm đắm trong công việc.
                </p>
                <p>- Không thích làm những việc tẻ nhạt như lau chùi, trả tiền hóa đơn…
                </p>
                <p>- Nhiệt huyết của họ đôi khi khiến họ trở nên không thực tế.
                </p>
                <p>- Nhu cầu có một mối quan hệ hoàn hảo có thể khiến họ thay đổi những mối quan hệ của mình thường xuyên.
                </p>
                <p>- Không thích tranh cãi.
                </p>
                <p>- Níu kéo một mối quan hệ đã trở nên tồi tệ.
                </p>
                <p>- Không thích bị phê bình.
                </p>
                <p>- Khó khăn trong việc la mắng hoặc phạt người khác...

                </p>
                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của ENFP trong công việc:

                    <p>- Quan sát. Các ENFP tin rằng không có chi tiết hay hành động nào mà không liên quan - họ cố gắng để nhận thấy tất cả mọi thứ, nhìn thấy tất cả các sự kiện như là một phần của một câu đố bí ẩn lớn được gọi là cuộc sống.
                    </p>
                    <p>- Rất gần gũi và thân thiện. Các ENFP là thiện chí và hợp tác, làm hết sức mình để có sự đồng cảm và thân thiện trong mọi tình huống. Họ có thể kết giao hầu hết mọi người và thường có một vòng tròn lớn của bạn bè và những người quen
                        biết .
                    </p>
                    <p>- Tràn đầy năng lượng và nhiệt tình. Các ENFP luôn mong muốn chia sẻ ý tưởng của mình với những người khác và nhận được ý kiến phản hồi ​​của họ. Sự nhiệt tình của họ là rất có cảm hứng và dễ lan truyền cùng một lúc.
                    </p>
                    <p>- Biết cách thư giãn. Những người có loại tính cách này biết cách làm thế nào để dừng công việc và giải trí, chỉ đơn giản là trải nghiệm cuộc sống.
                    </p>
                    <p>- Truyền thông xuất sắc. ENFP có kỹ năng giao tiếp tuyệt vời và họ nhanh chóng nghĩ ra cách làm thế nào để trình bày ý tưởng của mình với mọi người một cách thuyết phục. Họ có thể xử lý cả hai cuộc nói chuyện nhỏ và các cuộc trò chuyện
                        có ý nghĩa sâu sắc, mặc dù định nghĩa của cuộc nói chuyện nhỏ của ENFP có thể hơi khác thường - họ sẽ chỉ đạo các cuộc hội thoại hướng tới ý tưởng chứ không phải là thời tiết, tin đồn, ...
                    </p>
                    <p>- Tò mò. ENFP rất giàu trí tưởng tượng và cởi mở. Họ thích thử những điều mới và không ngần ngại đi ra ngoài vùng an toàn nếu họ cần thiết.

                    </p>


                </h3>

                <h3>Điểm yếu của ENFP trong công việc:

                </h3>
                <p>- Quá nhạy cảm. Các ENFP có xu hướng có những cảm xúc rất mãnh liệt, xem chúng như là một phần không thể tách rời của bản sắc của họ. Điều này là nguyên nhân làm cho ENFP phản ứng mạnh mẽ trước những lời chỉ trích, xung đột hay căng thẳng.
                </p>
                <p>- Có thể có kỹ năng thực hành kém. Các ENFP rất giỏi khi nói đến việc giải quyết vấn đề, tạo ra các quy trình hoặc bắt đầu các dự án (đặc biệt là nếu chúng liên quan đến những người khác) - Tuy nhiên, họ có thể cảm thấy khó khăn để thông
                    qua và áp dụng nó vào thực tế, bên cạnh việc quản lý mọi thứ.
                </p>
                <p>- Suy nghĩ quá nhiều điều. Các ENFP luôn luôn tìm kiếm những động cơ ẩn và có xu hướng suy nghĩ quá mức ngay cả những điều đơn giản nhất, không ngừng tự hỏi tại sao một người nào đó đã làm những gì họ đã làm và những điều đó có ý nghĩa
                    gì.
                </p>
                <p>- Dễ bị căng thẳng. Các ENFP rất nhạy cảm và quan tâm sâu sắc về cảm xúc của người khác - điều này có thể gây ra cho họ rất nhiều căng thẳng, khi mà mọi người thường hướng về phía ENFP để được hướng dẫn và khuyến khích, và ENFP không thể
                    luôn luôn nói "Đồng ý".
                </p>
                <p>- Thường bị mất mục tiêu. Các ENFP thường mất hứng thú nhanh chóng nếu dự án của họ thay đổi theo hướng làm công việc thông thường, đơn giản, hay khi làm các công việc hành chính - Họ không thể ngăn chặn các suy nghĩ lơ đãng trong đầu
                    họ.
                </p>
                <p>- Quá độc lập. Các ENFP không thích bị quản lý chặt chẽ hoặc hạn chế bởi các quy định và hướng dẫn. Họ muốn được xem như một cá nhân rất độc lập, làm chủ của số phận của họ.

                </p>
                <h3>Các nguyên tắc thành công</h3>


                <p>- Trau dồi ưu điểm của mình: Hãy luôn tạo cho mình cơ hội hòa nhập với mọi người mà ở đó những đóng góp của bạn được trân trọng.

                </p>
                <p>- Khắc phục khuyết điểm: Hãy chấp nhận những ưu điểm cũng như nhược điểm của mình. Bằng cách đối mặt với những điểm yếu và tìm cách khắc phục, bạn sẽ vượt qua chúng và chúng sẽ ít có khả năng ảnh hưởng đến bạn hơn.

                </p>
                <p>- Bộc lộ cảm xúc của mình: Bạn cần hiểu rằng cảm xúc của bạn cũng quan trọng như cảm xúc của những người khác trong mọi tình huống. Kết quả tốt nhất chỉ được thể hiện nếu bạn biết cách trân trọng những cảm xúc và những giá trị của bản
                    thân, vì thế hãy trân trọng những cảm xúc của mình như cách bạn trân trọng cảm xúc của những người khác.

                </p>
                <p>- Hãy quyết đoán: Đừng ngại khi đưa ra một quan điểm hoặc ý kiến. Bạn cần biết cách thể hiện cho mọi người thấy được tiềm năng và giá trị của việc đó để thuyết phục họ rằng điều đó đáng để thực hiện.

                </p>
                <p>- Hãy cố gắng hiểu người khác: Hãy nhớ rằng còn mười lăm nhóm tính cách khác, những người có cái nhìn khác với bạn. Thường thì mọi việc sẽ giải quyết dễ dàng hơn nếu bạn hiểu được quan điểm của họ.

                </p>
                <p>- Bình tĩnh với những lời chỉ trích: Hãy xem các sự bất đồng ý kiến và những mối bất hòa là cơ hội để trưởng thành. Hãy cố gắng học cách lắng nghe những phản hồi và tỏ ra khách quan trong cách phản ứng.

                </p>
                <p>- Thấu hiểu chính bản thân mình: Đừng hạn chế những nhu cầu bản thân cho lợi ích của người khác quá nhiều. Bạn phải nhận ra bạn là một người quan trọng. Nếu bạn không làm cho bản thân mình hài lòng thì không cách nào bạn có thể làm việc
                    hiệu quả và khiến cho mọi người tin tưởng

                </p>
                <p>- Chịu trách nhiệm với chính bản thân mình: Đừng lãng phí chất xám của mình vào việc đổ lỗi cho người khác, hoặc cho rằng mình là nạn nhân của việc đó. Chính bạn phải biết làm chủ bản thân mình chứ không ai khác.

                </p>
                <p>- Nếu chưa chắc chắn, hãy hỏi lại: Đừng tự đánh đồng việc thiếu những thông tin phản hồi là một với việc nhận được những phản hồi tiêu cực. Nếu bạn cần phản hồi từ người khác, hãy hỏi ngay!

                </p>
                <p>- Hãy tin tưởng vào những điều tốt đẹp nhất: Đừng tự khiến bản thân trở nên bi quan vì những điều tệ hại. Hãy nhớ rằng một thái độ tích cực tạo nên những hoàn cảnh tích cực.

                </p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>

                <p>Các ENFP là những người có kỹ năng xã hội tuyệt vời và nhận thức đáng kinh ngạc. Loại tính cách ngày vượt trội khi nói đến sự kết nối mọi người và tìm kiếm những gì làm nên dấu hiệu của người khác - đây là một kỹ năng tuyệt vời trong bất
                    kỳ nghề nghiệp. Hơn nữa, các ENFP có một khả năng độc đáo để giao tiếp với những người khác trên mức độ của riêng họ - Điều này cho phép họ tạo ra các mối quan hệ mạnh mẽ, lâu dài. Do những đặc điểm này, sự nghiệp ENFP điển hình liên
                    quan đến rất nhiều sự tương tác cá nhân và đòi hỏi kỹ năng xã hội tốt - ví dụ, ENFP có thể trở thành các nhà tâm lý tuyệt vời, giáo viên, nhân viên tư vấn, các nhà ngoại giao hay chính trị gia.

                </p>
                <p>Các ENFP rất có năng khiếu, năng động, định hướng được tương lai. Họ có thể dễ dàng cạnh tranh với các nhóm tính cách khác trong lĩnh vực nghề nghiệp khi nói đến việc nhìn thấy một bức tranh lớn hơn hay tìm kiếm các nguyên tắc cơ bản.
                    Hơn nữa, mặc dù là một loại F, ENFP vượt trội khi sử dụng tu duy logic của họ, tạo thành một sự kết hợp rất mạnh giữa trực giác và lý trí - họ có thể tập trung vào các mục tiêu chính và sau đó sắp xếp, lên kế hoạch để đạt được mục
                    tiêu đó. Có rất nhiều sự nghiệp tiềm năng tận dụng tốt những đặc điểm ENFP - những người có cá tính này có xu hướng phân tích hệ thống nhiều mặt, các nhà khoa học, kỹ sư và doanh nhân. Đây là những nơi mà ENFP thực sự có thể tỏa sáng
                    - ví dụ, các nhà khoa học và kỹ sư với hệ thống mạng lớn.

                </p>
                <p>Tóm lại, những người có loại cá này có kỹ năng giao tiếp tuyệt vời, cả bằng văn bản và bằng lời nói. ENFP cũng có thể là nhà lãnh đạo truyền cảm hứng trong nhiều ngành nghề, nhưng họ không cố gắng hoặc thích thú kiểm soát người khác. Tuy
                    nhiên, có một số điểm yếu trong thế mạnh của họ:

                </p>
                <p>- Thứ nhất, các ENFP cần phải cảm thấy được đánh giá cao của các đồng nghiệp và cấp trên của họ - điều này có thể đe dọa sự ổn định cảm xúc của họ trong trường hợp hoặc một số ngành nghề.
                </p>
                <p>- Thứ hai, các ENFP khá nhanh chóng chán nản và do đó có xu hướng nhảy sang dự án khác để tìm kiếm một số ý tưởng và thú vị mới.
                </p>
                <p>- Thứ ba, các ENFP không thích làm những công việc đơn điệu và có khả năng làm mọi thứ để tránh chúng.

                </p>
                <p>Những yếu điểm này có thể cản trở sự tiến bộ của họ trong một số lĩnh vực - tuy nhiên, một số ENFP biến chúng thành điểm mạnh. Ví dụ, ENFP làm rất tốt trong các công việc như văn bản, báo chí, diễn xuất hay báo cáo truyền hình - công việc
                    như vậy có thể đảm bảo rằng các ENFP không bao giờ hết những ý tưởng thú vị và có một lượng khán giả lớn để giữ chúng trong một thời gian dài.

                </p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

                </p>
                <h3>Các ENFP thường mang những đặc điểm:</h3>

                <p>- Kĩ năng giao tiếp và viết lách tốt.
                </p>
                <p>- Nhiệt tình, đặt nhu cầu của người khác lên trên nhu cầu của mình.
                </p>
                <p>- Thân thiện, quan tâm đến mọi người, khả năng giao tiếp tốt.
                </p>
                <p>- Thông minh và bản lĩnh.
                </p>
                <p>- Có nhiều mục tiêu ngắn hạn.
                </p>
                <p>- Có khả năng liên kết với người khác.
                </p>
                <p>- Rất mạnh trong việc dùng trực giác và cảm giác để đánh giá người khác.
                </p>
                <p>- Không thích người khác điều khiển mình.
                </p>
                <p>- Không thích làm những việc có tính đơn giản, thường nhật.
                </p>
                <p>- Nhận thức rõ ràng về tương lai.
                </p>
                <p>- Thích được người khác thừa nhận và hiểu họ.
                </p>
                <p>- Rất hợp tác và thân thiện.
                </p>
                <p>- Sáng tạo và năng động.
                </p>
                <p>- Có khả năng thấu hiểu những khái niệm và lý thuyết khó khăn.
                </p>
                <p>- Là nhà lãnh đạo bẩm sinh, nhưng không thích kiểm soát người khác.
                </p>
                <p>- Làm việc theo logic và lý trí – dùng trực giác của mình để hiểu rõ mục tiêu và làm cho tới khi hoàn thành thì thôi.

                </p>
                <p>Dưới đây là các công việc phù hợp với ENFP, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ENFP nhưng không phải chắc chắn) :

                </p>
                <p>- Chính trị gia/ Nhà ngoại giao.
                </p>
                <p>- Chuyên viên tư vấn.
                </p>
                <p>- Nhà văn/ Nhà báo.
                </p>
                <p>- Bác sĩ tâm lý.
                </p>
                <p>- Diễn viên.
                </p>
                <p>- Doanh nhân.
                </p>
                <p>- Luật sư.
                </p>
                <p>- Nhà giáo.
                </p>
                <p>- Phóng viên.
                </p>
                <p>- Khoa học gia/ Kĩ sư.
                </p>
                <p>- Lập trình viên, chuyên gia phân tích hệ thống hoặc chuyên gia máy tính.

                </p>


            </div>
        </div>
    </div>
`
components.NDNNVScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>


                <p>ISTJ là loại tính cách phổ biến nhất, có đến 13% dân số trên thế giới thuộc nhóm tính cách này. Phương châm sống của họ là “Chỉ có sự thật”, tính cách của ISTJ là rất tôn trọng sự thật, họ có xu hướng tiếp thu rất nhiều thông tin và nhớ
                    rất lâu.

                </p>
                <p>Một trong những yếu tố góp phần quan trọng làm cho ISTJ có khả năng phân tích các sự vật, hiện tượng, con người ở môi trường xung quanh rất tốt đó là nhờ đặc tính S.

                </p>
                <p>Do cách tiếp cận thẳng thắn và trực tiếp nên ISTJ có thể gặp khó khăn khi tiếp cận các giả thuyết hoặc ý tưởng đối lập. Tuy nhiên các ISTJ sẽ quyết tâm tìm hiểu và thực hiện nếu biết ý tưởng đó là có giá trị và có thể thực hiện được –
                    ISTJ sẽ cân nhắc trách nhiệm của họ để thiết lập và duy trì hoạt động ổn định. Ngay sau khi các ý tưởng mới chứng minh được tính hữu dụng của nó, các ISTJ sẽ nỗ lực hết mình để thực hiện thành công cho dù sức khỏe của họ bị tổn hại.

                </p>
                <p>ISTJ rất kỹ lưỡng, luôn luôn kiểm tra các sự kiện và không giả định bất cứ điều gì.

                </p>
                <p>ISTJ được đánh giá là những người rất trung thành, đặc biệt là trong công việc. Tính chính xác, sự kiên nhẫn và khả năng tập trung cao khiến cho họ trở thành nhân viên lý tưởng trong nhiều ngành nghề. Vì vậy không ngạc nhiên, khi họ bị
                    thu hút về các lĩnh vực: Dịch vụ công cộng, pháp luật, quân sự,…

                </p>
                <p>ISTJ thường dành nhiều thời gian và công sức để thực hiện các công việc mà họ cho là quan trọng, đặc biệt là góp phần đạt được một mục tiêu cụ thể. Tuy nhiên, một cam kết như vậy cũng có mặt tiêu cực – ISTJ sẽ không hề lay chuyển và chỉ
                    dành rất ít thời gian để làm những việc mà họ không thấy có ý nghĩa, hoặc không thực tế, ví dụ như nghi thức xã hội. Tính cách của ISTJ là thích làm việc một mình, nhưng khi cần thiết họ vẫn có thể làm việc nhóm.

                </p>
                <p>ISTJ là người luôn nhận trách nhiệm về hành động của mình và họ yêu thích quyền lực cũng bắt nguồn từ sự chịu trách nhiệm này. Họ thường biết rất nhiều nghề vì vậy họ có thể thành công trong nhiều lĩnh vực – ISTJ là người minh bạch, hợp
                    lý, thông thái, họ mong muốn có cuộc sống ổn định và an toàn.

                </p>
                <p>Với tính cách hướng nội kèm theo tính cách T khá phát triển, ISTJ được xem là người thờ ơ, lạnh nhạt. Điều đó cũng dễ hiểu vì ISTJ gặp khó khăn khi bộc lộ cảm xúc hay bày tỏ tình cảm của mình. Nhưng điều đó không có nghĩa là họ không có
                    cảm xúc hoặc không nhạy cảm.

                </p>
                <p>ISTJ dễ bực bội với những thiếu sót của người khác – Họ xem lời hứa là điều thiêng liêng và không thể hiểu “làm thế nào một người có ý thức lại không hoàn thành nghĩa vụ của mình”.

                </p>
                <p>ISTJ có xu hướng giữ kín các quan điểm chủ quan của mình, trừ khi ai đó hỏi họ trực tiếp. Những người có tính cách này thường rất trực tiếp – với họ sự thật luôn quan trọng hơn nhiều so với cảm xúc. Các phán quyết tàn nhẫn (ở tòa án, các
                    vụ tranh chấp,…) luôn làm người khác dao động nhưng với ISTJ thì không, vì họ không để cảm xúc chi phối quyết định.

                </p>
                <p>ISTJ tôn trọng truyền thống và làm hết sức mình để tuân thủ các quy định và nguyên tắc hiện hành. Trong một số trường hợp, ISTJ sẽ không phá vỡ các quy định, mặc dù biết nếu không tuân thủ quy định sẽ giảm được hậu quả hơn.

                </p>
                <p>ISTJ rất khó tự cảm nhận được cảm xúc của họ (với cảm xúc người khác thì càng khó thấu hiểu). Vì vậy họ gặp rất nhiều khó khăn khi cần phải thấu hiểu nhu cầu tình cảm của người khác. Ngược lại, họ hiếm khi gặp khó khăn khi đối phó với
                    các tình huống xúc cảm – họ luôn giữ một cái đầu lạnh và hành động hợp lý.

                </p>
                <h3>Những người nổi tiếng mang tính cách ISTJ:

                </h3>
                <p>- Arthur Wellington, Thủ tướng Anh.
                </p>
                <p>- George Washington, Tổng thống Hoa Kỳ.
                </p>
                <p>- Dwight D. Eisenhower, Tổng thống Hoa kỳ.
                </p>
                <p>- Augustus, Hoàng đế Roma.
                </p>
                <p>- Warren Buffett, Nhà đầu tư tài ba.
                </p>
                <p>- Jeff Bezos, Sáng lập Amazon.
                </p>
                <p>- Angela Merkel, Thủ tướng Đức.

                </p>
                <h2>MỐI QUAN HỆ</h2>

                <p>Trong các mối quan hệ, ISTJ có thể không trìu mến hay nói nhiều, nhưng họ chắc chắn sẽ rất trung thành và đáng tin cậy. Những người có loại cá tính này thường tiếp cận mọi thứ một cách chậm rãi và có phương pháp - và điều này bao gồm cả
                    trong tình bạn của họ. Một ISTJ có thể rất chậm khi đưa ra lời hứa, nhưng một khi họ đã hứa, họ sẽ làm mọi thứ có thể để đáp ứng các cam kết của họ. Danh dự và lòng trung thành là rất quan trọng đối với ISTJ, đặc biệt là với những
                    người bạn thân thiết.

                </p>
                <p>Các ISTJ khá nhạy cảm với những bạn bè thân thiết, mặc dù họ có thể cảm thấy khó khăn để thể hiện tình cảm. ISTJ thích truyền đạt cảm xúc đó thông qua những nỗ lực của họ chứ không phải lời nói. Các ISTJ sẽ không quan tâm thư giãn và vui
                    đùa với những người hướng ngoại.

                </p>
                <p>Các ISTJ thường tìm kiếm những người bạn có chung các nguyên tắc và quan điểm. Do đó, họ thường hướng về phía những người mang nhóm SJ. ISTJ không kín đáo, và họ chắc chắn có thể hiểu và đánh giá cao những thế mạnh của người khác, tuy
                    nhiên ISTJ vẫn không thu hẹp khác biệt để kết bạn với những người khác cho dù hiểu rõ về họ. Đáng ngạc nhiên, ISTJ có xu hướng hình thành tình bạn mạnh mẽ với loại N , mặc dù các rào cản SN đôi khi là quá khó khăn để vượt qua.

                </p>
                <p>Tóm lại, ISTJ là người trọng danh dự và uy tín, họ luôn giữ lời hứa và tuyệt đối thực hiện đúng cam kết của mình. Vì vậy họ rất cẩn thận và nghiêm túc khi đưa ra lời hứa, một khi đã nói “Anh/ Em đồng ý” có nghĩa là họ chấp nhận mối quan
                    hệ cho đến “cái chết chia lìa chúng ra”. Các ISTJ luôn khát khao hoàn thành tốt nhiệm vụ và nghĩa vụ của mình, họ làm với tất cả khả năng và nhiệt huyết của mình.
                </p>
                <p>Cho dù ở vị trí nào họ vẫn cố gắng làm tròn nghĩ vụ của mình như làm: Chồng - vợ, Cha-mẹ, con cái, lãnh đạo-nhân viên,…
                </p>
                <p>Các ISTJ thường gặp khó khăn khi bộc lộ tình cảm nhưng họ có thể thể hiện bằng hành động.
                </p>
                <p>Các ISTJ là những người đứng đầu trong các loại tính cách về việc thể hiện nỗ lực của mình. Nếu mục tiêu của ISTJ là mối quan hệ thì bạn hãy tin rằng các ISTJ sẽ làm tất cả để duy trì và phát triển mối quan hệ đó.

                </p>
                <p>Các ưu điểm hay nhược điểm của ISTJ sẽ được thể hiện ra thông qua các vấn đề liên quan tới đối nhân xử thế.

                </p>

                <h3>Các ưu điểm của ISTJ trong các mối quan hệ:

                </h3>
                <p>- Có khả năng đương đầu với các cuộc xung đột mà không để cảm xúc lấn át.
                </p>
                <p>- Có khả năng thể hiện những gì họ nghĩ một cách chính xác.
                </p>
                <p>- Nghiêm túc trong những mối quan hệ.
                </p>
                <p>- Tôn trọng những lời cam kết.
                </p>
                <p>- Có khả năng đưa ra lời khiển trách và hình phạt ngay lập tức.
                </p>
                <p>- Biết lắng nghe.
                </p>
                <p>- Có khả năng tiếp nhận ý kiến xây dựng tốt.
                </p>
                <p>- Quản lý tiền bạc tốt (mặc dù có chút bảo thủ).

                </p>
                <h3>Các nhược điểm của ISTJ trong các mối quan hệ:

                </h3>
                <p>- Tôn trọng nguyên tắc một cách cứng nhắc.
                </p>
                <p>- Không dễ đồng cảm với những gì người khác đang cảm nhận.
                </p>
                <p>- Thường rơi vào những cuộc tranh luận "thắng-thua".
                </p>
                <p>- Có xu hướng cho rằng mình luôn đúng.
                </p>
                <p>- Ít đưa ra những lời tán thưởng và công nhận cho những người mà họ yêu quý.

                </p>
                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của ISTJ trong công việc:
</h3>
                    <p>- Có khả năng làm việc ở nhiều lĩnh vực. Các ISTJ thường rất tinh ý và giỏi nắm bắt, phân tích các sự kiện. Họ thường biết cơ bản, thậm chí chuyên sâu về nhiều thứ và sự hiểu biết này giúp họ rất nhiều trong những tình huống khó khăn.
                    </p>
                    <p>- Ý chí mạnh mẽ và phục tùng. Các ISTJ sẵn sàng làm việc rất chăm chỉ để đảm bảo rằng họ thực hiện đầy đủ nghĩa vụ của mình. Những người có loại tính cách này là những con người kiên nhẫn và quyết đoán, họ là những người luôn luôn
                        giữ mục tiêu đến cùng.
                    </p>
                    <p>- Rất có trách nhiệm. Các ISTJ rất tôn trọng cam kết. Họ thà làm thêm giờ và bỏ cả ngủ chứ không để chậm tiến độ công việc. Các ISTJ cũng rất trung thành, đặt nhiệm vụ lên trên mọi thứ khác.
                    </p>
                    <p>- Giỏi sáng tạo và sắp xếp mọi thứ. Các ISTJ rất ghét sự hỗn loạn, họ luôn nghĩ ra một vài cấu trúc, kiểu cách hay nguyên tắc để đưa mọi thứ vào nề nếp. Họ cũng không né tránh việc thực thi các quy định hiện hành và không khoan nhượng
                        với những người phá vỡ nguyên tắc.
                    </p>
                    <p>- Bình tĩnh và thực tế. Các ISTJ rất hiếm khi mất bình tĩnh, họ luôn luôn tiếp cận mọi thứ từ một góc độ bình tĩnh và lý trí. Họ tin rằng cảm xúc không phải là một phần của quá trình ra quyết định và họ luôn luôn có khả năng đưa ra
                        quyết định nhanh chóng. Không đáng ngạc nhiên, khi điều này cũng làm cho ISTJ hoàn toàn chịu đựng được những lời chỉ trích (trong hầu hết các tình huống).
                    </p>
                    <p>- Trung thực và thẳng thắn. Các ISTJ rất không thích "trò chơi" tâm lý, những câu nói lưng chừng và vận dụng cảm xúc. Họ không nói vòng vo hay dùng từ lóng và họ thích một sự thật bất tiện hơn một lời nói dối trấn an.

                    </p>

                </h3>

                <h3>Điểm yếu của ISTJ trong công việc:

                </h3>
                <p>- Cứng đầu. Các ISTJ thường cảm thấy khó khăn để chấp nhận một quan điểm khác, đặc biệt là nếu nó không được dựa trên dữ kiện dễ được kiểm chứng. Họ cũng có xu hướng miễn cưỡng chấp nhận thay đổi hoặc thừa nhận rằng họ đã sai, đặc biệt
                    là nếu nó có ảnh hưởng đến lối sống hay thói quen của họ.
                </p>
                <p>- Không nhạy cảm. Các ISTJ thích đặt lý luận lên trên cảm xúc và họ thường cho rằng những người chậm trễ thật thiếu ý thức và không linh động. Do đó, họ có thể vô tình làm tổn thương những người nhạy cảm hơn (ví dụ như loại F ).
                </p>
                <p>- Phán xét. Theo quan điểm của ISTJ, sự kiện là tất cả những vấn đề. Nếu ai đó không muốn chấp nhận những sự kiện hoặc đơn giản là không biết chúng, các ISTJ thấy khó để tôn trọng cá nhân đó, đặc biệt là nếu cá nhân đó từ chối thừa nhận
                    rằng ý kiến ​​của mình là sai trái.
                </p>
                <p>- Luôn luôn theo sách vở. Những người có các loại tính cách ISTJ luôn có một bộ các quy tắc và hướng dẫn rõ ràng- tuy nhiên, điều này thường làm cho họ rất miễn cưỡng để "bẻ cong" các quy tắc hoặc thử một cái gì đó mới. Như đã đề cập ở
                    trên, các ISTJ không thể chịu được sự hỗn loạn và có thể cảm thấy "bị lạc" và dễ bị tổn thương trong một môi trường không quen thuộc hay không có cấu trúc.
                </p>
                <p>- Có thể thường tự trách mình một cách vô lý. Ý thức mạnh mẽ về trách nhiệm của ISTJ thường làm cho họ khó thư giãn và ngăn chặn quá tải trong công việc. Không sớm thì muộn, khối lượng công việc sẽ trở nên quá tải và sau đó là ISTJ có
                    thể cảm thấy khủng khiếp vì không thực hiện đầy đủ những gì họ xem như là nhiệm vụ của họ.

                </p>
                <h3>Các nguyên tắc thành công</h3>


                <p>- Trau dồi ưu điểm: Làm các công việc cho phép sử dụng nhiều khả năng tổ chức và tư duy logic. Hãy tham gia vào các lĩnh vực: Cảnh sát - thám tử, quản lý - điều hành, lâp trình viên – phân tích hệ thống .

                </p>
                <p>- Khắc phục khuyết điểm: Thừa nhận các điểm yếu và tìm cách hoàn thiện bản thân. Đặc biệt là tham khảo ý kiến người khác khi đưa ra quyết định để phát huy khả năng phán quyết công bằng của mình.

                </p>
                <p>- Suy nghĩ kỹ càng hơn: Dành thời gian lọc nguồn thông tin đa dạng của mình để tìm kiếm thông tin quan trọng, có liên quan, nó sẽ giúp công việc trở nên có khả thi hơn. Tận dụng cơ hội trình bày ý tưởng với người khác để cùng thảo luận.
                    Nhiều người cho rằng bộc lộ suy nghĩ, ý tưởng nó giống như việc làm rõ quan điểm khi viết ra vậy.

                </p>
                <p>- Thấu hiểu mọi thứ: Mỗi người đều có những quan điểm riêng, và không phải ai cũng biết hết mọi thứ vì vậy bạn đừng vội bác bỏ ý kiến người khác chỉ vì bạn không tôn trọng họ hay bạn nghĩ mình đã biết tường tận rồi. “Phải thấu hiểu người
                    khác để người khác có thể hiểu mình” - Steven Covey .

                </p>
                <p>- Đừng tìm cách kiểm soát người khác: Phải nhớ rằng không một ai muốn bị kiểm soát. Phải kiềm chế xu hướng thích kiểm soát người khác của bạn lại vì thật sự bạn chỉ có thể kiểm soát bản thân mình mà thôi.

                </p>
                <p>- Quan tâm đến người khác : Bạn nên dành thời gian để tìm hiểu về người khác, như họ là ai, từ đâu đến, tính tình như thế nào và họ đang suy nghĩ hay định làm gì?

                </p>
                <p>- Chịu trách nhiệm với chính bản thân: Khi gặp rắc rồi đừng đổ lỗi do người khác, hãy tự tìm giải pháp để giải quyết nó. Khi bạn đổ lỗi cho người khác là bạn đã giao quyền quyết định cho họ, hãy học cách thay đổi bản thân để nắm quyền
                    chủ động.

                </p>
                <p>- Phải biết chấp nhận: Hãy tự đánh giá bản thân nghiêm khắc như khi bạn đánh giá người khác.

                </p>
                <p>- Lạc quan: Bạn đừng khiến mình và người khác chán nản bằng việc tỏ ra bi quan. Phải luôn tin rằng có cách giải quyết tích cực trong mọi tình huống tiêu cực. Hãy nhớ rằng các tình huống tích cực được tạo nên từ thái độ tích cực và ngược
                    lại. Hãy luôn hướng tới điều tốt đẹp nhất và nó sẽ đến với bạn.

                </p>
                <p>- Lo sợ chẳng giúp được gì: Đôi khi chúng ta phải mạo hiểm để đạt được thành công lớn, đừng sợ hãi. Thường thì các chướng ngại và gánh nặng ngăn cản bạn đến thành công chỉ là do cách nghĩ, tưởng tượng của bạn. Hãy thay đổi cách nghĩ, quan
                    điểm – thay đổi cuộc đời mình.

                </p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>


                <p>ISTJ là những cá nhân tôn trọng truyền thống, quyền hạn và sự an toàn. Hầu hết các ngành nghề điển hình của ISTJ xoay quanh đặc điểm này - ví dụ, những người có loại cá tính này thường được tìm thấy trong sự nghiệp quân sự hay pháp lý.
                    Tính nguyên tắc và bảo thủ đã làm cho ISTJ trở nên suất sắc trong các lĩnh vực: luật sư, thẩm phán hoặc sĩ quan quân đội. Cũng có rất nhiều con đường sự nghiệp tiềm năng khác có sử dụng đặc điểm này - ví dụ như nhân viên cảnh sát hay
                    thám tử.

                </p>
                <p>Các ISTJ rất đáng tin cậy, khách quan và đặc biệt có đôi mắt tinh tường. Họ rất thích các dữ kiện và logic, điều này khiến cho họ làm tốt trong các lĩnh vực: kế toán, kiểm toán viên, chuyên gia phân tích dữ liệu và quản trị kinh doanh.
                    Tuy nhiên, ISTJ thường không thích sự thay đổi và họ có những quan điểm ​​rất mạnh mẽ về cách tất cả mọi thứ nên được thực hiện - đôi khi họ bị xem là kẻ thù của những ý tưởng mới, các ISTJ nên chú ý đến điều này, vì ngay cả con đường
                    sự nghiệp truyền thống và ổn định nhất cũng cần phải thay đổi theo thời gian.

                </p>
                <p>Các ISTJ thích làm việc một mình, nhưng cũng có thể làm việc nhóm tốt nếu vị trí công việc yêu cầu. Những người có loại tính cách này thích môi trường làm việc có cấu trúc và rõ ràng, vai trò và trách nhiệm. Tuy nhiên, các ISTJ khá tệ
                    trong việc cảm nhận cảm xúc của người khác - cách tiếp cận hoàn toàn thực tế khiến cho các ISTJ dễ xa lánh những người có tính nhạy cảm và cảm xúc cao. Vì lý do này, các ISTJ cần phải tránh các lĩnh vực đối mặt với khách hàng, học
                    thuật hoặc đòi hỏi tình cảm. Tuy nhiên, họ có thể xuất sắc trong các vị trí chuyên viên kế toán, quản lý tài chính, các bác sĩ hoặc các lập trình viên máy tính. Những con đường sự nghiệp tiềm năng ISTJ rất đa dạng, nhưng họ có chung
                    một đặc điểm quan trọng - họ đặt thực tế(sự kiện) lên trên lên tình cảm, cảm xúc cá nhân và sự giao tiếp xã hội, đó là điểm yếu đặc trưng của ISTJ.

                </p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

                </p>
                <h3>Các ISTJ thường mang những đặc điểm:</h3>
                <p>- Làm việc trong thời gian dài và chăm chỉ để hoàn thành nhiệm vụ
                </p>
                <p>- Tôn trọng truyền thống, sự an toàn và một cuộc sống yên bình
                </p>
                <p>- Trung thành và thành thật
                </p>
                <p>- Có thể trông cậy trong việc hoàn thành nhiệm vụ
                </p>
                <p>- Coi trọng gia đình
                </p>
                <p>- Ổn định, thực tế và có óc xét đoán
                </p>
                <p>- Không thích lý thuyết trừu tượng, trừ khi họ nhận thấy nó có ứng dụng thực tế
                </p>
                <p>- Không thích làm những gì vô nghĩa
                </p>
                <p>- Thích làm một mình, nhưng cũng có thể làm tốt trong nhóm khi cần
                </p>
                <p>- Có tố chất lãnh đạo
                </p>
                <p>- Có vốn sống phong phú và sử dụng chúng để hiểu những rắc rối mà họ gặp phải trong cuộc sống
                </p>
                <p>- Khả năng quan sát tốt, họ lĩnh hội dữ kiện thông qua giác quan và lưu giữ chúng
                </p>
                <p>- Đưa ra những quyết định khách quan, ứng dụng tư duy lô-gic và lý luận
                </p>
                <p>- Tôn trọng sự thật và những thông tin cụ thể
                </p>
                <p>- Có quan điểm vững chắc về cách hoàn thành công việc
                </p>
                <p>- Không thích sự thay đổi, trừ khi họ thấy lợi ích rõ ràng từ việc đó
                </p>
                <p>- Có khả năng hoàn thành mọi việc nếu họ toàn tâm toàn ý
                </p>
                <p>- Yêu thích môi trường làm việc trật tự và ngăn nắp
                </p>
                <p>- Thường không dễ đồng cảm với cảm xúc của người khác
                </p>
                <p>- Có những tiêu chuẩn rất cao về cách cư xử của bản thân và cách cư xử của những người khác
                </p>
                <p>- Là một công dân mẫu mực.

                </p>
                <p>Tính cách "kiên định" đã giúp cho các ISTJ có lợi thế lớn trong sự nghiệp, khi ISTJ đã quyết định làm việc gì thì họ sẽ làm đến cũng, điều đó giúp họ đạt được thành công trong cuộc sống.

                </p>
                <p>Dưới đây là các công việc phù hợp với ISTJ, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ISTJ nhưng không phải chắc chắn) :

                </p>
                <p>- Thủ lĩnh quân đội.
                </p>
                <p>- Thẩm phán.
                </p>
                <p>- Cảnh sát và thám tử.
                </p>
                <p>- Luật sư.
                </p>
                <p>- Kế toán và nhân viên tài chính.
                </p>
                <p>- Quản lý kinh doanh, Quản trị và giám đốc điều hành.
                </p>
                <p>- Bác sĩ / Nha sĩ.
                </p>
                <p>- Lập trình viên, phân tích hệ thống, và chuyên gia máy tính

                </p>




            </div>
        </div>
    </div>
`
components.NNDScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>


                <p>Trong tất cả các loại tính cách thì ISFJ là loại tính cách có lòng vị tha nhất. Có khoảng 12.5% dân số trên thế giới mang loại tính cách này. Nhiều ISFJ tìm kiếm sự nghiệp trong lĩnh vực học thuật, y học, công tác xã hội hoặc tư vấn; đặc
                    điểm tính cách của họ cũng tỏa sáng trong vai trò hành chính - văn phòng, hoặc thậm chí trong các lĩnh vực có phần bất ngờ như thiết kế nội thất.

                </p>
                <p>- Các ISFJ luôn sống trong một thế giới ấm áp và đầy tình cảm. Họ rất nồng ấm và nhân hậu, luôn tin vào những điều tốt đẹp nhất của người khác. Họ tôn trọng sự hòa hợp và hợp tác, họ cũng rất nhạy cảm với cảm giác của con người. ISFJ được
                    xem là những người rất ân cần và luôn quan tâm đến mọi người. Khả năng khai thác những điều tốt nhất của người khác xuất phát từ niềm tin vững chắc vào những điều tốt đẹp nhất.

                </p>
                <p>- ISFJ có những ý tưởng rõ ràng trong việc hình dung sự việc sẽ như thế nào, và họ nỗ lực để đạt được nó. Họ thường trân trọng lòng nhân hậu và sự an toàn, tuân thủ luật pháp và tôn trọng phong tục tập quán. Họ tin vào những phương thức
                    có sẵn bởi vì chúng luôn hoạt động hiệu quả, vì vậy họ không bao giờ áp dụng phương thức mới khi làm việc, trừ khi họ được giới thiệu một phương thức mới với lời giải thích rõ ràng tại sao nó tốt hơn phương pháp đã có.

                </p>
                <p>- ISFJ học qua thực hành tốt hơn việc đọc sách hay áp dụng lý thuyết. Vậy nên các ISFJ rất ít làm việc trong lĩnh vực đòi hỏi phân tích các giả thiết, khái niệm. Họ luôn đề cao tính ứng dụng thực tế. ISFJ có thể nghiên cứu tốt một công
                    việc khi được chỉ dẫn cách áp dụng vào thực tiễn để giải quyết vấn đề. Một khi đã hiểu rõ phương pháp và biết được tầm quan trọng của nó trong thực tế, các ISFJ sẽ trung thành và không ngừng áp dụng chúng để hoàn thành nhiệm vụ.

                </p>
                <p>- ISFJ là người sống rất nội tâm vì vậy mọi người thường khó hiểu được họ. Họ luôn để ý và thu thâp rất nhiều thông tin về mọi người, cũng như những sự kiện, hoàn cảnh quan trọng khác rồi ghi nhớ chúng. Sự lưu trữ thông tin với quy mô
                    lớn này thường chính xác đến đáng kinh ngạc, bởi vì ISFJ sở hữu bộ óc tối ưu để ghi nhớ những việc quan trọng có liên quan đến quan điểm sống của họ. Không có gì là ngạc nhiên, nếu ISFJ có thể nhớ đến từng chi tiết sự biểu lộ đặc biệt
                    của nét mặt sau nhiều năm nếu điều đó gây ấn tượng mạnh với ISFJ.

                </p>
                <p>- ISFJ có cảm nhận về không gian, cách tổ chức và tính thẩm mỹ cực kì phát triển. Họ mong muốn có một căn nhà tiện nghi và ngăn nắp. Họ rất giỏi trang trí nội thất. Nhờ khả năng đặc biệt này, kết hợp với sự nhạy cảm với cảm xúc và mong
                    muốn của người khác, các ISFJ là những người rất giỏi chọn quà tặng cho người khác, bởi họ có thể tìm ra những món quà thích hợp làm cho người nhận xúc động, cảm kích.

                </p>
                <p>- Hơn tất cả những kiểu tính cách MBTI khác, ISFJ hiểu rất rõ cảm xúc nội tâm của họ, cũng như những cảm xúc của người khác. Họ ít khi bộc lộ cảm xúc ra ngoài mà giấu ở trong lòng. Nếu đó là cảm xúc tiêu cực thì họ sẽ kìm nén, chỉ khi
                    nào vượt quá sự chịu đựng họ mới bùng nổ, lúc đó những lỗi lầm mà người khác gây ra quá nhiều cho họ sẽ trở thành bằng chứng không thể chối cãi.

                </p>
                <p>- Các ISFJ là những người nồng nhiệt, rộng lượng, đáng tin cậy. Họ có nhiều khả năng đặc biệt, nó thể hiện qua sự nhạy cảm của họ đối với mọi người và khả năng làm mọi việc trở nên trôi chảy. ISFJ phải luôn nhớ rằng không được quá chỉ
                    trích bản thân, phải cho phép bản thân nhận được sự thứ tha và yêu thương mà họ đã hào phóng cho đi với nhiều người khác.

                </p>
                <p>- Vì ISFJ muốn che giấu cảm xúc của mình nên họ thường tạo ra vỏ bọc hoàn hảo để người khác không nhận biết họ đang thực sự nghĩ gì. Tuy nhiên, họ sẽ nói ra nếu nhận thấy người đó đang cần được giúp đỡ, cũng như trong trường hợp họ muốn
                    người đó hiểu được cảm xúc của họ.

                </p>
                <p>- ISFJ là người luôn đề cao trách nhiệm và nghĩa vụ của mình. Họ chịu trách nhiệm một cách nghiêm túc và tạo được sự tin tưởng vậy nên mọi người hay nhờ cậy họ. Khi được nhờ cậy họ rất ít khi từ chối và điều này có thể sẽ trở thành gánh
                    nặng với họ. Vì ISFJ luôn đặt nhu cầu của người khác lên trên nhu cầu bản thân nên khi giúp đỡ ai đó họ không muốn người đó biết họ đang gặp khó khăn. ISFJ cần học cách nhận thức, đánh giá và thể hiện nhu cầu của bản thân nếu như không
                    muốn trở thành người quá bận rộn vì việc của người khác.

                </p>
                <p>- ISFJ cần những góp ý tích cực từ mọi người. Nếu thiếu những góp ý tích cực , động viên hay khi đối mặt với lời phê bình, ISFJ sẽ dễ bị nản lòng và có thể bị trầm cảm. Khi gặp chán nản hay căng thẳng trầm trọng, họ thường bi quan, tưởng
                    tượng ra những điều tồi tệ sẽ xảy ra với họ. Họ có cảm xúc mạnh về sự không hoàn hảo, họ tin chắc rằng “Mọi thứ đã sai”, hay “Tôi không thể làm đúng được điều gì cả”.

                </p>
                <h3>Những người nổi tiếng mang tính cách ISFJ:

                </h3>
                <p>- Jimmy Carter – Tổng thống Hoa kỳ
                </p>
                <p>- William Howard Taft – Tổng thống Hoa kỳ
                </p>
                <p>- Rosa Parks - Nhà hoạt động nhân quyền
                </p>
                <p>- Jerry Seinfeld – Nghệ sĩ tấu hài nổi tiếng
                </p>
                <p>- Ed Bradley – Nhà báo nổi tiếng
                </p>
                <p>- Christopher Walken – Diễn viên nổi tiếng
                </p>
                <p>- Dr. Dre - Rapper, nhà xuất bản âm nhạc, cố vấn cho Snoop Dogg và Eminem

                </p>

                <h2>MỐI QUAN HỆ
                </h2>
                <p>Trong mối quan hệ, các ISFJ cực kỳ ấm áp, vị tha và trung thành. Họ không quá kén chọn khi nói đến tình bạn, miễn là người khác sẵn sàng kết bạn với họ trên một mức độ sâu sắc. Các ISFJ thường dựa vào bạn bè để được sự hỗ trợ về tinh thần,
                    tu vấn, và trấn an, điều này làm cho họ dễ bị tổn thương, nhưng lại tạo cho cả hai người một cơ hội để thiết lập một mối quan hệ bền vững.

                </p>
                <p>Điều đáng nói, các ISFJ có thể gặp phải một vài vấn đề khi nói đến tình bạn. ISFJ thường đặt nhu cầu của bạn bè lên trên nhu cầu bản thân. Điều này chưa chắc là một điều xấu (với điều kiện là những người bạn không lạm dụng lòng vị tha
                    của ISFJ), một cách tiếp cận như vậy có thể khiến cho ISFJ bỏ bê nhu cầu của họ. Các ISFJ cần rất nhiều hỗ trợ tinh thần từ bạn bè và nếu sự hỗ trợ này không đến từ bạn bè mà họ đã giúp, các ISFJ sẽ rất đau đớn.

                </p>
                <p>Thứ hai, các ISFJ thường "dính" vào cam kết của mình và làm hết sức mình để thực hiện lời hứa của họ. Đây là một đặc điểm rất lớn, nhưng kèm theo đó là ISFJ không muốn nói "không" khi bạn bè yêu cầu giúp đỡ. Một số người có thể xem đây
                    là một điểm yếu và cố gắng lợi dụng thiện chí của ISFJ - các ISFJ nên giữ đặc điểm này trong vòng kiểm soát.

                </p>
                <p>ISFJ là những người sống hướng nội và họ không dễ cởi mở - tuy nhiên, họ cần vài người bạn thân để thảo luận về các vấn đề quan trọng. Các ISFJ không thích kết bạn với những người mang đặc điểm T hay P , họ thích kết bạn với người mang
                    đặc điểm FJ. Thật ngạc nhiên khi ISFJ cũng có thể có ít nhất một người bạn thuộc loại trực giác N, mặc dù họ có thể gặp khó khăn trong việc kết nối do sự khác biệt giữa loại S và N.

                </p>
                <p>Tóm lại, Các ISFJ rất coi trọng các mối quan hệ cá nhân. Họ thường quan tâm và dành nhiều tình cảm cho người khác và đặt nhu cầu của họ lên trên nhu cầu của mình. Họ rất tận tình và luôn tìm kiếm mối quan hệ lâu dài. Họ là những người
                    đáng tin cậy và luôn cố gắng hết mình để đảm bảo cho mọi việc diễn ra tốt đẹp. Các ISFJ thường khó từ chối giúp đỡ người khác vì vậy họ thường xem việc giúp đỡ người khác là điều hiển nhiên.

                </p>
                <h3>Các ưu điểm của ISFJ trong các mối quan hệ:

                </h3>
                <p>- Luôn giúp đỡ và muốn làm hài lòng người khác
                </p>
                <p>- Sẽ cố gắng nỗ lực hết sức để hoàn thành nhiệm vụ và bổn phận của mình
                </p>
                <p>- Luôn tận tâm, có xu hướng tìm kiếm những mối quan hệ lâu dài
                </p>
                <p>- Ấm áp, thân thiện, và gần gũi một cách tự nhiên
                </p>
                <p>- Lắng nghe tốt
                </p>
                <p>- Thành thạo những công việc thực tế và những nhu cầu cơ bản hàng ngày
                </p>
                <p>- Có khả năng tổ chức tuyệt vời
                </p>
                <p>- Giỏi xoay xở tiền bạc (mặc dù vẫn hay dè dặt)
                </p>
                <h3>Các nhược điểm của ISFJ trong các mối quan hệ:

                </h3>
                <p>- Khó khăn khi rời bỏ các mối quan hệ không tốt
                </p>
                <p>- Không thích thể hiện nhu cầu cá nhân, điều này có thể gây nên sự dồn nén cảm xúc bên trong
                </p>
                <p>- Gặp khó khăn trong việc rời bỏ môi trường thân quen của mình
                </p>
                <p>- Không chú ý đến nhu cầu cá nhân
                </p>
                <p>- Cực kì ghét xung đột và chỉ trích
                </p>
                <p>- Gặp khó khăn trong việc tiếp tục cuộc sống bình thường sau một mối quan hệ đổ vỡ
                </p>
                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của ISFJ trong công việc:

                </h3>
                <p>- Rất ủng hộ. Các ISFJ luôn sẵn sàng giúp đỡ người khác, chia sẻ kiến ​​thức và kinh nghiệm của họ với các đồng nghiệp, bạn cùng lớp hay bạn bè. Những người có loại tính cách này luôn phấn đấu cho các tình huống cả hai cùng thắng, họ lựa
                    chọn sự đồng cảm hơn phán xét.

                </p>
                <p>- Nhiệt tình. Các ISFJ muốn tạo sự khác biệt và sẵn sàng bỏ ra rất nhiều thời gian và nỗ lực để đấu tranh hoặc đóng góp vào sự nghiệp đáng trân trọng. Họ không quan tâm đến các nhiệm vụ đơn giản hay sáng kiến chung chung, nhưng ISFJ sẽ
                    ngay lập tức lao vào các ý tưởng phù hợp với mục tiêu họ.

                </p>
                <p>- Trung thành và làm việc chăm chỉ. Các ISFJ rất trung thành và thường xuyên để cảm xúc gắn liền với một ý tưởng đặc biệt. Họ sẽ làm việc rất chăm chỉ và làm mọi thứ có thể để đáp ứng nghĩa vụ của mình.

                </p>
                <p>- Giàu trí tưởng tượng và có óc quan sát. Những người mang tính cách ISFJ rất thực tế những họ cũng giàu trí tưởng tượng, đặc biệt là nếu một cái gì đó mê hoặc và truyền cảm hứng cho họ. Hơn nữa, ISFJ cũng rất tinh ý, có thể nhận ra các
                    dấu hiệu nhỏ nhất, đặc biệt là khi nói đến trạng thái cảm xúc của người khác.

                </p>
                <p>- Đáng tin cậy và kiên nhẫn. ISFJ là những cá nhân tỉ mỉ và cẩn thận, luôn luôn đảm bảo rằng công việc của họ được hoàn thành với tiêu chuẩn cao nhất và thậm chí đôi khi họ còn làm tốt hơn những gì đã yêu cầu.

                </p>
                <p>- Kỹ năng thực hành tốt. ISFJ không có khó khăn khi giải quyết các công việc thực hành. ----, họ không tránh các công việc thường nhận hay tầm thường. Không ngạc nhiên, ISFJ cũng là một thành viên tích cực trong gia đình, họ có khả năng
                    và luôn sẵn sàng để chăm sóc những người thân yêu của họ.

                </p>

                <h3>Điểm yếu của ISFJ trong công việc:

                </h3>
                <p>- Khiêm nhường và nhút nhát. Các ISFJ thường không muốn nói những gì họ thực sự nghĩ hoặc trình bày về thành tích của họ, đặc biệt là trong một môi trường cạnh tranh. Điều này có thể cản trở sự thăng tiến trong sự nghiệp của họ và gây
                    ra bực bội và thất vọng.

                </p>
                <p>- Dễ bị quá tải. Sự cầu toàn kết hợp với ý thức mạnh mẽ về trách nhiệm của họ, thường khiến họ bị quá tải trong công việc - ISFJ luôn muốn chắc chắn rằng tất cả mọi thứ phải được hoàn thành một cách hoàn hảo. Không ngạc nhiên, điều này
                    có thể gây ra rất nhiều căng thẳng và lo lắng cho ISFJ, đặc biệt là nếu người khác lợi dụng bản chất tốt đẹp này của họ.

                </p>
                <p>- Giữ quá nhiều thứ riêng tư. Các ISFJ rất nhạy với xung đột và phê bình, đặc biệt là những nhận xét phê bình mang tính riêng tư. Họ gặp khó khăn trong việc tách biệt công việc và cuộc sống của mình, khiến những lo lắng của công việc ảnh
                    hưởng đến những thứ khác.

                </p>
                <p>- Miễn cưỡng thay đổi. Giá trị truyền thống của ISFJ là rất cao và họ có thể không muốn thử những điều mới hoặc thay đổi thói quen, ngay cả khi điều đó được chứng minh là có ý nghĩa.

                </p>
                <p>- Quá vị tha. Các ISFJ là những con người rất tốt bụng, nồng nhiệt và họ cảm thấy khó khăn để từ chối yêu cầu giúp đỡ. Thật không may, điều này thường làm cho các ISFJ bị quá tải với công việc hoặc các vấn đề của người khác.

                </p>
                <p>- Quá kìm nén cảm xúc. Những người có loại tính cách này khá riêng tư và thậm chí hơi nhút nhát

                </p>
                <p>- không đáng ngạc nhiên, họ có xu hướng kìm nén cảm xúc của họ thay vì thể hiện chúng một cách lành mạnh. Điều này sẽ làm tăng mức độ căng thẳng của họ và có thể gây ra rất nhiều thất vọng hơn.

                </p>
                <h3>Các nguyên tắc thành công</h3>



                <p>- Trau dồi ưu điểm của mình: Hãy để năng lực trong việc hòa hợp và cân bằng của bạn lan truyền ra thế giới xung quanh, hãy để mọi người biết đến tài năng của bạn. Hãy để cho bản thân mình có cơ hội được thiết kế, tổ chức và cân bằng lại
                    những thứ có thể làm cho môi trường sống và làm việc trở nên tốt hơn cho mình và cho mọi người xung quanh. Tìm kiếm những công việc, sở thích cho phép bản thân phát huy ưu điểm của mình.

                </p>
                <p>- Tìm hiểu về người khác: Bạn đừng để bản thân mình mắc bẫy với suy nghĩ rằng bạn luôn biết điều gì tốt nhất cho người khác. Bạn hãy dành thời gian tiếp xúc, tìm hiểu, trò chuyện với họ và rồi bạn nhận ra rằng thế giới của họ có thể khác
                    xa với thế giới của bạn.

                </p>
                <p>- Nhìn nhận sự việc một cách cẩn thận, khách quan: Mọi thứ thường không giống với vẻ bên ngoài của nó. Bạn cần phải nhìn sâu vào bên trong để khám phá ra bản chất của mọi việc, điều đáng lo là bạn thương hay chắc chắn về nó ngay từ cái
                    nhìn đầu tiên. Có nhiều lớp nghĩa và sự thật ẩn sau mọi thứ, bạn nên lột từng lớp một để khám phá và hiểu đúng về nó.

                </p>
                <p>- Đừng vội vàng đưa ra kết luận: Đừng nên kết luận khi sự việc vẫn chưa kết thúc (cho dù là 99%), bạn nên tìm hiểu, kiểm nghiệm và để mọi thứ ổn định, hoàn thiện trước khi phán xét. Hãy để người khác khám phá những điều tốt nhất đối với
                    họ, trong khi bạn cũng có thể cảm nhận nó bằng quan điểm của mình.

                </p>
                <p>- Hãy đối mặt với khuyết điểm của bản thân: Hãy hiểu và thừa nhận rằng mọi thứ sẽ chẳng bao giờ suôn sẻ và hoàn hảo như bạn mong đợi. Phải nhớ rằng cảm xúc của người khác đôi khi cũng khá quan trọng cho dù họ sai hay đúng. Đối diện và
                    giải quyết mối bất hòa hay sự khác biệt của người khác không có nghĩa là bạn phải thay đổi chính mình mà nó có nghĩa là bạn đã cho mình một cơ hội để phát triển bản thân. Khi đối mặt với điểm yếu là bạn đã và đang tôn trọng bản thân
                    cũng như tôn trọng mọi người xung quanh.

                </p>
                <p>- Hãy chịu trách nhiệm với mọi người: Phải nhớ rằng mọi người cần hiểu bạn và những mục đích của bạn. Hãy bộc lộ cảm xúc và những lý do để mọi người cùng đồng hành với bạn trong việc hoàn thành mục tiêu.

                </p>
                <p>- Hãy để mọi người cùng tham gia công việc với bạn: Khi đề mọi người cùng tham gia vào công việc, không có nghĩa là bạn bị mất quyền kiểm soát mà là để công nhận nhu cầu cá nhân của họ trở thành một phần cuộc sống của bạn. Hãy luôn nhớ,
                    sẽ tốt hơn nếu giúp mọi người nhìn nhận quan điểm của bạn hơn là tách họ ra khỏi kế hoạch của bạn.

                </p>
                <p>- Tin tưởng và tìm kiếm những điều tốt đẹp nhất: Đừng bắt mọi người làm theo cách bạn muốn. Mỗi người đều có đức tính tốt và điểm mạnh để bạn họ hỏi, cũng giống như những tình huống bất ngờ xảy ra, nó có thể trở thành những bài học kinh
                    nghiệm quý giá giúp bạn hoàn thiện hơn. Hãy tin vào điều này vì nó sẽ cho bạn cơ hội trải nghiệm những điều tốt đẹp và phát triển bản thân.

                </p>
                <p>- Đừng lãng phí tài năng trong bạn: Làm những công việc nhàn hạ, không có khó khăn và thử thách sẽ là sự tự hủy hoại tài năng của bạn. Hãy để mỗi ngày trôi qua là mỗi ngày bạn có thể bước ra thế giới bên ngoài và cảm nhận được sự khác
                    biệt về thế giới và con người ở đó. Điều này chắc chắn sẽ mở rộng tầm mắt của bạn và đem lại cho bạn nhiều ý tưởng và cơ hội mới.

                </p>
                <p>- Hãy hỏi ngay khi bạn thấy nghi ngờ hoặc không chắc chắn: Nếu không chắc chắn về điều gì đó, bạn nên hỏi ý kiến những người mà bạn tin tưởng. Đừng tự đặt mình vào tình thế tiến thoái lưỡng nan.

                </p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>


                <p>ISFJ có xu hướng rất giỏi trong việc thu thập và ghi nhớ các sự kiện khác nhau, đặc biệt là về con người. Đây là một kỹ năng xã hội rất lớn trên con đường sự nghiệp. Đặc biệt là những nơi cần làm việc nhóm và sự hợp tác. ISFJ sẽ luôn luôn
                    nhớ tên của con gái ông chủ hay ngày sinh nhật của hầu hết các đồng nghiệp của họ. Hơn nữa, ISFJ cũng rất đồng cảm với cảm xúc của người khác. Do đó, khi nói đến việc lựa chọn nghề nghiệp tốt nhất cho một ISFJ, có thể nói rằng họ có
                    xu hướng trở thành nhà cố vấn tuyệt vời, trợ lý hành chính hoặc quản lý.

                </p>
                <p>Sự nghiệp của ISFJ có xu hướng tiến triển khá thuận lợi bởi vì ISFJ sẵn sàng đặt rất nhiều nỗ lực vào việc đảm bảo rằng công việc sẽ được hoàn thành. Họ rất thực tế - tuy nhiên, điều này đi kèm với một giá của nó, đó là ISFJ không thích
                    các lý thuyết, khái niệm hoặc ý tưởng trừu tượng. Vì lý do này, các ISFJ nên tránh sự nghiệp liên quan đến lý thuyết (ví dụ như nghiên cứu học tập) và tập trung vào những lĩnh vực "thực tế" - họ thích thực thi các ý tưởng và làm mọi
                    thứ hoạt động. Một số các con đường sự nghiệp điển hình nhất của ISFJ sử dụng các đặc điểm này: thiết kế nội thất, nhân viên kế toán, kinh tế hoặc quản lý văn phòng.

                </p>
                <p>Các ISFJ rất chuyên về phục vụ, ấm áp và truyền thống. Họ tôn trọng các giá trị truyền thống và sự an toàn - điều này cũng thường được phản ánh trong sự nghiệp ISFJ. Không phải là lạ khi nhìn thấy ISFJ tham gia vào các hoạt động tình nguyện,
                    công tác cộng đồng hoặc các sáng kiến ​​phát triển thời thơ ấu. Họ cũng có xu hướng trở thành những y tá tuyệt vời và nhân viên xã hội hay tôn giáo.

                </p>
                <p>Nhìn chung, ISFJ cần phải sử dụng kỹ năng thấu hiểu cảm xúc con người bởi vì đây là một trong những điểm mạnh quan trọng nhất và độc đáo nhất của họ. Và ISFJ cũng cần tìm kiếm các cơ hội để tạo ra các nguyên tắc, trật tự từ sự hỗn loạn
                    vì họ thường có tài năng thực sự đặc biệt trong lĩnh vực này. Con đường sự nghiệp của ISFJ sẽ phát triển rất tốt nếu ISFJ tận dụng được hai đặc điểm mạnh đó trong nghề nghiệp.

                </p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

                </p>
                <h3>Các ISFJ thường mang những đặc điểm:</h3>


                <p>- Rất tinh ý và ý thức được cảm giác cũng như những phản ứng của người khác
                </p>
                <p>- Họ có một kho dữ liệu thông tin về người khác rất đa dạng và phong phú
                </p>
                <p>- Có trí nhớ tuyệt vời về những chi tiết mà họ thấy quan trọng
                </p>
                <p>- Có thể là chỗ dựa vững chắc, giúp đỡ mọi người hoàn thành nhiệm vụ của mình
                </p>
                <p>- Luôn có xu hướng giúp đỡ: tập trung vào các nhu cầu của người khác
                </p>
                <p>- Nhân hậu và chu đáo
                </p>
                <p>- Rất đồng điệu với môi trường xung quanh - có cảm quan xuất sắc về không gian và cách tổ chức
                </p>
                <p>- Thực tế, kiên định, thiết thực - ISFJ không thích làm việc với những giả thiết và những vấn đề trừu tượng
                </p>
                <p>- Không thích làm những việc không thực tế đối với họ
                </p>
                <p>- Thích tạo ra các kết cấu và trình tự
                </p>
                <p>- Tiếp thu tốt nhất trong môi trường huấn luyện thực hành
                </p>
                <p>- Có trách nhiệm cao trong mọi công việc
                </p>
                <p>- Chăm chỉ làm việc cho đến khi nó hoàn thành
                </p>
                <p>- Thường đặt nhu cầu của người khác lên trên nhu cầu của bản thân
                </p>
                <p>- Cực kì không thoải mái với xung đột hay đối đầu
                </p>
                <p>- Đề cao một cuộc sống an toàn, thanh bình, theo truyền thống

                </p>
                <p>Hai đặc điểm giúp ISFJ định hướng chính xác nghề nghiệp chính là:

                </p>
                <p>- Thật sự có hứng thú và dễ dàng đồng điệu với cảm xúc của người khác.
                </p>
                <p>- Thích sáng tạo những cấu trúc và thứ tự, và thật sự rất giỏi trong việc này.

                </p>
                <p>Một cách lý tưởng, ISFJ nên lựa chọn những công việc mà họ có thể sử dụng khả năng quan sát con người đặc biệt của mình để xác định nhu cầu của người khác, và sử dụng khả năng tổ chức tuyệt vời để xây dựng những kế hoạch và môi trường
                    để đạt được điều mà người khác muốn. Trí thông minh xuất chúng về không gian và trình tự cũng tạo cho họ những khả năng đặc biệt trong việc sử dụng óc thẩm mỹ vào thực tế, như trang trí nội thất và thiết kế thời trang.

                </p>
                <p>Dưới đây là các công việc phù hợp với ISFJ, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ISFJ nhưng không phải chắc chắn) :

                </p>
                <p>- Chăm sóc trẻ em/Phát triển trẻ em.
                </p>
                <p>- Nhà thiết kế.
                </p>
                <p>- Trang trí nội thất.
                </p>
                <p>- Y tá.
                </p>
                <p>- Công tác xã hội/Cố vấn.
                </p>
                <p>- Trợ lí giám đốc.
                </p>
                <p>- Trưởng phòng.
                </p>
                <p>- Quản lý/Quản lý hành chính.
                </p>
                <p>- Tăng lữ/Người làm việc liên quan đến tôn giáo.
                </p>
                <p>- Người quản lí nhà sách.
                </p>
                <p>- Người quản lí cửa hàng

                </p>



            </div>
        </div>
    </div>
`
components.NBHScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>

                <p>Ba đặc trưng trong tính cách của các ESTJ là: nguyên tắc, truyền thống và ổn định. Có khoảng 11,5% dân số mang tính cách này, những người mang loại tính cách ESTJ cảm thấy cần phải gắn kết với một điều gì đó - nó có thể là một gia đình,
                    một cộng đồng hay một số nhóm xã hội khác. Họ thích "việc tổ chức" của người khác và đảm bảo rằng họ sẽ tuân thủ các quy tắc truyền thống hoặc đưa ra bởi những người có thẩm quyền.

                </p>
                <p>Với tính cách hướng ngoại, các ESTJ thích kết nối với những người khác và đóng vai trò tích cực trong các tổ chức truyền thống. Hạnh phúc gia đình rất quan trọng với các ESTJ và họ làm hết sức mình để nuôi dưỡng và bảo vệ gia đình.

                </p>
                <p>Các ESTJ rất tận tâm và có trách nhiệm. Họ sẽ làm mọi thứ có thể để hoàn thành nhiệm vụ của mình và đáp ứng lời hứa của họ. Những người có tính cách này rất tôn trọng và thúc đẩy đạo đức nghề nghiệp, và ghét cay ghét đắng gian lận hoặc
                    bất kỳ nỗ lực để "cắt góc", đặc biệt là tại nơi làm việc. Họ cũng rất muốn tranh giành các vị trí quyền lực.

                </p>
                <p>Các ESTJ thường có ý chí mạnh mẽ và không sợ lên tiếng và bảo vệ ý kiến ​​của mình, ngay cả khi họ đang phải đối mặt với một đối thủ đáng gờm. Ví dụ, một trong những cấp dưới của họ là không đủ năng lực hoặc đơn giản là lười biếng, các
                    ESTJ sẽ không ngần ngại thể hiện sự phẫn nộ của họ. Tính cách của các ESTJ là sẽ bám các nguyên tắc của họ, ngay cả khi tất cả mọi người quay lưng với họ.

                </p>
                <p>Mang đặc điểm S , Các ESTJ sống trong thế giới của sự thật rõ ràng và có thể kiểm chứng. Họ là trung thực và thẳng thắn, sống trong hiện tại và ghi nhớ tất cả những gì đang xảy ra xung quanh họ. Họ có một tầm nhìn rõ ràng và sự hiểu biết
                    về những gì là chấp nhận được và những gì không thể được - điều này thường làm cho ESTJ trở thành lãnh đạo hay cán bộ quản lý xuất sắc, mặc dù cấp dưới đôi khi có thể phàn nàn về tính cứng nhắc của họ. ESTJ cảm thấy khá dễ dàng để
                    phát triển và cải tiến các kế hoạch hành động khác nhau - họ có thể làm cho những dự án phức tạp nhất trở nên đơn giản giống như việc "đi bộ trong công viên".

                </p>
                <p>Nhờ mang tất cả những đặc điểm đó, các ESTJ là những "công dân kiểu mẫu" rất tuyệt vời, người bảo vệ các truyền thống và nền tảng của gia đình và cộng đồng. Họ rất đúng đắng và đáng tin cậy, mặc dù đặc điểm SJ - thiếu linh hoạt đôi khi
                    có thể cản trở nỗ lực của họ. Các ESTJ cũng có một cảm giác rất tốt về những gì được xã hội chấp nhận được và luôn luôn làm hết sức mình để tuân thủ lý tưởng đó.

                </p>



                <h3>Những người nổi tiếng mang tính cách ESTJ:

                </h3>
                <p>- Bernard Montgomery, Nguyên soái người Anh.
                </p>
                <p>- Henry Ford, Nhà tư bản công nghiệp, sáng lập Ford Motors.
                </p>
                <p>- Condoleezza Rice, Ngoại trưởng Hoa Kỳ.
                </p>
                <p>- John D. Rockefeller, Tỷ phú người Mỹ.
                </p>
                <p>- George W. Bush, Tổng thống Mỹ .
                </p>
                <p>- Billy Graham, Nhà truyền giáo Phúc âm nổi tiếng

                </p>

                <h2>MỐI QUAN HỆ
                </h2>

                <p>Các ESTJ thích kết bạn với những người có chung quan điểm tôn trọng truyền thống và các nền tảng chắc chắn. Những người có loại cá tính này tìm kiếm các mối quan hệ chặt chẽ với bạn bè của họ, nhưng ESTJ thường gặp khó khăn để chấp nhận
                    các ý kiến quá ​​khác nhau hoặc tiếp tục kiên nhẫn làm theo ý họ trong khi vẫn lắng nghe mọi người - do đó, có khả năng là bạn bè thân thiết của họ sẽ chủ yếu bao gồm các loại SJ khác .

                </p>
                <p>Tính cách ESTJ có xu hướng trở thành những người bạn cởi mở và nhiệt tình. Họ cũng sẽ rất trung thành, mặc dù gia đình và các nguyên tắc của họ sẽ luôn luôn là ưu tiên hàng đầu. Các ESTJ cũng có khả năng chủ động hoặc thậm chí chi phối,
                    khuyến khích bạn bè của họ tham gia vào các sự kiện khác nhau và các hoạt động xã hội. Những người có loại cá tính này thường thích thể thao và các hoạt động thể chất khác, vì vậy họ có thể sẽ khuyến khích bạn bè cùng tham gia.

                </p>
                <p>Các ESTJ cần nỗ lực có ý thức để lắng nghe lập luận của người khác và cố gắng hiểu quan điểm của họ trước khi đưa ra bất kỳ kết luận nào - những ESTJ thường có ý kiến rất mạnh mẽ khi nói đến nguyên tắc và niềm tin của họ, họ thường bướng
                    bỉnh và cứng nhắc. Sẽ thật tốt nếu có ít nhất một vài người bạn thỉnh thoảng không đồng ý với họ - Các ESTJ nên dành thời gian với những người bạn khác, những người mà không áp dụng cách tiếp cận truyền thống của họ vào cuộc sống.

                </p>
                <p>Đặt những yếu kém trên sang một bên, những người có các loại tính cách ESTJ có thể sẽ là những người bạn năng động, đáng tin cậy và dí dỏm. Họ có thể không phải là linh hồn của tập thể, nhưng bạn sẽ không cảm thấy buồn chán khi làm việc
                    chung với họ nếu bạn cũng có chung một số quan điểm với họ.

                </p>
                <p>Tóm lại, các ESTJ rất nhiệt huyết. Họ khát khao muốn hoàn thành trách nhiệm và nghĩa vụ của mình, đặc biệt là khi chúng liên quan tới gia đình. Ưu tiên của ESTJ thông thường theo thứ tự sau: chúa trời, gia đình và cuối cùng là bạn bè.
                    Họ cố gắng nỗ lực hết mình để hoàn thành những công việc được giao dựa trên thứ tự ưu tiên trên. Họ rất tận tâm và luôn có trách nhiệm trong các mối quan hệ của mình mà họ cho rằng chúng sẽ kéo dài mãi mãi và không thể thay đổi được.
                    ESTJ thích được dẫn đầu, nên trong gia đình họ rất hay kiểm soát người bạn đời và con cái của mình. ESTJ có một sự kính trọng đối với truyền thống và thể chế, họ cũng kỳ vọng rằng người bạn đời và con cái của mình cũng ủng hộ những
                    điều này. Các ESTJ chẳng có thời gian cũng như muốn tiếp xúc với những người không cùng quan điểm với họ.

                </p>
                <h3>Các ưu điểm của ESTJ trong các mối quan hệ:

                </h3>
                <p>- Nỗ lực hết mình để hoàn thành nhiệm vụ và bổn phận của mình.
                </p>
                <p>- Kiên định và đáng tin tưởng, họ có thể tăng cao sự an toàn cho gia đình của họ.
                </p>
                <p>- Thường hăng hái, lạc quan và thân thiện.
                </p>
                <p>- Rất biết cách sử dụng tiền bạc (mặc dù có chút bảo thủ).
                </p>
                <p>- Có trách nhiệm trong những công việc ở nhà.
                </p>
                <p>- Thích thú trong việc tìm giải pháp cho những xung đột hơn là lơ nó đi.
                </p>
                <p>- Không dễ bị ảnh hưởng bởi xung đột hoặc chỉ trích.
                </p>
                <p>- Có khả năng đứng dậy sau một mối quan hệ đổ vỡ.
                </p>
                <p>- Rất nghiêm túc trong các cam kết của mình, và mong muốn tìm kiếm những mối quan hệ lâu dài.
                </p>
                <p>- Có khả năng đưa ra hình thức kỷ luật khi cần thiết.

                </p>
                <h3>Các nhược điểm của ESTJ trong các mối quan hệ:</h3>
                <p>- Không dễ đồng cảm với người khác.
                </p>
                <p>- Có xu hướng lúc nào cũng muốn lãnh đạo người khác.
                </p>
                <p>- Có xu hướng nghĩ rằng mình luôn luôn đúng.
                </p>
                <p>- Không chịu nổi sự thiếu hiệu quả và tùy tiện.
                </p>
                <p>- Có thể vô ý làm tổn thương người khác bằng những câu nói thiếu nhạy cảm.
                </p>
                <p>- Không giỏi lắm trong việc bộc lộ cảm nghĩ và cảm xúc của mình.
                </p>
                <p>- Đa số đều cảm thấy không thoải mái với sự thay đổi, cũng như chuyển đến một khu vực hoàn toàn mới.
                </p>
                <p>- Tư duy theo chủ nghĩa duy vật và giai cấp.

                </p>


                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của ESTJ trong công việc:

                </h3>
                <p>- Tận tâm. Các ESTJ rất nghiêm túc khi nhận nhiệm vụ và họ sẽ không từ bỏ cho dù nó khó khăn hay nhàm chán. Các ESTJ cũng dành nhiều thời gian để tìm hiểu những nguyên nhân khiến họ quan tâm sâu sắc.
                </p>
                <p>- Thích tạo ra trật tự. Các ESTJ rất không thích sự hỗn loạn và làm hết sức mình để xác định các quy tắc, cấu trúc và vai trò trong môi trường mà họ cho là quá hỗn loạn.
                </p>
                <p>- Xuất sắc trong việc tổ chức. Các ESTJ biết làm thế nào để quản lý con người và phân phối các nhiệm vụ và trách nhiệm. Họ là đội ngũ lãnh đạo xuất sắc, đặc biệt là từ góc độ hành chính.
                </p>
                <p>- Trung thành, kiên nhẫn và đáng tin cậy. Các ESTJ coi trọng sự ổn định và an toàn, và họ làm hết sức mình để trở thành thành viên có trách nhiệm và đáng tin cậy của công ty, cộng đồng và gia đình của họ.
                </p>
                <p>- Ý chí mạnh mẽ. Những người có tính cách này có những niềm tin mãnh liệt và hiếm khi từ bỏ bất chấp sự phản đối và họ sẽ không ngừng bảo vệ ý tưởng và nguyên tắc của họ .
                </p>
                <p>- Thẳng thắn và trung thực. Các ESTJ không thích các câu trả lời lưng chừng hay vòng vo, họ thích câu trả lời đơn giản và dễ hiểu. Họ quan tâm nhiều các sự kiện hơn những ý tưởng hoặc quan điểm​​.

                </p>

                <h3>Điểm yếu của ESTJ trong công việc:

                </h3>
                <p>- Thường quá cứng nhắc và bướng bỉnh. Các ESTJ thường tập trung quá nhiều vào truyền thống và nguyên tắc riêng của họ mà họ có thể vội vàng bỏ qua những ý tưởng độc đáo hoặc các phương pháp đó có thể là hiệu quả hơn các "cách cũ".
                </p>
                <p>- Phán xét. Những người có các loại tính cách ESTJ có xu hướng có niềm tin mạnh mẽ về những gì là lẽ phải và được xã hội chấp nhận, và họ không chấp nhận bất cứ sai lệch nào, họ có thể nhận xét hay chỉ trích hành vi như thế. Họ tin rằng
                    đó là trách nhiệm của họ để làm điều lẽ phải.
                </p>
                <p>- Có thể gặp khó khăn khi thể hiện cảm xúc hay thấu hiểu người khác. Các ESTJ coi trọng sự kiện và tính hợp lý, và đặt chúng trên sự nhạy cảm và cảm xúc. Do đó, họ có thể có những khó khăn hiểu để cảm xúc của người khác và thể hiện cảm
                    xúc riêng của họ.
                </p>
                <p>- Cảm thấy khó khăn để thư giãn. Các ESTJ có thể tập trung quá nhiều vào những gì mà họ mong đợi mà quên đi việc thư giãn - hoặc lo lắng những gì mọi người có thể nghĩ về họ nếu họ tạm gác công việc.
                </p>
                <p>- Có thể tập trung quá nhiều vào địa vị xã hội của họ. Các ESTJ đánh giá rất cao địa vị xã hội, và tìm cách để được bạn bè, đồng nghiệp và người thân tôn trọng họ. Do đó, họ thường quá ít quan tâm đến nhu cầu và mong muốn của chính họ.
                </p>
                <p>- Khó chịu với các giải pháp không theo quy ước. Những người có loại tính cách này thích thử và kiểm tra các giải pháp trước khi thực hiện - họ có thể không thoải mái với sự thay đổi đột ngột hoặc bị căng thẳng khi có một cần phải thử
                    một cái gì đó hoàn toàn mới.
                </p>
                <h3>Các nguyên tắc thành công</h3>




                <p>- Trau dồi ưu điểm: Bạn có được một khả năng tuyệt vời để tạo ra những phép tắc xử thế hợp lý vượt hẳn trải nghiệm bản thân mình. Hãy cho phép những nguyên tắc đó được phát triển tối đa bằng cách tạo ra chúng với sự cân nhắc kĩ càng trước
                    những thông tin sẵn có.
                </p>
                <p>- Khắc phục yếu điểm: Hãy thừa nhận khuyết điểm của mình, và cố gắng vượt qua chúng. Đặc biệt, bạn phải khắc phục xu hướng phán xét một cách quá nhanh, và nên nhớ rằng việc cân nhắc cảm xúc của người khác là rất quan trọng.
                </p>
                <p>- Tìm hiểu mọi thứ. Đừng vội bỏ qua các ý tưởng chỉ vì bạn nghĩ rằng bạn đã biết kết quả rồi. Đầu tiên bạn cần hiểu về nó, và sau đó là cần hiểu rõ nó hơn.
                </p>
                <p>- Hãy suy xét thật kỹ về những dữ liệu, sự kiện hoặc viết chúng ra: Bạn cần phải suy xét thật kỹ để quyết định những nguyên tắc hợp lý mà mình sẽ làm theo. Diễn đạt hoặc viết chúng ra giấy sẽ là một công cụ tốt cho bạn.
                </p>
                <p>- Khi bạn giận dữ, bạn sẽ thất bại. Sự kiên định đối với những nguyên tắc của bạn rất đáng ngưỡng mộ nhưng nó có thể gây hại cho bạn nếu bạn rơi vào cái "Bẫy Giận Dữ". Nên nhớ rằng cơn giận sẽ phá hoại các mối quan hệ cá nhân của bạn,
                    và có thể làm tổn thương sâu sắc đến người khác. Suy xét thật kỹ sự bực bội của bạn trước khi bạn trút nó lên đầu người khác. Sự bất đồng và thất vọng chỉ có thể được kiểm soát bằng một thái độ khách quan và bình thản.
                </p>
                <p>- Chịu trách nhiệm với chính bản thân mình: Đừng đổ những rắc rối trong cuộc sống của bạn lên đầu người khác. Hãy bình tĩnh tìm kiếm giải pháp. Không ai có thể kiểm soát cuộc sống của bạn tốt hơn bạn.
                </p>
                <p>- Luôn là chính mình trong các mối quan hệ. Đừng mong rằng mình sẽ trở thành một người đa cảm hoặc nồng nhiệt quá mức. Hãy nhận ra rằng những mối quan hệ vững chắc nhất của bạn với người khác sẽ bắt nguồn từ lý trí, chứ không phải từ tình
                    cảm. Bạn nghĩ rằng hành động của bạn sẽ nói thay tình cảm của bạn, nhưng đối với một số người thì như vậy là chưa đủ. Hãy quan tâm đến nhu cầu tình cảm của người khác, hãy thể hiện tình cảm và sự tôn trọng chân thành đối với mọi người
                    bằng chính con người thật của bạn. Hãy luôn là chính mình, bạn nhé!
                </p>
                <p>- Kiềm chế sự ham muốn kiểm soát người khác của bạn: Bạn không thể nào ép người khác tán thành với cách suy nghĩ của mình được. Có thể bạn nghĩ rằng mình biết điều gì tốt nhất cho người khác, nhưng thật ra điều mà bạn biết chỉ là "làm
                    thế nào họ có thể làm tốt nhất" dựa trên những quan điểm mà bạn cho là đúng mà thôi. Bạn muốn sống theo ước muốn của bạn thì họ cũng vậy mà thôi. Thay vì đánh giá hoặc kiểm soát họ, hãy tập trung khả năng phán xét của mình để tạo ra
                    những nguyên tắc mang tính khách quan thì tốt hơn.
                </p>
                <p>- Hãy khiêm tốn: Đánh giá bản thân nghiêm khắc như bạn đánh giá người khác vậy.
                </p>
                <p>- Hãy dành thời gian quan tâm đến bản thân mình: Hãy cho phép phần nội tâm trong bạn được phát triển. Bạn sẽ thấy rất nhiều lợi ích của việc cân bằng cả bên trong lẫn bên ngoài.

                </p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>


                <p>Danh sách các ngành nghề tiêu biểu của ESTJ là khá rõ ràng và dễ hiểu, giống như mô tả của tính cách của họ. ESTJ khá linh hoạt trong các nghề nghiệp có liên quan tới họ, nhưng đặc tính của họ đẩy họ theo một hướng nhất định.

                </p>
                <p>Thứ nhất, nền tảng của tính cách và sự nghiệp của các ESTJ là sự tôn trọng sâu sắc đối với truyền thống, tính ổn định và sự an toàn. Các ESTJ rất trung thành và đáng tin cậy - những người có loại tính cách này sẽ làm tất cả mọi thứ để
                    đáp ứng các cam kết và thực hiện các nhiệm vụ của họ. Không ngạc nhiên, khi một số các nghề nghiệp tốt nhất và phổ biến nhất của ESTJ là trong quân đội, cảnh sát hoặc các lĩnh vực pháp lý. Đó là lý do do tại sao các ESTJ thường được
                    gọi là "công dân kiểu mẫu" - và họ làm hết sức mình để định hướng và duy trì hình ảnh này trong suốt sự nghiệp của họ.

                </p>
                <p>Thứ hai, các ESTJ vốn có có nhiều đặc điểm lãnh đạo và thật sự họ rất thích việc tổ chức mọi người. Nguyên tắc và các giá trị bên trong của họ được diễn tả rất rõ ràng. Hơn nữa, các ESTJ không ưa vô tổ chức và sự thiếu khả năng - những
                    đặc điểm này làm cho họ trở nên đáng sợ, nhưng có hiệu quả cao trong những giai đoạn quản lý sau này của sự nghiệp họ. Các ESTJ cũng thích đưa ra cấu trúc mới ngay tại chỗ và họ cũng khá kỹ lưỡng. Những đặc điểm này làm cho các ESTJ
                    tỏa sáng trong các vị trí: quản trị kinh doanh, kiểm toán viên và quan chức tài chính trong thế giới doanh nghiệp - các nghề nghiệp như vậy hay tương tự là sự lựa chọn tuyệt vời cho các ESTJ. Có lẽ hơi ngạc nhiên, các ESTJ cũng có
                    xu hướng trở thành đại diện bán hàng tốt.

                </p>
                <p>Cuối cùng, các nghề nghiệp tốt nhất cho các ESTJ là tận dụng tốt sự chăm chỉ, trung thực và khả năng động viên mọi người. Các ESTJ thường kiên trì gắn bó với dự án cho đến khi nó hoàn thành, khó khăn không phải là vấn đề đối với họ. Những
                    đặc điểm này là rất quan trọng khi nói đến sự thăng tiến trong sự nghiệp - .

                </p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

                </p>
                <h3>Các ESTJ thường mang những đặc điểm:</h3>





                <p>- Thích thú trong việc xây dựng trật tự và cấu trúc.
                </p>
                <p>- Coi trọng an toàn và truyền thống.
                </p>
                <p>- Nhà lãnh đạo bẩm sinh – họ thích được dẫn đầu.
                </p>
                <p>- Có một hệ thống rõ ràng về những chuẩn mực và niềm tin.
                </p>
                <p>- Chăm chỉ và đáng tin cậy.
                </p>
                <p>- Trung thành.
                </p>
                <p>- Năng động và khỏe mạnh.
                </p>
                <p>- Khả năng tổ chức tuyệt vời.
                </p>
                <p>- Không thích sự thiếu năng lực và kém hiệu quả.
                </p>
                <p>- Thẳng thắn và trung thực.
                </p>
                <p>- Sẽ theo đuổi các dự án cho đến khi hoàn thành thì thôi.
                </p>
                <p>- Rất chu đáo.
                </p>
                <p>- Khát khao được hoàn thành nghĩa vụ của mình.

                </p>
                <p>Các ESTJ có rất nhiều lựa chọn trong nghề nghiệp. ESTJ rất giỏi trong nhiều việc khác nhau vì họ luôn dồn hết tâm trí và sức lực để làm cho mọi thứ thật tốt đẹp. ESTJ cảm thấy thoải mái nhất khi giữ vai trò lãnh đạo, bởi vì họ có xu hướng
                    tự nhiên trong việc lãnh trách nhiệm. ESTJ thích hợp nhất cho những công việc đòi hỏi phải thiết lập trật tự và cấu trúc.

                </p>
                <p>Dưới đây là các công việc phù hợp với ESTJ, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ESTJ nhưng không phải chắc chắn) :

                </p>
                <p>- Quản lý
                </p>
                <p>- Lãnh đạo quân đội
                </p>
                <p>- Quan tòa
                </p>
                <p>- Cảnh sát/ Thám tử
                </p>
                <p>- Nhân viên kế toán
                </p>
                <p>- Bán hàng
                </p>
                <p>- Nhà giáo

                </p>



            </div>
        </div>
    </div>
`
components.NQTScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>
                <p>3 tính cách đặc trưng của ESFJ là: Thực tế, vị tha và hòa đồng. Có khoảng 12% dân số mang tính cách này. Các ESFJ muốn được phục vụ người khác và họ rất nghiêm túc khi đưa ra các cam kết. Các ESFJ rất giỏi làm việc nhóm, họ luôn cảm nhận
                    được sự căng thẳng và không hòa hợp. Họ rất truyền thống, làm hết sức mình để hỗ trợ và bảo vệ quyền và pháp luật. Những người có loại cá tính này cũng có xu hướng rất tận tâm, cho dù họ đang đóng vai trò chủ của buổi tiệc hay một
                    nhân viên xã hội. Khá dễ dàng để nhận ra ESFJ trong các sự kiện xã hội - họ sẽ sắp xếp đủ thời gian để trò chuyện với tất cả mọi người.

                </p>
                <p>Các ESFJ luôn luôn cố gắng tìm kiếm sự hài hòa trong mọi lĩnh vực có thể, họ dễ bị xúc phạm bởi vì sự không quan tâm hoặc miễn cưỡng của người khác để tham gia vào các hoạt động mà ESFJ thấy cao quý và quan trọng. Nếu không kiểm soát được,
                    điều này có thể là một trong những điểm yếu ESFJ và những người có loại cá tính này nên cố gắng ý thức về hành vi của mình xung quanh những người khác văn hóa, kiến thức hay khác tính cách.

                </p>
                <p>Các ESFJ rất quan tâm đến hình thức bên ngoài và rất nhạy cảm về địa vị xã hội của họ - Chủ để cá nhân này thực sự là một "bãi mìn" cho những ai quyết định thảo luận với một ESFJ, đặc biệt là có một vài chỉ trích hay chế nhạo liên quan.
                    Các ESFJ cũng tôn trọng hệ thống phân cấp và làm hết sức mình để đạt được một vị trí trong chính quyền.

                </p>
                <p>Tính cách của các ESFJ là thích được tham gia vào các cuộc trò chuyện tập trung vào chủ đề thực tế hoặc cuộc sống của người khác - tuy nhiên, họ sẽ cố gắng để thoát ra khỏi các cuộc thảo luận một khi nó chạm vào vấn đề trừu tượng hay lý
                    thuyết. Các ESFJ không quan tâm đến các vấn đề phân tích những ý tưởng phức tạp hay các thảo luận về nguyên nhân và hậu quả, đây là một sự tương phản hoàn toàn với các loại tính cách NT.

                </p>
                <p>Các ESFJ có xu hướng rất nồng nhiệt, nhạy cảm và sâu sắc. Đây là những đặc điểm tuyệt vời, nhưng nó cũng có thể gây khó khăn cho họ và những người xung quanh - những người có loại cá tính này có khả năng gặp khó khăn để đối phó với các
                    tình huống có liên quan đến những lời chỉ trích hoặc xung đột.

                </p>
                <p>Các ESFJ rất nghiêm túc và giữ lời khi đưa ra các cam kết, họ đặt sự đảm bảo và ổn định lên trên mọi thứ khác, trong khi vẫn không quên những điều quan trọng(cho dù nhỏ) trong cuộc sống của họ. Đặc điểm tính cách này làm cho họ trở thành
                    những đối tác rất bền vững và trung thành. Các ESFJ thích cấu trúc hơn tự phát, thích giá trị rõ ràng, khả năng dự đoán và ổn định - trong mọi lĩnh vực của cuộc sống của họ.

                </p>
                <p>Do đặc điểm tính cách ở trên, phụ nữ ESFJ thường được coi là cực kỳ nữ tính và thường được mô tả như là hình mẫu trong cả cuộc sống thực và phim hoặc chương trình truyền hình. Với đàn ông ESFJ thì thường thể hiện và sử dụng những đặc điểm
                    này theo một cách khác.

                </p>



                <h3>Những người nổi tiếng mang tính cách ESFJ:

                </h3>
                <p>- Harry S. Truman, Tổng thống Hoa Kỳ
                </p>
                <p>- Gerald Ford, Tổng thống Hoa Kỳ
                </p>
                <p>- Desmond Tutu, Nhà hoạt động chống chủ nghĩa Apartheid (phân biệt chủng tộc)
                </p>
                <p>- Andrew Carnegie, Nhà tư bản và nhà từ thiện
                </p>
                <p>- Sam Walton, Người sáng lập Walmart
                </p>
                <p>- Andy Rooney, Nhà báo, người dẫn chương trình và nhà văn
                </p>
                <p>- Francis, đức giáo hoàng (Pope)
                </p>
                <p>- Rick Santorum, Nghị sĩ và ứng cử viên tổng thống Hoa Kỳ

                </p>

                <h2>MỐI QUAN HỆ
                </h2>
                <p>ESFJ là những người bạn rất trung thành và sẵn sàng bỏ ra rất nhiều thời gian với những người quan trọng với họ. Họ là những người nồng nhiệt, sống tập thể và rất truyền thống. Các ESFJ tìm kiếm các mối quan hệ tốt, bền vững và họ làm
                    mọi thứ để bạn bè của họ hạnh phúc. Không ngạc nhiên, khi các ESFJ được nhiều người ngưỡng mộ và yêu thích.

                </p>
                <p>Các ESFJ thích làm cho bạn bè của họ cảm thấy thỏa mái, nhưng họ cũng mong đợi được đền đáp lại. Những người có loại cá tính này không thích chỉ trích mạnh mẽ, đặc biệt là nếu ý kiến ​​tiêu cực đến từ những người mà họ tin tưởng. Điều
                    quan trọng là các ESFJ cũng không bị phán xét khi nói đến việc giao tiếp với những người không cùng quan điểm.

                </p>
                <p>Những người có các loại tính cách ESFJ cũng nên lưu ý rằng sự nhạy cảm của họ cho phép họ nhận ra những gì động viên và thúc đẩy bạn bè của họ - kiến thức này có thể được sử dụng cho cả hai mặt, mặt tốt (khuyến khích và truyền cảm hứng
                    của người khác) và mặt xấu (thao túng và điều khiển). Thật không may, nhiều ESFJ quá tin tưởng vào bạn bè, rằng bạn bè của họ có thể làm không sai, luôn luôn đẩy mạnh và bảo vệ họ bất kể tình hình.

                </p>
                <p>Những người bạn ESFJ luôn cố gắng rất nhiều để giữ mối quan hệ cá nhân tốt, và các mối quan hệ xã hội tốt đẹp khác. Dễ tính và chân thành là hai tính cách giúp họ chinh phục nhiều người quen và bạn bè.

                </p>
                <p>Tóm lại, các ESFJ sống rất tình cảm và luôn đánh giá cao những mối quan hệ thân thiết cá nhân. ESFJ luôn muốn phục vụ người khác, và họ hạnh phúc khi thấy những người thân yêu bên cạnh mình sống vui vẻ. Họ được đánh giá cao bởi sự ấm áp,
                    chân thành và bản chất quan tâm của mình, cũng như khả năng đặc biệt có thể nhận ra và phát triển những thế mạnh của người khác. Họ thường không giỏi giải quyết xung đột, nhưng thường có xu hướng rất điềm tĩnh và thuyết phục. Những
                    mối quan hệ được đặt làm trọng tâm trong cuộc sống của họ, và họ luôn nỗ lực hết mình để phát triển và duy trì những mối quan hệ cá nhân. Các ESFJ cũng mong muốn có được điều này từ những người khác.

                </p>


                <h3>Các ưu điểm của ESFJ trong các mối quan hệ:

                </h3>
                <p>- Thích giúp đỡ người khác.
                </p>
                <p>- Bản chất của họ là ấm áp, thân thiện và luôn hỗ trợ người khác.
                </p>
                <p>- Trách nghiệm và thực tế, có thể nhờ họ lo việc chăm sóc hàng ngày.
                </p>
                <p>- Nỗ lực và cố gắng không ngừng để hoàn thành nghĩa vụ và bổn phận của mình.
                </p>
                <p>- Luôn nghiêm túc trong mọi mối quan hệ, và tìm kiếm mối quan hệ lâu dài.
                </p>
                <p>- Có tư tưởng truyền thống và hướng về cội nguồn, họ là người thường tổ chức những sự kiện truyền thống đặc biệt của gia đình.
                </p>
                <p>- Giỏi quản lí tiền bạc.
                </p>
                <p>- Lạc quan và được mọi người biết đến, họ thường rất quyến rũ.

                </p>


                <h3>Các nhược điểm của ESFJ trong các mối quan hệ:</h3>
                <p>- Ít chú ý đến những nhu cầu cá nhân, luôn tự hy sinh vì người khác.
                </p>
                <p>- Không thích xung đột và phê phán.
                </p>
                <p>- Thường không linh hoạt trước những hay đổi hoặc khi chuyển đến nơi khác sống.
                </p>
                <p>- Quá coi trọng danh vọng và quá quan tâm đến cách mọi người nhìn mình.
                </p>
                <p>- Cần nhiều sự khẳng định để cảm thấy hài lòng về bản thân.
                </p>
                <p>- Khó chấp nhận những mặt tiêu cực của những người thân bên cạnh họ.
                </p>
                <p>- Gặp khó khăn khi chấp nhận một mối quan hệ tan vỡ, và luôn tự cho đó là lỗi của mình.
                </p>
                <p>- Có thể có xu hướng làm những điều sai trái để có được thứ họ muốn.

                </p>


                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                <h3>Điểm mạnh của ESFJ trong công việc:

                </h3>
                <p>- Luôn luôn tìm kiếm các giải pháp cùng thắng: Tính cách của các ESFJ là đánh giá cao sự hài hòa và làm hết sức mình để tránh xung đột bất kỳ nơi nào có thể. Họ là những người có kỹ năng làm nhóm tốt bẩm sinh, cố gắng để tất cả mọi người
                    đều đạt được điều mình muốn.
                </p>
                <p>- Rất trung thành: Các ESFJ rất coi trọng các mối quan hệ và sự ổn định rất cao, họ cố gắng hết sức để không làm ảnh hưởng tình trạng hiện tại, trừ khi thật cần thiết. Điều này làm cho họ trở thành những nhân viên hay đối tác rất trung
                    thành và đáng tin cậy.
                </p>
                <p>- Nhạy cảm và ấm áp: Tính cách của ESFJ là tìm kiếm sự hài hòa và quan tâm sâu sắc đến cảm xúc của người khác, họ cẩn thận không xúc phạm hoặc làm tổn thương bất cứ ai.
                </p>
                <p>- Biết cách để kết nối với mọi người: Các ESFJ là những con người thân thiện và tính tập thể cao, họ không gặp khó khăn với cuộc nói chuyện nhỏ hoặc theo những nghi thức xã hội khác.
                </p>
                <p>- Rất coi trọng nhiệm vụ: Các ESFJ có xu hướng nhận trách nhiệm và đáng tin cậy, họ dành nhiều sự quan tâm đến nhiệm vụ và trách nhiệm của họ. Các ESFJ là những người lao động rất chăm chỉ, thường đặt nhiệm vụ của mình trên nhu cầu của
                    họ.
                </p>
                <p>- Làm tốt với các vấn đề thực tế: Những người có các loại tính cách ESFJ có kỹ năng thực hành xuất sắc và không né tránh các công việc đơn giản, thông thường, các công việc thường nhật. Họ luôn luôn đảm bảo rằng những người gần gũi với
                    họ sẽ được chăm sóc.

                </p>

                <h3>Điểm yếu của ESFJ trong công việc:

                </h3>
                <p>- Thường bị ám ảnh bởi địa vị xã hội của họ: Các ESFJ thường có một nhu cầu rất lớn muốn được xem là người chịu trách nhiệm, tôn trọng và thành công - họ sẽ làm tất cả mọi thứ để nânng cao địa vị xã hội và sự ảnh hưởng của họ.
                </p>
                <p>- Có thể không linh hoạt: Các ESFJ rất coi trọng truyền thống và thường lo lắng quá nhiều về những việc mà người khác vẫn xem là chấp nhận được. Do đó, họ có thể sẽ phải rất cẩn thận hoặc thậm chí phê phán khi nói đến phương pháp khác
                    thường hay các quan điểm độc đáo.
                </p>
                <p>- Không sẵn sàng ứng biến: Những người mang tính cách ESFJ thường không thích mạo hiểm ra bên ngoài vùng an toàn của họ và không thích thực hiện các bước táo bạo, họ sợ phải đối mặt với các tính huống mới mà không thể kiểm soát được.
                </p>
                <p>- Rất dễ bị chỉ trích: Các ESFJ rất không thích các cuộc xung đột và phê bình - họ có xu hướng phòng thủ và bị tổn thương nếu một người nào đó (đặc biệt là một người gần gũi với họ) chỉ trích thói quen, ý tưởng, truyền thống yêu thích
                    của họ.
                </p>
                <p>- Thường quá vị tha: Các ESFJ thường chăm sóc và lo lắng quá nhiều về những người khác, điều đó làm cho sự quan tâm của họ sẽ trở nên rất lớn và sự quan tâm quá mức đôi khi không được chào đón. Điều này cũng có thể dẫn đến nhu cầu của
                    họ bị lãng quên.
                </p>
                <p>- Rất có nhu cầu được khen: Các ESFJ cần phải được biết là họ đang được thích và nỗ lực của họ mang lại giá trị. Do đó, những người có loại cá tính này thường tìm kiếm lời khen ngợi hoặc cố gắng để thu hút sự chú ý của người khác.

                </p>
                <h3>Các nguyên tắc thành công</h3>





                <p>- Trau dồi ưu điểm. Hãy để khả năng phục vụ và cho đi trời phú của mình lan tỏa ra thế giới bên ngoài, hãy cho cả thế giới biết về món quà trời phú này của bạn. Hãy cho phép mình có được cơ hội chăm sóc và phát triển gia đình, và cả nơi
                    làm việc của bạn, những việc mà sẽ mang lại những giá trị cho bản thân và cả những người khác nữa. Hãy tìm những công việc hay sở thích nào đó cho phép bạn nhận ra được sức mạnh của mình.

                </p>
                <p>- Khắc phục điểm yếu. Bạn nên hiểu và chấp nhận rằng có những việc sẽ không bao giờ được như mong muốn. Hãy nhớ rằng những người khác cần nhìn nhận thế giới theo cách riêng của họ. Đối mặt và giải quyết với những bất hòa hoặc sự khác biệt
                    của người khác không có nghĩa bạn phải thay đổi bản thân, điều đó có nghĩa bạn cho phép mình có cơ hội trưởng thành. Bằng cách đối mặt với yếu điểm của mình, bạn đang thể hiện sự tôn trọng bản thân mình cũng như tôn trọng những người
                    khác.

                </p>
                <p>- Đừng quá nóng vội. Hãy để mọi việc diễn ra một cách tự nhiên trước khi bạn phán xét nó, và cho phép người khác khám phá ra điều gì tốt nhất cho họ trong khi bạn cố gắng tìm hiểu tất cả những thay đổi và những hoàn cảnh bất ngờ.

                </p>
                <p>- Hãy tìm hiểu thế giới của người khác. Đừng để bản thân lầm tưởng rằng bạn luôn biết rõ điều gì là tốt đẹp cho những người xung quanh. Hãy mở cửa trái tim để đón nhận cơ hội thấu hiểu nhu cầu thật sự của họ, thông qua việc nhìn nhận rằng
                    cách họ nhìn thế giới này cũng rất đúng đắn nhưng lại có thể khác với cách nhìn của bạn.

                </p>
                <p>- Thử để người khác gánh vác một phần công việc. Bằng cách để mọi người đưa ra quan điểm riêng của mình, bạn không chỉ có thể điều khiển được mọi việc mà còn công nhận họ như một phần cuộc sống của bạn. Hãy biết rằng, sẽ tốt hơn nếu bạn
                    giúp người khác hiểu được ý kiến của bạn hơn là để họ không biết gì cả.

                </p>
                <p>- Hãy nhìn nhận thế giới một cách tỉ mỉ. Hãy nhớ rằng, mọi việc đôi khi không như bề ngoài của nó. Bạn cần phải nhìn sâu vào bên trong để khám phá ra sự thật, đặc biệt trong trường hợp mà bạn cảm thấy chắc chắn với quyết định đầu tiên
                    của mình. Ẩn dấu bên trong mọi việc còn có rất nhiều tầng ý nghĩa và sự thật mà bạn cần phải khám phá.

                </p>
                <p>- Đừng tự nhốt mình. Ở trong vùng an toàn của mình, suy cho cùng rồi cũng sẽ tự chuốc lấy thất bại. Hãy biến chuỗi ngày của mình là những ngày mà bạn bước ra thế giới ngoài kia và khám phá ra được nhiều điều hay. Điều này sẽ giúp bạn mở
                    rộng sự hiểu biết và chú trọng những ý tưởng cũng như cơ hội mới.

                </p>
                <p>- Chịu trách nhiệm trước mọi người. Hãy nhớ rằng họ cần hiểu bạn và chính bạn cũng vậy. Bày tỏ quan điểm về sự ngờ vực và những khó khăn cũng như những lí do của mình để họ có thể trở thành người bạn đồng hành của bạn trên con đường chinh
                    phục thử thách.

                </p>
                <p>- Hãy tin tưởng vào những điều tốt đẹp nhất. Đừng đợi người khác làm theo ý bạn. Mỗi người đều có giá trị và quan điểm riêng, cũng như hoàn cảnh đều có thể trở thành điều tốt đẹp. Nếu tin vào điều này, bạn sẽ tìm được cách biến nó thành
                    sự thật.

                </p>
                <p>- Nếu chưa chắc chắn, hãy hỏi lại ngay. Nếu bạn cảm thấy nghi ngờ, thiếu thông tin thì hãy hỏi lại ngay. Đừng tự đánh đồng việc thiếu những thông tin phản hồi là một với việc nhận được những phản hồi tiêu cực. Nếu bạn cần phản hồi từ người
                    khác, hãy hỏi ngay!

                </p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>
                <p>Chúng ta bắt đầu viết về những nghề nghiệp tiêu biểu của ESFJ theo ba đặc trưng: thực tế, vị tha và hòa đồng. Những công việc mà ESFJ chọn có xu hướng phản ảnh đến các đặc trưng đó là tốt - những người có tính cách này hướng ngoại tuyệt
                    đối và tính cảnh giác cao (SJ), những đặc điểm này thường được thể hiện rõ ràng và đẩy họ về phía con đường sự nghiệp nhất định.

                </p>
                <p>Các ESFJ rất có tổ chức, đáng tin cậy và là những con người thực tế. Họ rất phấn khởi trong việc làm cho môi trường của họ có cấu trúc hơn và dễ dự đoán. Họ không né tránh các công việc đơn điệu, thường nhật. Một số các con đường sự nghiệp
                    tốt nhất cho ESFJ xoay quanh những đặc điểm này là nhân viên kế toán xuất sắc, kế toán hoặc quản trị viên.

                </p>
                <p>Có một đều phải thừa nhận rằng các ESFJ rất thoải mái trong các tình huống xã hội. Họ là những người biết lắng nghe và thành viên có giá trị trong nhóm, họ thích công việc có liên quan đến một vài mức độ tiếp xúc cá nhân và phản hồi cảm
                    xúc. Các công việc phân tích thuần túy thì quá buồn tẻ đối với họ. Các ESFJ cũng biết rất nhiều kiến ​​thức và kỹ năng thực tế. Không ngạc nhiên, một vài nghề nghiệp tốt nhất cho ESFJ là trong giảng dạy, chăm sóc y tế, tư vấn hoặc
                    công tác xã hội.

                </p>
                <p>Các ESFJ thực sự cần cảm thấy được đánh giá cao và được mọi người biết là họ đã giúp một ai đó. Những người có loại cá tính này thấy khó để hài lòng với công việc mà nếu họ không tin rằng họ đang tạo ra một số giá trị và trao nó cho người
                    khác. Đặc điểm này là một động lực đằng sau nhiều sự nghiệp điển hình của ESFJ, đặc biệt là nếu họ đang ở trong các lĩnh vực công tác tôn giáo, xã hội hay tâm lý.

                </p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

                </p>



                <h3>Các ESFJ thường mang những đặc điểm:</h3>
                <p>- Cảm thấy hài lòng khi cho đi.
                </p>
                <p>- Có tổ chức.
                </p>
                <p>- Đáng tin cậy.
                </p>
                <p>- Thực tế.
                </p>
                <p>- Trung thành.
                </p>
                <p>- Ấm áp và dễ cảm thông.
                </p>
                <p>- Thích sáng tạo trật tự, cấu trúc và thời khóa biểu.
                </p>
                <p>- Có xu hướng ưu tiên nhu cầu của người khác.
                </p>
                <p>- Thích gây ảnh hưởng với những người khác.
                </p>
                <p>- Rất hợp tác, là một thành viên tốt khi làm việc nhóm.
                </p>
                <p>- Cần sự chấp nhận của người khác.
                </p>
                <p>- Rất thạo việc chăm sóc người khác.
                </p>
                <p>- Đề cao cuộc sống an toàn và thanh bình.
                </p>
                <p>- Sống thực tế – không thích những gì thuộc về tương lai.
                </p>
                <p>- Thích sự đang dạng, làm tốt những công việc thường.

                </p>
                <p>ESFJ thường có 2 đặc điểm chính giúp họ tìm ra hướng đi đúng trong sự nghiệp:

                </p>
                <p>- Cực kì có tổ chức và thích sáng tạo sự trật tự.
                </p>
                <p>- Cảm thấy hài lòng khi cho đi và giúp đỡ người khác.

                </p>
                <p>Vì vậy, các ESFJ sẽ làm tốt những công việc liên quan đến sáng tạo hoặc duy trì sự trật tự và cấu trúc, và họ sẽ cảm thấy thoải mái nhất khi làm những công việc phục vụ mọi người.

                </p>
                <p>Dưới đây là các công việc phù hợp với ESFJ, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ESFJ nhưng không phải chắc chắn) :

                </p>
                <p>- Cố vấn/ Công tác xã hội
                </p>
                <p>- Thủ thư/ Kế toán
                </p>
                <p>- Chăm sóc sức khỏe tại gia
                </p>
                <p>- Y tá
                </p>
                <p>- Chăm sóc trẻ em
                </p>
                <p>- Lãnh đạo
                </p>
                <p>- Giáo viên
                </p>
                <p>- Trưởng phòng
                </p>
                <p>- Tăng lữ hoặc những việc liên quan đến tôn giáp
                </p>









            </div>
        </div>
    </div>
`
components.NCHScreen = `
<div class="NKH-container">
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
                        <li id="redirect-toS">Nhà Quản Lý</li>
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
<div class="NKH-wrapper">
    <div class="NKH-wrapper-content">
        <h2>TỔNG QUAN</h2>

        <p>Có khoảng 5% dân số mang tính cách này, ISTP sở hữu nhiều đặc điểm thú vị có thể dễ dàng ngăn chặn người ngoài cuộc thăm dò họ. Họ thường rất lý trí và suy nghĩ logic, nhưng cũng có thể làm ngạc nhiên mọi người bằng cách đột nhiên trở
            nên tự phát và nhiệt tình nhiều hơn. Trong khi hầu hết các loại tính cách khác thường dễ dàng nhận biết và vạch ra rõ ràng những tính cách đặc trưng, thì điều này chắc chắn là không thể với trường hợp của ISTP - ngay cả những người
            quen biết họ cũng có thể không có khả năng dự đoán phản ứng của họ với một điều gì đó.

        </p>
        <p>Điều này xuất phát từ sự kết hợp thú vị của lý trí ( T ) và sự linh hoạt ( P ) trong đặc điểm tính cách ISTP. Những người mang tính cách này nghiêng về máy móc, có các kế hoạch và ý tưởng rất hợp lý, và họ có thể giữ bình tĩnh và lý trí
            trong một thời gian dài. Tuy nhiên, tính tự phát luôn ở bên trong họ - nó chỉ đơn giản là đang tạm ở "phía sau", tích lũy năng lượng và đang chờ thời điểm thích hợp để bùng phát nó cùng một lúc. Sự bùng phát đó thường làm mọi người
            xung quanh ngạc nhiên, đặc biệt là những người chưa từng thấy ISTP làm điều gì tương tự trước đây. Những người mang loại tính cách ISTP rất giỏi trong việc kiểm soát năng lượng và giữ chúng để làm những thứ quan trọng khác.

        </p>
        <p>ISTP là những cá nhân rất riêng tư, điều này càng làm cho người khác khó hiểu về họ hơn. Đôi khi các ISTP đột nhiên trở nên bướng bỉnh và lớn tiếng, đặc biệt là khi các nguyên tắc và thói quen của họ đang bị chỉ trích.

        </p>
        <p>Các ISTP cũng khá hài hước, điều này giúp xoa dịu tình hình căng thẳng hay giải quyết một số tình huống khó xử bằng sự hài hước. Nhưng ISTP không phải là người nhạy cảm, họ gặp khó khăn để nhận ra ranh giới của những gì được phép và dự
            kiến ​​trong những tình huống cảm xúc - do đó, họ vô tình có thể làm tổn thương người thuộc loại nhạy cảm hơn.

        </p>
        <p>Không giống như hầu hết các nhóm tính cách hướng nội khác, ISTP không thực sự quan tâm nhiều về không gian cá nhân. Điều này dẫn đến hai điều - Một là, ISTP không ngần ngại bày tỏ quan tâm của họ về một điều gì đó mà người khác đang làm
            việc, và có thể ngạc nhiên nếu phản ứng của họ là không thân thiện. Hai là, ISTP không phiền nếu ai đó muốn tham gia vào một trong những dự án của riêng mình - miễn là điều đó không đe dọa nguyên tắc và lối sống của ISTP.

        </p>
        <p>Các ISTP nên cố gắng chú ý đến sự nhận thức của đặc điểm đặc biệt này, dường như họ không nhận ra điều gì sai trái với hành vi như vậy, tuy nhiên, điều này có thể gây ra vấn đề lớn cả ở nơi làm việc và trong các mối quan hệ cá nhân - hầu
            hết mọi người đều khá bảo vệ không gian cá nhân của mình và hành động rất phòng thủ khi bị vi phạm.
        </p>
        <p>Các ISTP nên cố gắng chú ý đến sự nhận thức của đặc điểm đặc biệt này, dường như họ không nhận ra điều gì sai trái với hành vi như vậy, tuy nhiên, điều này có thể gây ra vấn đề lớn cả ở nơi làm việc và trong các mối quan hệ cá nhân - hầu
            hết mọi người đều khá bảo vệ không gian cá nhân của mình và hành động rất phòng thủ khi bị vi phạm.
        </p>
        <p>Các ISTP nên cố gắng chú ý đến sự nhận thức của đặc điểm đặc biệt này, dường như họ không nhận ra điều gì sai trái với hành vi như vậy, tuy nhiên, điều này có thể gây ra vấn đề lớn cả ở nơi làm việc và trong các mối quan hệ cá nhân - hầu
            hết mọi người đều khá bảo vệ không gian cá nhân của mình và hành động rất phòng thủ khi bị vi phạm.
        </p>
        <p>Các ISTP nên cố gắng chú ý đến sự nhận thức của đặc điểm đặc biệt này, dường như họ không nhận ra điều gì sai trái với hành vi như vậy, tuy nhiên, điều này có thể gây ra vấn đề lớn cả ở nơi làm việc và trong các mối quan hệ cá nhân - hầu
            hết mọi người đều khá bảo vệ không gian cá nhân của mình và hành động rất phòng thủ khi bị vi phạm.
        </p>



        <h3>Những người nổi tiếng mang tính cách ISTP:

        </h3>
        <p>- Zachary Taylor, Cựu tổng thống của Hoa Kỳ
        </p>
        <p>- Tom Cruise, Diễn viên
        </p>
        <p>- Clint Eastwood, Diễn viên
        </p>
        <p>- Frank Zappa, Nhà soạn nhạc
        </p>

        <h2>MỐI QUAN HỆ
        </h2>
        <p>ISTP là những người bạn rất toàn diện và thú vị, sống trong hiện tại và thưởng thức bất cứ điều gì mà cuộc sống mang lại cho họ. Phương châm của họ là "tất cả mọi thứ có thể thay đổi". Tình bạn với ISTP giống như một tàu lượn siêu tốc
            - nó thực sự rất thú vị và thỏa mãn trong ngày, và cảm giác hoàn toàn trái ngược vào ngày hôm sau. Tính cách ISTP là không thích cam kết, nhìn thấy mối quan hệ của họ như là một cái gì đó có thể thay đổi mỗi ngày.

        </p>
        <p>Các ISTP hiếm khi gặp khó khăn trong việc kết bạn - họ thích theo đuổi nhiều sở thích khác nhau, do đó họ có thể nghĩ ra rất nhiều điều thú vị để làm, vì vậy việc kết bạn với họ thật dễ dàng. Các hoạt động chung hình thành cơ sở tình bạn
            ISTP - những người mang loại cá tính này có khả năng kiểm soát tuyệt vời tất cả năm giác quan và thích thú cạnh tranh với những người khác, cách dễ nhất để trở thành một người bạn với ISTP là tìm một sở thích chung (tốt nhất là về
            thể chất).

        </p>
        <p>Các ISTP có xu hướng bị thu hút bởi những người mang đặc điểm S mạnh, vì họ có xu hướng là người đầu tiên khám phá ra các trải nghiệm mới. Ngược lại, với loại N (trực quan), có thể làm cho ISTP hơi khó chịu, vì ISTP thường gặp khó khăn
            khi tìm hiểu những ý tưởng trừu tượng của họ. Tuy nhiên, nếu tình bạn chủ yếu xoay quanh một sở thích chung, các ISTP vẫn sẽ chấp nhận một người nào đó dù có nhiều quan điểm khác nhau. Nói chung, ISTP khá cởi mở và thoải mái trong
            các mối quan hệ, và không có gì ngạc nhiên khi họ có xu hướng được nhiều người ưa thích.

        </p>
        <p>Tóm lại, các ISTP có khả năng làm việc độc lập và hoàn thành tốt những điều làm họ thích thú. ISTP là những người có tư tưởng thông thoáng, thú vị và hấp dẫn. Họ sống trong hiện tại và thường không lo nghĩ đến tương lai. Các ISTP thường
            quan niệm "không có gì là tuyệt đối", họ thích phát triển mối quan hệ từng bước một hơn là đưa ra những cam kết về một mối quan hệ lâu dài. Nếu mối quan hệ làm họ hứng thú và thoả mãn yêu cầu của họ, ISTP sẽ không ngững hoàn thành
            nghĩa vụ để giữ gìn mối quan hệ bền vững. Nếu họ cảm thấy không hứng thú thì họ sẽ có xu hướng bỏ qua, và tìm kiếm mối quan hệ mới phù hợp hơn.

        </p>

        <h3>Các ưu điểm của ISTP trong các mối quan hệ:

        </h3>
        <p>- Luôn lạc quan và vui vẻ.
        </p>
        <p>- Biết lắng nghe.
        </p>
        <p>- Thực tế và thực dụng, họ giải quyết tốt những vấn đề hàng ngày.
        </p>
        <p>- Thường tự tin.
        </p>
        <p>- Tôn trọng nhu cầu về không gian riêng tư của người khác.
        </p>
        <p>- Có khả năng từ bỏ một mối quan hệ dễ dàng một khi nó đã chấm dứt.
        </p>
        <p>- Không sợ xung đột và chỉ trích.
        </p>
        <p>- Có khả năng đưa ra hình phạt mặc dù họ không thích làm việc đó.
        </p>



        <h3>Các nhược điểm của ISTP trong các mối quan hệ:</h3>
        <p>- Không dễ đồng điệu với cảm xúc của người khác, đôi lúc họ có thể vô tâm vô ý.
        </p>
        <p>- Có xu hướng trở nên quá kín đáo và hay thu mình lại.
        </p>
        <p>- Sống hoàn toàn ở hiện tại, khó có những cam kết lâu dài.
        </p>
        <p>- Không giỏi thể hiện cảm xúc.
        </p>
        <p>- Khao khát hành động và sôi nổi, và có thể khuấy động mọi thứ chỉ để tạo ra chúng.
        </p>
        <p>- Cần rất nhiều không gian riêng và không muốn chúng bị xâm phạm.
        </p>


        <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
        <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
        <p>- Khắc phục điểm yếu: Hãy đối mặt với những gì mình không biết, và chấp nhận hoàn cảnh mới. Hãy trải nghiệm các hoạt động mới và những con người mới với một cách nhìn mới. Đừng tự cô lập mình trong thế giới riêng của bạn.

        </p>
        <p>- Hãy tuân thủ các nguyên tắc của xã hội: Bạn nên thừa nhận rằng xã hội được bao hàm bởi các nguyên tắc cơ bản, và xã hội sẽ không phát triển nếu các nguyên tắc đó không được công nhận và ủng hộ. Trong nền dân chủ, người ta phải bỏ phiếu.
            Gặp đèn đỏ, người ta phải ngừng xe. Nếu họ không bỏ phiếu chỉ vì đối với họ điều đó không quan trọng, vậy ai sẽ là người nắm quyền? Nếu họ không dừng xe lại khi gặp đèn đỏ bởi điều đó không nằm trong kế hoạch của họ, vậy thì làm sao
            chúng ta có thể lái xe an toàn? Những ưu tiên và kế hoạch của bạn rất quan trọng, nhưng bạn phải thừa nhận rằng những vấn đề của thế giới bên ngoài cũng quan trọng không kém. Đừng gạt bỏ tầm quan trọng của những nguyên tắc, dù cho
            chúng không có ảnh hưởng trực tiếp đến cuộc sống của bạn.

        </p>
        <p>- Tôn trọng nhu cầu hành động của mình: Hãy nhớ rằng bạn cần phải làm việc một cách tích cực để theo kịp tiến độ với những người khác. Đừng tự trách mình khi không thuộc kiểu người thích ngồi yên một chỗ và làm những việc nhàn rỗi. Hãy
            chọn một đồng nghiệp đánh giá cao cuộc sống năng động giống như bạn.

        </p>
        <p>- Hiểu rõ và thể hiện cảm xúc của mình: Có thể bạn sẽ gặp khó khăn trong việc hiểu cảm giác của bạn về một người khác. Việc thấu hiểu cảm giác đó rất quan trọng. Đừng lừa dối người khác với sự mâu thuẫn đó của bạn. Nếu chắc rằng bạn quý
            trọng một người, hãy nói cho họ biết mỗi lần bạn nghĩ đến điều này. Đây là cách tốt nhất để họ cảm thấy an toàn khi ở trong phạm vi tác động của bạn, và cũng là một cơ hội để phát triển một mối quan hệ bền vững.

        </p>
        <p>- Đừng e ngại tình yêu: Đó chỉ là những cảm xúc xưa cũ của bạn cố gắng thuyết phục chính mình rằng bạn không yêu ai và không ai yêu bạn. Điều này hoàn toàn không đúng. Không biết phải làm gì không có nghĩa là không thể học được gì. Hãy
            bước đi tiếp…và hãy yêu! Tình yêu rất ấm áp!

        </p>
        <p>- Nói rõ quan điểm của mình: Thảo luận ý tưởng và quan điểm của bạn với mọi người xung quanh sẽ giúp bạn phát triển khả năng cảm nhận của mình, cũng như giúp bạn hiểu biết hơn về thế giới. Bạn cảm nhận thế giới xung quanh mình càng tốt
            thì bạn càng có nhiều sức khoẻ và hạnh phúc.

        </p>
        <p>- Hãy rời khỏi vùng an toàn: Hãy hiểu rằng cách duy nhất để vươn lên là thoát ra khỏi vùng an toàn của mình. Nếu cảm thấy không thoải mái với một ý tưởng hay một trường hợp nào đó vì bạn không chắc chắn làm thế nào để phản ứng, đó là điều
            tốt! Đó là một cơ hội cho phép bản thân bạn trưởng thành hơn.

        </p>
        <p>- Hãy luôn nghĩ đến những điều tốt đẹp nhất: Đừng tự làm nản lòng mình bằng ý nghĩ mình thật tồi tệ. Nhớ rằng một thái độ tích cực sẽ mang đến cho bạn những hoàn cảnh tích cực.

        </p>
        <p>- Hãy quan tâm đến mọi người xung quanh: Hãy cố gắng tìm hiểu mọi người. Những ý tưởng, suy nghĩ và những ưu tiên của họ trong cuộc sống tất nhiên sẽ khác với bạn. Họ cũng có những điều hay đáng để bạn học hỏi. Hãy tìm hiểu xem họ thuộc
            nhóm người nào.

        </p>
        <h3>Điểm mạnh của ISTP trong công việc:

        </h3>
        <p>- Lạc quan và tràn đầy năng lượng. Các ISTP có xu hướng vui vẻ, tràn đầy năng lượng cá nhân, dường như họ luôn luôn có một cái gì đó để làm. Họ hiếm khi bị căng thẳng và thích làm việc theo cảm hứng hay theo "dòng chảy" chứ không phải
            là theo kế hoạch kế tiếp của họ.

        </p>
        <p>- Giỏi đối phó với các tình huống khủng hoảng. Các ISTP không bận tâm đến những rủi ro (điều này cũng có thể là một điểm yếu) và họ có thể phản ứng nhanh, đưa ra quyết định chớp nhoáng khi cần thiết - các cuộc khủng hoảng thực sự không
            khiến họ phải lo sợ.

        </p>
        <p>- Rất sáng tạo và thiết thực. Các ISTP có một trí tưởng tượng sống động, đặc biệt là khi nói đến những vấn đề thực tế hoặc máy móc. Họ thấy dễ dàng đưa ra những ý tưởng mới lạ và làm những việc theo một cách mà không ai nghĩ đến trước
            đây.

        </p>
        <p>- Thoải mái. Những người mang loại tính cách này sống trong hiện tại và chỉ đơn giản là "đi theo dòng chảy", họ không lo lắng quá nhiều về tương lai. Đây là một trong những lý do chính tại sao họ hiếm khi lo lắng về điều gì đó.

        </p>
        <p>- Biết thể hiện năng lượng đúng lúc. Mặc dù là không đoán trước, nhưng ISTP rất giỏi bảo tồn năng lượng và dùng nó khi cần thiết nhất.

        </p>
        <p>- Tự nhiên và hợp lý. Các ISTP có thể kết hợp ngẫu hứng với tu duy logic, chuyển đổi sang một "chế độ" khác, tùy thuộc vào tình hình. Điều này làm cho họ rất linh hoạt và đa năng.

        </p>

        <h3>Điểm yếu của ISTP trong công việc:

        </h3>
        <p>- Quá cứng đầu. ISTP không quá nhạy cảm khi nói đến các cuộc xung đột và phê bình, nhưng họ có thể trở nên rất thẳng thừng và bị nổi cáu nếu ai đó cố gắng chỉ trích thói quen, lối sống hoặc các ý tưởng của họ.

        </p>
        <p>- Riêng tư và kín đáo. ISTP là những người rất khó hiểu vì họ luôn giữ những suy nghĩ và quan điểm cho riêng mình, đặc biệt là khi nói đến vấn đề riêng tư hoặc nhạy cảm.

        </p>
        <p>- Nhanh chóng chán nản. Những người mang loại tính cách ISTP rất khó tập trung vào một điều gì đó trong một thời gian dài, đầu óc của họ luôn suy nghĩ đến những điều thú vị khác.

        </p>
        <p>- Không nhạy cảm. Các ISTP rất thực tế và logic và họ thường vô tình làm tổn thương người khác do không nhận ra tầm quan trọng của cảm xúc.

        </p>
        <p>- Thích chấp nhận rủi ro. Các ISTP chấp nhận rủi ro lớn và thường xuyên làm điều đó chỉ đơn giản là vì thấy thích thú. Ví dụ, họ có thể leo thang một cuộc xung đột với một đồng nghiệp chỉ để xem cách họ phản ứng.

        </p>
        <p>- Không thích cam kết. ISTP muốn xem xét nghĩa vụ của họ mỗi ngày thay vì cam kết một điều gì đó trong một thời gian rất dài. Điều này có thể gây ra vấn đề đáng kể trong mối quan hệ lãng mạn của họ.

        </p>
        <h3>Các nguyên tắc thành công</h3>






        <p>- Trau dồi ưu điểm: Bạn có khả năng đặc biệt trong việc kiểm soát môi trường vật chất xung quanh, hãy để bản thân có cơ hội luyện tập những khả năng này. Các trò giải trí như: nhảy múa, đua xe, chơi đùa, vẽ vời và luyện tập thể thao… là
            những hoạt động sẽ mang lại cho bạn nhiều niềm hạnh phúc.

        </p>
        <p>- Khắc phục điểm yếu: Hãy đối mặt với những gì mình không biết, và chấp nhận hoàn cảnh mới. Hãy trải nghiệm các hoạt động mới và những con người mới với một cách nhìn mới. Đừng tự cô lập mình trong thế giới riêng của bạn.

        </p>
        <p>- Hãy tuân thủ các nguyên tắc của xã hội: Bạn nên thừa nhận rằng xã hội được bao hàm bởi các nguyên tắc cơ bản, và xã hội sẽ không phát triển nếu các nguyên tắc đó không được công nhận và ủng hộ. Trong nền dân chủ, người ta phải bỏ phiếu.
            Gặp đèn đỏ, người ta phải ngừng xe. Nếu họ không bỏ phiếu chỉ vì đối với họ điều đó không quan trọng, vậy ai sẽ là người nắm quyền? Nếu họ không dừng xe lại khi gặp đèn đỏ bởi điều đó không nằm trong kế hoạch của họ, vậy thì làm sao
            chúng ta có thể lái xe an toàn? Những ưu tiên và kế hoạch của bạn rất quan trọng, nhưng bạn phải thừa nhận rằng những vấn đề của thế giới bên ngoài cũng quan trọng không kém. Đừng gạt bỏ tầm quan trọng của những nguyên tắc, dù cho
            chúng không có ảnh hưởng trực tiếp đến cuộc sống của bạn.

        </p>
        <p>- Tôn trọng nhu cầu hành động của mình: Hãy nhớ rằng bạn cần phải làm việc một cách tích cực để theo kịp tiến độ với những người khác. Đừng tự trách mình khi không thuộc kiểu người thích ngồi yên một chỗ và làm những việc nhàn rỗi. Hãy
            chọn một đồng nghiệp đánh giá cao cuộc sống năng động giống như bạn.

        </p>
        <p>- Hiểu rõ và thể hiện cảm xúc của mình: Có thể bạn sẽ gặp khó khăn trong việc hiểu cảm giác của bạn về một người khác. Việc thấu hiểu cảm giác đó rất quan trọng. Đừng lừa dối người khác với sự mâu thuẫn đó của bạn. Nếu chắc rằng bạn quý
            trọng một người, hãy nói cho họ biết mỗi lần bạn nghĩ đến điều này. Đây là cách tốt nhất để họ cảm thấy an toàn khi ở trong phạm vi tác động của bạn, và cũng là một cơ hội để phát triển một mối quan hệ bền vững.

        </p>
        <p>- Đừng e ngại tình yêu: Đó chỉ là những cảm xúc xưa cũ của bạn cố gắng thuyết phục chính mình rằng bạn không yêu ai và không ai yêu bạn. Điều này hoàn toàn không đúng. Không biết phải làm gì không có nghĩa là không thể học được gì. Hãy
            bước đi tiếp…và hãy yêu! Tình yêu rất ấm áp!

        </p>
        <p>- Nói rõ quan điểm của mình: Thảo luận ý tưởng và quan điểm của bạn với mọi người xung quanh sẽ giúp bạn phát triển khả năng cảm nhận của mình, cũng như giúp bạn hiểu biết hơn về thế giới. Bạn cảm nhận thế giới xung quanh mình càng tốt
            thì bạn càng có nhiều sức khoẻ và hạnh phúc.

        </p>
        <p>- Hãy rời khỏi vùng an toàn: Hãy hiểu rằng cách duy nhất để vươn lên là thoát ra khỏi vùng an toàn của mình. Nếu cảm thấy không thoải mái với một ý tưởng hay một trường hợp nào đó vì bạn không chắc chắn làm thế nào để phản ứng, đó là điều
            tốt! Đó là một cơ hội cho phép bản thân bạn trưởng thành hơn.

        </p>
        <p>- Hãy luôn nghĩ đến những điều tốt đẹp nhất: Đừng tự làm nản lòng mình bằng ý nghĩ mình thật tồi tệ. Nhớ rằng một thái độ tích cực sẽ mang đến cho bạn những hoàn cảnh tích cực.

        </p>
        <p>- Hãy quan tâm đến mọi người xung quanh: Hãy cố gắng tìm hiểu mọi người. Những ý tưởng, suy nghĩ và những ưu tiên của họ trong cuộc sống tất nhiên sẽ khác với bạn. Họ cũng có những điều hay đáng để bạn học hỏi. Hãy tìm hiểu xem họ thuộc
            nhóm người nào.

        </p>
        <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
        </h2>
        <p>Thứ nhất, một trong những đặc điểm nổi bật nhất của ISTP là tính tò mò của mình, kết hợp với sự ham hiểu biết về các sự kiện và kiến thức. Các ISTP thích tìm hiểu cách làm việc và làm thế nào để áp dụng chúng để giải quyết một vấn đề khó
            khăn. Những người có loại tính cách này rất thực tế và thích tiếp cận "thực hành" - và sự nghiệp ISTP tốt nhất nên xoay quanh đặc điểm này. Liệt kê một vài ví dụ về nghề nghiệp cho ISTP: kỹ sư cơ khí, các nhà khoa học pháp y, thợ sửa
            chữa,... Các từ khóa ở đây là "thực tế" - ISTP không thích lý thuyết và nguyên tắc trừu tượng (mặc dù họ có thể làm chủ chúng nếu cần thiết).

        </p>
        <p>Thứ hai, các ISTP cần rất nhiều tự do trong nghề nghiệp của mình. Nếu môi trường làm việc của họ là quá cấu trúc, ISTP sẽ sớm cảm thấy rất mệt mỏi và chán nản - những người có loại cá tính này cần sự đa dạng và vận động. Các ISTP rất giỏi
            trong việc khắc phục sự cố, họ không bận tâm đến các rủi ro, họ sinh ra để giải quyết các tính huống khủng hoảng. Những người có loại tính cách này thường được thấy trong các nghề nghiệp tương đối nguy hiểm - ví dụ, ISTP thường trở
            thành nhân viên cứu hỏa, cứu hộ, y tá, thám tử, phi công, trình điều khiển,...

        </p>
        <p>Thứ ba, các ISTP rất coi trọng kết quả, tự tin và trung thành. Tư duy dài hạn không phải là thế mạnh của họ và do đó những người có loại cá tính này thích xem kết quả ngay lập tức. ISTP thích sống tự do thoải mái, tránh các cam kết không
            linh hoạt. Những đặc điểm này là khá bất thường, nhưng có một số nghề nghiệp sử dụng rất tốt đặc điểm này của họ - ví dụ, ISTP có thể là cảnh sát xuất sắc, các nhà phân tích hệ thống(tự do nếu có thể), vận động viên hoặc doanh nhân.

        </p>
        <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
            bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
            nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

        </p>



        <h3>Các ISÍTP thường mang những đặc điểm:</h3>


        <p>- Có khả năng tuyệt vời trong việc áp dụng những suy luận logic và lập luận để giải quyết vấn đề và khám phá ra cách vận hành của mọi hoạt động.
        </p>
        <p>- Thường nắm vững những lý thuyết và suy nghĩ trừu tượng, nhưng đặc biệt không thích làm việc với chúng trừ khi chúng đem lại những ứng dụng thực tế.
        </p>
        <p>- Là người mạo hiểm, ưa thích hành động.
        </p>
        <p>- Có hứng thú trong việc tìm hiểu mọi thứ vận hành như thế nào và tại sao chúng lại như vậy.
        </p>
        <p>- Luôn thu thập và lưu trữ thông tin từ thế giới bên ngoài.
        </p>
        <p>- Là những người năng động thích làm việc.
        </p>
        <p>- Học tốt nhất khi thực hành.
        </p>
        <p>- Làm việc hiệu quả thấp trong môi trường phân chia nhóm và cấp bậc, thậm chí có thể cảm thấy bị đàn áp và nhàm chán.
        </p>
        <p>- Luôn thực tế và thực dụng.
        </p>
        <p>- Luôn tự tin.
        </p>
        <p>- Sống với hiện tại hơn là tương lai.
        </p>
        <p>- Yêu thích sự đa dạng và những trải nghiệm mới.
        </p>
        <p>- Luôn hướng đến kết quả, thích được thấy những kết quả ngay lập tức cho những nỗ lực mình bỏ ra.
        </p>
        <p>- Là người giải quyết vấn đề tuyệt vời, có thể nhanh chóng tìm ra nhiều phương pháp cho một chuỗi những vấn đề thực tế.
        </p>
        <p>- Luôn thoải mái và dễ hòa nhập với người khác.
        </p>
        <p>- Độc lập và kiên quyết, thường không thích cam kết.

        </p>
        <p>ISTP sở hữu năng khiếu trong nhiều lĩnh vực. Khả năng suy nghĩ nội tâm mang lại cho họ khả năng tập trung giải quyết nhiều vấn đề khó khăn và nhanh chóng tìm ra hướng giải quyết. Tuy nhiên, để có cuộc sống hạnh phúc, các ISTP cần phải
            sống một cuộc sống tự do và không bị ràng buộc bất cứ điều gì. Các ISTP sẽ thể hiện khả năng tốt nhất khi làm việc một mình hoặc trong môi trường có đủ sự linh hoạt. Niềm yêu thích của họ là áp dụng kĩ năng lập luận tuyệt vời của mình
            vào những vấn đề và dữ liệu có sẵn để tìm hiểu ý nghĩa ẩn bên trong chúng, hoặc cách giải quyết cho những vấn đề thực tế.

        </p>
        <p>Dưới đây là các công việc phù hợp với ISTP, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ISTP nhưng không phải chắc chắn) :

        </p>
        <p>- Pháp y
        </p>
        <p>- Cảnh sát và thám tử
        </p>
        <p>- Kỹ sư
        </p>
        <p>- Thợ cơ khí
        </p>
        <p>- Lập trình viên, chuyên gia phân tích hệ thống, chuyên gia máy tính
        </p>
        <p>- Thợ mộc
        </p>
        <p>- Phi công, tài xế, vận động viên đua xe
        </p>
        <p>- Nhà thầu khoán
        </p>
        <p>- Vận động viên thể dục thể thao

        </p>






    </div>
</div>
</div>
`
components.NNSScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>

                
                <p>Có khoảng 8% dân số mang tính cách này. Tính cách ISFP này thường được xem như là tự phát nhất và không thể đoán trước của tất cả các loại hướng nội. Đặc tính nổi bậc của họ đó là sự thay đổi

                </p><p>- ISFP yêu thích khám phá và theo đuổi cái mới, những ý tưởng và hoạt động mới. Họ rất giỏi trong việc cảm nhận những cơ hội như vậy, nhưng các đặc điểm tính cách ISFP cũng đẩy họ hướng tới trải nghiệm và đến với những ý tưởng mà không ai nghĩ đến trước đây. Các ISFP thường khá dễ dàng để thiết lập xu hướng mới và truyền cảm hứng cho những người khác - sở thích trải nghiệm của họ là không giống với bất kỳ loại tính cách khác.

                </p><p>Một đặc tính nổi trội khác của ISFP là yêu thích sự tự do - các ISFP rất độc lập và quyết liệt chống lại tất cả các hình thức kiểm soát. Những người có loại tính cách này được xem là "linh hồn tự do" tối cao, họ xem tất cả các quy định, hướng dẫn và truyền thống như giới hạn tự áp đặt làm cho cuộc sống buồn tẻ và nhàm chán. Các ISFP sống hoàn toàn trong hiện tại, không bám vào quá khứ hoặc chuẩn bị kế hoạch mở rộng trong tương lai - họ lấy những thứ khi chúng đến, họ sẽ thử nghiệm và điều chỉnh hành vi khi cần thiết. ISFP không có khái niệm vô trách nhiệm hay thiếu thận trọng.

                </p><p>Các ISFP thực sự làm tuyệt vời trong các lĩnh vực đòi hỏi phải có một cách tiếp cận độc lập về nghệ thuật. Họ cũng có xu hướng rất quyến rũ, chủ yếu là vì họ nhận thấy nó thực sự dễ dàng để nhận được những lời khen tốt nhất - sự nhạy cảm( F ) và kiểm soát tuyệt vời của tất cả năm giác quan ( S ) của ISFP đã giúp họ rất nhiều trong việc hòa hợp giữa thế giới vật chất và tinh thần. Do đó, các ISFP hiếm khi có khó khăn khi kết nối với những người khác, mặc dù thực tế rằng họ là người sống hướng nội ( I ). Ngay cả khi ISFP đang thực sự không thể lường trước hoặc thậm chí liều lĩnh, sự quyến rũ của họ dễ dàng tước "vũ khí" của những người xung quanh.

                </p><p>Các ISFP cũng có xu hướng rất nhạy cảm với cảm xúc của người khác - họ có khuynh hướng tìm kiếm sự hài hòa trong mọi tình huống và dễ dàng cảm nhận được sự thay đổi trong trạng thái cảm xúc của một ai đó. Mặt khác, các ISFP cũng có thể là cực kỳ cạnh tranh và phản ứng rất nặng với bất kỳ hình thức phê bình. Bản chất tranh đua thường đẩy các ISFP đến các nguy cơ như cờ bạc hoặc các môn thể thao cực đoan - và họ cũng có xu hướng làm khá tốt trong các lĩnh vực này, chủ yếu là vì họ thích tương tác với các môi trường vật lý.

                </p><p>Các ISFP thường thấy rất khó khăn khi phải theo một quy trình có cấu trúc và do đó có thể học khá kém ở trường. Tuy nhiên, tính tự phát và các đặc điểm tính cách khác của họ làm cho ISFP trở nên rất nghệ thuật và cũng khiến cho họ có một năng khiếu thẩm mỹ tuyệt vời - những người có loại tính cách này có thể tụt lại phía sau trong môi trường học tập, nhưng họ thực sự có thể tỏa sáng trong lĩnh vực mà có sử dụng tài năng của họ trong khi nó cũng đem lại cho ISFP một cảm giác tự do.

                </p><p>Rất đáng để nói rằng tính cách của ISFP rất tích cực theo đuổi mục tiêu, định hình những nguyên tắc và quy định nội bộ để hướng đến những mục tiêu đó. Điều này dù tốt hay xấu đều giúp ISFP thoát khỏi những kỳ vọng và hạn chế từ xã hội. Nếu như mục tiêu của ISFP tốt đẹp và cao cả, thì họ có thể rất vị tha, có thể từ thiện được và đầy cảm hứng đến mức kinh ngạc. Tuy nhiên, nếu như họ quyết đinh theo đuổi một mục tiêu vụ lợi, họ có thể trở thành vị kỷ, thậm chí quỷ quyệt, làm bất kì điều gì để đạt được mục đích. Những người có tính cách như thế này cần nhận thức được các khuynh hướng và câu hỏi cho động lực và lý tưởng của chính họ qua thời gian.

                </p>



                <h3>Những người nổi tiếng mang tính cách ISFP:

                </h3>
                <p>- Tổng thống Hoa Kỳ Donald Trump
                </p><p>- Marie Antoinette, cựu nữ hoàng của Pháp
                </p><p>- Ulysses S. Grant, cựu tổng thống Hoa Kỳ
                </p><p>- Millard Fillmore, cựu tổng thống Hoa Kỳ
                </p><p>- Warren G. Harding, cựu tổng thống Hoa Kỳ
                </p><p>- Elizabeth Taylor, nữ diễn viên
                </p><p>- Bob Dylan, ca sĩ
                </p><p>- Ervin Johnson, ngôi sao NBA
                </p><p>- Paul McCartney, ca sĩ
                </p><p>- Christopher Reeve, diễn viên
                </p><p>- Michael Jackson, ca sĩ
                </p><p>- Kevin Costner, diễn viên
                </p><p>- Britney Spears, ca sĩ
                </p><p>- John Travolta, diễn viên
                </p>

                <h2>MỐI QUAN HỆ
                </h2>
                <p>Các ISFP có xu hướng thoải mái và tự nhiên, tận hưởng cuộc sống trong hiện tại và không phải lo lắng nhiều về các kế hoạch dài hạn hoặc các cuộc tranh luận nghiêm trọng. Không ngạc nhiên, những người có loại cá tính này có xu hướng bị thu hút, và thu hút những người thích sự ngẫu hứng, các hoạt động hoặc sở thích nghệ thuật hay giải trí chứ không phải là mưu cầu trí tuệ. Các ISFP cũng ít kết bạn thân thiết với những người thích cấu trúc, môi trường an toàn - ISFP cần phải có rất nhiều sự tự do và không gian riêng.

                </p><p>Mặt dù các ISFP thích sự ngẫu hứng và lối sống thoải mái nhưng họ vẫn là người hướng nội. Cho dù họ biết cách làm thế nào để vui chơi cùng những người bạn, nhưng ISFP có thể sẽ rất riêng tư hoặc thậm chí nhút nhát khi gặp người lạ. Đây là cơ chế bảo vệ tự nhiên của họ - những người có loại tính cách này rất nhạy cảm và có thể miễn cưỡng cởi mở lần đầu tiên. Các ISFP có xu hướng che dấu một phần cảm xúc hay hành động cá nhân, ví dụ như nếu hành vi hay thói quen của họ đang bị chỉ trích bởi bạn bè của họ - hậu quả là họ làm hết sức mình để che chắn cảm xúc nhạy cảm của tính cách họ từ những người mà họ không hoàn toàn tin tưởng.

                </p><p>Các ISFP rất ấm áp, giúp đỡ và khoan dung với bạn bè. --- .Tuy nhiên, các ISFP cần phải biết rằng bạn bè của họ sẵn sàng trả ơn bằng cách hỗ trợ chứ không phải là chỉ trích họ. Tính cách của ISFP là không thích bị ràng buộc bởi các quy tắc, truyền thống hoặc kỳ vọng, và không thể chịu được những người giảng dạy cho họ về cách mà họ nên sống cuộc sống như thế nào.

                </p><p>Điều đáng nói đến là các ISFP tin vào hành động không cần lời nói - những thứ mà nó bắt nguồn từ thực tế, và họ quan tâm đến những thứ chắn chắn chứ không phải là có thể, nên hay sẽ được. Đây là lý do chính khiến cho các ISFP mang đặc điểm S chứ phải là N - trực quan.

                </p><p>Tóm lại, các ISFP sống rất tình cảm và tốt bụng, họ luôn nghiêm túc với các cam kết của mình, và tìm kiếm các mối quan hệ lâu dài. ISFP thuộc nhóm người kín đáo, họ không muốn cho mọi người biết được suy nghĩ của họ. Điều này làm ISFP có xu hướng chiều theo ý người khác trong các mối quan hệ tình cảm, và có thể sẽ tạo ra rắc rối nếu đối phương không hiểu cảm giác của ISFP. Một số ISFP có thói quen không biểu lộ cảm xúc và nhu cầu của mình thường cảm thấy họ đang ở trong tình trạng bị lu mờ, bị lờ đi hoặc thậm chí bị người khác "chà đạp". Với bản chất thực dụng và hoài nghi, những cảm xúc như thế có thể làm cho ISFP trở nên gay gắt, và hoặc là sẽ từ bỏ mối quan hệ đó, hoặc là lợi dụng nó để đạt được những mục đích cá nhân. Mặc dù điều này đôi khi vẫn xảy ra, nhưng nó hiếm khi xuất hiện ở những ISFP biết cách thể hiện cảm xúc của mình với những người thân thiết. Các ISFP này luôn có một cái nhìn ấm áp và tích cực về tình yêu cũng như cuộc sống, và trong những mối quan hệ của mình, họ không bao giờ bị lợi dụng hoặc bị xem nhẹ. Họ có thể làm mọi thứ để làm người khác vui. Họ rất chung thủy và hay giúp đỡ mọi người bằng cả tấm lòng. ISFP rất ghét cãi cọ cũng như xích mích, và luôn muốn được công nhận bởi chính con người thật của mình. Họ cần không gian riêng và cũng luôn tôn trọng không gian cá nhân của người khác.

                </p>

                <h3>Các ưu điểm của ISFP trong các mối quan hệ:

                </h3>
                <p>- Linh hoạt và thoải mái, thường chiều theo ý người khác.
                </p><p>- Nồng nhiệt, thân thiện và quyết đoán.
                </p><p>- Là người biết lắng nghe.
                </p><p>- Luôn lạc quan.
                </p><p>- Thành thạo trong việc giải quyết những chuyện thực tế thường ngày.
                </p><p>- Luôn tôn trọng không gian riêng tư của người khác.
                </p><p>- Tình yêu thiên nhiên và ưa chuộng những thứ vận hành tốt khiến cho họ luôn muốn sở hữu một ngôi nhà hấp dẫn và đầy đủ chức năng.
                </p><p>- Nhạy cảm và thực tế.
                </p><p>- Có xu hướng thể hiện tình cảm bằng hành động.
                </p><p>- Nghiêm túc trong các cam kết và tìm kiếm những mối quan hệ lâu dài.
                </p>



                <h3>Các nhược điểm của ISFP trong các mối quan hệ:</h3>
                <p>- Không thành thạo việc quản lí tài chính (hoặc nhiều lĩnh vực khác) trong thời gian lâu dài.
                </p><p>- Không giỏi thể hiện tình cảm bằng lời nói.
                </p><p>- Luôn tận hưởng cuộc sống hiện tại, đôi khi người ngoài có thể thấy họ lười biếng và chậm chạp.
                </p><p>- Không thích xung đột và chỉ trích.
                </p><p>- Cần có không gian riêng, không thích nó bị xâm phạm.
                </p><p>- Có thể trở nên quá đa nghi và thực tế.
                </p><p>- Có xu hướng che đậy cảm xúc và suy nghĩ, trừ khi buộc phải nói ra.
                </p>


                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>
                
               

                <h3>Điểm mạnh của ISFP trong công việc:

                </h3>
                <p>- Nhạy cảm và có óc quan sát. Các ISFP dễ dàng liên hệ với người khác và nhận ra trạng thái cảm xúc của họ. ISFP tìm kiếm sự hài hòa và rất ghét xung đột.

                </p><p>- Quyến rũ và cởi mở. ISFP là những người thoải mái, ấm áp và ít khi gặp khó khăn khi kết bạn và hòa nhập.

                </p><p>- Nghệ thuật. Những người có loại tính cách này có xu hướng có cảm giác rất tốt về thẩm mỹ và vẻ đẹp. Đây cũng là cách chính của họ để thể hiện bản thân - kỹ năng nghệ thuật của ISFP thực sự rất tuyệt vời.

                </p><p>- Giàu trí tưởng tượng. Các ISFP sở hữu một đầu óc sáng tạo và thường được xem như những người tạo xu hướng, nghĩ ra nhiều ý tưởng táo bạo và khác thường ở mọi lúc. Trí tưởng tượng sống động và kỹ năng nghệ thuật của họ tạo thành một sự kết hợp mạnh mẽ, nó thường xuyên hỗ trợ cho ISFP trong nhiều tình huống bất ngờ.

                </p><p>- Tò mò. Các ISFP có xu hướng rất ham học hỏi và sẵn sàng thử những điều mới. Họ thà chấp nhận rủi ro hơn bỏ lỡ một cơ hội thú vị.

                </p><p>- Đam mê và nhiệt tình. Các ISFP thường tĩnh lặng và kín đáo, nhưng họ cũng lúc trở nên cực kỳ đam mê nếu họ đang làm những công việc phấn khích và thu hút họ. Những người có loại ISFP có xu hướng có những cảm xúc rất mãnh liệt, nhưng niềm đam mê và sự nhiệt tình của họ thường ẩn giấu bên trong.

                </p>
                <h3>Điểm yếu của ISFP trong công việc:

                </h3>
                <p>- Có thể có lòng tự trọng thấp. Các ISFP thường có vấn đề với sự tự tin, đặc biệt là khi còn trẻ. Hầu hết những điểm mạnh của họ xoay quanh sự nhạy cảm và thể hiện nghệ thuật, và những thứ như vậy thường được nhiều người coi là thứ cấp - xếp sau các thứ khác, ví dụ như thành tích học tập.

                </p><p>- Gặp khó khăn trong môi trường học tập. Những người có các loại tính cách ISFP thường gặp nhiều khó khăn khi tìm hiểu các chủ đề khoa học và nghiên cứu, và có thể tụt lại phía sau bạn bè của họ trong các lĩnh vực kỹ thuật cao.

                </p><p>- Dễ bị căng thẳng. Các ISFP là những cá nhân có cảm xúc mạnh mẽ - do đó, họ gặp khó khăn khi đối phó với các cuộc xung đột hay căng thẳng. Điều này cũng có thể làm giảm lòng tự trọng và kiềm chế sự sáng tạo của họ.

                </p><p>- Rất cạnh tranh. Mặc dù là khá dè dặt, thậm chí nhút nhát, các ISFP có thể trở nên rất cạnh tranh trong một vài tình huống nhất định. Đặc điểm này là rất phổ biến giữa các loại SP.

                </p><p>- Không dự đoán trước. Các ISFP không thích cam kết hay lên kế hoạch dài hạn, họ thường sống hoàn toàn trong hiện tại và cố gắng để tránh suy nghĩ về tương lai. Điều này có thể dẫn đến rất nhiều căng thẳng và hiểu lầm trong mối quan hệ lãng mạn của họ.

                </p><p>- Rất độc lập. Các ISFP đánh giá trị rất cao sự tự do của họ và không thực sự lo lắng về các truyền thống, các quy định hoặc hướng dẫn, họ tin rằng nó chỉ cản trở sự thể hiện nghệ thuật và tư duy tự do. Không ngạc nhiên, khi các ISFP thường xung đột với các nhóm tính cách thích sự truyền thống, đặc biệt là tại nơi làm việc.

                </p>
                <h3>Các nguyên tắc thành công</h3>
                <p>- Trau dồi ưu điểm: Hãy khích lệ tài năng sáng tạo và tố chất nghệ sĩ trong bạn. Nuôi dưỡng tâm hồn mình. Hãy tạo cho mình nhiều cơ hội để giúp đỡ những người thiệt thòi, nghèo khó.

                </p><p>- Khắc phục khuyết điểm: Hãy thừa nhận các điểm mạnh cũng như điểm yếu của mình. Đối mặt và khắc phục những điểm yếu không có nghĩa là bạn phải thay đổi bản thân, mà có nghĩa là bạn sẽ trở thành con người tốt nhất mà bạn có thể. Bằng cách đối mặt với chúng, bạn đang thể hiện sự kính trọng đối với bản thân chứ không phải là đang tự trách chính mình.

                </p><p>- Lắng nghe mọi thứ: Đừng vội gạt bỏ mọi chuyện ngay lập tức. Hãy để chúng ngấm từ từ rồi từ đó mới nêu lên ý kiến đánh giá của bạn về chúng.

                </p><p>- Biểu lộ cảm xúc: Đừng để những cảm xúc tiêu cực vây quanh bạn. Nếu có những cảm xúc mạnh mẽ, hãy thể hiện chúng ra ngoài. Đừng để nó tích tụ lên tới đỉnh điểm và rồi bạn sẽ không thể kiểm soát được bản thân.

                </p><p>- Thấu hiểu mọi người: Hãy nhớ rằng mỗi người đều có cuộc sống và quan điểm riêng. Họ có quyền được bày tỏ quan điểm. Hãy tìm hiểu xem họ thuộc nhóm người nào.

                </p><p>- Hãy đoán nhận chỉ trích: Luôn nhớ rằng sẽ có những người không hiểu bạn hoặc không đồng tình với bạn, dẫu cho họ xem trọng bạn thế nào. Hãy cố gắng xem chúng như một lợi thế để hoàn thiện bản thân – và thật sự đúng là như vậy.

                </p><p>- Chịu trách nhiệm với chính bản thân: Đừng đổ lỗi cho người khác. Hãy suy nghĩ về cách giải quyết. Không ai có khả năng điều khiển cuộc sống của bạn hơn là chính bạn. Khi bạn đổ lỗi cho người khác nghĩa là bạn đã mất quyền chủ động.

                </p><p>- Hãy luôn nghĩ đến những điều tốt đẹp nhất: Đừng tự làm nản lòng mình bằng ý nghĩ mình thật tồi tệ. Nhớ rằng một thái độ tích cực sẽ mang đến cho bạn những hoàn cảnh tích cực.

                </p><p>- Hãy biết chấp nhận: Bạn sẽ luôn gặp thất vọng với nhiều người khác nếu bạn kỳ vọng quá nhiều vào họ. Thất vọng với mọi người sẽ chỉ đẩy họ ra xa khỏi bạn mà thôi. Hãy đối xử với mọi người hòa nhã theo cách bạn muốn người ta đối xử với bạn.

                </p><p>- Nếu chưa chắc chắn, hãy hỏi lại ngay: Nếu cảm thấy điều gì đó không ổn mà bạn không thể giải quyết được thì biết đâu người khác có thể giúp được bạn. Hãy nhớ rằng có nhiều cách để giải quyết vấn và biết đâu đấy cách của người khác lại chính là câu trả lời!

                </p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>
                <p>Khi nói đến sự nghiệp, các ISFP cần nhiều hơn một công việc, họ cần một nơi có thể giúp họ phát huy tính sáng tạo, thể hiện tài năng nghệ thuật và đưa trí tưởng tượng của họ bay xa. ISFP trân trọng sự tự do của họ và chống lại mọi nỗ lực để đưa họ vào khuôn khổ hay bị hạn chế. Những người mang loại tính cách ISFP không quan tâm nhiều về sự ổn định, an toàn, họ muốn được đánh giá họ thực sự là ai.

                </p><p>Các ISFP rất thích thử nghiệm và cố gắng tìm ra những điều mới - đây là lý do chính tại sao họ thường được gọi là những người khởi xướng. Không ngạc nhiên, vị trí của họ cần phải đủ linh hoạt để cho phép một vài ứng biến. Ngoài ra, tính cách ISFP rất nghệ thuật, suy nghĩ độc lập mà chỉ có thể tỏa sáng trong nghề nghiệp tạo cho họ nhiều tự do. Thật khó để tưởng tượng một ISFP có thể hạnh phúc trong một căn phòng nhỏ, làm công việc hành chính từ 8 giờ sáng đến 5 giờ chiều - họ là những linh hồn tự do và không làm tốt trong một môi trường có cấu trúc chặt chẽ.

                </p><p>Hơn nữa, tính cách ISFP có xu hướng rất cạnh tranh và vượt trội trong lĩnh vực cần sử dụng tốt của tất cả năm giác quan - ví dụ thể thao, thiết kế, nghệ thuật,... Họ không thích kế hoạch dài hạn và thích sống trong hiện tại, tin rằng đó là những gì quan trọng nhất. Điều này không có nghĩa là ISFP thiếu thận trọng hoặc thiển cận - đơn giản là vì ISFP quan tâm nhiều hơn đến những thứ thực dụng, trong những thứ mà họ có thể nhìn thấy và cảm nhận. Những người có loại tính cách này không thấy lo lắng về điều gì đó dù họ có ít quyền kiểm soát.

                </p><p>Tất cả những đặc điểm này làm cho ISFP có khả năng nên suất sắc trong các lĩnh vực: nghệ thuật (trong bất kỳ lĩnh vực - ví dụ: như âm nhạc, nhiếp ảnh, hội họa,... ), các vận động viên, tư vấn, nhà tâm lý học, ngôn ngữ học, trị liệu, dịch giả tự do, giáo viên hoặc hướng dẫn viên. Đây không phải là danh sách tất cả các công việc lý tưởng bởi vì có rất nhiều con đường sự nghiệp khác miễn là có thể sử dụng các điểm mạnh của ISFP.

                </p><p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

                </p>


                <h3>Các ISFP thường mang những đặc điểm:</h3>


                <p>- Sống thực tế.
                </p><p>- Quan tâm đến môi trường sống và làm việc của mình.
                </p><p>- Không thích giải quyết những vấn đề trừu tượng, trừ khi họ thấy được ứng dụng thực tế của nó.
                </p><p>- Thích một cuộc sống chậm rãi – họ thích tận hưởng cuộc sống tại mọi thời điểm.
                </p><p>- Nghiêm túc trong mọi việc, mặc dù họ thường không tỏ ra như vậy.
                </p><p>- Là người độc đáo và có óc sáng tạo.
                </p><p>- Theo chủ nghĩa cá nhân, không thích lãnh đạo cũng như làm theo người khác.
                </p><p>- Đáng tin cậy, nhạy cảm và tốt bụng.
                </p><p>- Thích trẻ em và động vật.
                </p><p>- Chân thành và kiên định với những người và những ý tưởng có tầm quan trọng đối với họ.
                </p><p>- Cần không gian riêng và sự tự do để làm những việc mình thích.
                </p><p>- Kín tiếng và dè dặt, trừ khi tiếp xúc với những người họ hiểu rõ.
                </p><p>- Không thích bị giới hạn vào thời khóa biểu cũng như chế độ ăn uống nghiêm ngặt.
                </p><p>- Luôn giúp đỡ mọi người.
                </p><p>- Đặc biệt phát triển khả năng cảm thụ và đánh giá vẻ đẹp nghệ thuật.
                </p><p>- Không thích những công việc thường ngày, nhưng sẽ làm nếu cần thiết.
                </p><p>- Tiếp thu tốt nhất trong môi trường thực hành.

                </p><p>ISFP là những cá nhân đặc biệt, họ muốn có một sự nghiệp hơn là một công việc. ISFP muốn có một sự nghiệp giúp họ phát triển những giá trị cốt lõi bên trong chứ không phải một công việc nửa vời. Vì họ thích sống với hiện tại và dành thời gian để tận hưởng nó, nên họ không thích hợp với môi trường làm việc năng động, áp lực. ISFP cần có không gian riêng và sự tự do để thể hiện hết khả năng nhận thức nhạy bén của họ. Nếu họ được tự do làm chủ khả năng tự nhiên, các ISFP sẽ đánh thức được con người nghệ sĩ tuyệt vời bên trong họ. Hầu hết các nghệ sĩ nổi tiếng trên thế giới đều mang nhóm tính cách ISFP. Vì họ luôn quan tâm sâu sắc đến cảm xúc và phản ứng của mọi người, và có xu hướng giúp đỡ người khác, nên ISFP là những nhà tư vấn và giáo viên bẩm sinh.

                </p><p>Dưới đây là các công việc phù hợp với ISFP, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ISFP nhưng không phải chắc chắn) :

                </p><p>- Người làm công tác xã hội / Cố vấn
                </p><p>- Nhà thiết kế
                </p><p>- Nhà tâm lí học
                </p><p>- Nhạc sĩ
                </p><p>- Nghệ sĩ
                </p><p>- Chăm sóc trẻ em / Phát triển trẻ em
                </p><p>- Bác sĩ khoa nhi
                </p><p>- Giáo viên
                </p><p>- Bác sĩ thú y
                </p><p>- Kiểm lâm viên

                </p>
                






            </div>
        </div>
    </div>
`
components.NTTScreen = `
<div class="NKH-container">
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
                                <li id="redirect-toS">Nhà Quản Lý</li>
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
        <div class="NKH-wrapper">
            <div class="NKH-wrapper-content">
                <h2>TỔNG QUAN</h2>


                <p>Có khoảng 4% dân số mang tính cách này, những người có các loại tính cách ESTP rất tập thể, tự phát và thẳng thắn. Đôi khi họ bị xem là thô lỗ hoặc thiếu thận trọng, nhưng thực sự các ESTP yêu thích hành động và luôn luôn nhảy ngay vào
                    trung tâm của "cơn bão". Các ESTP không thích các cuộc tranh luận lý thuyết hoặc suy nghĩ về tương lai - họ chỉ quan tâm đến thời điểm hiện tại và tập trung tất cả nỗ lực của họ vào những thứ họ thích hơn là những suy nghĩ về những
                    gì có thể.

                </p>
                <p>Các ESTP thường ít khi lên kế hoạch hành động chi tiết, họ thường nhanh chóng lao vào công việc, họ tìm ra các sai sót và hành động ngay lập tức. Nếu cần thiết, họ không ngại quay lại và sửa chữa sai lầm của mình. Những người có loại tính
                    cách này cũng có một khả năng bẩm sinh để nhận biết những suy nghĩ và động cơ của người khác, các ESTP có thể dễ dàng phát hiện những thay đổi nhỏ trong biểu hiện của một ai đó trên khuôn mặt, quần áo, hành vi,... Các loại tính cách
                    khác không có khả năng bí ẩn này.

                </p>
                <p>Những người mang tính cách ESTP cũng có xu hướng xem luật lệ, quy tắc và nghĩa vụ như là các khuyến cáo hoặc hướng dẫn chứ không phải là nguyên tắc cứng nhắc. Nếu ESTP tin rằng một cái gì đó phải được thực hiện và nguyên nhân chính là
                    sự đúng đắng và xứng đáng, họ sẽ đi trước và làm điều đó, bất chấp những gì pháp luật hoặc quy tắc xã hội cảnh báo. Điều này không có nghĩa là để nói rằng ESTP là những người phạm pháp - họ thường có một sự hiểu biết rõ ràng về thiện
                    và ác - đúng hơn, họ có xu hướng đưa giá trị cá nhân, ý ​​kiến ​​và nguyên tắc trên những gì người khác hay xã hội suy nghĩ.

                </p>
                <p>Các ESTP rất thích xem phim, theo đuổi niềm đam mê và những thú vui vật chất khác. Tuy nhiên, những người có loại tính cách này nên biết rằng niềm đam mê của họ có thể thực hiện bằng nhiều cách khác nhau, trong đó có khá nhiều trò nguy
                    hiểm hoặc không lành mạnh - ví dụ như cờ bạc, có nhiều con bạc là ESTP. Đặc điểm tính cách của ESTP cũng có thể khiến họ vô tình làm tổn thương người khác - ESTP rất thẳng thắn và dựa trên sự kiện và logic (đặc điểm T ) chứ không phải
                    là cảm xúc (đặc điểm F), nên lời nói của họ có thể dễ dàng gây tổn thương những người mang loại tính cách nhạy cảm hơn.

                </p>
                <p>Các ESTP không thích lý thuyết và tư duy trừu tượng, họ thường gặp khó khăn trong trường học, đặc biệt là trong những năm sau đó. Những người có loại tính cách này xem các cuộc thảo luận lý thuyết là nhàm chán và vô nghĩa. Ngược lại, năng
                    lượng và niềm đam mê của họ hầu như không giới hạn khi nói đến các lĩnh vực mà họ cho là thực tế và thú vị. Các ESTP có thể rất truyền cảm và có sức thuyết phục - điều này làm cho họ trở nên xuất sắc với vị trí đại diện bán hàng, tư
                    vấn và các doanh nhân. Loại tính cách này thực sự là rất nhiều tài năng - điều quan trọng là mỗi ESTP nhận ra tài năng, cũng như những điểm mạnh và điểm yếu của mình.

                </p>

                <h3>Những người nổi tiếng mang tính cách ESTP:

                </h3>
                <p>- James Buchanan, một cựu Tổng thống Hoa Kỳ
                </p>
                <p>- Ernest Hemingway, nhà văn
                </p>
                <p>- Jack Nicholson, diễn viên
                </p>
                <p>- Eddie Murphy, diễn viên
                </p>
                <p>- Madonna, ca sĩ
                </p>
                <p>- Bruce Willis, diễn viên
                </p>
                <p>- Michael J. Fox, diễn viên

                </p>

                <h2>MỐI QUAN HỆ
                </h2>
                <p>Các ESTP rất dễ tính và khoan dung với bạn bè, những người mà họ không bao giờ thấy nhàm chán. Trí tưởng tượng và tự phát của họ là thực sự đáng ghen tị - các ESTP luôn luôn có thể đưa ra những ý tưởng thú vị để khám phá và tìm thấy những
                    điều thú vị để làm. Họ sống hoàn toàn trong hiện tại, ít nhìn lại quá khứ hay quan tâm đến tương lai, và điều này là một trong những lý do tại sao họ rất quyến rũ và được nhiều người ngưỡng mộ .

                </p>
                <p>Các ESTP dường như hòa thuận với mọi người và kết bạn mới ở tất cả mọi nơi họ đến. Họ trung thực, thẳng thắn và không thực sự lo lắng về cách người khác cảm nhận về họ - và điều này giúp họ thu hút bạn bè có chung quan điểm trong cuộc
                    sống. Các ESTP thích tận hưởng thực tế và các hoạt động thể chất, vì vậy họ thường có rất nhiều cơ hội để "rèn" tình bạn mới trong môi trường mà họ cảm thấy tự nhiên. Các ESTP ít khi tìm kiếm bạn bè có tính cách thích tranh luận trí
                    tuệ và triết học.

                </p>
                <p>Các ESTP cũng dễ bị tham gia vào các hành vi nguy hiểm và có thể khuyến khích bạn bè của họ cùng tham gia. Những người có loại cá tính này tìm kiếm sự phấn khích và chán ghét hơn bất cứ điều gì - điều này có nghĩa là họ sẽ sẵn sàng hơn
                    để khám phá những điều mới, nhưng một đặc điểm như vậy rõ ràng cũng có nhược điểm.

                </p>
                <p>Tóm lại, các ESTP là những người rất thích giao tiếp, dễ tính và luôn mong muốn tận hưởng từng khoảnh khắc tuyệt vời của cuộc sống. ESTP thích hành động và luôn mong muốn làm việc. Cảm hứng này lan truyền đến những mối quan hệ của họ,
                    và họ khát khao trong việc tận dụng và phát triển các mối quan hệ hàng ngày. Họ mau chán và thấy rất buồn khi phải thay đổi mối quan hệ thường xuyên trừ khi họ tìm được người thích hợp. Các ESTP sống trong hiện tại, do đó những cam
                    kết dài hạn thường không thích hợp với họ. ESTP cực kì tận tâm, và họ muốn thực hiện những cam kết của mình hằng ngày.

                </p>

                <h3>Các ưu điểm của ESTP trong các mối quan hệ:

                </h3>
                <p>- Xuất sắc và sáng suốt trong việc giải quyết các vấn đề khẩn cấp.
                </p>
                <p>- Có thể rất cuốn hút.
                </p>
                <p>- Hào hứng và vui tính, họ thích làm mọi thứ thật hài hước.
                </p>
                <p>- Mộc mạc và gợi cảm.
                </p>
                <p>- Vui tính, khéo léo và được yêu thích.
                </p>
                <p>- Không cảm thấy bị đe doạ bởi xung đột hay chỉ trích.
                </p>
                <p>- Sẵn sàng chơi với trẻ em với vai trò của một đứa "trẻ lớn".
                </p>p- Có xu hướng chứng tỏ tình yêu bằng những món quà đắt tiền (vừa là ưu điểm và khuyết điểm).





                <h3>Các nhược điểm của ESTP trong các mối quan hệ:</h3>
                <p>- Dễ rơi vào trạng thái chán nản.
                </p>
                <p>- Không có khả năng tự nhiên trong việc đồng cảm với người khác.
                </p>
                <p>- Có thể vô tình làm tổn thương người khác bằng ngôn ngữ.
                </p>
                <p>- Sống với hiện tại, không phải là người xây dựng kế hoạch lâu dài.
                </p>
                <p>- Không giỏi bày tỏ cảm xúc và cảm giác.
                </p>
                <p>- Có thể rơi vào thói quen lờ đi những xung đột hơn là giải quyết nó.
                </p>
                <p>- Có khả năng quản lý tiền bạc nhưng cũng rất mạo hiểm.
                </p>
                <p>- Nhanh chóng từ bỏ một mối quan hệ khi cảm thấy chán.
                </p>
                <p>- Thực hiện những cam kết dài hạn không phải bản tính của họ.

                </p>

                <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
                <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>



                <h3>Điểm mạnh của ESTP trong công việc:

                </h3>
                <p>- Tận tâm. Các ESTP thích thú vươn đến các giới hạn và tìm hiểu các khu vực mà họ chưa khám phá, chấp nhận rủi ro nếu cần thiết.
                </p>
                <p>- Trung thực và thẳng thắn. Tính cách của các ESTP là không nói vòng vo, ẩn ý và họ thích trực tiếp, câu trả lời trung thực. Họ gặp khó khăn trong "trò chơi" tâm lý hay các vấn đề tế nhị xã hội.
                </p>
                <p>- Rất sâu sắc. Các ESTP dễ dàng nhận ra thay đổi thói quen hay sự xuất hiện của ai đó - và họ sẽ luôn luôn biết làm thế nào để sử dụng thông tin đó để kết nối với người khác.
                </p>
                <p>- Khởi xướng. Các ESTP thích thử nghiệm và đưa ra những ý tưởng và giải pháp mà không ai nghĩ đến trước đây.
                </p>
                <p>- Hợp lý và thiết thực. Những người có loại cá tính này không đặt nhiều sự quan tâm về tình cảm, cảm xúc hay các ý tưởng là triết học trong tự nhiên. Họ chủ yếu quan tâm đến những gì có ý nghĩa và có thể sử dụng trong thực tế.
                </p>
                <p>- Kỹ năng giao tiếp tuyệt vời. Các ESTP không thực sự tìm cách dẫn dắt hay quản lý con người, nhưng họ có xu hướng có các kỹ năng kết nối mọi người tuyệt vời và bản năng biết làm thế nào để tận dụng tốt nhất tất cả các tương tác xã hội.

                </p>
                <h3>Điểm yếu của ESTP trong công việc:

                </h3>
                <p>- Không quan tâm nhiều đến các quy tắc. Các ESTP quan tâm nhiều hơn những việc gì sẽ làm hoặc những việc có ý nghĩa với họ hơn những gì được cho phép hoặc được mong đợi ​​bởi xã giao. Họ không ưa bị hạn chế bởi các quy tắc và quy định.
                </p>
                <p>- Tạo nhiều rủi ro. Các ESTP không ngại chấp nhận rủi ro và tận hưởng cảm giác hồi hộp. Họ thậm chí có thể làm điều đó trên mục đích nếu họ đang chán.
                </p>
                <p>- Gặp khó khăn trong môi trường lý thuyết. Những người có loại tính cách này rất thực tế, hành động theo định hướng và thực hành cá nhân - họ có thể cảm thấy khó khăn để đối phó với nhiệm vụ đòi hỏi sự kiên nhẫn, sự lặp lại và kiến thức
                    lý thuyết.
                </p>
                <p>- Có thể không nhạy cảm. Các ESTP đặt lý trí lên trên cảm xúc và có thể rất khó chịu trong những tình huống cảm xúc, họ không biết làm thế nào để đối phó với những cảm xúc của người khác. Tương tự như vậy, họ có thể sẽ gặp khó khăn thể
                    hiện cảm xúc của mình.
                </p>
                <p>- Thiếu kiên nhẫn. Các ESTP muốn ở trong trạng thái hưng phấn và tâm trí của họ không ngừng nảy ra ý tưởng mới, họ luôn tìm kiếm một cái gì đó thú vị hơn. Do đó, ESTP có thể cảm thấy khó khăn để duy trì tập trung trong một thời gian dài.
                </p>
                <p>- Thường xuyên bỏ lỡ những vấn đề lớn hơn. Tính cách ESTP là thích nhảy vào và giải quyết vấn đề "ở đây và ngay bây giờ", vì không dành thời gian phân tích mọi mặt của vấn đền nên họ thường bỏ lỡ những vấn đề lớn hơn.
                </p>
                <h3>Các nguyên tắc thành công</h3>
                <p>- Trau dồi ưu điểm: Hãy cho phép bản thân có cơ hội thể hiện những khả năng bẩm sinh. Nếu bạn không làm việc ở lĩnh vực thể hiện được các điểm mạnh thì đã đến lúc bạn nên tìm cách để thay đổi hoàn cảnh hiện tại rồi đấy. Hãy nhớ, bạn có
                    thế mạnh trong việc hoàn thành tốt công việc và vượt qua khó khăn.
                </p>
                <p>- Khắc phục điểm yếu: Hãy thẳng thắn với bản thân. Những điểm yếu của bạn có thể là điểm mạnh của người khác. Vậy thì đã sao? Bạn gặp khó khăn khi nói về cảm xúc hoặc xác định những nhận thức của bản thân cũng như của người khác, nhưng
                    bạn không cần phải lo lắng về điều đó. Hãy cho phép bản thân là người bạn muốn và hãy cho phép người khác giúp bạn hiểu rõ hơn những giới hạn của mình.
                </p>
                <p>- Nói lên quan điểm của mình. Thảo luận ý tưởng và nhận định của mình với mọi người sẽ giúp bạn phát triển thế giới nội tâm của bạn khiến cho bạn trở nên "con người" hơn mà không cần phải nhờ các hoạt động bên ngoài. Bạn sử dụng khả năng
                    suy nghĩ nội tâm của mình càng tốt thì bạn càng có nhiều sức khoẻ và hạnh phúc.
                </p>
                <p>- Tôn trọng nhu cầu hành động của bản thân. Hãy nhớ rằng bạn cần phải làm việc một cách tích cực để theo kịp tiến độ với những người khác. Đừng tự trách mình khi không thuộc kiểu người thích ngồi yên một chỗ và làm những việc nhàn rỗi.
                    Chọn một người đánh giá cao cuộc sống năng động, nhưng hãy dành thời gian để xem việc có người đó trong cuộc sống của mình có làm thay đổi lối sống của bạn hay không. Đừng quá hấp tấp bởi vì cuộc sống không phải chỉ là những cuộc vui
                    thâu đêm suốt sáng hay những cuộc thám hiểm.
                </p>
                <p>- Đừng lo lắng khi phải thể hiện cảm xúc. Trực giác khiến bạn luôn là một đứa trẻ bên trong tâm hồn, và điều đó làm bạn trốn chạy, hay khiến bạn muốn khẳng định bản thân hơn nữa. Bạn không cần phải chứng tỏ bất kỳ điều gì với bất kỳ ai.
                    Ai cũng có cảm xúc và có một chút yếu đuối trong người. Hãy tìm những người mà bạn thấy có thể sẻ chia và nói với họ về cảm giác bên trong của mình.
                </p>
                <p>- Xác định và bộc lộ cảm xúc của mình. Bạn có thể gặp khó khăn khi phải tìm hiểu chính xác cảm giác của mình khi tiếp xúc với mọi người. Bạn cần phải hiểu rõ cái cảm giác đó là gì. Đừng bắt người khác phải làm theo ý mình. Nếu bạn đánh
                    giá cao ai đó, hãy nói ngay với họ mỗi khi bạn nghĩ về điều đó. Đây là cách tốt nhất để họ cảm thấy an toàn trong tầm ảnh hưởng của bạn và để phát triển một mối quan hệ lâu dài.
                </p>
                <p>- Hãy tự tin bước ra khỏi vùng an toàn của bạn. Cách duy nhất để trưởng thành là thoát ra khỏi vùng an toàn của mình. Nếu bạn không thấy thỏa mái với các ý tưởng hay giải pháp vì bạn không biết phải hành động ra sao, vậy càng tốt! Đó là
                    cơ hội để phát triển bản thân.
                </p>
                <p>- Biết rằng sẽ có lúc mình gặp thất bại, tốt thôi! Không phải ngọn núi nào cũng có thể bị chinh phục, không phải khách hàng nào cũng có thể được thoả mãn, cho dù bạn có cố gắng đến mức nào đi nữa. Bị hạ gục là cơ hội phản ánh lại những
                    gì thật sự quan trọng trong cuộc sống. Lần tới bạn sẽ nhận thách thức đáng giá với khả năng của mình, và có giá trị với những người khác. Bạn có thể là người chiến thắng, và thành quả bạn đạt được sẽ là của bạn. Hãy biến nó thành trò
                    chơi cuộc sống, hãy giúp mọi người cùng thắng.
                </p>
                <p>- Hiểu được các điểm khác biệt của mỗi người. Bạn cần hiểu rằng mỗi người đều thật sự rất khác nhau. Họ có vị trí và giá trị riêng của mình, và bạn cần nhận ra điều đó. Bạn có thể học hỏi từ họ vì họ có những khả năng mà bạn có thể sử
                    dụng được, những khả năng đến từ chính con người họ. Cố gắng hiểu được loại tính cách của họ và quan sát các loại tính cách có thể đưa bạn ra khỏi cảm xúc tiêu cực bởi vì bạn sẽ hiểu rằng mỗi người đều có điểm đặc biệt riêng.
                </p>
                <p>- Hãy nghĩ đến những điều tốt đẹp nhất. Đừng lo lắng về những gì tồi tệ có thể xảy ra. Hãy mong muốn những điều tốt đẹp nhất, và chúng sẽ tự động đến với bạn.

                </p>
                <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
                </h2>
                <p>Khi nói đến sự nghiệp, những người mang tính cách ESTP có một danh sách nghề nghiệp dài và đa dạng để lựa chọn. Những người mang loại tính cách này rất nhanh chóng đưa ra quyết định, do đó làm cho họ trở thành ứng viên xuất sắc cho vai
                    trò đòi hỏi phải suy nghĩ tại chỗ - ví dụ: bán hàng, dịch vụ khẩn cấp, quản lý khủng hoảng, quân đội, cảnh sát... Điều này được củng cố thêm bởi thực tế là các ESTP sống trong giây phút hiện tại và muốn xem kết quả của hành động của
                    họ ngay lập tức thay vì suy nghĩ về tương lai. Họ cũng có xu hướng rất quyến rũ và là những cá nhân xuất sắc trong việc liên kết mọi người - đặc tính như vậy có thể tạo cho họ một lợi thế lớn.

                </p>
                <p>Tính cách của các ESTP cũng có xu hướng rất thiếu kiên nhẫn, có nghĩa là nghề nghiệp hay vai trò có liên quan đến việc nghiên cứu tỉ mỉ hoặc các nhiệm vụ lặp đi lặp lại không phải là phù hợp với họ. Các ESTP rất tinh ý và đặc điểm này
                    có thể rất hữu ích trong một số lĩnh vực nhất định (ví dụ như bán hàng hoặc tiếp thị) - Nhưng bản chất tò mò và tràn đầy năng lượng của họ sẽ đẩy họ hướng tới hành động theo định hướng chứ không phải là vai trò phân tích. Các ESTP
                    sẽ lựa chọn con đường sự nghiệp kém ổn định nhưng thú vị chứ không phải là chọn con đường sự nghiệp an toàn nhưng nhàm chán. Các ESTP thích chấp nhận các rủi ro, lớn và nhỏ, và thường sẽ là người thắng.

                </p>
                <p>Các ESTP không thích quy định hạn chế và môi trường có cấu trúc cao, họ thường tin tưởng khả năng và ý tưởng của mình thay vì chờ đợi cấp trên nói với họ cần phải làm gì. Điều này đôi khi làm cho các ESTP gặp khó khăn, nhưng cũng có thể
                    đẩy họ lên các bậc thang sự nghiệp . Ví dụ, những người có loại cá tính này có thể là doanh nhân xuất sắc và dịch giả tự do - kỹ năng táo bạo và ngẫu hứng của họ có thể là một lợi thế đáng gờm trong một môi trường cạnh tranh.

                </p>
                <p>Những người mang tính cách ESTP có thể trở thành vận động viên xuất sắc. Họ có xu hướng rất cạnh tranh và năng động, đó là đặc tính tuyệt vời khi nói đến lĩnh vực thể thao. Các ESTP rất hào hứng bởi các hoạt động thể thao và một trong
                    những cách tốt nhất để phát huy hết tất cả các năng lượng đó là trở thành một vận động viên chuyên nghiệp, một huấn luyện viên hoặc một nhà bình luận thể thao.

                </p>
                <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
                    bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
                    nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

                </p>


                <h3>Các ESTP thường mang những đặc điểm:</h3>


                <p>- Linh hoạt và thích ứng nhanh.
                </p>
                <p>- Sống với hiện tại.
                </p>
                <p>- Năng động.
                </p>
                <p>- Thích thấy kết quả do công việc mình làm ngay lập tức.
                </p>
                <p>- Không thích các lý thuyết trừu tượng mà không có ứng dụng thực tế.
                </p>
                <p>- Nhanh nhẹn và nhiều năng lượng.
                </p>
                <p>- Quan sát tốt.
                </p>
                <p>- Có khả năng độc lập ra quyết định.
                </p>
                <p>- Rất giỏi nhớ những chi tiết.
                </p>
                <p>- Ít khi làm việc theo kế hoạch – tới đâu hay tới đó.
                </p>
                <p>- Vui tính.
                </p>
                <p>- Thích phiêu lưu mạo hiểm.
                </p>
                <p>- Giỏi đối nhân xử thế.
                </p>
                <p>- Khả năng nhìn thấy vấn đề cấp bách và ra quyết định nhanh chóng.
                </p>
                <p>- Tự nhiên.
                </p>
                <p>- Thích bắt đầu công việc nhưng lại không nhất thiết phải theo đến cùng.
                </p>
                <p>- Có thể thích chứng tỏ hoặc phô trương.

                </p>
                <p>Dưới đây là các công việc phù hợp với ESTP, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ESTP nhưng không phải chắc chắn) :

                </p>
                <p>- Lãnh đạo quân đội
                </p>
                <p>- Cảnh sát/ Thám tử
                </p>
                <p>- Quan tòa
                </p>
                <p>- Nhân viên kế toán
                </p>
                <p>- Quản lý
                </p>
                <p>- Bán hàng
                </p>
                <p>- Nhà giáo
                </p>
                <p>- Các ngành nghề trong lĩnh vực thể thao.

                </p>






            </div>
        </div>
    </div>
`
components.NTDScreen = `
<div class="NKH-container">
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
                        <li id="redirect-toS">Nhà Quản Lý</li>
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
<div class="NKH-wrapper">
    <div class="NKH-wrapper-content">
        <h2>TỔNG QUAN</h2>


        <p>Đối với ESFP - "cuộc sống là một bữa tiệc không bao giờ kết thúc". Có khoảng 7.5% dân số mang tính cách này, Các ESFP thích được ở trung tâm của sự chú ý và họ cũng thích cả những điều đơn giản nhất - Sự vui vẻ và bản chất bốc đồng của
            họ thường rất hấp dẫn những người khác. Những người có loại cá tính này không bao giờ hết những ý tưởng và sự tò mò của họ là không giới hạn - họ sẽ luôn luôn là một trong những người đầu tiên thử một cái gì đó mới và hấp dẫn.

        </p>
        <p>Các ESFP yêu thích giao tiếp với người khác và họ có thể bỏ ra hàng giờ để trò chuyện về nhiều chủ đề khác nhau. Không có dấu hiệu nào chỉ rõ hơn một người thuộc loại ESFP là việc người đó bỏ cả tiếng đồng hồ nói về tất cả mọi thứ khác
            trừ cái chủ đề được coi là lý do chính cho cuộc nói chuyện. Tính cách này này có xu hướng rất phổ biến trong loại hướng ngoại.

        </p>
        <p>Những người mang tính cách ESFP thường sống trong thế giới của những cơ hội và tận hưởng những niềm vui. Họ được đắm mình trong một buổi biểu diễn không bao giờ kết thúc, cố gắng để cổ vũ người khác lên. Các ESFP vô cùng tài năng khi làm
            cho người khác cảm thấy tốt và vui mừng, và họ vô cùng thích điều này. Sự dí dỏm trần tục và thường độc đáo của ESFP là một biểu tượng hoàn hảo của tính khôi hài của họ.

        </p>
        <p>Các ESFP có một cảm giác thẩm mỹ phát triển cao và điều này là một trong những đặc điểm tính cách mạnh nhất của họ. Đây là loại người sẽ thích thú trang trí môi trường xung quanh và nhận ra giá trị chất lượng trong nhiều thứ khác.

        </p>
        <p>Các ESFP rất tinh ý, có thể nhận thấy và đáp ứng trạng thái cảm xúc đau khổ của người khác. Lập kế hoạch và tư duy dài hạn thường là đặc điểm tính cách yếu nhất của họ, họ là những nhà chiến lược và quy hoạch kém, nhưng họ có khả năng
            rất tốt để cung cấp lời khuyên thực tế và hỗ trợ tinh thần.

        </p>
        <p>Điểm yếu nhất của các ESFP là tính tự phát của họ, điều này có thể dẫn đến sự hời hợt và hay quên, họ cũng nhanh chóng hài lòng với những kết quả công việc mà không thuộc nghĩa vụ và trách nhiệm của họ. Các ESFP cũng có khả năng làm hết
            sức mình để bỏ qua các cuộc xung đột tiềm tàng thay vì đối đầu với chúng.

        </p>
        <p>Có khả năng là tính cách ESFP sẽ trở nên rất thực dụng, nhưng không phải khi nói đến nhiệm vụ lặp đi lặp lại hoặc phân tích. Họ thà dựa vào may mắn của họ hoặc yêu cầu người khác giúp đỡ hơn dành nhiều thời gian cố gắng để hiểu một lý
            thuyết phức tạp.

        </p>
        <p>Các ESFP khi bị căng thẳng cực độ sẽ vùi mình vào những suy nghĩ tiêu cực và hình dung ra những tình huống tồi tệ. Họ là những người lạc quan sống trong thế giới của những điều khả thi, những hình ảnh tiêu cực hoàn toàn không làm họ hài
            lòng. Trong nỗ lực đánh bại những suy nghĩ này, họ thường đưa ra những phát biểu đơn giản và mang tính tổng thể để giải quyết cho qua vấn đề đó. Những lý giải được đơn giản hóa này có thể có hoặc không liên quan đến bản chất của vấn
            đề, nhưng chúng làm thỏa mãn các ESFP bằng việc cho phép họ vượt qua nó.

        </p>
        <p>Những người mang tính cách ESFP thường rất thực tế dù là họ ghét khuôn mẫu và những việc lặp đi lặp lại. ESFP thích "hòa theo dòng chảy", tin tưởng vào khả năng của mình để ứng biến trong bất cứ tình huống nào xảy đến với họ. Họ tiếp thu
            tốt nhất với những kinh nghiệm thực tế hơn là học trên sách vở. Họ thấy khó chịu với lý thuyết. Nếu ESFP chưa phát triển được mặt trực giác của mình, họ thường có xu hướng né tránh các tình huống bao gồm nhiều suy luận lý thuyết hay
            những cái phức tạp và mơ hồ. Với nguyên nhân này, ESFP thường gặp khó khăn trong trường học. Ngược lại, họ thể hiện cực kì xuất sắc trong những hoàn cảnh cho phép họ được học qua việc tương tác với những người khác, hoặc học qua việc
            thực hành.

        </p>

        <h3>Những người nổi tiếng mang tính cách ESFP:



        </h3>
        <p>- Thánh Mark
        </p>
        <p>- Ronald Reagan, Tổng thống Hoa Kỳ.
        </p>
        <p>- Hugh Hefner, Người sáng lập tạp chí Playboy
        </p>
        <p>- Richard Branson, Người sáng lập Virgin Group.
        </p>
        <p>- Howard Schultz, Giám đốc điều hành Starbucks.
        </p>
        <p>- Dale Evans
        </p>
        <p>- Kathy Lee Gifford
        </p>
        <p>- Steve Irwin
        </p>
        <p>- Woody Harrelson (Cheers)

        </p>

        <h2>MỐI QUAN HỆ
        </h2>
        <p>Những người mang tính cách ESFP chắc chắn sẽ có nhiều bạn bè - bởi vì gần như không thể cưỡng lại sự nhiệt tình và lạc quan của họ. Những người có loại cá tính này tập trung hoàn toàn vào hiện tại và luôn luôn tìm thấy một cái gì đó thú
            vị để trải nghiệm và chia sẻ với bạn bè của họ. Điều này không có nghĩa là mối quan hệ của họ là nông cạn hoặc dựa hoàn toàn vào niềm vui - hoàn toàn ngược lại. Các ESFP chân thành quan tâm đến người khác, nhưng họ chỉ đơn giản tin
            rằng không có mục tiêu trong cuộc sống nếu bạn không thể cảm thấy thật sự sống.

        </p>
        <p>Mặt khác, khả năng chi phối tuyệt vời tất cả năm giác quan của các ESFP, có thể đẩy họ tham gia vào hành vi nguy cơ, ví dụ như cờ bạc, trai gái, nhậu nhẹt,... Đây là lý do tại sao các ESFP nên có bạn bè với các loại tính cách khác nhau
            thay vì xung quanh mình với những người hành động và suy nghĩ theo cách tương tự (ví dụ như hầu hết các nhóm tính cách SP khác).

        </p>
        <p>Những người bạn ESFP không có bất cứ khó khăn giao tiếp với các loại tính cách khác. Họ rất thẳng thắn, thậm chí đôi khi lỗ mãng, nhưng sự cởi mở và quyến rũ của họ dễ dàng xoa dịu cơn giận. Những người có loại cá tính này biết làm thế
            nào để vui chơi và hạnh phúc hơn khi chia sẻ niềm vui đó với bạn bè của họ, miễn là họ sẵn sàng đáp lại.

        </p>
        <p>Các ESFP sẽ tránh xa các thảo luận về vấn đề trí tuệ, logic, trừ khi họ xoay quanh các vấn đề thực tế, thường nhật và thú vị. Do đó các ESFP sẽ khó liên hệ, kết giao với những nhà phân tích (NT) hay nhà ngoại giao (NF). Khi đó họ sẽ đưa
            ra ý tưởng hay hành động mà cả hai đều được hưởng.

        </p>
        <p>Nhìn chung, các ESFP rất vui tính và thú vị khi tiếp xúc. Họ sống với hiện tại và biết cách làm cho mỗi giây phút đó trở nên tuyệt nhất. Họ thích thú một cách chân thành và ấm áp với người khác, và yêu thích làm cho người khác hạnh phúc.
            ESFP thường rất tốt bụng và hào phóng và luôn hết mình làm những điều tốt cho người khác. Cách thể hiện tình cảm của họ đơn giản, thẳng thắn và chân thành. Họ không thích lý thuyết và sự phức tạp. Các ESFP thường không thích những
            mối quan hệ đòi hỏi họ phải sử dụng trực giác hay suy nghĩ nhiều. ESFP thích mọi thứ phải vui vẻ và đằm thắm dù cho tình cảm hay sự nồng nhiệt của họ rất sâu sắc. Khuyết điểm của các ESFP là sống hết mình cho thời điểm hiện tại, do
            đó đôi khi họ không nhận ra hướng đi của các mối quan hệ hoặc dễ dàng bị mất mục tiêu của mình.

        </p>

        <h3>Các ưu điểm của ESFP trong các mối quan hệ:

        </h3>
        <p>- Thực tế và có khả năng chăm sóc tốt các nhu cầu hàng ngày.
        </p>
        <p>- Nhiệt tình và vui vẻ, họ biến mọi thứ trở nên thú vị.
        </p>
        <p>- Mộc mạc và gợi cảm.
        </p>
        <p>- Thông minh, dí dỏm, thẳng tính và được lòng mọi người.
        </p>
        <p>- Linh động và đa dạng, họ hòa đồng cực kì tốt.
        </p>
        <p>- Có tính nghệ sĩ và sáng tạo, họ thường có một tổ ấm đáng yêu.
        </p>
        <p>- Luôn hết mình trong từng giây phút.
        </p>
        <p>- Họ có thể chấm dứt một mối quan hệ tồi mặc dù điều đó không hề dễ dàng.
        </p>
        <p>- Rộng lượng và tốt bụng.

        </p>



        <h3>Các nhược điểm của ESFP trong các mối quan hệ:</h3>
        <p>- Không quan tâm nhiều đến chính nhu cầu của mình.
        </p>
        <p>- Thiên về vật chất.
        </p>
        <p>- Sử dụng tiền bạc một cách lãng phí.
        </p>
        <p>- Có xu hướng trốn thoát hay bỏ mặc những tình huống mâu thuẫn hơn là đối diện với chúng.
        </p>
        <p>- Cực kì không thích sự chỉ trích, có xu hướng giữ riêng những điều cực kì riêng tư.
        </p>
        <p>- Những cam kết suốt cuộc đời có thể là cả một cuộc đấu tranh với họ – họ cần thời gian rất lâu để suy nghĩ về điều này.
        </p>
        <p>- Luôn hứng thú với những điều mới lạ, họ có thể hay đi tìm những niềm vui mới.
        </p>
        <p>- Có xu hướng không quan tâm đến sức khỏe của mình, và thậm chí còn đối xử tệ bạc với chính cơ thể của mình.

        </p>

        <h2>NGUYÊN TẮC THÀNH CÔNG</h2>
        <p>Bạn không thể thành công nếu không hiểu rõ được điểm mạnh và điểm yếu của mình trong công việc.</p>



        <h3>Điểm mạnh của ESFP trong công việc:

        </h3>
        <p>- Táo bạo. Các ESFP muốn trải nghiệm nhiều điều, cố gắng hết sức để có thể thử điều đó - họ không ngại ra ngoài vùng an toàn của họ hoặc khám phá một cái gì đó mà người khác không muốn làm.
        </p>
        <p>- Độc đáo. Các ESFP muốn thử nghiệm và tận hưởng sự nổi bật trong đám đông. Họ không thực sự quan tâm đến truyền thống hoặc những gì người khác yêu cầu họ làm.
        </p>
        <p>- Kỹ năng giao tiếp xuất sắc. Các ESFP có xu hướng rất hài hước và nói nhiều - họ sẽ không bao giờ ra khỏi những cuộc thảo luận. Họ rất chán nản nếu ở một mình và rất thích giao tiếp với những người khác nếu có thể.
        </p>
        <p>- Nhận thức về thẩm mỹ và vẻ đẹp rất tuyệt vời. Các ESFP có khả năng về nghệ thuật khá tốt, đặc biệt là khi nói đến vấn đề giải trí của người khác.
        </p>
        <p>- Thực tế. Các ESFP chỉ quan tâm đến các vấn đề thực tế - họ không thích các cuộc thảo luận lý thuyết hay triết học, coi đó là một sự lãng phí thời gian của họ.
        </p>
        <p>- Rất tinh ý. Tính cách của các ESFP là sống trong giây phút hiện tại và tập trung hoàn toàn vào những gì đang xảy ra "ở đây và bây giờ". Họ rất dễ dàng để nhận thấy sự thật, những thứ hữu hình và sự thay đổi.

        </p>
        <h3>Điểm yếu của ESFP trong công việc:

        </h3>
        <p>- Cảm thấy khó khăn để tập trung. Các ESFP thường rất nhanh chóng chán nản. Họ thích tham gia vào các cuộc giải trí và cố gắng kéo dài chúng càng lâu càng tốt, bất kể tình hình. Không ngạc nhiên, khi họ cảm thấy khó khăn để đối phó với
            nhiệm vụ đòi hỏi sự kiên nhẫn, tập trung và tận tụy.
        </p>
        <p>- Rất nhạy cảm. Những người có loại tính cách này cực kỳ biểu cảm và tình cảm, làm cho họ không thể che giấu cảm xúc của mình. Họ có khả năng phản ứng rất tình cảm khi đối mặt với những lời chỉ trích hay khi họ bị đẩy vào một góc và không
            thể đưa ra quyết định.
        </p>
        <p>- Lập kế hoạch kém. Các ESFP hiếm khi nghĩ về tương lai, họ quan tâm hơn đến thời điểm hiện tại và từ chối phải lập kế hoạch cho các bước tiếp theo hoặc hậu quả tiềm tàng.
        </p>
        <p>- Luôn luôn tìm kiếm sự phấn khích. Các ESFP chấp nhận rủi ro và thường buông thả, đặt niềm vui của hiện tại lên trên sự ổn định, kế hoạch dài hạn.
        </p>
        <p>- Gặp khó khăn trong môi trường lý thuyết. Các ESFP thấy việc học lý thuyết như một sự lãng phí thời gian - họ càng thích thú hơn trong sáng tạo, những điều thực tế cũng như giao tiếp xã hội. Những người có loại tính cách này có cảm thấy
            gặp khó khăn để bám theo lịch trình hay bị ép buộc phải nỗ lực để thành công trong môi trường học tập.
        </p>p- Ghét xung đột. Các ESFP làm tất cả mọi thứ có thể để bỏ qua các cuộc xung đột tiềm tàn, thường giả vờ là quan tâm hoặc lo lắng, nhưng sau đó sẽ làm thứ gì đó mà họ cảm thấy thích.


        <h3>Các nguyên tắc thành công</h3>

        <p>- Trau dồi ưu điểm: Phát triển khả năng biểu cảm tự nhiên và những kĩ năng thực hành của bạn. Ấp ủ những trân trọng về thế giới của bạn. Hãy cho bản thân bạn cơ hội được tận hưởng cuộc sống một cách trọn vẹn.
        </p>
        <p>- Khắc phục khuyết điểm: Chấp nhận những điểm mạnh và điểm yếu của bạn. Đối diện và thỏa hiệp với khuyết điểm không có nghĩa là bạn phải thay đổi con người mình, mà điều đó có nghĩa là nếu bạn muốn trở thành người tuyệt nhất, bạn có thể.
            Qua cách đối mặt với những khuyết điểm, bạn cảm thấy quý trọng con người thật của mình hơn là chống lại nó.
        </p>
        <p>- Lắng nghe mọi thứ: Hãy cố gắng đừng chấp nhận mọi thứ qua giá trị bề ngoài. Hãy để nó lắng đọng lại và lắng nghe sự mách bảo của cảm giác của chính bạn.
        </p>
        <p>- Thể hiện cảm xúc của mình: Đừng để những lo lắng dồn nén, tích tụ bên trong bạn. Nếu bạn gặp khó khăn vì nghi ngờ hay sợ hãi, hãy chia sẻ với những người thân nhất của bạn, họ sẵn sàng lắng nghe và đưa ra lời khuyên cho bạn. Đừng mắc
            sai lầm về việc nói cho qua chuyện.
        </p>
        <p>- Hãy cố gắng thấu hiểu người khác: Hãy nhớ rằng còn có mười lăm loại tính cách khác, những người có cái nhìn khác so với bạn. Cố gắng tìm hiểu họ thuộc nhóm tính cách nào nào và tìm hiểu về con người của họ.
        </p>
        <p>- Bình tĩnh, lắng nghe những lời chỉ trích: Hãy nhớ rằng sẽ luôn có người không hiểu bạn hoặc không đồng tình với bạn, dẫu cho họ xem trọng bạn thế nào. Hãy xem chúng như một lợi thế để phát triển – và thật sự đúng là như vậy. Bạn sẽ trở
            nên tốt hơn nếu biết lắng nghe những lời góp ý từ người khác.
        </p>
        <p>- Hãy biết chấp nhận: Bạn sẽ luôn gặp thất vọng với nhiều người khác nếu bạn kỳ vọng quá nhiều vào họ. Thất vọng với mọi người sẽ chỉ đẩy họ ra xa khỏi bạn mà thôi. Hãy đối xử với mọi người hòa nhã theo cách bạn muốn người ta đối xử với
            bạn.
        </p>
        <p>- Chịu trách nhiệm với chính bản thân mình: Hãy nhớ rằng mỗi lời nói và hành động của bạn đều tác động đến mọi thứ xung quanh bạn. Vì vậy việc bạn nhận hoàn toàn trách nhiệm và tin tưởng vào những chuẩn mực của bạn là rất quan trọng.
        </p>
        <p>- Hãy tin tưởng vào những điều tốt đẹp nhất: Đừng làm bản thân bạn cảm thấy đau buồn bằng cách khoác lên mình những khuyết điểm. Hãy nhớ là một thái độ tích cực thường tạo ra những hoàn cảnh tích cực.
        </p>
        <p>- Nếu chưa chắc chắn, hãy hỏi lại ngay: Nếu cảm thấy điều gì đó không ổn mà bạn không thể giải quyết được thì biết đâu người khác có thể giúp được bạn. Hãy nhớ rằng có nhiều cách để giải quyết vấn và biết đâu đấy cách của người khác lại
            chính là câu trả lời!

        </p>
        <h2>SỰ NGHIỆP - NGHỀ NGHIỆP PHÙ HỢP
        </h2>
        <p>Các đặc điểm quan trọng nhất được chia sẻ bởi các ESFP là ham muốn sự phấn khích, kích thích và mới lạ. Những người có loại cá tính này tìm kiếm những thách thức mới, có niềm vui trong xã hội với nhiều người khác nhau, và luôn luôn tập
            trung vào hiện tại. Một số nghề nghiệp tốt nhất cho các ESFP tập trung vào những đặc điểm này - ví dụ, ESFP có xu hướng trở thành nghệ sĩ tuyệt vời, nhiếp ảnh gia, các nhà hoạch định sự kiện và đại diện bán hàng.

        </p>
        <p>Các ESFP thực sự quan tâm đến người khác và họ biết làm thế nào để làm cho mọi người hài lòng, ngay cả trong những tình huống khó khăn. Như đã đề cập ở trên, ESFP có thể rất tháo vát, đặc biệt là khi sự giúp đỡ của họ là rất cần thiết.
            Tiếp xúc với người khác là rất quan trọng cho loại tính cách này và gần như tất cả các con đường sự nghiệp của ESFP được dựa trên nhu cầu này - ESFP có thể là nhà cố vấn tuyệt vời và tạo cảm hứng, nhân viên xã hội, huấn luyện viên
            cá nhân, tư vấn, ...

        </p>
        <p>Hơn nữa, các ESFP rất tự phát và họ không thích một lịch trình chặt chẽ, quá cấu trúc hay công việc buồn tẻ, đơn điệu. Các văn bản lý thuyết, công việc hành chính hoặc phân tích dữ liệu tỉ mỉ là một sự tra tấn đối với các ESFP - bất cứ
            nghề nghiệp có liên quan đến những điều như vậy hoặc tương tự là rất không phù hợp với loại tính cách này. Ngược lại, các công việc tốt nhất cho ESFP là cung cấp cho họ đủ sự tự do để thể hiện tình yêu của mình với những điều mới lạ,
            thẩm mỹ và trải nghiệm mới - sự nghiệp ESFP điển hình bao gồm thời trang, thiết kế nội thất, du lịch, lập kế hoạch chuyến đi,...

        </p>
        <p>Nói chung, đây là những điều quan trọng cần nhớ trong sự nghiệp của các ESFP: họ cần rất nhiều sự tiếp xúc với những người khác, nhiều hơn so với bất kỳ loại tính cách khác; cơn khát của họ cho những thách thức mới là không thể tắt, và
            họ cần phải cảm thấy rằng công việc của họ đang được đánh giá cao bởi những người khác.

        </p>
        <p>Để tìm kiếm chỗ đứng trong xã hội hay cần định hướng xem mình có đang đi đúng hướng hay không, thì điều quan trọng nhất là bạn cần phải hiểu chính mình và các đặc điểm tính cách có thể tác động đến thành công hay thất bại trong lĩnh vực
            bạn sẽ làm hay đang làm. Bạn cần phải biết được những gì có ý nghĩa hay quan trọng đối với bạn. Khi bạn hiểu được ưu điểm và nhược điểm của mình và nhận thức được điều quan trọng và ý nghĩa đối với cuộc đời bạn thì bạn sẽ chọn được
            nghề nghiệp phù hợp nhất với bản thân, toàn bộ thế mạnh của bạn sẽ được phát huy. Bạn sẽ thấy yêu công việc và cuộc sống hơn.

        </p>

        <h3>Các ESFP thường mang những đặc điểm:</h3>
        <p>- Kĩ năng giao tiếp tốt.
        </p>
        <p>- Sống với hiện tại.
        </p>
        <p>- Ghét phải theo khuôn mẫu và sự sắp đặt.
        </p>
        <p>- Biết cách tận hưởng niềm vui, và biết làm cách nào để tạo niềm vui cho người khác.
        </p>
        <p>- Dễ bị kích thích và hứng thú bởi những trải nghiệm mới.
        </p>
        <p>- Không thích lý thuyết và các giải thích dài dòng.
        </p>
        <p>- Yêu thích mọi người một cách chân thành.
        </p>
        <p>- Thực tế và thiết thực.
        </p>
        <p>- Phát triển mạnh về mặt đánh giá thẩm mĩ.
        </p>
        <p>- Cảm thấy có mối liên kết đặc biệt với động vật và trẻ em.
        </p>
        <p>- Tự lập và tháo vát.
        </p>
        <p>- Làm việc theo cảm hứng – hiếm khi lên kế hoạch trước.

        </p>
        <p>Các ESFP giỏi trong nhiều lĩnh vực nhưng sẽ không thích thú trừ khi họ được tiếp xúc với nhiều người khác và nhiều trải nghiệm mới. ESFP nên chọn những công việc tạo cho họ cơ hội sử dụng những kỹ năng giao tiếp tuyệt vời và khả năng vẽ
            nên viễn cảnh thực tế của họ, những thứ cũng sẽ mang đến cho họ những thách thức mới mà họ sẽ không cảm thấy chán.

        </p>
        <p>Dưới đây là các công việc phù hợp với ESFP, đây là các công việc để bạn tham khảo, chứ không phải là tất cả (phần lớn các công việc được liệt kê là phù hợp với ESFP nhưng không phải chắc chắn) :

        </p>
        <p>- Tư vấn tâm lý/ Công tác xã hội.
        </p>
        <p>- Nghệ sĩ, người biểu diễn và diễn viên.
        </p>
        <p>- Thiết kế thời trang.
        </p>
        <p>- Đại diện bán hàng.
        </p>
        <p>- Chuyên gia tư vấn.
        </p>
        <p>- Chăm sóc trẻ em.
        </p>
        <p>- Nhiếp ảnh gia.
        </p>
        <p>- Trang trí nội thất.

        </p>






    </div>
</div>
</div>`