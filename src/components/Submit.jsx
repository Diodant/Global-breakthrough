import React, { useState } from "react";

const Submit = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        region: "",
        organization: "",
        position: "",
        phone: "",
        email: "",
        applicantInfo: "",
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
          if (!formData[field]) {
            newErrors[field] = "Пожалуйста, заполните это поле.";
          }
        });
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
    
        // Form submission logic
        console.log("Form submitted", formData);
      };
  return (
    <>
    <div id="rec273752946" class="r t-rec t-rec_pt_0" style={{ paddingTop: "0px", backgroundColor: "#1d1c21" }} data-record-type="396">

    <div class="t396">
        <div class="t396__artboard" data-artboard-recid="273752946" data-artboard-screens="320,480,640,960,1200">
            <div class="t396__carrier" data-artboard-recid="273752946"></div>
            <div class="t396__filter" data-artboard-recid="273752946"></div>
            <div class="t396__elem tn-elem tn-elem__2737529461580382659338" data-elem-id="1580382659338">
                <div class="tn-atom"> <img class="tn-atom__img t-img"
                        src="https://optim.tildacdn.com/tild6462-3036-4262-a666-343261336363/-/format/webp/istockphoto_11667743.png"
                        alt="" imgfield="tn_img_1580382659338"/> </div>
            </div>
            <div class="t396__elem tn-elem tn-elem__2737529461611649501161" data-elem-id="1611649501161"
>
                <div class="tn-atom" field="tn_text_1611649501161">ХIV МЕЖДУНАРОДНАЯ ПРЕМИЯ
                    «ЭКСПЕРТ ГОДА»</div>
            </div>
            <div class="t396__elem tn-elem tn-elem__2737529461611649583847" data-elem-id="1611649583847"
                data-elem-type="text" data-field-top-value="584" data-field-left-value="72">
                <div class="tn-atom" field="tn_text_1611649583847">ПОДАТЬ ЗАЯВКУ</div>
            </div>
            <div class="t396__elem tn-elem tn-elem__2737529461611649933808 t-animate"
                data-elem-id="1611649933808" data-elem-type="shape" data-field-top-value="863">
                <div class="tn-atom"> </div>
            </div>
        </div>
    </div>
</div>

<div className="form-color">
<div className="t-container">
      <h2 className="form-title">ЗАЯВКА НОМИНАНТА</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Имя, отчество и фамилия номинанта</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Иванов Иван Иванович"
            className={`form-input ${errors.fullName ? "error-border" : ""}`}
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </div>

        {/* Region */}
        <div className="form-group">
          <label htmlFor="region">Регион реализации проекта</label>
          <input
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            placeholder="Регион"
            className={`form-input ${errors.region ? "error-border" : ""}`}
          />
          {errors.region && <span className="error-text">{errors.region}</span>}
        </div>

        {/* Organization */}
        <div className="form-group">
          <label htmlFor="organization">
            Какую организацию или компанию представляет номинант?
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Название организации"
            className={`form-input ${errors.organization ? "error-border" : ""}`}
          />
          {errors.organization && <span className="error-text">{errors.organization}</span>}
        </div>

        {/* Position */}
        <div className="form-group">
          <label htmlFor="position">Какую должность занимает номинант?</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Полная должность"
            className={`form-input ${errors.position ? "error-border" : ""}`}
          />
          {errors.position && <span className="error-text">{errors.position}</span>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Номер телефона номинанта</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 999 999 99-99"
            className={`form-input ${errors.phone ? "error-border" : ""}`}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">E-mail номинанта</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@email.ru"
            className={`form-input ${errors.email ? "error-border" : ""}`}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        {/* Applicant Info */}
        <div className="form-group">
          <label htmlFor="applicantInfo">Информация о заявителе</label>
          <textarea
            id="applicantInfo"
            name="applicantInfo"
            value={formData.applicantInfo}
            onChange={handleChange}
            placeholder="Если вы номинируете коллегу, укажите данные. Если вы номинируете себя, оставьте поле пустым."
            className={`form-textarea ${errors.applicantInfo ? "error-border" : ""}`}
          />
          {errors.applicantInfo && <span className="error-text">{errors.applicantInfo}</span>}
        </div>

        <button type="submit" className="form-button">
          Отправить заявку
        </button>
      </form>
    </div>
    </div>
    </>

  );
};

export default Submit;
