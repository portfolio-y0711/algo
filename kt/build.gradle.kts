import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

val coroutineVersion = "1.6.21"
val logbackVersion = "1.2.3"

val jUnitVersion = "5.6.2"
val spekVersion = "2.0.12"
val kluentVersion = "1.51"
val easyRandomVersion = "4.2.0"
val mockKVersion = "1.10.0"

plugins {
    kotlin("jvm") version "1.6.21"
    application
}

repositories {
    mavenCentral()
}

application {
    mainClassName = "id.algo.Main"
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("org.jetbrains.kotlin:kotlin-reflect")

}

tasks.withType<KotlinCompile> {

    kotlinOptions {
        jvmTarget = "17"
    }
}

tasks.wrapper {
    gradleVersion = "6.6.1"
}
