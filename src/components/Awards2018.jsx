import Sovet_25 from '../images/sovet/sovet_25.jpg'
import Sovet_26 from '../images/sovet/sovet_26.jpg'
import Sovet_27 from '../images/sovet/sovet_27.png'
import Sovet_28 from '../images/sovet/sovet_28.jpg'

const Awards2018 = () => {

    const councilMembers = [
        {
          name: "Сергей Кузнецов",
          title: "Россия",
          description:
            "Эксперт в сфере международного бизнеса с более чем 20-летним опытом в инвестиционном консультировании.",
          image: Sovet_25,
        },
        {
          name: "Аида Исмаилова",
          title: "Казахстан",
          description:
            "Ведущий специалист в области устойчивого развития, активно поддерживающая инновационные проекты в Центральной Азии.",
          image: Sovet_26, 
        },
        {
            name: "Роман Григорян",
            title: "Армения",
            description:
              "Руководитель крупной строительной компании, известен своим вкладом в развитие городской инфраструктуры.",
            image: Sovet_27, 
          },
          {
            name: "Елена Сапега",
            title: "Беларусь",
            description:
              "Профессионал в области финансовых технологий, возглавляла команды по созданию цифровых финансовых продуктов.",
            image: Sovet_28, 
          },
          
      ];

  return (
    <>
    <div
      id="rec273843032"
      className="r t-rec t-rec_pt_0 r_showed r_anim"
      style={{ paddingTop: '0px' }}
      data-record-type="396"
    >
 
      <div className="t396 ">

<div
  className="t396__artboard rendered"
  style={{
    display: "flex",
    alignItems: "center", 
    justifyContent: "center", 
    height: "100vh", 
    position: "relative", 
  }}
>
  <div className="t396__carrier" data-artboard-recid="273843032"></div>
  <div className="t396__filter" data-artboard-recid="273843032"></div>
  <div
    className="t396__elem tn-elem tn-elem__2738430321580382659338"
    data-elem-id="1580382659338"
    data-fields="img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits"
    style={{
      position: "absolute",
      width: "920px",
      left: '1023px'
    }}
  >
    <div className="tn-atom">
      <img
        className="tn-atom__img t-img loaded"
        data-original="https://static.tildacdn.com/tild3663-3664-4561-a135-366666386138/ball.png"
        alt=""
        imgfield="tn_img_1580382659338"
        src="https://optim.tildacdn.com/tild3663-3664-4561-a135-366666386138/-/format/webp/ball.png"
      />
    </div>
  </div>
  <div
    className="t396__elem tn-elem tn-elem__2738430321611649501161"
    data-elem-id="1611649501161"
    data-fields="top,left,width,container,axisx,axisy,widthunits,leftunits,topunits"
    style={{ top: '300px', left: '460px', width: '320px' }}
  >
    <div
      className="tn-atom"
      field="tn_text_1611649501161"
      style={{ lineHeight: "18px", textAlign: "start" }}
    >
      ЭКСПЕРТНЫЙ СОВЕТ 2018 ГОДА
    </div>
  </div>
  <div
    className="t396__elem tn-elem tn-elem__2738430321611649583847"
    data-elem-id="1611649583847"
    data-elem-type="text"
    data-fields="top,left,width,container,axisx,axisy,widthunits,leftunits,topunits"
    style={{
      position: "absolute",
      width: "500px",
      textAlign: "start",
      top: "350px",
      left: '450px'

    }}
  >
    <div
      className="tn-atom"
      field="tn_text_1611649583847"
      style={{ lineHeight: "122px" }}
    >
      ЭКСПЕРТНЫЙ СОВЕТ
    </div>
  </div>
  <div
    className="t396__elem tn-elem tn-elem__2738430321611649933808 t-animate t-animate_started"
    data-elem-id="1611649933808"
    data-field-widthunits-res-960-value="%"
    data-fields="width,height,top,left,container,axisx,axisy,widthunits,heightunits,leftunits,topunits"
    style={{
      position: "absolute",
      width: "1157px",
      height: "2px",
      bottom: "50px",
      transform: "translate3d(0px, -100px, 0px)",
      transitionDuration: "1s",
    }}
  >
    <div className="tn-atom"></div>
  </div>
</div>

      </div>
    </div>

    <div class="t-section__title t-title t-title_xs t-align_center t-margin_auto bg-color" field="btitle"> <div  style={{color: '#ffffff'}} data-customstyle="yes"><span style={{fontWeight: '400',}}>
        ЭКСПЕРТНЫЙ СОВЕТ 2018 ГОДА</span></div> </div>

    <div style={{ backgroundColor: "#1d1c21", color: "#ffffff", padding: "50px 20px" }}>
      <div className="t-container">
        {councilMembers.map((member, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              marginBottom: "40px",
              borderBottom: "1px solid #333",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                flex: "0 0 130px",
                height: "130px",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "#444",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: "1" }}>
              <div className="t522__persname">{member.name}</div>
              <div className="t522__persdescr">
                {member.title}
              </div>
              <p className="t522__title" >
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Awards2018;
