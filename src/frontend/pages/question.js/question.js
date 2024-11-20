import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import '../../../assets/question/question.css'
import { Collapse } from 'react-bootstrap';


function Question() {
    const [openQuestions, setOpenQuestions] = useState({});

    const toggleQuestion = (index) => {
        setOpenQuestions((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const ask_account =
        ["Làm thế nào để tôi trở thành thành viên của Helias?",
            "Tại sao tôi không thể đăng nhập vào tài khoản của tôi?",
            "Tôi có thể sử dụng chung tài khoản với người khác được không?",
            "Helias có chương trình ưu đãi nào hấp dẫn dành cho khách hàng thân thiết?"];

    const ask_order =
        ["Tôi cần hỗ trợ mua hàng, làm cách nào để liên hệ với tư vấn viên?",
            "Tôi muốn xem lại lịch sử đơn hàng đã mua?",
            "Tôi cần làm gì để thay đổi hoặc hủy bỏ đơn hàng đã đặt?",
            "Tôi muốn khiếu nại/ đổi trả hàng, quy trình thực hiện như thế nào?"];

    return (
        <>
            <div className="rows" >
                <ul className="breadcrumb">
                    <li className="home ml-5">
                        <Link to="#"><span style={{ color: 'rgb(0, 0, 0)' }}>Trang chủ</span></Link>
                        <span class="mr_lr">&nbsp;<FaChevronRight />&nbsp;</span>
                    </li>
                    <li><strong><span style={{ color: 'rgb(203, 6, 6)' }}> Câu hỏi thường gặp</span></strong></li>
                </ul>
            </div>
            <div className="question-container ">
                <div className="question-main m-5 row">
                    <div className="ask-question col-7">
                        <div className="question">
                            <div className="question-title">
                                <p>Hỏi đáp về tài khoản</p>
                            </div>

                            {ask_account.map((question, index) => (
                                <div className="question-detail" key={index}>
                                    <div className={`question-content ${openQuestions[index] ? 'clicked' : 'none'}`}>
                                        <p
                                            onClick={() => toggleQuestion(index)}
                                            aria-controls={`question${index + 1}`}
                                            aria-expanded={openQuestions[index]}
                                        >
                                            {index + 1}. {question}
                                        </p>
                                    </div>
                                    <div className="answer">
                                        <Collapse in={openQuestions[index]}>
                                            <div id={`question${index + 1}`}>
                                                <p>
                                                    {index === 0 && "Quý khách vui lòng nhấn vào nút “Đăng ký” ở thanh menu trên cùng của màn hình (Đối với Desktop) hoặc tại góc trái màn hình, chọn biểu tượng Menu rồi chọn “Đăng ký” (Đối với Mobile)."}
                                                    {index === 1 && "Quý khách vui lòng kiểm tra kỹ về kiểu gõ hoặc phím Caps Lock/ IN HOA trong quá trình điền thông tin đăng nhập thành viên, trường hợp không thể đăng nhập thành công quý khách vui lòng chọn nút “Quên mật khẩu” ngay dưới ô mật khẩu và nhập email đã đăng ký."}
                                                    {index === 2 && "Quý khách nên sử dụng tài khoản cá nhân để đảm bảo độ tin cậy cũng như quyền lợi của bản thân khi mua sắm. Việc sử dụng chung tài khoản có thể dẫn đến những sai sót mà người chịu ảnh hưởng trực tiếp chính là quý khách hàng."}
                                                    {index === 3 && "Khi tổng giá trị đơn hàng của quý khách tích lũy đạt đủ điều kiện của từng mức hạng thành viên, quý khách sẽ nhận được ưu đãi giảm giá cho mọi đơn hàng tương, voucher sinh nhật tương ứng của hạng mức thành viên."}
                                                </p>
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="question">
                            <div className="question-title">
                                <p>Hỏi đáp về đặt hàng</p>
                            </div>

                            {ask_order.map((question, index) => (
                                <div className="question-detail" key={index}>
                                    <div className={`question-content ${openQuestions[index] ? 'clicked' : 'none'}`}>
                                        <p
                                            onClick={() => toggleQuestion(index)}
                                            aria-controls={`question${index + 1}`}
                                            aria-expanded={openQuestions[index]}
                                        >
                                            {index + 1}. {question}
                                        </p>
                                    </div>
                                    <div className="answer">
                                        <Collapse in={openQuestions[index]}>
                                            <div id={`question${index + 1}`}>
                                                <p>
                                                    {index === 0 && "Để liên hệ với nhân viên tư vấn, quý khách vui lòng liên hệ qua Hotline 1900 6750 trong thời gian từ 9:00 - 18:00,  T2 - T6 hằng tuần."}
                                                    {index === 1 && "Quý khách vào trang tài khoản bằng cách bấm vào nút “Tài khoản” ở thanh menu trên cùng của màn hình (Đối với Desktop) hoặc tại góc trái màn hình, chọn biểu tượng Menu rồi chọn “Tài khoản” (Đối với Mobile). Sau đó chọn “Đơn hàng của bạn” để kiểm tra lại các sản phẩm đã đặt mua. Hoặc quý khách có thể kiểm tra lại những email Helias thông báo trạng thái đơn hàng."}
                                                    {index === 2 && "Quý khách vui lòng liên hệ tư vấn viên của Helias Hotline 1900 6750 để được hủy hoặc thay đổi sản phẩm trong đơn hàng.Lưu ý: Đơn hàng chỉ được hủy khi đơn hàng của quý khách chưa chuyển trạng thái cho đơn vị vận chuyển."}
                                                    {index === 3 && "Helias luôn sẵn lòng đón nhận các ý kiến góp ý và phản hồi của quý khách quý khách vui lòng liên hệ tư vấn viên của Helias Hotline 1900 6750 để được hủy hoặc thay đổi sản phẩm trong đơn hàng"}
                                                </p>
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="form-contact col-5">
                        <div className="form-container p-3">
                            <div className="question-title">
                                <p>Giải đáp thắc mắc</p>
                            </div>
                            <p>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
                            <form action="" method="POST" className="px-3">
                                <div className="mb-3">
                                    <input type="text" name="name" id="name" class="form-control" placeholder="Họ và tên"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <input type="tel" name="phone" id="phone" class="form-control"
                                        placeholder="Số điện thoại" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" id="email" class="form-control" placeholder="Email"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <textarea name="content" id="comment" class="form-control" rows="3" placeholder="Nội dung" required></textarea>
                                </div>

                                <button type="submit" className="btn" style={{ backgroundColor: "rgb(203,6,6)", color: "white" }}>Gửi
                                    thông tin</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Question;