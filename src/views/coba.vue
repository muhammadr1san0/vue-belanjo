<template>
  <section>
    <section v-if="isAuthenticated" v-cloak>
      <section class="head-content">
        <div class="container">
          <MainHeader
            :isAlert="isAlert"
            :closeAlert="closeAlert"
          />
          <section class="menu-wrapper">
            <section class="menu-item" v-for="(item, index) in data" :key="index">
              <router-link
              :class="['menu', $route.path === item.path ? 'active' : '']"
              :to="item.path"
            >
                {{ item.title }}
              </router-link>
            </section>
          </section>
        </div>
      </section>
      <section>
        <router-view></router-view>
      </section>
    </section>
    <section v-else v-cloak>
      <LearnPath
        :data="courses"
      />
    </section>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import LearnPath from '@/components/_module/Home/_learning-path/_learnpath-wrapper.vue'
import MainHeader from '@/components/_module/Home/_main-header/_main-header-wrapper.vue'

export default {
  name: 'Learn',
  components: {
    LearnPath,
    MainHeader
  },
  data () {
    return {
      active: '',
      isAlert: false,
      data: [
        {
          path: '/welcome',
          title: 'Modul Saya'
        },
        {
          path: '/belajar',
          title: 'Kumpulan Modul Lainnya'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      courses: state => state.learn.listAllCourse,
      userCourse: state => state.learn.listUserCourse
    }),

    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      geProfileCompletion: 'profile/geProfileCompletion'
    })
  },
  methods: {
    ...mapActions({
      getAllCourse: 'learn/getAllCourse',
      getUserProfileData: 'profile/getUserProfileData',
      getUserUpdate: 'profile/getUserUpdate',
      getUserPortofolio: 'portofolio/getUserPortofolio',
      getUserDetailPortofolio: 'portofolio/getUserDetailPortofolio'
    }),
    closeAlert () {
      this.isAlert = false
    }
  },
  mounted () {
    this.getAllCourse()
    this.getUserProfileData()
      .then(() => {
        this.getUserUpdate()
        this.getUserPortofolio()
        if (this.geProfileCompletion < 100) {
          this.isAlert = true
        }
      })
  }
}
</script>

<style lang="scss">
.head-content {
  background: #fff;
  margin-top: -10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 0 0 #eaedf3;
}
.menu-wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.menu-item {
  margin: 24px 0;
  margin-right: 30px;
  a {
    padding: 24px 1px;
    color: #8e9ba9;
    font-weight: 600;
    font-size: 16px;
  }
}
.active {
  color: #3e3f42 !important;
  border-bottom: 3px solid #f47e00 !important;
}

@media (max-width: 375px) {
  .menu-item {
    a {
      font-size: 13px;
    }
  }
}
</style>
