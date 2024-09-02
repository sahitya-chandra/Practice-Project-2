import Slider from "../../components/slider/Slider";
import "./singlePage.css"
import Map from "../../components/map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify"
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../../store/atom/atom";
import apiRequest from "../../lib/apiRequest";
import { useState } from "react";

const SinglePage = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const [saved, setSaved] = useState(post.isSaved)

    const currentUser = useRecoilValue(currentUserAtom)

    const handleSave = async () => {
        setSaved((prev)=>!prev)

        if(!currentUser) {
            navigate("/login")
        }

        try {

            await apiRequest.post("/users/save", {postId: post.id})

        } catch (err) {
            console.log(err)
            setSaved((prev)=>!prev)
        }
    }

    console.log(post)

    return (
        <div className="singlePage">
            <div className="details">
                <div className="wraper">
                    <Slider images={post.img} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{post.title}</h1> 
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{post.address}</span>
                                    </div>
                                    <div className="price">$ {post.price}</div>
                                </div>
                            <div className="user">
                                <img src={post.user.avatar} alt="" />
                                <span>{post.user.username}</span>
                            </div>
                        </div>
                        <div 
                        className="bottom"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(post.postDetail.desc),
                          }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="raper">
                    <p className="head">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/utility.png" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                {post.postDetail.utilities === "owner" ? (
                                    <p>Owner is responsible</p>
                                ) : (
                                    <p>Tenant is responsible</p>
                                )}
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                {post.postDetail.pet === "allowed" ? (
                                <   p>Pets Allowed</p>
                                ) : (
                                    <p>Pets not Allowed</p>
                                )}
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>{post.postDetail.income}</p>
                            </div>
                        </div>
                    </div>
                    <p className="head">Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png" alt="" />
                            <span>{post.postDetail.size} sqft</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" alt="" />
                            <span>{post.bedroom} beds</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png" alt="" />
                            <span>{post.bathroom} bathroom</span>
                        </div>
                    </div>
                    <p className="head">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="/school.png" alt="" />
                            <div className="featureText">
                                <span>School</span>
                                <p>
                                    {post.postDetail.school > 999
                                        ? post.postDetail.school / 1000 + "km"
                                        : post.postDetail.school + "m"}{" "}
                                    away
                                </p>
                            </div>
                            </div>
                            <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>{post.postDetail.bus}m away</p>
                            </div>
                            </div>
                            <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>{post.postDetail.restaurant}m away</p>
                            </div>
                         </div>
                    </div>
                    <p className="head">Location</p>
                    <div className="mapcontainer">
                        <Map items={[post]}/>
                    </div>
                    <div className="buttonss">
                        <button>
                            <img src="/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button onClick={handleSave}
                            style={{
                                backgroundColor: saved ? "#fece51" : "white",
                            }}
                        >
                            <img src="/save.png" alt="" />
                            {saved ? "Place Saved" : "Save the Place"}
                        </button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default SinglePage;