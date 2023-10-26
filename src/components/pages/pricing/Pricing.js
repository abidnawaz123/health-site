import React from 'react'
import styles from "./style.module.scss"
import { Button, Row, Col, Card } from 'antd'

const Pricing = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.PricingWrapper}>

                    <div className={styles.pricingLabels}>
                        <h3>Our Pricing</h3>
                        <p>We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources</p>
                    </div>

                    <div className={styles.actionButtons}>
                        <Button>Monthly</Button>
                        <Button>Yearly</Button>
                    </div>
                    <p className={styles.savingLabel}>Save 50% on Yearly</p>
                </div>
                <div className={styles.cards}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card className={styles.basicPlan}>
                            <div className={styles.planLabels}>
                                <div className={styles.topHeading}>
                                    <h3>Basic Plan</h3>
                                    <p>Up to 50% off on Yearly Plan</p>
                                </div>
                                <p>Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.</p>
                                <div className={styles.planCost}>
                                    <h1>49</h1><span>/ month</span>
                                </div>
                            </div>
                            <Card className={styles.planSelector}>
                                <p>Choose Plan</p>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className={styles.premiumPlan}>
                            <div className={styles.planLabels}>
                                <div className={styles.topHeading}>
                                    <h3>Premium Plan</h3>
                                    <p>Up to 50% off on Yearly Plan</p>
                                </div>
                                <p>Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.</p>
                                <div className={styles.planCost}>
                                    <h1>79</h1><span>/ month</span>
                                </div>
                            </div>
                            <Card className={styles.planSelector}>
                                <p>Choose Plan</p>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className={styles.ultimatePlan}>
                            <div className={styles.planLabels}>
                                <div className={styles.topHeading}>
                                    <h3>Ultimate Plan</h3>
                                    <p>Up to 50% off on Yearly Plan</p>
                                </div>
                                <p>Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.</p>
                                <div className={styles.planCost}>
                                    <h1>99</h1><span>/ month</span>
                                </div>
                            </div>
                            <Card className={styles.planSelector}>
                                <p>Choose Plan</p>
                            </Card>
                        </Card>
                    </Col>
                </Row>

                </div>
            </div>
        </>
    )
}

export default Pricing