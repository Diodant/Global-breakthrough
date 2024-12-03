import Sovet_5 from '../images/sovet/sovet_5.jpg'
import Sovet_6 from '../images/sovet/sovet_6.png'
import Sovet_7 from '../images/sovet/sovet_7.png'
import Sovet_8 from '../images/sovet/sovet_8.png'

const Awards2023 = () => {

    const councilMembers = [
        {
          name: "Юлия Байбабина",
          title: "Казахстан",
          description:
            "Индивидуальный предприниматель, внесла весомый вклад в текстильную отрасль для медицинского сектора, разработав и получив Патент на изобретение, Лауреат Национальной Премии Казахстана “Золотое качество”, обладатель Международной Премии для бизнесменов в номинации “Предприниматель года СНГ”.",
          image: Sovet_5,
        },
        {
          name: "Инна Маликова",
          title: "Беларусь",
          description:
            "Руководитель компании по экспорту сельскохозяйственных продуктов, разработала уникальные технологии переработки органических отходов. Обладатель премии «За вклад в устойчивое развитие» на Международной аграрной выставке, победитель в номинации «Экспортер года».",
          image: Sovet_6, 
        },
        {
            name: "Владислав Никитин",
            title: "Россия",
            description:
              "Генеральный директор компании по производству высокотехнологичного оборудования, создал уникальные автоматизированные линии для оптимизации производственных процессов. Лауреат Национальной Премии за технические инновации, победитель в номинации «Инновационный лидер».",
            image: Sovet_7, 
          },
          {
            name: "Севара Рахимова",
            title: "Узбекистан",
            description:
              "Основатель образовательного центра для подготовки специалистов в сфере IT, активно поддерживает развитие навыков программирования и технологий среди молодежи. Лауреат премии «За вклад в развитие IT-образования».",
            image: Sovet_8, 
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
      ЭКСПЕРТНЫЙ СОВЕТ 2023 ГОДА
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

    <div class="t-section__title t-title t-title_xs t-align_center t-margin_auto bg-color" field="btitle"> <div  style={{color: '#ffffff'}} data-customstyle="yes"><span style={{fontWeight: '400',}}>ЭКСПЕРТНЫЙ СОВЕТ 2023 ГОДА</span></div> </div>

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

export default Awards2023;
