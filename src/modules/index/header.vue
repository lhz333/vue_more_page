<template>
    <div class="block-header">
        <div class="content-min-size header-content paddingLR50 fadeInDown">
            <a class="logo" href="index.html">
                <!--<img src="../../pages/index/assets/images/nav-logo.png" alt="" style="width: 50%;" />-->
            </a>
            <ul class="block-header-ul">
                <li class="technclogy">
                    <a href="#anchor1">{{$t("headerNav.technology")}}</a>
                </li>
                <li class="roadmap">
                    <a href="#anchor2">{{$t("headerNav.roadmap")}}</a>
                </li>
                <li class="team">
                    <a href="#anchor4">{{$t("headerNav.team")}}</a>
                </li>
                <li>
                    <a href="news.html">{{$t("headerNav.news")}}</a>
                </li>
                <li>
                    <a href="faq.html">{{$t("headerNav.faq")}}</a>
                </li>
                <li class="contact">
                    <a href="#anchor3">{{$t("headerNav.joinUs")}}</a>
                </li>
                <li class="change-language" id="language" @mouseenter="tabLanguageShow" @mouseleave="tabLanguageHide">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{language}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="en">{{$t("headerNav.en")}}</el-dropdown-item>
                            <el-dropdown-item command="zh">{{$t("headerNav.zh")}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                languageDialog: false,
                language: this.$t("headerNav.en")
            }
        },
        methods: {
            //语言栏显示
            tabLanguageShow() {
                this.languageDialog = true;
            },
            //语言栏隐藏
            tabLanguageHide() {
                this.languageDialog = false;
            },
            handleCommand(command) {
                let locale = this.$i18n.locale
                locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
                switch(command) {
                    case 'zh':
                        this.$i18n.locale = 'zh';
                        this.language = this.$t("headerNav.zh");
                        break;
                    case 'en':
                        this.$i18n.locale = 'en';
                        this.language = this.$t("headerNav.en");
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style scoped="scoped">
	.el-dropdown{
        color: #fff;
        font-size: 16px;
	}
	.el-dropdown-link{
	    display: block;
	    width: 100%;
	    height: 100%;
	}
</style>