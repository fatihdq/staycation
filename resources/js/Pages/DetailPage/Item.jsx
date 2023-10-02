import ItemFeatures from "./Item-Features";
import data from "../../data-item-detail.json";
import Testimony from "../../Parts/Testimony";
import StartBooking from "./StartBooking";

export default function Item() {
  const item = data;

  let subImage = [];
  if (item["images"].length > 0) {
    for (let i = 0; i < 2; i++) {
      let featureClass = "";
      if (i == 0) featureClass = "pb-2";
      subImage.push(
        <img
          key={item["images"][i]["id"]}
          className={featureClass}
          src={item["images"][i]["imageUrl"]}
          height={245}
          width={487}
          alt=""
        />
      );
    }
  }

  let desc = [];
  let descArr = item["description"].split("/n");
  let i = 0;
  for (let d of descArr) {
    desc.push(
      <p key={i} className="description">
        {d}
      </p>
    );
    i++;
  }

  let features = [];
  for (let f of item["features"]) {
    features.push(
      <ItemFeatures
        key={f["id"]}
        amount={f["amount"]}
        desc={f["description"]}
        imageUrl={f["imageUrl"]}
      />
    );
  }

  let treasures = [];
  if (item["treasures"].length > 0) {
    for (let y = 0; y < 4; y++) {
      treasures.push(
        <div key={item["treasures"][y]["id"]}>
          <img
            src={item["treasures"][y]["imageUrl"]}
            height={180}
            width={263}
            alt=""
          />
          <div className="treasure-name pt-4">
            {item["treasures"][y]["name"]}
          </div>
          <div className="treasure-category pt-1">
            {item["treasures"][y]["category"]}
          </div>
        </div>
      );
    }
  }
  return (
    <div className="pb-16 detail-item">
      <div className="item-name">{item["name"]}</div>
      <div className="item-location">
        {item["regency"]}, {item["country"]}
      </div>

      <div className="flex pb-20">
        <img
          className="pr-2"
          src={item["mainImage"]["imageUrl"]}
          height={500}
          width={643}
          alt=""
        />
        <div>{subImage}</div>
      </div>

      <div className="item-description grid grid-cols-5 pb-10">
        <div className="col-span-3 pr-24">
          <div className="title">About the place</div>

          <div className="pb-10">{desc}</div>
          <div className="grid grid-cols-4 gap-5">{features}</div>
        </div>
        <StartBooking />
      </div>
      <div className="pb-20">
        <div className="title">Treasure to Choose</div>
        <div className="grid grid-cols-4 gap-8 pt-4">{treasures}</div>
      </div>

      <Testimony
        name={item["testimony"]["name"]}
        job={item["testimony"]["job"]}
        desc={item["testimony"]["description"]}
        rate={item["testimony"]["rate"]}
        imageUrl={item["testimony"]["imageUrl"]}
      />
    </div>
  );
}
