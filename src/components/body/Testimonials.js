
const testimonials = [
    {
        id: 1, // Use unique identifiers for each review
        text: "We find the Doctors so courteous and helpful. My recent experience with the clinic to treat my niece who had dengue symptoms and she seems to be recovering well. Thanks!!!",
        author: {
          name: "Narasimman Viswanathan",
          profile_photo_url: "https://via.placeholder.com/150", // Placeholder image
        },
        rating: 5,
      },
      {
        id: 2,
        text: "Knowledgeable doctor and I visited Dr Premi for entire my family and all have been diagnosed well and cured well immediately. Nursing and reception people  also very good..",
      
        author: {
          name: "Subathra A",
          profile_photo_url: "https://via.placeholder.com/150", // Placeholder image
        },
        rating: 5,
      },
      {
        id: 3,
        text: "The care was outstanding all the way from start to finish. The Doctor put forth a high level of effort to deliver results. The facility was well equipped and designed for patient privacy, service and efficiency.",
        author: {
          name: "shaji cute",
          profile_photo_url: "https://via.placeholder.com/150", // Placeholder image
        },
        rating: 5,
      },{
        id: 4,
        text: "Good hospital to visit , they gave me a proper treatment which is very affordable and great , please keep up the good work !",
        author: {
          name: "Riya Princy",
          profile_photo_url: "https://via.placeholder.com/150", // Placeholder image
        },
        rating: 5,
      },{
        id: 5,
        text: "I went to this clinic with cold and cough, I went to my nearby clinic they didn't give me a proper treatment, I came to know this hospital they gave me a proper treatment and they advised me to keep nebulization which is only 100rs including medicine, I got a very quick recovery. Thank you so much.",
        author: {
          name: "Ammu Velu",
          profile_photo_url: "https://via.placeholder.com/150", // Placeholder image
        },
        rating: 4,
      },{
        id: 6,
        text: "Through oral referral I came to this hospital which is quite big, it consists of 4 bed and minimal hospital set up. This setup is very good. Here doctor are nice and treating very good",
        
        author: {
          name: "Rajan",
          profile_photo_url: "https://via.placeholder.com/150", // Placeholder image
        },
        rating: 5,
      },{
        id: 7,
        text: "Nice Ambience, doctors are well knowledged, I suffered from very high viral fever later on they suspect dengue for me. They gave me a proper treatment which is very affordable amd great.No unnecessary charges were made. Thank you so much.",
        author: {
          name: "AshaBegam",
          profile_photo_url: "https://via.placeholder.com/150", // Placeholder image
        },
        rating: 5,
      },];

function Testimonials() {
    return(
        <div id="page" class="site">
            <div class="container">
                <div class="testimonial">
                    <div class="head">
                    <h2>Our Patients story</h2>
                    <h3>Don’t take our word for it — hear what our customers are saying</h3>                        <p></p>
                    </div>
                </div>

            </div>
            
        </div>
    );
    
}
export default Testimonials;