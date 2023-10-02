import listItem from "../../data-item.json";

export default function Item() {
  const data = listItem["items"];
  let card_item = [];

  for (const d of data) {
    let section = d["section"];
    let card = [];
    for (let item of d["items"]) {
      let invisible = "invisible";
      if (item["isPopular"]) {
        invisible = "";
      }
      card.push(
        <a href="/detail-page" key={item["imagePath"]}>
          <div className="h-[180px] w-[263px] relative" key={item["imagePath"]}>
            <img src={item["imagePath"]} height={180} width={263} alt="" />
            <div className={invisible}>
              <div className="badges absolute top-0 right-0 w-full">
                <div className="text">
                  Popular <span className="text-nominal">Choice</span>
                </div>
              </div>
            </div>
            <div className="content-title">{item["name"]}</div>
            <div className="content-loc">
              {item["regency"]}, {item["country"]}
            </div>
          </div>
        </a>
      );
    }
    card_item.push(
      <div className="content-item" key={section}>
        <div className="title">{section}</div>
        <div className="grid grid-cols-4 justify-items-start gap-4">{card}</div>
      </div>
    );
  }

  return <div className="pb-24">{card_item}</div>;
}
