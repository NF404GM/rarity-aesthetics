PRODUCT REQUIREMENTS DOCUMENT
Rarity Aesthetics Website Rebuild
Version 1.0
February 2026

Document Control
Project Name
Rarity Aesthetics Website Rebuild
Product Owner
Ashley, Rarity Aesthetics
Target Launch
Q2 2026 (9-week development cycle)
Current Website
rarity-aesthetics.com (Squarespace)
Status
In Planning - Approved for Development



Executive Summary
Project Overview
This Product Requirements Document (PRD) outlines the complete rebuild of the Rarity Aesthetics website, a boutique lash extension studio and professional supply business based in Thornton, Colorado. The new website will serve as the primary digital hub for booking lash services, selling professional products, and establishing brand authority in the Denver beauty market.
Business Objectives
1. Increase service appointment bookings by 50% within 90 days of launch
2. Generate $5,000+ in monthly product sales through e-commerce
3. Build email list to 300+ subscribers in first 90 days
4. Establish brand as Denver's premier boutique lash studio
5. Create scalable platform for future business expansion
Success Criteria
Metric
Target (90 Days)
Website Traffic Increase
50%
Booking Conversion Rate
4%+
Appointment Book Rate
100% booked 2+ weeks out
Page Load Speed
Under 3 seconds
Mobile Traffic
60%+ of total traffic
Email List Growth
300+ subscribers



Product Scope
In-Scope Features
Phase 1: Core Website (Weeks 1-4)
✓ Homepage with hero section, service overview, portfolio preview, testimonials
✓ Services main page with 6 service cards
✓ 6 individual service detail pages (Natural Sets, Volume Sets, Mega Volume, Fills, Mini Fill, Removal)
✓ About Ashley page with story, philosophy, credentials
✓ Portfolio/Gallery page with filterable images
✓ Contact page with multiple contact methods
✓ FAQ page with accordion sections
✓ Mobile-responsive design across all pages
Phase 2: E-commerce & Booking (Weeks 5-6)
✓ Shop page with product categories and filtering
✓ Individual product pages with images, descriptions, pricing
✓ Shopping cart functionality
✓ Secure checkout process
✓ Bundle discount automation (buy 6 get 1 free, buy 10 get 2 free)
✓ Acuity Scheduling integration for bookings
✓ Automated booking confirmations and reminders
Phase 3: Marketing & Analytics (Week 7)
✓ Email marketing integration (newsletter signup forms)
✓ Email popup with incentive (10-15 second delay)
✓ Instagram feed integration
✓ Google Analytics 4 installation
✓ Facebook Pixel integration
✓ Conversion tracking setup
Phase 4: Content & SEO (Week 8)
✓ Blog structure with 10 initial posts
✓ SEO optimization (meta tags, alt text, schema markup)
✓ XML sitemap generation
✓ Google Search Console setup
✓ 301 redirects from old site URLs
Out-of-Scope (Future Phases)
✗ Client portal/account dashboard
✗ Live chat functionality
✗ Membership/subscription system
✗ Multi-location booking system
✗ Advanced CRM integration
✗ Online lash education platform

User Stories & Requirements
Primary User Personas
Persona 1: Sarah - The Potential Client
Demographics:
Age: 25-45 | Location: Denver metro area | Income: $60K-100K+ | Occupation: Professional
Goals:
• Find a trustworthy lash artist with quality work
• See examples of natural-looking lash sets
• Understand pricing and time commitment
• Book appointment quickly and easily
Pain Points:
• Worried about lash damage from inexperienced artists
• Unsure which lash style suits her eye shape
• Overwhelmed by too many options
• Needs transparent pricing information
Persona 2: Jessica - The Fellow Lash Artist
Demographics:
Age: 22-35 | Location: Nationwide | Experience: Beginner to intermediate lash artist
Goals:
• Find quality lash supplies at fair prices
• Learn business tips from successful artists
• Purchase tools trusted by professionals
• Easy online ordering with bundle discounts
Pain Points:
• Unsure which products to invest in
• Needs product recommendations from experienced artists
• Wants to learn business aspects of lashing

Functional Requirements
FR-1: Homepage
Requirement ID
FR-1.1 through FR-1.8
Feature
Homepage with 8 main sections
Priority
P0 - Critical
Description
FR-1.1: Hero section with headline, subheadline, two CTAs (Book + Shop)
FR-1.2: The Rarity Difference - 3 columns (Custom Eye Mapping, 5+ Years, Premium Products)
FR-1.3: Featured Services - 3 service cards with images, pricing, descriptions
FR-1.4: Recent Transformations - Carousel with 8-10 before/after photos
FR-1.5: Why Clients Choose Rarity - 2-column with Ashley photo and bio
FR-1.6: Client Testimonials - 3 featured reviews with ratings
FR-1.7: Shop Lash Supplies - 4 featured products with pricing and CTAs
FR-1.8: Instagram Feed - Grid of 6 recent posts with embed
Acceptance Criteria
• Hero loads in under 2 seconds
• All CTAs are functional and track clicks
• Carousel auto-rotates every 5 seconds with manual controls
• Instagram feed updates automatically
• Mobile responsive on all devices


FR-2: Booking System
Requirement ID
FR-2
Feature
Acuity Scheduling Integration
Priority
P0 - Critical
Description
Seamless integration with existing Acuity Scheduling system. Users must be able to:
• View available services (6 options)
• Select date and time from calendar
• Complete client intake form
• Receive instant confirmation email
• Add appointment to personal calendar
Acceptance Criteria
• Booking widget embedded on /book page
• All 6 services available for booking
• Calendar syncs with Ashley's availability
• Confirmation emails sent automatically
• Mobile-friendly booking interface


FR-3: E-commerce System
Requirement ID
FR-3.1 through FR-3.7
Feature
Full E-commerce Functionality
Priority
P0 - Critical
Description
FR-3.1: Product catalog with categorization (Lash Trays, Tools, Bundles, Aftercare)
FR-3.2: Individual product pages with multiple images, descriptions, pricing
FR-3.3: Shopping cart with persistent item count in header
FR-3.4: Automatic bundle discount application (buy 6 get 1, buy 10 get 2)
FR-3.5: Free shipping over $100 banner and calculation
FR-3.6: Secure checkout with multiple payment methods
FR-3.7: Order confirmation emails with tracking
Acceptance Criteria
• All products display correctly with images and pricing
• Cart calculates totals, discounts, and shipping accurately
• Bundle discounts apply automatically
• Checkout process works on desktop and mobile
• Order confirmation emails sent within 1 minute



Non-Functional Requirements
NFR-1: Performance
Metric
Requirement
Page Load Time (Desktop)
Under 3 seconds (target: 2 seconds)
Page Load Time (Mobile)
Under 4 seconds (target: 3 seconds)
Time to Interactive (TTI)
Under 5 seconds
Image Optimization
WebP format, lazy loading, max 200KB per image
Server Response Time
Under 200ms


NFR-2: Usability
• Mobile-first responsive design (works perfectly on screens 320px to 2560px wide)
• Maximum 3 clicks to reach any page from homepage
• Booking process completable in under 2 minutes
• Checkout process completable in under 3 minutes
• WCAG 2.1 AA accessibility compliance
• Keyboard navigation support
• Screen reader compatibility
NFR-3: Security
• SSL certificate (HTTPS) on all pages
• PCI DSS compliance for payment processing
• Secure password storage (if accounts added)
• GDPR-compliant cookie consent
• Privacy policy and terms of service pages
• Regular automated backups (daily)
NFR-4: SEO & Analytics
• Proper HTML semantic structure (H1, H2, H3 hierarchy)
• Meta titles and descriptions on all pages
• Alt text on all images
• Schema markup (LocalBusiness, Product)
• XML sitemap generation
• Google Analytics 4 tracking
• Conversion tracking for bookings and purchases

Technical Architecture
Platform Options & Recommendation
Platform
Pros
Cons
Cost
Score
Wix
Easy to use, good templates, built-in booking
Less customization, can be slow
$30-50/mo
7/10
Squarespace
Beautiful designs, clean, Acuity integration
Higher cost, some limitations
$25-65/mo
8/10 ★
WordPress
Highly customizable, SEO-friendly, scalable
Requires more tech knowledge, security maintenance
$15-30/mo
8/10
Shopify
Best e-commerce, great integrations
Overkill for services, higher cost
$40-100/mo
6/10


RECOMMENDATION: Squarespace
Squarespace provides the best balance of design quality, ease of use, and native Acuity integration (Ashley already uses Acuity). The platform excels at beautiful, luxury-focused design which aligns perfectly with Rarity Aesthetics' premium positioning.
Required Integrations
✓ Acuity Scheduling
Current booking system - seamless native integration with Squarespace
✓ Email Marketing Platform
Mailchimp or Klaviyo for newsletter signup, automated campaigns, client nurturing
✓ Google Analytics 4
Track traffic, conversions, user behavior, campaign performance
✓ Facebook Pixel
Track conversions for future social media advertising
✓ Instagram Feed
Embed @therarityaesthetics feed on homepage (via Instagram API or third-party widget)
✓ Payment Gateway
Stripe or Square for e-commerce transactions

Development Timeline
9-Week Development Cycle
Phase
Timeline
Deliverables
1
Weeks 1-2
Foundation & Planning
• Sitemap approval
• Wireframes for all pages
• Design mockups (homepage + key pages)
• Content outline
• Photography requirements list
2
Weeks 3-4
Design Completion
• Full design comps for all pages
• Mobile responsive designs
• Brand guidelines applied
• Revision rounds incorporated
3
Weeks 5-7
Development
• All pages built and functional
• Booking system integrated
• E-commerce fully set up
• Forms and CTAs working
• Mobile responsive testing
4
Week 8
Content & Testing
• All content written and uploaded
• All images optimized and placed
• SEO implementation
• Cross-browser testing
• Speed optimization
5
Week 9
Launch & Support
• Pre-launch checklist completed
• Domain pointing and 301 redirects
• Live site launch
• Post-launch monitoring
• Social media announcement



Risk Assessment & Mitigation
Risk
Impact
Probability
Mitigation
Insufficient photography assets
High - delays launch
Medium
Schedule photoshoot in Week 1, use existing Instagram content as backup
Content writing bottleneck
Medium - impacts quality
Medium
Hire professional copywriter or use AI assistance with Ashley's review
Booking/e-commerce integration issues
High - core feature
Low
Use native Squarespace integrations, extensive testing in Week 6-7
Slow page loading speeds
High - impacts conversions
Medium
Aggressive image optimization, lazy loading, CDN usage, performance testing in Week 8
Mobile responsiveness bugs
Medium - 60% traffic
Medium
Mobile-first design approach, test on real devices throughout development



Approval & Sign-Off
This Product Requirements Document has been reviewed and approved by:
Role
Name
Signature / Date
Product Owner
Ashley, Rarity Aesthetics


Development Lead




Project Manager






Document Status: APPROVED FOR DEVELOPMENT
